import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Tabs,
  Tab,
  TabsHeader,
  TabsBody,
  TabPanel,
  CardFooter,
  Button,
  Input,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

function NewEnquire() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Card className="my-5 mx-5 md:mx-10 p-1 rounded-sm">
      <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
        COURSE ENQUIRE
      </Typography>
      <hr className="mt-2" />
      <CardBody className="overflow-auto">
        <Tabs value={activeTab} onChange={(index) => setActiveTab(index)}>
          <TabsHeader>
            <Tab value={1}>PERSONAL DETAILS</Tab>
            <Tab value={2}>COMMUNICATION DETAILS</Tab>
            <Tab value={3}>FOLLOW UP DETAILS</Tab>
            <Tab value={4}>HOW YOU KNOW US?</Tab>
          </TabsHeader>
          <TabsBody>
            <form>
              <TabPanel value={1}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Input label="First Name" />
                  <Input label="Middle Name" />
                  <Input label="Last Name" />
                  <Input label="Collage/School" />
                  <Input label="Qualification" />
                  <Input label="Aadhar No" type="tell" />
                  <Input label="Birth Date" type="date" />
                  <Select size="md" label="Select Gender">
                    <Option>Male</Option>
                    <Option>Female</Option>
                    <Option>Other</Option>
                  </Select>
                </div>
              </TabPanel>
              <TabPanel value={2}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Input label="Primary Mobile No" />
                  <Input label="Secondry Mobile No" />
                  <Input label="Primary Email" />
                  <Input label="Secondry Email" />
                  <Textarea label="Current Address" />
                  <Textarea label="Permament Address" />
                  <Input label="Pincode" type="tell" />
                  <Input label="Pincode" type="tell" />
                </div>
              </TabPanel>
              <TabPanel value={3}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Input label="First Name" />
                  <Input label="Middle Name" />
                  <Input label="Last Name" />
                  <Input label="Collage/School" />
                  <Input label="Qualification" />
                  <Input label="Aadhar No" type="tell" />
                  <Input label="Birth Date" type="date" />
                </div>
              </TabPanel>
              <TabPanel value={4}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Input label="Primary Mobile No" />
                  <Input label="Secondry Mobile No" />
                  <Input label="Primary Email" />
                  <Input label="Secondry Email" />
                  <Textarea label="Current Address" />
                  <Textarea label="Permament Address" />
                  <Input label="Pincode" type="tell" />
                  <Input label="Pincode" type="tell" />
                </div>
              </TabPanel>
            </form>
          </TabsBody>
        </Tabs>
      </CardBody>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default NewEnquire;
