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
var moment = require('moment');
var test = require('tape');

var config =  require('../../lib/config/config');
var entityFactory = require('../../lib/entities/entityFactory');
var Assessment = require('../../lib/entities/resource/assessment');
var AssessmentItem = require('../../lib/entities/resource/assessmentItem');
var Attempt = require('../../lib/entities/resource/attempt');
var FillinBlankResponse = require('../../lib/entities/response/fillinBlankResponse');
var Person = require('../../lib/entities/agent/person');
var clientUtils = require('../../lib/clients/clientUtils');
var testUtils = require('../testUtils');

const path = config.testFixturesBaseDir + "caliperEntityFillinBlankResponse.json";

testUtils.readFile(path, function(err, fixture) {
  if (err) throw err;

  test('fillinBlankResponseTest', function (t) {

    // Plan for N assertions
    t.plan(1);

    const BASE_IRI = "https://example.edu";
    const BASE_ASSESS_IRI = "https://example.edu/terms/201601/courses/7/sections/1/assess/1";
    const BASE_ITEM_IRI = "https://example.edu/terms/201601/courses/7/sections/1/assess/1/items/1";

    var actor = entityFactory().create(Person, {id: BASE_IRI.concat("/users/554433")});
    var assessment = entityFactory().create(Assessment, {id: BASE_ASSESS_IRI});
    var assessmentItem = entityFactory().create(AssessmentItem, {id: BASE_ITEM_IRI, isPartOf: assessment});

    var attempt = entityFactory().create(Attempt, {
      id: BASE_ITEM_IRI.concat("/users/554433/attempts/1"),
      assignee: actor,
      assignable: assessmentItem,
      count: 1,
      startedAtTime: moment.utc("2016-11-15T10:15:02.000Z"),
      endedAtTime: moment.utc("2016-11-15T10:15:12.000Z")
    });

    var entity = entityFactory().create(FillinBlankResponse, {
      id: BASE_ITEM_IRI.concat("/users/554433/responses/1"),
      attempt: attempt,
      values: [ "data interoperability", "semantic interoperability" ],
      dateCreated: moment.utc("2016-11-15T10:15:12.000Z"),
      startedAtTime: moment.utc("2016-11-15T10:15:02.000Z"),
      endedAtTime: moment.utc("2016-11-15T10:15:12.000Z")
    });

    // Compare
    var diff = testUtils.compare(fixture, clientUtils.parse(entity));
    var diffMsg = "Validate JSON" + (!_.isUndefined(diff) ? " diff = " + clientUtils.stringify(diff) : "");

    t.equal(true, _.isUndefined(diff), diffMsg);
    //t.end();
  });
});