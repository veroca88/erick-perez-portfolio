import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const CONTACTME_SERVICE = {
  // userData is a placeholder (represents the user's inputs in the signup and login form)
  message(userData) {
    console.log(".........", userData);
    // const { username, email, password } = req.body;
    return service.post("/api/contact-me", userData);
  },
};

export default CONTACTME_SERVICE;
