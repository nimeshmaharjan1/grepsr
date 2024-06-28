"use client";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/store/global.store";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import DashboardSidebar from "../_components/layout/sidebar.layout";

const Dashboard = () => {
  return (
    <>
      {/* <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll"> */}
      <main className="flex-1 max-h-full p-6">
        {/* Main content header */}
        <div className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row">
          <h1 className="text-2xl font-semibold whitespace-nowrap">
            Dashboard
          </h1>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
