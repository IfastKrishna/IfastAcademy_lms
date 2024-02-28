import React, { useId, useState } from "react";
import {
  CardBody,
  ListItem,
  ListItemSuffix,
  Dialog,
  Input,
  Checkbox,
  CardFooter,
  Typography,
  Card,
  Button,
} from "@material-tailwind/react";

function InfoCardItem({
  HandleInfoComponent = false,
  py = 4,
  px = 0,
  bt = 0,
  inputType = "text",
  itemName,
  itemValue,
  suffixItem = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
      className="w-5 h-5 ml-2 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      ></path>
    </svg>
  ),
}) {
  const [input, setInput] = useState(itemValue);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <ListItem
        className={`py-${py} px-${px} grid grid-cols-4 rounded-none ${
          bt > 0 ? "border-t" : ""
        } border-gray-300`}
        onClick={handleOpen}
      >
        <Typography variant="small" className="col-span-1">
          {itemName}
        </Typography>
        <div className="col-span-3 flex items-center">
          <Typography variant="small" className="mr-2">
            {itemValue}
          </Typography>
          <ListItemSuffix>{suffixItem}</ListItemSuffix>
        </div>
      </ListItem>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        {!HandleInfoComponent ? (
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                {itemName}
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Fill your {itemName} to update.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                {itemName}
              </Typography>
              {inputType === "date" ? (
                <Input
                  label={itemName}
                  size="lg"
                  type={inputType}
                  defaultValue={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              ) : (
                <Input
                  label={itemName}
                  size="lg"
                  type={inputType}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              )}
              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                onClick={handleOpen}
                fullWidth
                disabled={itemValue === input}
              >
                Update
              </Button>
              <Typography variant="small" className="mt-4 flex justify-center">
                Do you want to cancel the
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold"
                  onClick={handleOpen}
                >
                  Update
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        ) : (
          HandleInfoComponent
        )}
      </Dialog>
    </>
  );
}

export default InfoCardItem;
