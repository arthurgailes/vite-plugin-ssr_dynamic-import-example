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
  // We lazily load the client-side component
  const Counter = React.lazy(() => import("./Counter"));
  return (
    <React.Suspense fallback={<Loading />}>
      <Counter />
    </React.Suspense>
  );
}
