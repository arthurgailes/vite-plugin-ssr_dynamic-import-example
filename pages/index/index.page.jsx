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
        <li>Interactive - this component is loaded dynamically on client: </li>
      </ul>

      <ClientSideComponent />
    </>
  );
}

function ClientSideComponent() {
  const [Map, setMap] = React.useState(() => Loading);
  const isBrowser = typeof window !== "undefined";

  React.useEffect(() => {
    if (isBrowser) setMap(() => React.lazy(() => import("./Map")));
  }, [isBrowser]);

  return (
    <React.Suspense fallback={<Loading />}>
      <Map />
    </React.Suspense>
  );
}
