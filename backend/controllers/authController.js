import User from "./../models/userModel.js";

export const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();

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
    // check if the user exists
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide a valid email and password." });
    }
    // Find user by email and check if password matches
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
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
