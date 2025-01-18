/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/app/**/*.tsx", "./src/components/**/*.tsx"],
    theme: {
        container: {
          center: true,
          padding: "1rem"
        },
        fontFamily: {
            default: [variable("font-default")],
            heading: [variable("font-heading")],
        },
        fontWeight: {
            100: 100,
            200: 200,
            300: 300,
            400: 400,
            500: 500,
            600: 600,
            700: 700,
            800: 800,
            900: 900
        },
        fontSize: {
            xs: "12px",
            sm: "14px",
            md: "16px",
            lg: "18px",
            xl: "20px"
        },
        borderRadius: {
            mn: "0px",
            xs: "4px",
            sm: "6px",
            md: "8px",
            lg: "10px",
            mx: "1000px"
        },
        letterSpacing: {
            xs: "-0.025em",
            sm: "-0.05em",
            md: "0",
            lg: "+0.05em",
            xl: "+0.075em"
        },
        lineHeight: {
            mn: "1",
            md: "1.5"
        },
        extend: {
            colors: {
                background: color("background"),
                foreground: color("foreground"),
                border: color("border")
            },
            backgroundColor: {
                solid: color("solid-background"),
                light: color("light-background"),
                muted: color("muted-background"),
                focus: color("focus-background"),
                error: color("error-background"),
            },
            textColor: {
                solid: color("solid-foreground"),
                light: color("light-foreground"),
                muted: color("muted-foreground"),
                focus: color("focus-foreground"),
                error: color("error-foreground"),
            },
            borderColor: {
                default: color("border"),
            },
            ringColor: {
                default: color("ring"),
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    }
};

function variable(name) {
    return `var(--${name})`;
}

function color(name) {
    return `hsl(var(--${name}))`;
}
