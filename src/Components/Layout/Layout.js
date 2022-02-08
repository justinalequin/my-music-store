import React, { Children } from "react";
import ResAppBar from "./ResponsiveAppBar";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div>
        <ResAppBar></ResAppBar>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
