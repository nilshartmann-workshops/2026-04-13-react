import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="AppLayout">
      <header>
        <Link to={"/"}>Home</Link>
        <Link to={"/add"}>Neue Pflanze</Link>
      </header>
      <Outlet />
    </div>
  );
}
