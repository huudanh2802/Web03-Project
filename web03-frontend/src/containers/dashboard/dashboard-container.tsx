"use client";
import { useState } from "react";
import Note from "./note";
import Sidebar from "./sidebar";
import { useAppSelector } from "@/lib/hook";

export default function DashboardContainer() {
  return (
    <div className=" grid grid-cols-12 gap-4 divide-x-2 divide-stone-600 ">
      <div className="col-span-3 mt-4 mx-4">
        <Sidebar />
      </div>
      <div className="col-span-9">
        <Note />
      </div>
    </div>
  );
}
