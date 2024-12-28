"use client";
import { useState, useEffect } from "react";
import { Bell, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
      <div className="flex h-16 items-center justify-around px-4">
        <div className="flex items-center gap-2 font-semibold">
          <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground grid place-items-center">
            V
          </div>
          <span>Vets-For-Pets</span>
        </div>

        <div className="flex items-center mx-4 flex-1 max-w-xl">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-2 top-[-1] h-5 w-5 text-muted-foreground" />
            <Input placeholder="Find medicine, doctors..." className="pl-8" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="h-5 w-5" />
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center"
            >
              3
            </Badge>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2">
              <div
                className="w-full flex gap-1 items-center h-8 cursor-pointer"
              >
                <img
                  className="h-10 rounded-[50%]"
                  src="https://github.com/shadcn.png"
                  alt="Profile"
                />
                <div className="flex flex-col ">
                <span className="">Digpal Singh</span>
                <span className="text-xs leading-none text-muted-foreground font-bold">Doctor</span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Dr. Digpal Singh
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Doctor
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
