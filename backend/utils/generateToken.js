import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // Prevents client-side JS from accessing the cookie
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production (HTTPS)
    sameSite: "strict", // Helps prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // Sets cookie expiration to 30 days
  });
};

export default generateToken;
