import DecoratedHeader from "../components/decoratedHeader";
import TextField from "@mui/material/TextField";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { FormikProps } from "formik";
import MuiInput from "../components/muiInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import AlertDrawer from "../components/alertDrawer";

const Contact = () => {
  const [open, setOpen] = useState<boolean>(false);
  interface formValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
  });
  const sendEmail = (values: formValues) => {
    emailjs
      .send(
        "service_mlcdbnl",
        "template_lczfuku",
        {
          name: `${values.firstName} ${values.lastName}`,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        "S5_mWjdlpFaIjk982"
      )
      .then((res) => {
        console.log(res, "added successfully");
        setOpen(true);
        formik.resetForm();
        setTimeout(() => {
          setOpen(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  const formik: FormikProps<formValues> = useFormik<formValues>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => sendEmail(values),
  });

  return (
    <>
      <AlertDrawer open={open} setOpen={setOpen} />
      <div className="py-14">
        <DecoratedHeader heading="EMAIL" subHeading="CONTACT" text="ME" />
        <div className="text-white mt-4 flex flex-col gap-[70px] items-center justify-between p-4 mx-[10px] lg:items-start lg:flex-row md:mx-[70px]">
          <div className="ml-6 mt-[90px]">
            <div className="text-center lg:text-start">
              <h1 className="text-4xl font-semibold w-full lg:w-1/2">
                Let's build something greater
              </h1>
              <p className="mt-4 font-semibold text-[17px] text-[#e7e4e4]">
                I'd love to hear from you. let's have a chat.
              </p>
            </div>
          </div>
          <div className="bg-[#0C0C0C] p-5 rounded-3xl min-w-[350px] max-w-[450px] shadowColor">
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-2xl font-semibold">Get in Touch</h1>
              <p className="font-semibold text-[#807e7e] mt-3">
                You can reach us anytime
              </p>
              <div className="flex flex-col gap-3">
                <div className="mt-4 flex flex-col gap-4 md:flex-row">
                  <MuiInput
                    formik={formik}
                    keyName="firstName"
                    label="First Name"
                  />
                  <MuiInput
                    formik={formik}
                    keyName="lastName"
                    label="Last Name"
                  />
                </div>
                <div>
                  <MuiInput formik={formik} keyName="email" label="Email" />
                </div>
                <div>
                  <PhoneInput
                    country={"pk"}
                    value={formik.values.phone}
                    onChange={(phone) => formik.setFieldValue("phone", phone)}
                    onBlur={() => formik.setFieldTouched("phone", true)}
                    inputClass="!bg-[#0C0C0C] !text-white !border-[#3d3a3a] !w-full !h-[56px] !rounded-lg"
                    buttonClass="!bg-[#0C0C0C] !border-[#3d3a3a]"
                    dropdownClass="!bg-[#0C0C0C] !text-white"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-[red] text-[13px] mt-1 ml-1">
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <MuiInput
                    formik={formik}
                    keyName="message"
                    label="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[orange] rounded-3xl p-2 text-black font-[500]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
