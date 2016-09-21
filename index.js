var client 			= require('./lib/client'),
	logger 			= require('./lib/logger'),
	sensor 			= require('./lib/sensor'),
	
	// ACTIONS
	annotationActions     = require('./lib/actions/annotationActions'),
	assessmentActions     = require('./lib/actions/assessmentActions'),
	assessmentItemActions = require('./lib/actions/assessmentItemActions'),
	assignableActions     = require('./lib/actions/assignableActions'),
	mediaActions          = require('./lib/actions/mediaActions'),
	navigationActions     = require('./lib/actions/navigationActions'),
	outcomeActions        = require('./lib/actions/outcomeActions'),
	readingActions        = require('./lib/actions/readingActions'),
	sessionActions        = require('./lib/actions/sessionActions'),

	// CONTEXT
	context = require('./lib/context/context'),

	// ENTITIES
	entity     = require('./lib/entities/entity'),
	entityType = require('./lib/entities/entityType'),

	// Core entities
	digitalResource     = require('./lib/entities/digitalResource'),
	digitalResourceType = require('./lib/entities/digitalResourceType'),
	learningObjective   = require('./lib/entities/learningObjective'),

	// Agent entities
	organization        = require('./lib/entities/agent/organization'),
	person              = require('./lib/entities/agent/person'),
	softwareApplication = require('./lib/entities/agent/softwareApplication'),

	// Annotation entities
	annotation          = require('./lib/entities/annotation/annotation'),
	annotationType      = require('./lib/entities/annotation/annotationType'),
	bookmarkAnnotation  = require('./lib/entities/annotation/bookmarkAnnotation'),
	highlightAnnotation = require('./lib/entities/annotation/highlightAnnotation'),
	sharedAnnotation    = require('./lib/entities/annotation/sharedAnnotation'),
	tagAnnotation       = require('./lib/entities/annotation/tagAnnotation'),

	// Assignment entities
	assessment          = require('./lib/entities/assessment/assessment'),
	assessmentItem      = require('./lib/entities/assessment/assessmentItem'),

	// Assignable entities
	assignableDigitalResource     = require('./lib/entities/assignable/assignableDigitalResource'),
	assignableDigitalResourceType = require('./lib/entities/assignable/assignableDigitalResourceType'),
	attempt                       = require('./lib/entities/assignable/attempt'),

	// LIS entities
	courseOffering = require('./lib/entities/lis/courseOffering'),
	courseSection  = require('./lib/entities/lis/courseSection'),
	group          = require('./lib/entities/lis/group'),
	membership     = require('./lib/entities/lis/membership'),
	role           = require('./lib/entities/lis/role'),
	status         = require('./lib/entities/lis/status'),

	// Media Entities
	mediaObject       = require('./lib/entities/media/mediaObject'),
	mediaObjectType   = require('./lib/entities/media/mediaObjectType'),
	mediaLocation     = require('./lib/entities/media/mediaLocation'),
	audioObject       = require('./lib/entities/media/audioObject'),
	imageObject       = require('./lib/entities/media/imageObject'),
	videoObject       = require('./lib/entities/media/videoObject'),

	// Outcome Entities
	result = require('./lib/entities/outcome/result'),

	// Reading Entities
	ePubChapter    = require('./lib/entities/reading/ePubChapter'),
	ePubPart       = require('./lib/entities/reading/ePubPart'),
	ePubSubChapter = require('./lib/entities/reading/ePubSubChapter'),
	ePubVolume     = require('./lib/entities/reading/ePubVolume'),
	frame          = require('./lib/entities/reading/frame'),
	reading        = require('./lib/entities/reading/reading'),
	webPage        = require('./lib/entities/reading/webPage'),

	// Response Entities
	response                 = require('./lib/entities/response/response'),
	responseType             = require('./lib/entities/response/responseType'),
	fillinBlankResponse      = require('./lib/entities/response/fillinBlankResponse'),
	multipleChoiceResponse   = require('./lib/entities/response/multipleChoiceResponse'),
	multipleResponseResponse = require('./lib/entities/response/multipleResponseResponse'),
	selectTextResponse       = require('./lib/entities/response/selectTextResponse'),
	trueFalseResponse        = require('./lib/entities/response/trueFalseResponse'),

	// Session Entities
	session = require('./lib/entities/session/session'),

	// EVENTS
	event               = require('./lib/events/event'),
	eventType           = require('./lib/events/eventType'),
	annotationEvent     = require('./lib/events/annotationEvent'),
	assessmentEvent     = require('./lib/events/assessmentEvent'),
	assessmentItemEvent = require('./lib/events/assessmentItemEvent'),
	assignableEvent     = require('./lib/events/assignableEvent'),
	mediaEvent          = require('./lib/events/mediaEvent'),
	navigationEvent     = require('./lib/events/navigationEvent'),
	outcomeEvent        = require('./lib/events/outcomeEvent'),
	sessionEvent        = require('./lib/events/sessionEvent'),
	viewEvent           = require('./lib/events/viewEvent'),

	// REQUEST
	envelope            = require('./lib/request/envelope'),
	eventStoreRequestor = require('./lib/request/eventStoreRequestor'),
	httpRequestor      = require('./lib/request/httpRequestor');


module.exports = {
		
		Client: client,
	 	Logger: logger,
		Sensor: sensor,
		
		// ACTIONS
		AnnotationActions: annotationActions,
		AssessmentActions: assessmentActions,
		AssessmentItemActions: assessmentItemActions,
		AssignableActions: assignableActions,
		MediaActions: mediaActions,
		NavigationActions: navigationActions,
		OutcomeActions: outcomeActions,
		ReadingActions: readingActions,
		SessionActions: sessionActions,

		// CONTEXT
		Context: context,

		// ENTITIES
		Entity: entity,
		EntityType: entityType,

		// Core entities
		DigitalResource: digitalResource,
		DigitalResourceType: digitalResourceType,
		LearningObjective: learningObjective,

		// Agent entities
		Organization: organization,
		Person: person,
		SoftwareApplication: softwareApplication,

		// Annotation entities
		Annotation: annotation,
		AnnotationType: annotationType,
		BookmarkAnnotation: bookmarkAnnotation,
		HighlightAnnotation: highlightAnnotation,
		SharedAnnotation: sharedAnnotation,
		TagAnnotation: tagAnnotation,

		// Assignment entities
		Assessment: assessment,
		AssessmentItem: assessmentItem,

		// Assignable entities
		AssignableDigitalResource: assignableDigitalResource,
		AssignableDigitalResourceType: assignableDigitalResourceType,
		Attempt: attempt,

		// LIS entities
		CourseOffering: courseOffering,
		CourseSection: courseSection,
		Group: group,
		Membership: membership,
		Role: role,
		Status: status,

		// Media Entities
		MediaObject: mediaObject,
		MediaObjectType: mediaObjectType,
		MediaLocation: mediaLocation,
		AudioObject: audioObject,
		ImageObject: imageObject,
		VideoObject: videoObject,

		// Outcome Entities
		Result: result,

		// Reading Entities
		EPubChapter: ePubChapter,
		EPubPart: ePubPart,
		EPubSubChapter: ePubSubChapter,
		EPubVolume: ePubVolume,
		Frame: frame,
		Reading: reading,
		WebPage: webPage,

		// Response Entities
		Response: response,
		ResponseType: responseType,
		FillinBlankResponse: fillinBlankResponse,
		MultipleChoiceResponse: multipleChoiceResponse,
		MultipleResponseResponse: multipleResponseResponse,
		SelectTextResponse: selectTextResponse,
		TrueFalseResponse: trueFalseResponse,

		// Session Entities
		Session: session,

		// EVENTS
		Event: event,
		EventType: eventType,
		AnnotationEvent: annotationEvent,
		AssessmentEvent: assessmentEvent,
		AssessmentItemEvent: assessmentItemEvent,
		AssignableEvent: assignableEvent,
		MediaEvent: mediaEvent,
		NavigationEvent: navigationEvent,
		OutcomeEvent: outcomeEvent,
		SessionEvent: sessionEvent,
		ViewEvent: viewEvent,

		// REQUEST
		Envelope: envelope,
		EventStoreRequestor: eventStoreRequestor,
		HttpRequestor: httpRequestor
};