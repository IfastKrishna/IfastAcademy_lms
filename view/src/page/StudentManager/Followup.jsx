import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import React from "react";
import Select from "react-select";

function Followup() {
  return (
    <div className="p-2 sm:p-5">
      <Card className="rounded-sm">
        <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
          ENQUIRES FOLLOW UP
        </Typography>
        <hr className="mt-2" />
        <CardBody className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input label="Student Name" required />
          <Input label="Next Follow-up Date" type="date" required />
          <div>
            <Select
              placeholder="Follow-up Mode"
              options={[
                { value: "Walk-ng", label: "Walk-ng" },
                { value: "Call", label: "Call" },
              ]}
            />
          </div>
          <Textarea label="Follow-up Deatails" required />
          <div>
            <Button className="">Save Changes</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-5 rounded-sm">
        <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
          FOLLOW UP HISTORY
        </Typography>
        <hr className="mt-2" />

        <CardBody></CardBody>
      </Card>
    </div>
  );
}

export default Followup;
