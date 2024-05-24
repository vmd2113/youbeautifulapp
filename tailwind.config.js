module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Quicksand ", "sans-serif"],
                secondary: ["Playfair Display"],
                title_content: ["Dancing Script"],
                cach_dieu: ["Great Vibes"],
            },
            spacing: {
                300: 300,
                400: 400,
                480: 480,
                600: 600,
                900: 900,
            },
            colors: {
                primary: "#8A9328",
                secondary: "#F7DFAD",
                text1: "#171725",
                text2: "#4B5264",
                text3: "#808191",
                text4: "#B2B3BD",
                "icon-color": "#A2A2A8",
                white: "#FFFFFF",
                whiteSoft: "#Fefbf4",
                graySoft: "#FCFCFC",

                error: "#EB5757",
                darkbg: "#13131A",
                darkSecondary: "#1C1C24",
                softDark: "#22222C",
                darkSoft: "#24242C",
                darkStroke: "#3A3A43",
                darkRed: "#422C32",
            },
            boxShadow: {
                sdprimary: "10px 10px 20px rgba(211, 211, 211, 0.25)",
            },
        },
    },
    plugins: [],
};
