import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 font-display text-5xl text-primary">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Page not found</p>
        <a href="/" className="text-primary font-semibold underline underline-offset-4 hover:opacity-80">
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
