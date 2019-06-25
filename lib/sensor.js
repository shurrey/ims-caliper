/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

var _ = require('lodash');
var config = require('./config/config');
var envelope = require('./envelope');
var hashMap = require('hashmap');
var logger = require('./logger');
var moment = require('moment');

/**
 * Grab an existing namespace object or create a blank object if it doesn't exist
 * so we can attach non-sensor module exports to it
 * @type {{}|*|Caliper}
 */
var Caliper = (typeof window !== 'undefined') ? window.Caliper || {} : {};

/**
 * Caliper Sensor.
 * @constructor
 * @type {{}}
 */
var Sensor = {};
var id;
var initialized = false;

/**
 * Caliper Sensor clients.
 * @type {HashMap}
 */
var clients = new hashMap();

/**
 * Initializes the default client to use.
 * Sensor#initialize
 * @memberof sensor
 * @function initialize
 * @param id sensor identifier
 */
Sensor.initialize = function initialize(cid) {
  _.isNil(cid) ? Sensor.error(messages[1]) : id = cid;
  initialized = true;
};

/**
 * Check if Sensor is initialized.
 * @memberof sensor
 * @function isInitialized
 * @returns {boolean}
 */
Sensor.isInitialized = function isInitialized() {
  return initialized;
};

/**
 * Get the Sensor identifier.
 * @memberof sensor
 * @function getId
 * @returns {*}
 */
Sensor.getId = function getId() {
  return id;
};

/**
 * Register client.
 * @memberof sensor
 * @function registerClient
 * @param client
 */
Sensor.registerClient = function registerClient(client) {
  clients.set(client.id, client);
};

/**
 * Unregister client.
 * @memberof sensor
 * @function unregisterClient
 * @param key
 */
Sensor.unregisterClient = function unregisterClient(key) {
  clients.remove(key);
};

/**
 * Retrieve a client.
 * @memberof sensor
 * @function getClient
 * @param key
 * @returns {*}
 */
Sensor.getClient = function getClient(key) {
  return clients.get(key);
};

/**
 * Retrieve all registered clients.
 * @memberof sensor
 * @function getClient
 * @returns {HashMap}
 */
Sensor.getClients = function getClients() {
  return clients;
};

/**
 * Create and return envelope comprised of events, entities or a mixed data payload of both.
 * @memberof sensor
 * @function createEnvelope
 * @param opts  Envelope properties
 * @returns {*}
 */
Sensor.createEnvelope = function createEnvelope(opts) {
  if (!Sensor.isInitialized()) {
    Sensor.error(messages[0]);
  }
  if (_.isNil(opts.data)) {
    Sensor.error(messages[2]);
  }

  var id = opts.id || Sensor.getId(); // permit override with opts value?
  var sendTime = opts.sendTime || moment.utc().format("YYYY-MM-DDTHH:mm:ss.SSSZZ");
  var dataVersion = opts.dataVersion || config.dataVersion;
  var payload = [];

  if (Array.isArray(opts.data)) {
    payload = opts.data.slice();
  } else {
    payload.push(opts.data);
  }

  return _.assign({}, envelope, {sensor: id, sendTime: sendTime, dataVersion: dataVersion, data: payload});
};

/**
 * Delegate serialization and transmission of the Envelope to a particular Client.
 * @memberof sensor
 * @function sendToClients
 * @param client
 * @param envelope
 */
Sensor.sendToClient = function sendToClient(client, envelope) {
  if (!Sensor.isInitialized()) {
    Sensor.error(messages[0]);
  }

  if (clients.has(client.id)) {
    client.send(envelope);
  } else {
    Sensor.error(messages[4]);
  }
};

/**
 * Delegate serialization and transmission of the Envelope to all registered Clients.
 * @memberof sensor
 * @function sendToClients
 * @param envelope
 */
Sensor.sendToClients = function sendToClients(envelope) {
  if (!Sensor.isInitialized()) {
    Sensor.error(messages[0]);
  }

  if (clients.count() > 0) {
    clients.forEach(function(client) {
      client.send(envelope);
    });
  } else {
    Sensor.error(message[3])
  }
};

/**
 * Error Handler.
 * @memberof sensor
 * @function error
 * @param message
 */
Sensor.error = function error(message) {
  throw new Error(message);
};

/**
 * Error messages.
 * @memberof sensor
 */
var messages = [
  "Caliper Sensor has not been initialized.",
  "Caliper Sensor identifier (id) has not been provided.",
  "Caliper Sensor Envelope data has not been provided.",
  "No Clients have been registered.",
  "Chosen Client has not been registered."
];


// Replace/create Caliper in global namespace
if (typeof window !== 'undefined') {
  window.Caliper = Caliper;
  logger.log('debug', "Added Sensor to window global %o", window.Sensor);
} else {
  module.exports = {
    initialize: Sensor.initialize,
    isInitialized: Sensor.isInitialized,
    getId: Sensor.getId,
    registerClient: Sensor.registerClient,
    unregisterClient: Sensor.unregisterClient,
    getClient: Sensor.getClient,
    getClients: Sensor.getClients,
    createEnvelope: Sensor.createEnvelope,
    sendToClient: Sensor.sendToClient,
    sendToClients: Sensor.sendToClients
  };
}