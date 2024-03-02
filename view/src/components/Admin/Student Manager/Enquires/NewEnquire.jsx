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
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import Select from "react-select";

const gender = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
function NewEnquire() {
  const [activeTab, setActiveTab] = useState(1);
  const [courseList, setCourseList] = useState([
    { value: "1", label: "Course 1" },
    { value: "2", label: "Course 2" },
    { value: "3", label: "Course 3" },
    { value: "4", label: "Course 4" },
    { value: "5", label: "Course 5" },
    { value: "6", label: "Course 6" },
    { value: "7", label: "Course 7" },
  ]);

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
          <TabsBody className="overflow-auto">
            <form>
              <TabPanel value={1}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Input label="First Name" />
                  <Input label="Middle Name" />
                  <Input label="Last Name" />
                  <Select options={gender} placeholder="Gender" />
                  <Input label="Collage/School" />
                  <Input label="Qualification" />
                  <Input label="Aadhar No" type="tell" />
                  <Input label="Birth Date" type="date" />
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
                <Select
                  options={courseList}
                  name="course"
                  isMulti
                  placeholder="Courses"
                  className="mb-3 rounded-md"
                />
                <div className=" grid  grid-cols-2 gap-3">
                  <Select
                    options={courseList}
                    name="Package"
                    placeholder="Package"
                    isMulti
                    className="mb-3 rounded-md"
                  />
                  <Select
                    options={courseList}
                    placeholder="Requires Demo Lacture"
                    name="requires_demo_lacture"
                    className="mb-3 rounded-md"
                  />
                  <Select
                    options={courseList}
                    name="insterestLevel"
                    placeholder="Insterest Level"
                    className="mb-3 rounded-md"
                  />
                  <Input label="Next follow-Up Date" type="date" />
                  <Textarea label="Follow-Up Details" />
                </div>
              </TabPanel>
              <TabPanel value={4}>
                <div className=" grid  grid-cols-2 gap-3">
                  <Select
                    options={[
                      { value: "youtube", label: "Youtube" },
                      { value: "google", label: "Google" },
                      { value: "facebook", label: "Facebook" },
                    ]}
                    placeholder="Lead Source"
                  />
                  <Select
                    options={[
                      { value: "shri ram", label: "Shir Ram" },
                      { value: "vishal", label: "Vishal" },
                      { value: "neeraj", label: "Neeraj" },
                    ]}
                    placeholder="Ref Name"
                  />
                  <Input label="Enquire Date" type="date" />
                  <Textarea label="Current Address" />
                </div>
                <Button type="submit">Submit</Button>
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
