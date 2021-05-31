import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MyTextInput,
  MyCheckbox,
  MySelect,
} from "../hooks_functions/FormInputs";

const ContactForm = () => {
  const phoneRegExpSG = /^[89]{1}\d{7}$/;

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        jobType: "",
        company: "",
        companySize: "",
        inquiryType: "",
        acceptedTerms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email addresss`")
          .required("Required"),
        phoneNumber: Yup.string()
          .matches(phoneRegExpSG, "Phone number is not valid.")
          .required("Required"),
        jobType: Yup.string()
          .oneOf(
            ["designer", "development", "product", "student", "other"],
            "Invalid Job Type"
          )
          .required("Required"),
        company: Yup.string().max(30, "Must be 30 characters or less"),
        companySize: Yup.number().min(1, "Must be more than 0"),
        inquiryType: Yup.string()
          .oneOf(
            ["movies", "purchases", "career", "investor", "other"],
            "Invalid Inquiry"
          )
          .required("Required"),
        acceptedTerms: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="form">
        <MyTextInput
          label="First Name:"
          name="firstName"
          type="text"
          required
        />
        <MyTextInput label="Last Name:" name="lastName" type="text" required />
        <MyTextInput
          label="Email Address:"
          name="email"
          type="email"
          placeholder="example@movielord.com"
          required
        />
        <MyTextInput label="Phone Number:" name="phoneNumber" type="number" />
        <MySelect label="Occupation:" name="jobType" required>
          <option value="">Select a job type</option>
          <option value="designer">Designer</option>
          <option value="development">Developer</option>
          <option value="product">Product Manager</option>
          <option value="student">Student</option>
          <option value="other">Other</option>
        </MySelect>
        <MyTextInput label="Company:" name="company" type="text" />
        <MyTextInput label="Company Size:" name="companySize" type="number" />
        <MySelect label="Type of Inquiry:" name="inquiryType" required>
          <option value="">Select an inquiry type</option>
          <option value="movies">Movies</option>
          <option value="purchases">Puchasers</option>
          <option value="career">Career</option>
          <option value="investor">Investor Relation (Stock Inquiry)</option>
          <option value="other">Other</option>
        </MySelect>
        <MyCheckbox name="acceptedTerms">
          I acknowledge that the above information is accurate.
        </MyCheckbox>
        <button className="effectButton">Contact Us</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
