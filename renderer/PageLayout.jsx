export { PageLayout };

import "./PageLayout.css";
import React from "react";

function PageLayout({ children }) {
  return (
    <React.StrictMode>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  );
}

function Layout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function Content({ children }) {
  return <div>{children}</div>;
}
