import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error, success } = useSignUp();
  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="formAuth">
      <form className="signup" onSubmit={handleSubmit}>
        <h4>Sign Up!</h4>
        <p>Welcome, please register your email</p>
        <label>Email</label>
        <input
          className="input-text"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="youremail@mail.com"
          ref={inputRef}
        />
        <label>Password</label>
        <input
          className="input-text"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="************"
        />
        <button disabled={isLoading}>Sign Up</button>
        {error && <div className="error">{error}</div>}{" "}
        {success && <div className="success">{success}</div>}{" "}
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <span>Log In</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
