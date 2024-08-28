import { useState } from "react";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/api/user/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      console.log(json.error);
    }

    if (response.ok) {
      //update loading state
      setIsLoading(false);
      setSuccess("Successfully created an account");
    }
  };

  return { signup, isLoading, error, success };
};
