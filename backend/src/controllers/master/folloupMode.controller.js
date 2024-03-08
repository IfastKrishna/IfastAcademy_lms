import { FollowupMode } from "../../models/master/app.models";
import { asyncHandler } from "../../utils/asyncHandler";
import { ApiResponse } from "../../utils/ApiResponse";

const createFollowupMode = asyncHandler(async (req, res) => {
  try {
    const followupModeData = req.body.followupMode;
    await FollowupMode.create(followupModeData);
    const followupModes = await FollowupMode.find(); // Fetch follow-up modes after creation
    return res
      .status(201)
      .json(
        ApiResponse(201, followupModes, "Follow-up mode created successfully")
      );
  } catch (err) {
    return res.status(400).send({ success: false, message: err.message });
  }
});

// Get all follow-up modes
const getAllFollowupModes = asyncHandler(async (req, res) => {
  try {
    const followupModes = await FollowupMode.find();
    return res
      .status(200)
      .json(
        ApiResponse(200, followupModes, "Follow-up modes fetched successfully")
      );
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Get a specific follow-up mode by ID
const getFollowupModeById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const followupMode = await FollowupMode.findById(id);
    if (!followupMode) {
      throw new Error("Follow-up mode not found");
    }
    return res
      .status(200)
      .json(
        ApiResponse(200, followupMode, "Follow-up mode fetched successfully")
      );
  } catch (err) {
    return res.status(404).json({ success: false, message: err.message });
  }
});

// Update a follow-up mode by ID
const updateFollowupModeById = asyncHandler(async (req, res) => {
  try {
    const { id, newFollowupMode } = req.body;
    const updatedFollowupMode = await FollowupMode.findByIdAndUpdate(
      id,
      { $set: { followupMode: newFollowupMode } },
      { new: true }
    );
    if (!updatedFollowupMode) {
      return res
        .status(404)
        .json({ success: false, message: "Follow-up mode not found" });
    }
    return res
      .status(200)
      .json(
        ApiResponse(
          200,
          updatedFollowupMode,
          "Follow-up mode updated successfully"
        )
      );
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
});

// Delete a follow-up mode by ID
const deleteFollowupModeById = asyncHandler(async (req, res) => {
  try {
    const id = req.body.id;
    const deletedFollowupMode = await FollowupMode.findByIdAndDelete(id);
    if (!deletedFollowupMode) {
      return res
        .status(404)
        .json({ success: false, message: "Follow-up mode not found" });
    }
    return res
      .status(200)
      .json(ApiResponse(200, {}, "Follow-up mode deleted successfully"));
  } catch (err) {
    return res.status(404).json({
      success: false,
      message: err.message,
    });
  }
});

export {
  createFollowupMode,
  getAllFollowupModes,
  getFollowupModeById,
  updateFollowupModeById,
  deleteFollowupModeById,
};
