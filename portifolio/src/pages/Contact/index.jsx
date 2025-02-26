import React from "react";

const Contact = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;
