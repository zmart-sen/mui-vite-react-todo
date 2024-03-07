import { alpha, createTheme, getContrastRatio } from "@mui/material/styles";

const primaryColorBase = "#6c00f0";
const primaryColorMain = alpha(primaryColorBase, 0.7);

const secondaryColorBase = "#84f000";
const secondaryColorMain = alpha(primaryColorBase, 0.7);

export const lightTheme = createTheme({
    typography: {
        fontFamily: "Quicksand",
        fontWeightRegular: 300,
        fontWeightBold: 700,
    },
    palette: {
        // mode: 'light',
        primary: {
            main: primaryColorMain,
            light: alpha(primaryColorBase, 0.5),
            dark: alpha(primaryColorBase, 0.9),
            contrastText:
                getContrastRatio(primaryColorBase, "#fff") > 4.5
                    ? "#fff"
                    : "#111",
        },
        secondary: {
            main: secondaryColorMain,
            light: alpha(secondaryColorBase, 0.5),
            dark: alpha(secondaryColorBase, 0.9),
            contrastText:
                getContrastRatio(secondaryColorMain, "#fff") > 4.5
                    ? "#fff"
                    : "#111",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});
