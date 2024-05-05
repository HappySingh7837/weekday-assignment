import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userFormValidationGenerator = (validationObj) => {
  const userFormValidation = yup.object().shape({
    user_name: yup.string().required("User Name is a required."),

    password: yup.string().required("Password is a required ."),
    ...validationObj,
  });
  console.log("validationObj", validationObj);
  return userFormValidation;
};
export const leaveFormValidationGenerator = (validationObj) => {
  const userFormValidation = yup.object().shape({
    leave: yup.string().required("This is a required field."),
    start_date: yup.string().required("This is a required field."),
    end_date: yup.string().required("This is a required field."),
    reason: yup.string().required("This is a required field."),
    ...validationObj,
  });
  console.log("validationObj", validationObj);
  return userFormValidation;
};

