var client 			= require('./lib/clients/httpClient'),
    envelope		= require('./lib/envelope'),
	logger 			= require('./lib/logger'),
	sensor 			= require('./lib/sensor'),

/**
 * Add the modules that need to be exported under the Caliper namespace.
 * You only need to require the top-level modules. Browserify will walk the
 * dependency graph and load everything correctly.
 */

// Actions
actions                   = require('./lib/actions/actions');

// Config
config                    = require('./lib/config/config');

// Envelope
envelope                  = require('./lib/envelope');

// Entities
entity                    = require('./lib/entities/entity');
entityFactory             = require('./lib/entities/entityFactory');
entityType                = require('./lib/entities/entityType');

// Agents
agent                     = require('./lib/entities/agent/agent');
person                    = require('./lib/entities/agent/person');
softwareApplication       = require('./lib/entities/agent/softwareApplication');

// Agents (Organizations)
courseOffering            = require('./lib/entities/agent/courseOffering');
courseSection             = require('./lib/entities/agent/courseSection');
group                     = require('./lib/entities/agent/group');
membership                = require('./lib/entities/agent/membership');
organization              = require('./lib/entities/agent/organization');
role                      = require('./lib/entities/agent/role');
status                    = require('./lib/entities/agent/status');

// Annotations
annotation                = require('./lib/entities/annotation/annotation');
bookmarkAnnotation        = require('./lib/entities/annotation/bookmarkAnnotation');
highlightAnnotation       = require('./lib/entities/annotation/highlightAnnotation');
sharedAnnotation          = require('./lib/entities/annotation/sharedAnnotation');
tagAnnotation             = require('./lib/entities/annotation/tagAnnotation');

// Assignment-related
attempt                   = require('./lib/entities/resource/attempt');
learningObjective         = require('./lib/entities/resource/learningObjective');

// Resources
assessment                = require('./lib/entities/resource/assessment');
assessmentItem            = require('./lib/entities/resource/assessmentItem');
assignableDigitalResource = require('./lib/entities/resource/assignableDigitalResource');
audioObject               = require('./lib/entities/resource/audioObject');
chapter                   = require('./lib/entities/resource/chapter');
digitalResource           = require('./lib/entities/resource/digitalResource');
digitalResourceCollection = require('./lib/entities/resource/digitalResourceCollection');
document                  = require('./lib/entities/resource/document');
forum                     = require('./lib/entities/resource/forum');
frame                     = require('./lib/entities/resource/frame');
imageObject               = require('./lib/entities/resource/imageObject');
mediaObject               = require('./lib/entities/resource/mediaObject');
mediaLocation             = require('./lib/entities/resource/mediaLocation');
message                   = require('./lib/entities/resource/message');
page                      = require('./lib/entities/resource/page');
thread                    = require('./lib/entities/resource/thread');
videoObject               = require('./lib/entities/resource/videoObject');
webPage                   = require('./lib/entities/resource/webPage');

// Outcome
result                    = require('./lib/entities/outcome/result');
score                     = require('./lib/entities/outcome/score');

// Response
response                  = require('./lib/entities/response/response');
fillinBlankResponse       = require('./lib/entities/response/fillinBlankResponse');
multipleChoiceResponse    = require('./lib/entities/response/multipleChoiceResponse');
multipleResponseResponse  = require('./lib/entities/response/multipleResponseResponse');
selectTextResponse        = require('./lib/entities/response/selectTextResponse');
trueFalseResponse         = require('./lib/entities/response/trueFalseResponse');

// Session
session                   = require('./lib/entities/session/session');
ltiSession                = require('./lib/entities/session/ltiSession');

// Events
event                     = require('./lib/events/event');
eventFactory              = require('./lib/events/eventFactory');
eventType                 = require('./lib/events/eventType');
annotationEvent           = require('./lib/events/annotationEvent');
assessmentEvent           = require('./lib/events/assessmentEvent');
assessmentItemEvent       = require('./lib/events/assessmentItemEvent');
assignableEvent           = require('./lib/events/assignableEvent');
forumEvent                = require('./lib/events/forumEvent');
mediaEvent                = require('./lib/events/mediaEvent');
messageEvent              = require('./lib/events/messageEvent');
navigationEvent           = require('./lib/events/navigationEvent');
gradeEvent                = require('./lib/events/gradeEvent');
sessionEvent              = require('./lib/events/sessionEvent');
threadEvent               = require('./lib/events/threadEvent');
toolUseEvent              = require('./lib/events/toolUseEvent');
viewEvent                 = require('./lib/events/viewEvent');

// Selectors
textPositionSelector      = require('./lib/selectors/textPositionSelector');

// Sensor clients
clientUtils               = require('./lib/clients/clientUtils');
httpClient                = require('./lib/clients/httpClient');
httpOptions               = require('./lib/clients/httpOptions');

// Validators
validator                 = require('./lib/validators/validator');
entityValidator           = require('./lib/validators/entityValidator');
eventValidator            = require('./lib/validators/eventValidator');


module.exports = {
		
		Client: client,
		Logger: logger,
		Sensor: sensor,
		
		// Actions
		Actions: actions,

		// Config
		Config: config,

		// Envelope
		Envelope: envelope,

		// Entities
		Entity: entity,
		EntityFactory: entityFactory,
		EntityType: entityType,

		// Agents
		Agent: agent,
		Person: person,
		SoftwareApplication: softwareApplication,

		// Agents (Organizations)
		CourseOffering: courseOffering,
		CourseSection: courseSection,
		Group: group,
		Membership: membership,
		Organization: organization,
		Role: role,
		Status: status,

		// Annotations
		Annotation: annotation,
		BookmarkAnnotation: bookmarkAnnotation,
		HighlightAnnotation: highlightAnnotation,
		SharedAnnotation: sharedAnnotation,
		TagAnnotation: tagAnnotation,

		// Assignment-related
		Attempt: attempt,
		LearningObjective: learningObjective,

		// Resources
		Assessment: assessment,
		AssessmentItem: assessmentItem,
		AssignableDigitalResource: assignableDigitalResource,
		AudioObject: audioObject,
		Chapter: chapter,
		DigitalResource: digitalResource,
		DigitalResourceCollection: digitalResourceCollection,
		Document: document,
		Forum: forum,
		Frame: frame,
		ImageObject: imageObject,
		MediaObject: mediaObject,
		MediaLocation: mediaLocation,
		Message: message,
		Page: page,
		Thread: thread,
		VideoObject: videoObject,
		WebPage: webPage,

		// Outcome
		Result: result,
		Score: score,

		// Response
		Response: response,
		FillinBlankResponse: fillinBlankResponse,
		MultipleChoiceResponse: multipleChoiceResponse,
		MultipleResponseResponse: multipleResponseResponse,
		SelectTextResponse: selectTextResponse,
		TrueFalseResponse: trueFalseResponse,

		// Session
		Session: session,
		LtiSession: ltiSession,

		// Events
		Event: event,
		EventFactory: eventFactory,
		EventType: eventType,
		AnnotationEvent: annotationEvent,
		AssessmentEvent: assessmentEvent,
		AssessmentItemEvent: assessmentItemEvent,
		AssignableEvent: assignableEvent,
		ForumEvent: forumEvent,
		MediaEvent: mediaEvent,
		MessageEvent: messageEvent,
		NavigationEvent: navigationEvent,
		GradeEvent: gradeEvent,
		SessionEvent: sessionEvent,
		ThreadEvent: threadEvent,
		ToolUseEvent: toolUseEvent,
		ViewEvent: viewEvent,

		// Selectors
		TextPositionSelector: textPositionSelector,

		// Sensor clients
		ClientUtils: clientUtils,
		HttpClient: httpClient,
		HttpOptions: httpOptions,

		// Validators
		Validator: validator,
		EntityValidator: entityValidator,
		EventValidator: eventValidator
};