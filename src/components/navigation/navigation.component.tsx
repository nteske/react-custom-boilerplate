import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import { NavigationWrapper } from "./navigation.styles";

const Navigation: FC = () => {
  return (
    <NavigationWrapper>
      <div>Navigation</div>
      <Outlet />
    </NavigationWrapper>
  );
};

export default Navigation;
