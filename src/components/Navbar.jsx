import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <h4>Dashboard</h4>
          </Link>
          <Link to="/task">
            <p>Task</p>
          </Link>
        </div>
        <div className="account">
          <p>{user && user.email}</p>
          <button className="error" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
