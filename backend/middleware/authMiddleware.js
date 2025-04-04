import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {

  const authHeader = req.headers.authorization;
  if (!authHeader) {

    return res.status(401).json({ message: 'Authentication token missing' });
  }

  const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'

  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);


    if (!decoded || !decoded.id) {
      return res.status(401).json({ message: 'Invalid token payload' });
    }

    req.user = decoded; // Attach user details to request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;
