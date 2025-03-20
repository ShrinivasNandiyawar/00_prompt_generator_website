export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname === '/' ? '/index.html' : url.pathname;
    return env.ASSETS.fetch(new Request(pathname, request));
  }
}