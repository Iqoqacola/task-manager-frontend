import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();

  const inputRef = useRef("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="formAuth">
      <form className="login" onSubmit={handleSubmit}>
        <h4>Log in!</h4>
        <p>Welcome, please enter your email and password</p>
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
        <button disabled={isLoading}>Log in</button>
        {error && <div className="error">{error}</div>}{" "}
        <p>
          Don't have an account?{" "}
          <Link to="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
