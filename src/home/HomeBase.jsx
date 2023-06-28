import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import TopAppBar from "../commons/layouts/TopAppBar";

export default function HomeBase(props) {
  return (
    <Fragment>
      <TopAppBar />
      <Outlet />
    </Fragment>
  );
}
