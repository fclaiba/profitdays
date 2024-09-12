/* eslint-disable react/no-unescaped-entities */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SimpleFooter() {
  return (
    <footer className="bg-[#011627] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/img/logoPD.png" alt="Profit's Day Logo" />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
            <span className="text-2xl font-bold text-[#26C6DA]">
              Profit's Day
            </span>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Profit's Day. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
