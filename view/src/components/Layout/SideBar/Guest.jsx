import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Card,
  Typography,
  IconButton,
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

export default function GuestSidebar({ onClose }) {
  const location = useLocation();
  const [navActive, setNavActive] = React.useState("");

  React.useEffect(() => {
    setNavActive(location.pathname);
  }, [location.pathname]);

  const handleNavLinkClick = (navItem) => {
    setNavActive(navItem);
  };

  return (
    <Card className={`w-full min-h-screen `}>
      <div className="mb-2 px-4 lg:py-4 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray" className="cursor-pointer">
          <Link to="/">Sidebar</Link>
        </Typography>
        <IconButton
          className="rounded-full"
          variant="text"
          color="blue-gray"
          onClick={() => onClose(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
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
