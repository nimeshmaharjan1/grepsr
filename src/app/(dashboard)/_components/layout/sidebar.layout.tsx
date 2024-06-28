"use client";
import { useGlobalStore } from "@/store/global.store";
import React from "react";

import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { dashboardRoutes } from "@/lib/routes/dashboard.routes";
import Link from "next/link";

const DashboardSidebar = () => {
  const { showSidebar, setShowSidebar } = useGlobalStore();
  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const pathname = usePathname();
  return (
    <>
      {/* Sidebar backdrop */}
      {showSidebar && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"></div>
      )}
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-white border-r shadow-lg lg:z-auto lg:static lg:shadow-none ${
          !showSidebar ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
        }`}
      >
        {/* Sidebar header */}
        <div
          className={`flex items-center justify-between flex-shrink-0 p-2 ${
            !showSidebar ? "lg:justify-center" : ""
          }`}
        >
          <span className="p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            K<span className={!showSidebar ? "lg:hidden" : ""}>-WD</span>
          </span>
          <Button
            onClick={toggleSidebar}
            className="lg:hidden"
            variant={"ghost"}
            size={"icon"}
          >
            {showSidebar ? (
              <Icon icon="ChevronLeft"></Icon>
            ) : (
              <Icon icon="ChevronRight"></Icon>
            )}
          </Button>
        </div>

        {/* Sidebar links */}
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-4 pt-2 overflow-hidden">
            {dashboardRoutes.map((route) => {
              const isActive = pathname.includes(route.href);
              return (
                <li key={route.key}>
                  <Link
                    href={route.href}
                    className={cn(
                      `flex items-center p-3 space-x-2 rounded-md ${
                        !showSidebar ? "justify-center" : ""
                      }`,
                      isActive && "bg-primary/10"
                    )}
                  >
                    {route.icon}
                    <span
                      className={cn(
                        "font-medium",
                        !showSidebar ? "lg:hidden" : "",
                        isActive && "text-primary"
                      )}
                    >
                      {route.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Sidebar footer */}
        <div className="flex-shrink-0 p-2 border-t max-h-14">
          <button className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase bg-gray-100 border rounded-md focus:outline-none focus:ring">
            <span>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </span>
            <span className={!showSidebar ? "lg:hidden" : ""}> Logout </span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
