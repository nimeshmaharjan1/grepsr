"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/store/global.store";
import { ChevronLeft, ChevronRight } from "lucide-react";
const DashboardHeader = () => {
  const { showSidebar, setShowSidebar } = useGlobalStore();
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  return (
    <>
      {/* Navbar */}
      <header className="flex-shrink-0 border-b">
        <div className="flex items-center justify-between p-2">
          {/* Navbar left */}
          <div className="flex items-center space-x-3">
            <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">
              K-WD
            </span>
            <Button size={"icon"} onClick={toggleSidebar} variant={"ghost"}>
              {showSidebar ? (
                <ChevronLeft strokeWidth={1.25}></ChevronLeft>
              ) : (
                <ChevronRight strokeWidth={1.25}></ChevronRight>
              )}
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default DashboardHeader;
