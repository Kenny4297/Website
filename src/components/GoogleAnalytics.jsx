import { useEffect } from 'react';
import ReactGA from 'react-ga';

function GoogleAnalytics() {
  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize('G-Y80BBQQDQV');

    // Track page view
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Track custom event
    ReactGA.event({
      category: 'My category',
      action: 'My action',
      label: 'My label',
    });
  }, []);

  return null;
}

export default GoogleAnalytics;