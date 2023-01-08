export function auth(req, res, next) {
  // Get the token from the request header
  const token = req.header('Authorization').replace('Bearer ', '');

  // Try to decode and verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userType = decoded.userType;
    const userId = decoded.userId;

    // Check if the user is a Student
    if (userType === 'Student') {
      Student.findByPk(userId)
        .then((student) => {
          if (!student) {
            throw new Error();
          }
          req.user = student;
          next();
        })
        .catch((error) => {
          res
            .status(401)
            .send({ error: 'Not authorized to access this resource' });
        });
    } else if (userType === 'Professor') {
      Professor.findByPk(userId)
        .then((professor) => {
          if (!professor) {
            throw new Error();
          }
          req.user = professor;
          next();
        })
        .catch((error) => {});
    }
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
}
