import React, { useId } from "react";
import { Card, Typography, List } from "@material-tailwind/react";

export default function InfoCard({
  rounded = "md",
  infoName = "",
  infoDescription = "",
  children,
}) {
  const id = useId();
  return (
    <Card
      className={`shadow-sm ring-1 ring-gray-300 rounded-${rounded}`}
      id={id}
    >
      <List>
        <div className={`flex flex-col justify-start py-2 px-3`}>
          <Typography variant="h4" className="font-extralight">
            {infoName}
          </Typography>
          <Typography variant="small">{infoDescription}</Typography>
        </div>
        {children}
      </List>
    </Card>
  );
}
