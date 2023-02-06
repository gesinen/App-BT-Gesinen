import * as Yup from "yup";
import * as StaticText from "../../../utils/static-text";

export function initialValues() {
  return {
    email: "",
    name: "",
    username: "",
    pswd: "",
    repeat_pswd: "",
    postalCode: "",
  };
}

export function validationSchema() {
  const staticText = StaticText.auth;
  return Yup.object({
    email: Yup.string()
    .email(staticText.not_valid_email)
    .required(staticText.required_field),
    name: Yup.string().required(staticText.required_field),
    username: Yup.string()
    //:TODO: REVISAR
      .required(staticText.required_field)/*.noSpacing(staticText.no_spacing)*/,
    pswd: Yup.string().required(staticText.required_field),
    repeat_pswd: Yup.string()
      .required(staticText.required_field)
      .oneOf([Yup.ref("pswd")], staticText.need_same_pswd),
  });
}
