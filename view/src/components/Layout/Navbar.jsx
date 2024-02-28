import React, { useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Button,
} from "@material-tailwind/react";
import {
  ArrowRightCircleIcon,
  UserCircleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LogoutWrapper from "./Logout";

export default function StickyNavbar({ isSidebarOpen, setIsSidebarOpen }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [navbarShadow, setNavbarShadow] = useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarShadow(currentScrollPos === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`sticky top-0 h-max max-w-full shadow-${
        navbarShadow ? "sm" : "md"
      } rounded-none py-2 lg:px-8 lg:py-4 z-50`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center gap-4">
          <IconButton
            variant="text"
            className="rounded-full"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </IconButton>
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
              IFASTLMS
            </Typography>
          </Link>
        </div>
        {isAuthenticated ? (
          <Menu placement="bottom-end">
            <MenuHandler>
              <Avatar
                variant="circular"
                size="sm"
                alt="tania andrew"
                className="border border-gray-800 p-0.5 cursor-pointer"
                src={user?.avatar}
              />
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={() => navigate("/profile")}>
                <UserCircleIcon className="h-6 w-6 pr-1.5 inline" />
                Profile
              </MenuItem>
              <MenuItem onClick={() => navigate("settings")}>
                <Cog8ToothIcon className="h-6 w-6 pr-1.5 inline" />
                Settings
              </MenuItem>
              <LogoutWrapper>
                <MenuItem>
                  <ArrowRightCircleIcon className="h-6 w-6 pr-1.5 inline" />
                  Log Out
                </MenuItem>
              </LogoutWrapper>
            </MenuList>
          </Menu>
        ) : (
          <div className="flex items-center gap-x-1">
            <Button
              fullWidth
              variant="text"
              size="sm"
              onClick={() => navigate("/login")}
            >
              <span>Log In</span>
            </Button>
            <Button
              fullWidth
              variant="gradient"
              size="sm"
              onClick={() => navigate("/signup")}
            >
              <span className=" text-nowrap">Sign up</span>
            </Button>
          </div>
        )}
      </div>
    </Navbar>
  );
}
