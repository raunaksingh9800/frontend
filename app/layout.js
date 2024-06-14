import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NAS Js",
  description: "NAS Js enables you to enjoy high end data Network-attached storage System."
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="ThZA6NtQKHBSbro3mSqr-Exr8f9wFwNmdrN9OMqLiAg" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
