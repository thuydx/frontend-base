'use client'

import { Provider } from 'react-redux'
import store from '@/store'
import '@/styles/style.scss'
// We use those styles to show code examples, you should remove them in your application.
import '@/styles/examples.scss'

const setInitialTheme = `
  (function() {
    const userMode = localStorage.getItem('theme');
    const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (userMode === 'dark' || (userMode !== 'light' && systemDarkMode)) {
      document.documentElement.dataset.coreuiTheme = 'dark';
    }
  })();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Frontend Base</title>
        <script
          dangerouslySetInnerHTML={{
            __html: setInitialTheme,
          }}
        />
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  )
}
