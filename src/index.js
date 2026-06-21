export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Return a simple message for the root path
    if (url.pathname === "/") {
      return new Response("fs1 worker is running", { status: 200 });
    }

    // For any other non-asset paths, return 404
    return new Response("Not found", { status: 404 });
  }
};
