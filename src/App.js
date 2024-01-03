import React from "react";
import { useFormik } from "formik"; // Importing useFormik from Formik library

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = "Field required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Username should be an email";
      }

      if (!values.password) {
        errors.password = "Field required";
      }

      return errors;
    },
    onSubmit: values => {
      if (!formik.errors.email && !formik.errors.password) {
        alert("Login Successful");
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="emailField">Email:</label>
          <input
            id="emailField"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div id="emailError">{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="pswField">Password:</label>
          <input
            id="pswField"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <div id="pswError">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
