// import './globals.css'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }
// 


'use client'
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'

export const metadata = {
  title: 'Flaardcash',
  description: 'A flash card application',
}
import { darkTheme } from "@/app/theme/themes";
import { ThemeProvider, CssBaseline } from "@mui/material";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body>  <AuthContextProvider>
          {children}
        </AuthContextProvider></body>
      </ThemeProvider>
    </html>
  );
}