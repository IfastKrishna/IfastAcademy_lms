import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

function NewEnquire() {
  const [activeSection, setActiveSection] = useState(0);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const createNewEnquire = (data) => {
    console.log(data);
  };

  const handleTabClick = (index) => {
    setActiveSection(index);
  };

  const handleNext = () => {
    setActiveSection(activeSection + 1);
  };

  const handlePrev = () => {
    setActiveSection(activeSection - 1);
  };

  return (
    <Card className="my-5 mx-5 md:mx-10 p-1 rounded-sm">
      <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
        COURSE ENQUIRE
      </Typography>
      <hr className="mt-2" />
      <CardBody className="overflow-auto">
        <FormGroup
          activeSection={activeSection}
          handleTabClick={handleTabClick}
        />
        <form onSubmit={handleSubmit(createNewEnquire)}>
          {activeSection === 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Controller
                control={control}
                name="firstName"
                render={({ field }) => (
                  <Input label="First Name" {...field} required />
                )}
              />
              <Controller
                control={control}
                name="middleName"
                render={({ field }) => <Input label="Middle Name" {...field} />}
              />
              <Controller
                control={control}
                name="lastName"
                render={({ field }) => <Input label="Last Name" {...field} />}
              />
              <Controller
                control={control}
                name="gender"
                render={({ field }) => (
                  <Select
                    options={genderOptions}
                    placeholder="Gender"
                    {...field}
                    required
                  />
                )}
              />
              <Controller
                control={control}
                name="collegeOrSchool"
                render={({ field }) => (
                  <Input label="College/School" {...field} />
                )}
              />
              <Controller
                control={control}
                name="qualification"
                render={({ field }) => (
                  <Input label="Qualification" {...field} required />
                )}
              />
              <Controller
                control={control}
                name="aadharNumber"
                render={({ field }) => (
                  <Input label="Aadhar No" type="tel" {...field} />
                )}
              />
              <Controller
                control={control}
                name="birthDate"
                required={true}
                render={({ field }) => (
                  <Input label="Birth Date" type="date" {...field} />
                )}
              />
            </div>
          )}
          {activeSection === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Primary Mobile No"
                {...register("primaryPhone", { required: true })}
                required
              />
              <Input
                label="Secondary Mobile No"
                {...register("secondaryPhone")}
              />
              <Input
                label="Primary Email"
                required
                type="email"
                {...register("primaryEmail")}
              />
              <Input label="Secondary Email" {...register("secondaryEmail")} />
              <Textarea
                label="Current Address"
                {...register("currentAddress")}
              />
              <Textarea
                label="Permanent Address"
                {...register("permanentAddress")}
              />
              <Input
                label="Pincode"
                type="tel"
                {...register("currentPincode")}
              />
              <Input
                label="Pincode"
                type="tel"
                {...register("permanentPincode")}
              />
            </div>
          )}
          {activeSection === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                options={[
                  { label: "course1", value: "course1" },
                  { label: "course2", value: "course2" },
                ]}
                {...register("courses")}
                isMulti
                placeholder="Courses"
                className="mb-3 rounded-md"
              />
              <Select
                options={[
                  { label: "course1", value: "course1" },
                  { label: "course2", value: "course2" },
                ]}
                {...register("packages")}
                placeholder="Package"
                isMulti
                className="mb-3 rounded-md"
              />
              <Select
                options={[
                  { label: "YES", value: "YES" },
                  { label: "No", value: "No" },
                ]}
                placeholder="Requires Demo Lacture"
                {...register("requiredDemoLecture")}
                className="mb-3 rounded-md"
              />
              <Select
                options={[
                  { label: "course1", value: "course1" },
                  { label: "course2", value: "course2" },
                  { label: "course3", value: "course3" },
                ]}
                {...register("interestLevel")}
                placeholder="Interest Level"
                isMulti
                className="mb-3 rounded-md"
              />
              <Input
                label="Next follow-Up Date"
                type="date"
                {...register("followupDate")}
              />
              <Textarea
                label="Follow-Up Details"
                {...register("followupDetails")}
              />
            </div>
          )}
          {activeSection === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Select
                options={[
                  { value: "youtube", label: "Youtube" },
                  { value: "google", label: "Google" },
                  { value: "facebook", label: "Facebook" },
                ]}
                placeholder="Lead Source"
                {...register("leadSource")}
              />
              <Input type="text" label="Ref Name" {...register("refName")} />
              <Select
                options={[{ label: "Krishna", value: "krishna" }]}
                placeholder="Assign To"
                {...register("assignTo")}
              />
              <Input
                label="Enquire Date"
                type="date"
                value={new Date().toISOString().slice(0, 10)}
                {...register("enquireDate")}
              />
              <Textarea label="Notes" {...register("notes")} />
            </div>
          )}
          <div className="flex justify-between mt-4">
            <Button onClick={handlePrev} disabled={activeSection === 0}>
              Previous
            </Button>
            {activeSection < 3 && <Button onClick={handleNext}>Next</Button>}
            {activeSection === 3 && (
              <Button type="submit" color="indigo">
                Submit
              </Button>
            )}
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

function FormGroup({ activeSection, handleTabClick }) {
  const tabLabels = [
    "PERSONAL DETAILS",
    "COMMUNICATION DETAILS",
    "FOLLOWUP DETAILS",
    "HOW YOU KNOW US",
  ];
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-4 mb-3">
      {tabLabels.map((label, index) => (
        <Button
          key={index}
          className="rounded-none shadow-sm"
          onClick={() => handleTabClick(index)}
          variant={index === activeSection ? "filled" : "text"}
          size="sm"
          fullWidth
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export default NewEnquire;
