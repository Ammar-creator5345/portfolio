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
import { motion, stagger } from "framer-motion";

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
  const mainDivAnimation = {
    hidden: {},
    visible: { transition: { delayChildren: stagger(0.4) } },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 12, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      <AlertDrawer open={open} setOpen={setOpen} />
      <div className="py-14">
        <DecoratedHeader heading="EMAIL" subHeading="CONTACT" text="ME" />
        <motion.div
          variants={mainDivAnimation}
          initial="hidden"
          whileInView="visible"
          className="text-white mt-4 flex flex-col gap-[70px] items-center justify-between p-4 mx-[10px] lg:items-start lg:flex-row md:mx-[70px]"
        >
          <motion.div variants={fadeIn} className="ml-6 mt-[4px] md:mt-[70px]">
            <div className="text-center lg:text-start">
              <h1 className="text-4xl text-primaryText font-semibold w-full lg:w-1/2">
                Let's build something greater
              </h1>
              <p className="mt-4 font-[500] text-[17px] text-[#3a3939] dark:text-[#e7e4e4]">
                I'd love to hear from you. let's have a chat.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="p-5 rounded-3xl min-w-[350px] max-w-[450px] border shadow-[1px_1px_6px_#bca7a7] dark:border-none dark:shadow-[1px_0px_5px_yellow,0px_0px_10px_blue]"
          >
            <form onSubmit={formik.handleSubmit}>
              <h1 className="text-2xl text-primaryText font-semibold">
                Get in Touch
              </h1>
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
                    inputClass="dark:!bg-[black] !text-primaryText !border-[#e5d5d5]  dark:!border-[#3d3a3a] !w-full !h-[56px] !rounded-lg"
                    buttonClass="dark:!bg-[black] !bg-white !text-primaryText !border-[#e5d5d5] dark:!border-[#3d3a3a]"
                    dropdownClass="dark:!bg-[#0C0C0C] !text-primaryText"
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
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
