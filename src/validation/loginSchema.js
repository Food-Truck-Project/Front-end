import * as yup from "yup";

//validating usertype and login information
 const formSchema = yup.object().shape({
    role: yup
      .string()
      .required("Must include selection."),
    username: yup
      .string()
      .required("Username is Required")
      .min(3, "Usernames must be at least 3 characters long."),
    password: yup
      .string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
  });

  export default formSchema;