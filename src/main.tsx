import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Handle GitHub Pages routing
// https://github.com/rafgraph/spa-github-pages
(function() {
  const { pathname, search } = window.location;
  const pathIsIndex = pathname === '/index.html';
  const hasQuery = search.includes('?/');
  
  if (pathIsIndex || hasQuery) {
    const pathnameToUse = pathIsIndex ? '/index.html' : pathname;
    const segments = pathnameToUse.split('/').filter(s => s);
    const restOfPath = segments.length > 1 ? segments.slice(1).join('/') : '';
    
    let newPathname = '/';
    if (hasQuery) {
      const match = search.match(/\?\/+(.*)/);
      if (match) {
        newPathname = match[1].split('&')[0].replace(/~and~/g, '&');
        if (!newPathname.startsWith('/')) {
          newPathname = '/' + newPathname;
        }
      }
    }
    
    window.history.replaceState(null, '', newPathname + window.location.hash);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
