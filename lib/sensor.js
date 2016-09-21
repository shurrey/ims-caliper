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

 /**
 * Caliper Sensor
 * @class
 */
var _ = require('lodash-node');
var client = require('./client');
var logger = require('./logger');

/**
 * Grab an existing namespace object or create a blank object if it doesn't exist
 * so we can attach non-sensor module exports to it
 * @type {{}|*|Caliper}
 */
var Caliper = {};

/**
 * Represents Caliper Sensor.
 * @constructor
 */
var Sensor = {};

var self = this;

/**
 * Sensor Identifier.
 * @param id
 */
self.setId = function(id) {
    this.id = id;
};

/**
 * Initializes the default client to use. Uses the socket consumer by default.
 * Sensor#initialize
 * @param id sensor identifier
 * @param options $options passed straight to the client
 */
self.initialize = function(id, options) {
    self.setId(id);
    if (!_.isUndefined(options)) {
        client.initialize(options);
    }
};

/**
 * Describe an entity
 * @param  entity $entity The Caliper Entity we are describing
 * @return boolean whether the describe call succeeded
 */
self.describe = function(entity) {
    client.describe(this, entity);
};

/**
 * Send learning events
 * @param  event $event The Caliper Event
 * @return boolean whether the measure call succeeded
 */
self.send = function(event) {
    client.send(this, event);
};

module.exports = {
	    initialize: self.initialize,
	    describe: self.describe,
	    send: self.send
	};
