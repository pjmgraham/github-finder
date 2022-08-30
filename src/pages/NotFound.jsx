import React from "react";

import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <div className="h1 text-8xl font-bold mb-8">Oops!</div>
          <p className="text-5xl mb-8">
            404 - The page you are looking for does not exist.
          </p>
          <Link className="btn btn-primary btn-lg" to="/">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
