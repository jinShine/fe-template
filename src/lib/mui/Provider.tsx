import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ko";

import muiTheme from "./theme";

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      adapterLocale={"ko"}
      dateFormats={{ year: "YYYY년", month: "MMMM" }} // ex) 2023년 11월
      localeText={{
        fieldHoursPlaceholder: () => "00",
        fieldMinutesPlaceholder: () => "00",
      }}
    >
      <AppRouterCacheProvider>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </LocalizationProvider>
  );
}
