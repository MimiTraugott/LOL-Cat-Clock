import React from "react";
import Sidebar from "./Sidebar";
// import SidebarItem from './SidebarItem'

const items = [
  { name: "epitel", label: "Epitel" },
  {
    name: "devicesbydate",
    label: "Devices By Date",
    items: [
      { name: "today", label: "Today" },
      { name: "last3days", label: "Last 3 Days" },
      { name: "last7days", label: "Last 7 Days" },
      { name: "last14days", label: "Last 14 Days" },
      { name: "last30days", label: "Last 30 Days" },
    ],
  },
  {
    name: "devicesbyclinic",
    label: "Devices By Clinic",
    items: [
      { name: "uofu", label: "UofU" },
      { name: "johnshopkins", label: "Johns Hopkins" },
      { name: "mountsinai", label: "Mount Sinai" },
    ],
  },
];

function Apps() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default Apps;
