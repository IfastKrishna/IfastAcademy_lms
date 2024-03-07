import React, { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const createNewEnquire = (data) => {
    console.log(data);
    // api.post("")
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
    <Card className="py-4 rounded-sm">
      <Typography className="px-3 py-0 border-l-2 border-l-black text-black">
        COURSE ENQUIRE
      </Typography>
      <hr className="mt-2" />
      <CardBody className="overflow-auto p-1 sm:p-2 md:p-4">
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
                render={({ field }) => (
                  <Input label="Birth Date" type="date" {...field} required />
                )}
              />
            </div>
          )}
          {activeSection === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Controller
                control={control}
                name="primaryPhone"
                render={({ field }) => (
                  <Input label="Primary Mobile No" {...field} required />
                )}
              />
              <Controller
                control={control}
                name="secondaryPhone"
                render={({ field }) => (
                  <Input label="Secondary Mobile No" {...field} />
                )}
              />
              <Controller
                control={control}
                name="primaryEmail"
                render={({ field }) => (
                  <Input
                    label="Primary Email"
                    type="email"
                    {...field}
                    required
                  />
                )}
              />
              <Controller
                control={control}
                name="secondaryEmail"
                render={({ field }) => (
                  <Input label="Secondary Email" {...field} />
                )}
              />
              <Controller
                control={control}
                name="currentAddress"
                render={({ field }) => (
                  <Textarea label="Current Address" {...field} />
                )}
              />
              <Controller
                control={control}
                name="permanentAddress"
                render={({ field }) => (
                  <Textarea label="Permanent Address" {...field} />
                )}
              />
              <Controller
                control={control}
                name="currentPincode"
                render={({ field }) => (
                  <Input label="Pincode" type="tel" {...field} />
                )}
              />
              <Controller
                control={control}
                name="permanentPincode"
                render={({ field }) => (
                  <Input label="Pincode" type="tel" {...field} />
                )}
              />
            </div>
          )}
          {activeSection === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Controller
                control={control}
                name="courses"
                render={({ field }) => (
                  <Select
                    className="mb-3 rounded-md"
                    options={[
                      { label: "Course", value: "course1" },
                      { label: "Course", value: "course2" },
                    ]}
                    {...field}
                    placeholder="Courses"
                    isMulti
                  />
                )}
              />

              <Controller
                control={control}
                name="packages"
                render={({ field }) => (
                  <Select
                    className="mb-3 rounded-md"
                    options={[
                      { label: "Pakacge", value: "package" },
                      { label: "Pakacge2", value: "pakacge2" },
                    ]}
                    {...field}
                    placeholder="Package"
                    isMulti
                  />
                )}
              />

              <Controller
                control={control}
                name="requiredDemoLecture"
                render={({ field }) => (
                  <Select
                    className="mb-3 rounded-md"
                    options={[
                      { label: "YES", value: "YES" },
                      { label: "No", value: "No" },
                    ]}
                    {...field}
                    placeholder="Requires Demo Lacture"
                  />
                )}
              />

              <Controller
                control={control}
                name="interestLevel"
                render={({ field }) => (
                  <Select
                    options={[
                      { label: "HOT", value: "HOT" },
                      { label: "WARM", value: "WARM" },
                      { label: "COULD", value: "COULD" },
                    ]}
                    {...field}
                    placeholder="Interest Level"
                    className="mb-3 rounded-md"
                  />
                )}
              />

              <Controller
                control={control}
                name="followupDate"
                render={({ field }) => (
                  <Input type="date" label="Next follow-Up Date" {...field} />
                )}
              />
              <Controller
                control={control}
                name="followupDetails"
                render={({ field }) => (
                  <Textarea label="Follow-Up Details" {...field} />
                )}
              />
            </div>
          )}

          {activeSection === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Controller
                control={control}
                name="leadSource"
                render={({ field }) => (
                  <Select
                    options={[
                      { value: "youtube", label: "Youtube" },
                      { value: "google", label: "Google" },
                      { value: "facebook", label: "Facebook" },
                    ]}
                    placeholder="Lead Source"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="refName"
                render={({ field }) => (
                  <Input type="text" label="Ref Name" {...field} />
                )}
              />
              <Controller
                control={control}
                name="assignTo"
                render={({ field }) => (
                  <Select
                    options={[{ label: "Krishna", value: "krishna" }]}
                    placeholder="Assign To"
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="enquireDate"
                defaultValue={new Date().toISOString().slice(0, 10)}
                render={({ field }) => (
                  <Input type="date" label="Enquire Date" {...field} />
                )}
              />

              <Controller
                control={control}
                name="notes"
                render={({ field }) => <Textarea label="Notes" {...field} />}
              />
            </div>
          )}
          <div className="flex justify-between mt-4">
            <Button
              onClick={handlePrev}
              size="sm"
              disabled={activeSection === 0}
            >
              Previous
            </Button>
            {activeSection < 3 && (
              <Button size="sm" onClick={handleNext}>
                Next
              </Button>
            )}
            {activeSection === 3 && (
              <Button type="submit" color="indigo" loading={loading}>
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
