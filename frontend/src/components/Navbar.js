import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h1>My App</h1>
      <div>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#007bff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Sign Up
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#007bff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Log In
        </button>
        <button
          style={{
            backgroundColor: "#fff",
            color: "#007bff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          Add Record
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
