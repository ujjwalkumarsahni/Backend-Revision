import jwt from 'jsonwebtoken';

export const generateToken = (userId) => {
  try {
    const token = jwt.sign(
      { userId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1d' } 
    );
    return token;
  } catch (error) {
    console.error("JWT Token Error:", error);
    throw new Error("Token generation failed");
  }
};
