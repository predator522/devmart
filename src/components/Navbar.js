import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 10, background: "#020617" }}>
      <Link to="/">Home</Link> | 
      <Link to="/create"> Sell</Link> | 
      <Link to="/auth"> Login</Link>
    </nav>
  );
}

export default Navbar;
