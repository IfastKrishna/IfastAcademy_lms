import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Cog8ToothIcon,
  HomeIcon,
  IdentificationIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";
import {
  List,
  Typography,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import React from "react";
import SettingSidebar from "./SettingSidebar";

function Settings() {
  return (
    <div className="w-full px-1">
      <div className="grid grid-rows-1 grid-cols-3">
        <div className=" col-span-1">
          <SettingSidebar />
        </div>
        <div className=" col-span-2 px-3 py-5 grid  place-items-center">
          <Typography variant="h4" color="gray">
            Comming Soon
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Settings;
