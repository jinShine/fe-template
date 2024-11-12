import { FSColors, muiCommonTheme } from "@forspacedev/fe-kit";
import { createTheme } from "@mui/material";
import { merge } from "lodash-es";

import { LAYOUT } from "@constants/layout";

import { pretendardFont } from "@styles/global-font";

const muiTheme = merge(
  muiCommonTheme,
  createTheme({
    typography: {
      fontFamily: pretendardFont.style.fontFamily,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            minHeight: LAYOUT.FIT_DEVICE,
            height: "100%",
          },
          body: {
            "backgroundColor": FSColors.white,
            "color": FSColors.neutral[10],
            "height": "100%",

            // 시스템 환경에서 스크롤 "항상"으로 설정해도 브라우저에서 숨기기
            "&::-webkit-scrollbar": {
              display: "none",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            "color": FSColors.neutral[10],
            "&:has([readonly]) ": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                color: FSColors.neutral[60],
                borderColor: FSColors.neutral[90],
                borderWidth: 1,
              },
            },
          },
          input: {
            "::placeholder": {
              color: FSColors.neutral[60],
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: FSColors.neutral[90],
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: FSColors.neutral[90],
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: FSColors.primary[60],
              borderWidth: 2,
            },
            "&.Mui-disabled": {
              ".MuiOutlinedInput-notchedOutline": {
                color: FSColors.neutral[60],
                borderColor: FSColors.neutral[90],
                borderWidth: 1,
              },
              "backgroundColor": FSColors.neutral[95],
            },
            "&.Mui-disabled input::placeholder": {
              WebkitTextFillColor: FSColors.neutral[60],
            },
          },
        },
        variants: [
          {
            props: {
              multiline: true,
            },
            style: {
              height: "100%",
              paddingTop: "8.5px",
              paddingBottom: "8.5px",
            },
          },
        ],
      },
    },
  }),
);

export default muiTheme;
