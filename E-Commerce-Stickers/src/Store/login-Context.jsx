import { createContext, useContext, useEffect } from "react";
import { useReducer } from "react";

export const loginContext = createContext();

const Login_Success = "LOGIN_SUCCESS";
const Logout = "Logout";

const loginReducer = (previousLoginData, action) => {
  switch (action.type) {
    case Login_Success:
      return {
        ...previousLoginData,
        jwtToken: action.payload.jwtToken,
        user: action.payload.user,
        isAuthenticated: true,
      };
    case Logout:
      return {
        ...previousLoginData,
        jwtToken: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return previousLoginData;
  }
};

export const useLogin = () => useContext(loginContext);

export const LoginStateProvider = ({ children }) => {
  const initialLoginState = (() => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const user = localStorage.getItem("userDTO");
      if (jwtToken && user) {
        return {
          jwtToken,
          user: JSON.parse(user),
          isAuthenticated: true,
        };
      }
    } catch (error) {
      console.error("Failed to load from localStorage", error);
    }
    return {
      jwtToken: null,
      user: null,
      isAuthenticated: false,
    };
  })();

  const [authState, dispatch] = useReducer(loginReducer, initialLoginState);

  useEffect(() => {
    try {
      if (authState.isAuthenticated) {
        localStorage.setItem("jwtToken", authState.jwtToken);
        localStorage.setItem("user", JSON.stringify(authState.user));
      } else {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [authState]);

  const loginSuccess = (jwtToken, user) => {
    dispatch({ type: Login_Success, jwtToken, payload: { jwtToken, user } });
  };

  const logout = () => {
    dispatch({ type: Logout });
  };

  return (
    <loginContext.Provider
      value={{
        jwtToken: authState.jwtToken,
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        loginSuccess,
        logout,
      }}
    >
      {children}
    </loginContext.Provider>
  );
};
