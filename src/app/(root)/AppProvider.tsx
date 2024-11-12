"use client";

import GoogleAnalyticsProvider from "@lib/google/analytics/Provider";
import MuiProvider from "@lib/mui/Provider";
import ReactQueryProvider from "@lib/react-query/Provider";
import RecoilProvider from "@lib/recoil/Provider";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <RecoilProvider>
      <MuiProvider>
        <ReactQueryProvider>
          {children}
          <GoogleAnalyticsProvider />
        </ReactQueryProvider>
      </MuiProvider>
    </RecoilProvider>
  );
}
