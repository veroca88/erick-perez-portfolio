import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_POINT;

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const CONTACTME_SERVICE = {
  // userData is a placeholder (represents the user's inputs in the signup and login form)
  signup(userData) {
    console.log(".........", process.env);
    // const { username, email, password } = req.body; <===> userData
    return service.post("/api/contact", userData);
  },
};

export default CONTACTME_SERVICE;
