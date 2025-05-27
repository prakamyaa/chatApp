import jwt from 'jsonwebtoken';

const createTokenAndSaveCookie = (userId, res) => {

  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '5d' // Token expiration time
  });
  res.cookie('jwt', token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: true, // Use secure cookies in production
    sameSite: 'Strict', // Helps prevent CSRF attacks
  });
}


export default createTokenAndSaveCookie;