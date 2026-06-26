import type { LinksFunction, MetaFunction } from 'react-router';
import type { ReactNode } from 'react'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'react-router';
import styles from './globals.css?url'
import { PageToggle } from './components/PageToggle'
import { CodeSource } from './components/CodeSource'

export const meta: MetaFunction = () => [
  { title: "It's Kin 🥶" },
  { name: 'description', content: 'Welcome to my website!' },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon-16x16.png',
  },
  { rel: 'manifest', href: '/site.webmanifest' },
]

export function Layout({ children }: { children: ReactNode }) {
  return (
  <html lang="en" className="dark">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
    </head>
    <body className="container relative min-h-screen">
      <PageToggle />
      <div className="absolute right-4 mt-2 sm:right-8 sm:mr-2 sm:mt-4">
        <CodeSource />
      </div>
      {children}
      <ScrollRestoration />
      <Scripts />
    </body>
  </html>
  )
}

const App = () => <Outlet />

export default App
