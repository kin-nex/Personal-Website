import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("experience", "routes/experience.tsx"),
  route("robots.txt", "routes/[robots.txt].tsx"),
  route("sitemap.xml", "routes/[sitemap.xml].tsx"),
] satisfies RouteConfig;
