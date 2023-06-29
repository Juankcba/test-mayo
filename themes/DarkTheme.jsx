// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

// 2. Call `createTheme` and pass your custom values
const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: "$green200",
            primaryLightHover: "$green300",
            primaryLightActive: "$green400",
            primaryLightContrast: "$green600",
            primary: "#4ADE7B",
            primaryBorder: "$green500",
            primaryBorderHover: "$green600",
            primarySolidHover: "$green700",
            primarySolidContrast: "$white",
            primaryShadow: "$green500",

            gradient:
                "linear-gradient(90deg, rgba(4,231,247,1) 0%, rgba(106,106,208,1) 51%, rgba(129,86,196,1) 61%, rgba(140,4,246,1) 100%)",
            link: "#5E1DAD",

            // you can also create your own color
            myColor: "#ff4ecd",

            // ...  more colors
        },
        space: {},
        fonts: {},
    },
});

export default darkTheme;