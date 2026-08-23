// Central place to read ad/analytics environment config.
// See .env.example for how to set these when going live.

export const ADSENSE_CLIENT_ID = import.meta.env.VITE_ADSENSE_CLIENT_ID || '';
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';
export const ADS_ENABLED = import.meta.env.VITE_ADS_ENABLED === 'true' && Boolean(ADSENSE_CLIENT_ID);
