import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  PaperAirplaneIcon,
  BoltIcon,
} from "@heroicons/react/24/solid";

export default function GuestSidebar({ isSidebarOpen }) {
  const location = useLocation();
  const [navActive, setNavActive] = React.useState("");

  React.useEffect(() => {
    setNavActive(location.pathname);
  }, [location.pathname]);

  const handleNavLinkClick = (navItem) => {
    setNavActive(navItem);
  };

  return (
    <Card
      className={`w-full min-h-screen sticky top-0 rounded-none p-4 shadow-xl ${
        isSidebarOpen ? "" : "hidden"
      }`}
    >
      <div className="mb-2 px-4 lg:py-4">
        <Typography variant="h5" color="blue-gray" className="cursor-pointer">
          <Link to="/" onClick={() => handleNavLinkClick("home")}>
            Guest Sidebar
          </Link>
        </Typography>
      </div>
      <List>
        <NavLink to="/" onClick={() => handleNavLinkClick("home")}>
          <ListItem selected={navActive === "/"}>
            <ListItemPrefix>
              <HomeIcon strokeWidth={3} className="h-5 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
        </NavLink>
        <NavLink to="/about" onClick={() => handleNavLinkClick("about")}>
          <ListItem selected={navActive === "/about"}>
            <ListItemPrefix>
              <QuestionMarkCircleIcon strokeWidth={3} className="h-5 w-5" />
            </ListItemPrefix>
            About Us
          </ListItem>
        </NavLink>
        <NavLink to="/contact" onClick={() => handleNavLinkClick("contact")}>
          <ListItem selected={navActive === "/contact"}>
            <ListItemPrefix>
              <PaperAirplaneIcon strokeWidth={3} className="h-5 w-5" />
            </ListItemPrefix>
            Contact Us
          </ListItem>
        </NavLink>
        <NavLink to="/upcoming" onClick={() => handleNavLinkClick("upcoming")}>
          <ListItem selected={navActive === "/upcoming"}>
            <ListItemPrefix>
              <BoltIcon strokeWidth={3} className="h-5 w-5" />
            </ListItemPrefix>
            Upcoming Soon
          </ListItem>
        </NavLink>
      </List>
    </Card>
  );
}
