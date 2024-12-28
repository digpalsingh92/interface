"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Calendar, label: "Appointments", href: "/appointments" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "fixed left-0 top-28 w-64 z-40 h-[calc(100vh-10rem)] border-r bg-background rounded-3xl transition-width duration-300",
        // collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-full flex-col justify-between p-6">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    collapsed && "justify-center"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {!collapsed && <span className="ml-2">{item.label}</span>}
                </Button>
              </Link>
            );
          })}
        </div>

        <div className="space-y-2">
          {/* <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5" />
                <span className="ml-2">Collapse</span>
              </>
            )}
          </Button> */}
          <Button
            variant="ghost"
            className={cn(
              "w-full justify-start text-destructive",
              collapsed && "justify-center"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!collapsed && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </div>
    </div>
  );
}