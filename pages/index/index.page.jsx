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
  // set the initial state to something that can be rendered on server
  const [Map, setMap] = React.useState(() => Loading);

  // once on the browser, dynamically import the component
  React.useEffect(() => {
    setMap(() => React.lazy(() => import("./Map")));
  }, []);

  // Suspense is necessary for rendering async/dynamically improrted components
  return (
    <React.Suspense fallback={<Loading />}>
      <Map />
    </React.Suspense>
  );
}
