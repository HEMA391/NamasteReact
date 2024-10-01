import React from "react";

const Contact = () => {
  return (
    <div>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "26px",
          padding: "16px",
          margin: "16px",
        }}
      >
        Contact Us Page
      </h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          style={{
            border: "1px solid black",
            padding: "8px",
            borderRadius: "8px",
            margin: "8px",
          }}
        />
        <input
          type="text"
          placeholder="Type your message"
          style={{
            border: "1px solid black",
            padding: "8px",
            borderRadius: "8px",
            margin: "8px",
          }}
        />
        <button
          type="text"
          placeholder="Name"
          style={{
            border: "1px solid black",
            padding: "8px",
            margin: "8px",
            background: "	#F8F8F8",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
