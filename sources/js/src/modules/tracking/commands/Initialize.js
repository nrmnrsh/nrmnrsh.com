import AnalyticsInitialize from 'picnic/TrackingAnalytics';
import {TrackPageview, TrackEvent, TrackSocial} from 'picnic/TrackingAnalytics';
import RegistryService from 'picnic/TrackingRegistry';
import OutboundService from 'picnic/TrackingOutbound';


var
	NAMESPACE = 'tracking:',
	NAMESPACE_REGISTRY = NAMESPACE + 'registryservice',
	NAMESPACE_OUTBOUND = NAMESPACE + 'outboundservice',
	EVENT_TRACKPAGEVIEW = NAMESPACE + 'trackpageview',
	EVENT_TRACKEVENT = NAMESPACE + 'trackevent',
	EVENT_TRACKSOCIAL = NAMESPACE + 'tracksocial',
	SELECTOR_OUTBOUND = 'a',
	OUTBOUND_EVENT_CATEGORY = 'outbound',
	OUTBOUND_EVENT_ACTION = 'link'
;


class Command extends AnalyticsInitialize {
	execute() {
		var
			self = this,
			context = self.context,
			registry = new RegistryService({context: context})
		;

		// Wire registry...
		context.wireValue(NAMESPACE_REGISTRY, registry);

		// Initialize google analytics...
		super.execute();

		// Wire commands for analytics tracking:
		context.wireCommand(EVENT_TRACKPAGEVIEW, TrackPageview);
		context.wireCommand(EVENT_TRACKEVENT, TrackEvent);
		context.wireCommand(EVENT_TRACKSOCIAL, TrackSocial);

		// Create outbound service:
		// The outbound service watches all links on a page and when they
		// are clicked, it checks whether it is an internal link or an
		// external link (outbound). In the case of an external link, it
		// fires an event which should be tracked...
		context.wireValue(NAMESPACE_OUTBOUND, new OutboundService({
			context: context,
			selector: SELECTOR_OUTBOUND,
			eventName: EVENT_TRACKEVENT,
			eventData: {
				category: OUTBOUND_EVENT_CATEGORY,
				action: OUTBOUND_EVENT_ACTION
			}
		}));
	}
}

export default Command;
