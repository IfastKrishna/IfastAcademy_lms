import asyncHandler from "../utils/asyncHandler.js";

const addNewEnquire = asyncHandler(async (req, res) => {
  // retrive enquire data from req
  const {
    firstName,
    lastName,
    middleName,
    gender,
    collageOrSchool,
    qualification,
    aadharNo,
    birthDate,
    primaryPhone,
    secondaryPhone,
    primaryEmail,
    secondaryEmail,
    currentAddress,
    permanentAddress,
    permanentPincode,
    currentPincode,
    courses,
    packages,
    requiredDemoLecture,
    insterestLevel,
    nextFollowupDate,
    followupDetails,
    leadSource,
    refName,
    enquireDate,
    assignTo,
    notes,
  } = req.body;
});
