import React, { useEffect, useRef } from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import PageTitle from "./PageTitle";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";

const Register = () => {
  const actionData = useActionData();
  const formRefData = useRef(null);
  const submitButton = useNavigation();
  const navigatePage = useNavigate();
  const submitClick = useSubmit();

  useEffect(() => {
    if (actionData?.success) {
      navigatePage("/login");
      toast.success("Registration Completed Successfully...");
    }
  }, [actionData]);

  const handleSubmitEvent = (event) => {
    event.preventDefault();
    const formData = new FormData(formRefData.current);
    if (!validatePasswordField(formData)) {
      return;
    }
    submitClick(formData, { method: "post" });
  };

  const validatePasswordField = (formData) => {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      toast.error("Password does not match!..");
      return false;
    }
    return true;
  };

  const isSubmitting = submitButton.state === "Submitting";

  const labelStyle = "block text-lg text-stone-800 font-medium font-serif mb-2";
  const textStyle =
    "w-full px-4 py-3 text-base bg-white bg-gray-300 text-stone-800 rounded-md transition duration-200 focus:ring focus:outline-none focus:ring-dark placeholder-gray-600 border-gray-400";

  return (
    <div className=" max-w-[1152px] min-h-[445px] mx-auto flex  items-center justify-center py-8">
      <div className="bg-stone-400 w-full mx-auto px-8 py-2 max-w-md rounded-md shadow-lg">
        <PageTitle title="Register"></PageTitle>
        <Form
          method="post"
          ref={formRefData}
          onSubmit={handleSubmitEvent}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className={labelStyle}>
              Name
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter Your Name"
              required
              className={textStyle}
              maxLength={50}
              minLength={5}
            />
            {actionData?.errorMessages?.userName && (
              <p className="text-sm text-red-600 mt-2">
                {actionData.errorMessages.userName}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className={labelStyle}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                autoComplete="email"
                required
                className={textStyle}
              />
              {actionData?.errorMessages?.email && (
                <p className="text-sm text-red-600 mt-2">
                  {actionData.errorMessages.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobileNumber" className={labelStyle}>
                MobileNumber
              </label>
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                required
                pattern="^\d{10}$"
                title="Mobile Number Must be Exactly 10 digits"
                placeholder="Mobile Number"
                className={textStyle}
                autoComplete="mobileNumber"
              />
              {actionData?.errorMessages?.mobileNumber && (
                <p className="text-sm text-red-600 mt-2">
                  {actionData.errorMessages.mobileNumber}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="Password" className={labelStyle}>
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={20}
              placeholder="Your Password"
              className={textStyle}
            />
            {actionData?.errorMessages?.password && (
              <p className="text-sm text-red-600 mt-2">
                {actionData.errorMessages.password}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="Confirm Password" className={labelStyle}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              autoComplete="Confirm-Password"
              placeholder="Confirm Your Password"
              minLength={8}
              maxLength={20}
              className={textStyle}
            />
            {actionData?.errorMessages?.password && (
              <p className="text-sm text-red-600 mt-2">
                {actionData.errorMessages.password}
              </p>
            )}
          </div>

          <button
            type="Submit"
            disabled={isSubmitting}
            className="w-full px-6 py-2 text-xl text-center rounded-2 transition duration-200 text-white font-semibold font-serif bg-indigo-300 hover:bg-indigo-800"
          >
            {isSubmitting ? "Submitting" : "Register"}
          </button>
        </Form>

        <p className="text-center mt-4 [&_a]:!no-underline [&_a]:!text-indigo-500 text-mauve-800 font-serif font-medium">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-base font-serif font-medium hover:text-indigo-900 hover:font-semibold "
          >
            Please Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

export async function loadingRegisterDetails({ request }) {
  const formData = await request.formData();

  const fetchData = {
    userName: formData.get("userName"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };
  try {
    await apiClient.post("/login/registerUser", fetchData);
    return { success: true };
  } catch (error) {
    if (error.response.status === 400) {
      return {
        success: false,
        messages: "Invalid User Details.Please try again later...",
      };
    }
    throw new Response(
      error.response?.data?.errorMessages ||
        error.messages ||
        "Failed to submit your message. Please try again..",
      {
        status: error.response?.status || 500,
      },
    );
  }
}
