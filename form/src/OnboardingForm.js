import React from "react";
import { withFormik, Form, Field } from "formik";

function OnboardingForm() {
  return (
    <div>
      <Form>
        <Field type="text" name="name" placeholder="name" />
        <Field type="email" name="email" placeholder="email" />
        <Field type="password" name="password" placeholder="password" />
        <Field
          type="checkbox"
          name="termsOfService"
          placeholder="terms of service"
        />
        <button>Submit!</button>
      </Form>
    </div>
  );
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({ name, email, password, checkbox }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      checkbox: checkbox || ""
    };
  },

  handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(OnboardingForm);

export default FormikOnboardingForm;
