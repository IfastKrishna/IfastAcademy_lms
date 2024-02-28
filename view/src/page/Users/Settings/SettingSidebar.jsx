import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  Cog8ToothIcon,
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
function SettingSidebar() {
  return (
    <List>
      <ListItem disabled={true}>
        <ListItemPrefix>
          <Cog8ToothIcon strokeWidth={3} className="h-8 w-8" />
        </ListItemPrefix>
        <Typography variant="h4" color="gray" className="font-bold">
          Settings
        </Typography>
      </ListItem>

      <ListItem className=" rounded-none rounded-r-full">
        <ListItemPrefix>
          <UserCircleIcon strokeWidth={3} className="h-5 w-5" />
        </ListItemPrefix>
        <Typography>Home</Typography>
      </ListItem>
      <ListItem className=" rounded-none rounded-r-full">
        <ListItemPrefix>
          <IdentificationIcon strokeWidth={3} className="h-5 w-5" />
        </ListItemPrefix>
        <Typography>Personal info</Typography>
      </ListItem>
      <ListItem className=" rounded-none rounded-r-full">
        <ListItemPrefix>
          <ShieldCheckIcon strokeWidth={3} className="h-5 w-5" />
        </ListItemPrefix>
        <Typography>Secqurity Password</Typography>
      </ListItem>
      <ListItem className=" rounded-none rounded-r-full">
        <ListItemPrefix>
          <LockClosedIcon strokeWidth={3} className="h-5 w-5" />
        </ListItemPrefix>
        <Typography>App info</Typography>
      </ListItem>
    </List>
  );
}

export default SettingSidebar;
