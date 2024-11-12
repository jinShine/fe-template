import { GoogleAnalytics as GA } from "@next/third-parties/google";

import { ENV_CONFIG } from "@configs/env/config";

export default function GoogleAnalyticsProvider() {
  return <GA gaId={ENV_CONFIG.GA_ID || ""} />;
}
