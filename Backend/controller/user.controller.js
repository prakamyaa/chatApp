import User from "../models/user.model.js";
import createTokenAndSaveCookie from "../jwt/generateToken.js";


export const signup = async(req, res) => {
 try {
   const { name, email, password, confirmPassword } = req.body;

  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const newUser =await new User({ name, email, password, confirmPassword });

  await newUser
   .save();
  if(newUser){
    createTokenAndSaveCookie(newUser._id, res);
     res.status(201).json({ message: "User created successfully",newUser })

  }
}

 
    
  
  catch (error) {
  console.error("Error in signup:", error);
  res.status(500).json({ message: "Internal server error" });
  
 }
}



export const login = async(req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    createTokenAndSaveCookie(user._id, res);
    res.status(200).json({ message: "Login successful", user: {
      _id: user._id,
      name: user.name,
      email: user.email
    } });
  

  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


export const logout =async (req, res) => {
  try {
    res.clearCookie("jwt"); // Clear the cookie
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Internal server error" });
  } 
};