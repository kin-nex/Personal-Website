/// <reference types="@react-router/dev" />
/// <reference types="vite/client" />
/// <reference types="@cloudflare/workers-types" />

declare module '__STATIC_CONTENT_MANIFEST' {
  const manifest: string
  export default manifest
}

declare module 'virtual:react-router/server-build' {
  import type { ServerBuild } from 'react-router'

  const build: ServerBuild
  export default build
}
