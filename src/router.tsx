import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Plain SPA router — no SSR context, no server-side QueryClient injection.
// QueryClient lives in main.tsx and is provided via QueryClientProvider there.
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
