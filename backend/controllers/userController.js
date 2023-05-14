import User from "./../models/userModel.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    // Send the response
    res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
