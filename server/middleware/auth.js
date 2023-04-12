import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    // Front end sets header, then backend grabs it here
    let token = req.header("Authorization");
    // If the token does not exist, no send
    if (!token) {
      return res.status(403).send("Access Denied");
    }
    // Takes the value after "Bearer " aka the actual token
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // Checking if valid
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
