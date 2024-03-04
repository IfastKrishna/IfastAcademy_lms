import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";

function DashbordCard({ icon, label, data = 0 }) {
  return (
    <Card>
      <CardBody>
        <Typography variant="paragraph" color="gray" className="flex">
          {icon}
          {label}
        </Typography>
        <Typography variant="h4" color="gray" className="text-center">
          {data}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default DashbordCard;
