import React, { type FC, type PropsWithChildren } from "react";

import DashboardSidebar from "./_components/layout/sidebar.layout";
import DashboardHeader from "./_components/layout/header.layout";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-y-hidden bg-white">
      <DashboardSidebar></DashboardSidebar>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <DashboardHeader></DashboardHeader>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
