import { useEffect } from "react";

interface AnalyticsEvent {
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  timestamp: string;
}

export function useAnalytics() {
  useEffect(() => {
    trackPageView(window.location.pathname);
  }, []);

  const trackPageView = (pagePath: string) => {
    const event: AnalyticsEvent = {
      eventName: "page_view",
      eventCategory: "engagement",
      eventLabel: pagePath,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const trackFormStart = (formName: string) => {
    const event: AnalyticsEvent = {
      eventName: "form_start",
      eventCategory: "conversion",
      eventLabel: formName,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const trackFormSubmission = (formName: string, industry?: string) => {
    const event: AnalyticsEvent = {
      eventName: "form_submission",
      eventCategory: "conversion",
      eventLabel: `${formName}${industry ? ` - ${industry}` : ""}`,
      eventValue: 1,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const trackCTAClick = (ctaName: string, location: string) => {
    const event: AnalyticsEvent = {
      eventName: "cta_click",
      eventCategory: "engagement",
      eventLabel: `${ctaName} - ${location}`,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const trackServiceSelection = (serviceName: string, industry?: string) => {
    const event: AnalyticsEvent = {
      eventName: "service_selection",
      eventCategory: "engagement",
      eventLabel: `${serviceName}${industry ? ` - ${industry}` : ""}`,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const trackPageScroll = (pagePath: string, scrollPercentage: number) => {
    const event: AnalyticsEvent = {
      eventName: "page_scroll",
      eventCategory: "engagement",
      eventLabel: pagePath,
      eventValue: scrollPercentage,
      timestamp: new Date().toISOString(),
    };
    logAnalyticsEvent(event);
  };

  const logAnalyticsEvent = (event: AnalyticsEvent) => {
    console.log("Analytics Event:", event);

    const events = JSON.parse(localStorage.getItem("analyticsEvents") || "[]");
    events.push(event);
    if (events.length > 100) {
      events.shift();
    }
    localStorage.setItem("analyticsEvents", JSON.stringify(events));

    if (window.gtag) {
      window.gtag("event", event.eventName, {
        event_category: event.eventCategory,
        event_label: event.eventLabel,
        value: event.eventValue,
      });
    }
  };

  return {
    trackPageView,
    trackFormStart,
    trackFormSubmission,
    trackCTAClick,
    trackServiceSelection,
    trackPageScroll,
  };
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, config?: Record<string, any>) => void;
  }
}
