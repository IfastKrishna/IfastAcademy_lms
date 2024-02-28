import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Typography
          variant="h2"
          color="gray"
          className="text-4xl font-bold mb-4"
        >
          Error 404: Page Not Found
        </Typography>
        <Typography variant="h3" color="gray" className="text-xl mb-6">
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Link to="/" className="text-blue-500 hover:underline">
          <Button color="light-blue">Go to Home Page</Button>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
