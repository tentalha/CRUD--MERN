import * as yup from "yup";

export default  yup.object().shape({
  name: yup.string().min(3).max(25).required("Please enter your name"),
  techStack: yup.string().min(3).max(25).required("Please enter your stack"),
  currentCompany: yup
    .string()
    .min(3)
    .max(25)
    .required("Please enter your company"),
  age: yup.number().min(1).max(90).required("Please enter your age"),
  experience: yup
    .number()
    .min(0)
    .max(25)
    .required("Please enter your experience"),
  education: yup
    .string()
    .min(5)
    .max(50)
    .required("Please enter your education"),
  role: yup.string().min(4).max(50).required("Please enter your current role."),
});
