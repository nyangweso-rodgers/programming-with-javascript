"use client";

const Button = () => {
  return (
    <>
      <button className="btn btn-primary" onClick={() => alert("Test Message")}>
        Test button
      </button>
    </>
  );
};

export default Button;
