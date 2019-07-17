import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function OnboardingForm({ values }) {
  return (
    <div>
      <Form>
        <div>
          <ErrorMessage name="name" />
          <Field type="text" name="name" placeholder="name" />
        </div>
        <div>
          <ErrorMessage name="email" />
          <Field type="email" name="email" placeholder="email" />
        </div>
        <div>
          <ErrorMessage name="password" />
          <Field type="password" name="password" placeholder="password" />
        </div>
        <label>
          <Field type="checkbox" name="tos" checked={values.tos} />
          Accept TOS
        </label>
        <button>Submit!</button>
      </Form>
    </div>
  );
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ name, email, password, tos }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(OnboardingForm);

export default FormikOnboardingForm;
