import React from "react";
export { Page };

const Loading = () => <div>Loading</div>;
function Page() {
  return (
    <>
      <h1>Dynamic Import in SSR Render</h1>
      <p>This page is:</p>
      <ul>
        <li>Rendered to HTML and hydrated in the browser.</li>
        <li>
          Interactive - this component is loaded dynamically on client:{" "}
          <ClientSideComponent />
        </li>
      </ul>
    </>
  );
}

function ClientSideComponent() {
  // This code would fix the problem, but produce hydration warnings
  // const isBrowser = typeof window !== "undefined";
  // if (!isBrowser) return null;
  // We lazily load the client-side component
  const Map = React.lazy(() => import("./Map"));
  return (
    <React.Suspense fallback={<Loading />}>
      <Map />
    </React.Suspense>
  );
}
