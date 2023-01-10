import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The page cannot be found</p>
      <Link to="/">Back to Homapage...</Link>
    </div>
  );
}

export default NotFound;
