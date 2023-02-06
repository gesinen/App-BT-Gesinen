import * as Yup from "yup";

import * as StaticText from "../../../utils/static-text";

export function initialValues() {
  return {
    username: "",
    pswd: "",
  };
}

export function validationSchema() {
  const staticText = StaticText.auth;
  return Yup.object({
    username: Yup.string()
    // :TODO: Revisar al hacer login pdder entrar con email / username  
    //.email(staticText.not_valid_email)
      .required(staticText.required_field),
      pswd: Yup.string().required(staticText.required_field),
  });
}
