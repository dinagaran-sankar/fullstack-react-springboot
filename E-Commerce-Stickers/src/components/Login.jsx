import React, { useEffect } from "react";
import PageTitle from "./PageTitle";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
import { useNavigate, useActionData, useNavigation } from "react-router-dom";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { useLogin } from "../Store/login-Context";

const Login = () => {
  const loginFormData = useActionData();
  const submitting = useNavigation();
  const isSubmitting = submitting.state === "Submitting";
  const navigate = useNavigate();
  const { loginSuccess } = useLogin();
  const loginPath = sessionStorage.getItem("redirectPath") || "/home";
  console.log("loginPath", loginPath);

  useEffect(() => {
    if (loginFormData?.success) {
      loginSuccess(loginFormData.jwtToken, loginFormData.userDTO);
      //navigate("/home");
      sessionStorage.removeItem("redirectPath");
      navigate(loginPath);
      toast.success("Login Created Successfully");
    } else if (loginFormData?.errorMessages) {
      toast.error(
        loginFormData.errorMessages.message || "Login Created Failed..",
      );
    }
  }, [loginFormData]);

  const labelStyle =
    "block text-lg font-serif font-semibold text-stone-600 mb-2";
  const textStyle =
    "w-full px-4 py-3 border rounded-md transition duration-200 text-base focus:ring focus:ring-dark focus:outline-none text-stone-800 placeholder-gray-500 bg-white border-gray-600";
  return (
    <div className="max-w-[1152px] min-h-[383px] mx-auto flex items-center justify-center font-serif py-6">
      <div className="bg-stone-400 shadow-md rounded-3 max-w-md w-full px-8 py-6">
        <PageTitle title="Login"></PageTitle>
        <Form method="POST" className="space-y-6">
          <div>
            <label htmlFor="Username" className={labelStyle}>
              Username
            </label>
            <input
              type="text"
              name="userName"
              id="username"
              placeholder="Your Username"
              className={textStyle}
              autoComplete="userName"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className={labelStyle}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={textStyle}
              required
              placeholder="Your Password"
              autoComplete="current-password"
              minLength={5}
              maxLength={20}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-2 text-white bg-green-600 text-xl rounded-2 transition duration-200 hover:bg-green-700 font-bold"
            >
              {isSubmitting ? "Authenticating..." : "Login"}
            </button>
          </div>
        </Form>
        <p className="text-center text-gray-600 mt-4 [&_a]:!no-underline">
          Don't have an account?
          <Link
            to="/register"
            className="px-2 text-blue hover:text-dark transition duration-200 font-serif"
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

export async function loginPageDetails({ request }) {
  const loginPage = await request.formData();

  const fetchData = {
    userName: loginPage.get("userName"),
    password: loginPage.get("password"),
  };

  try {
    const loginResponse = await apiClient.post("/login/loginUser", fetchData);
    const { message, userDTO, jwtToken } = loginResponse.data;
    return { success: true, message, userDTO, jwtToken };
  } catch (error) {
    if (error.response === 401) {
      return {
        success: false,
        errorMessages: { message: "Invalid UserName and Password" },
      };
    }
    throw new Response(
      error.response?.data?.message ||
        error.message ||
        "Failed to Login.Please try again later...",
      {
        status: error.response?.status || 500,
      },
    );
  }
}
