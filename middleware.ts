import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  ignoredRoutes: [
    "/((?!api|trpc))(_next.*|.+.[w]+$)", // API Route
    "/((?!.+\\.[\\w]+$|_next).*)", // Image Routes
    "/", // Home Route
    "/events", // Events Route
    "/events/:id", // Single Event Route
    "/assets",
  ],
});
