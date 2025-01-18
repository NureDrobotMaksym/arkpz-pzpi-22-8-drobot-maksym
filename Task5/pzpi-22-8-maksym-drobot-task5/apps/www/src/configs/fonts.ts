import {Inter, Raleway} from "next/font/google";

const headingFont = Raleway({
  subsets: ["latin"],
  variable: "--font-heading"
});

const defaultFont = Inter({
  subsets: ["latin"],
  variable: "--font-default"
});

export default `${headingFont.variable} ${defaultFont.variable}`;