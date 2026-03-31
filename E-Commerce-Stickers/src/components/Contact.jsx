import React from "react";
import Header from "./Header";
import Footer from "./footer/Footer";
import PageTitle from "./PageTitle";
import { text } from "@fortawesome/fontawesome-svg-core";
import apiClient from "../api/apiClient";
import { Form, useNavigation, useSubmit } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

function Contact() {
  const actionData = useActionData();
  const formRef = useRef(null);
  const userSubmit = useSubmit();
  const formNavigating = useNavigation();
  const isSubmitting = formNavigating.state === "submitting";
  useEffect(() => {
    if (actionData?.success) {
      formRef.current?.reset();
      toast.success("Your Message has been Submitted Successfully..");
    }
  }, [actionData]);

  //submit form manually
  const handleSubmitEvent = (event) => {
    event.preventDefault();
    const userConfirmation = window.confirm(
      "Are you Sure you want to Submit the form?",
    );
    if (userConfirmation) {
      const formData = new FormData(formRef.current);
      userSubmit(formData, { method: "post" });
    } else {
      toast.info("Form submit cancelled");
    }
  };

  const labelStyle = "block text-lg text-stone-600 font-semibold";
  const textStyle =
    "w-full px-4 py-3 border rounded-md transition border-taupe-300 focus:ring focus:ring-dark focus:outline-none text-stone-800 placeholder-gray-600";

  return (
    <div className="max-w-[1152px] mx-auto min-h-[343px] px-6 py-4 font-serif bg-taupe-300">
      <PageTitle title="Contact Us" className="items-center"></PageTitle>
      <p className="text-gray-600 text-center max-w-[768px] mx-auto mt-8">
        We’d love to hear from you! If you have any questions, feedback, or
        suggestions, please don’t hesitate to reach out.
      </p>
      <Form
        ref={formRef}
        method="POST"
        onSubmit={handleSubmitEvent}
        className="space-y-6 max-w-[786px] mx-auto"
      >
        <div>
          <label htmlFor="Name" className={labelStyle}>
            Name
          </label>
          <input
            type="text"
            className={textStyle}
            name="name"
            id="name"
            placeholder="Your Name"
            minLength={5}
            maxLength={50}
            required
          />
          {actionData?.serverSideError?.name && (
            <p className="text-sm text-red-500 mt-1">
              {actionData.serverSideError.name}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="Email" className={labelStyle}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email Address"
              required
              className={textStyle}
            />
            {actionData?.serverSideError?.emailAddress && (
              <p className="text-sm text-red-500 mt-1">
                {actionData.serverSideError.emailAddress}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="Mobile Number" className={labelStyle}>
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobilenumber"
              name="mobilenumber"
              pattern="^\d{10}$"
              required
              placeholder="Your Mobile Number"
              title="Mobile Number Must be 10 Digits"
              className={textStyle}
            />
            {actionData?.serverSideError?.mobileNumber && (
              <p className="text-sm text-red-500 mt-1">
                {actionData.serverSideError.mobileNumber}
              </p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="Message" className={labelStyle}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
            maxLength={500}
            minLength={5}
            className={textStyle}
          ></textarea>
          {actionData?.serverSideError?.message && (
            <p className="text-sm text-red-500 mt-1">
              {actionData.serverSideError.message}
            </p>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-2 transition duration-200 bg-zinc-800 text-white text-xl px-6 py-2 font-serif hover:bg-gray-800"
          >
            {isSubmitting ? "Submitting...." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function loadingContactDetails({ request, params }) {
  const data = await request.formData();

  const requestData = {
    name: data.get("name"),
    emailAddress: data.get("email"),
    mobileNumber: data.get("mobilenumber"),
    message: data.get("message"),
  };

  try {
    await apiClient.post("/contacts", requestData);
    return { success: true };
    // return redirect("/home");
  } catch (error) {
    if (error.response?.status === 400) {
      return { success: false, serverSideError: error.response?.data };
    }
    throw new Response(
      error.response?.data?.errorMessage ||
        error.message ||
        "Request Processing Failed...",
      {
        status: error.status || 400,
      },
    );
  }
}

export default Contact;
