import User from "./../models/userModel.js";

export const signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(200).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email }).select("+password");
    // check if the user exists
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide a valid email and password." });
    }
    // Find user by email and check if password matches
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Send response to client
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
