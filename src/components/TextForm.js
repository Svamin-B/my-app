import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleErClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${
            props.mode === "dark" ? props.mode : "primary"
          } mx-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? props.mode : "primary"
          } mx-1`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn-${
            props.mode === "dark" ? props.mode : "primary"
          } mx-1`}
          onClick={handleErClick}
        >
          Erase Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.length > 0 ? text.split(" ").length : 0} words and {text.length}{" "}
          characters
        </p>
        <p>
          {text.length > 0 ? 0.008 * text.split(" ").length : 0.0} Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter text in box to preview"}</p>
      </div>
    </>
  );
}
