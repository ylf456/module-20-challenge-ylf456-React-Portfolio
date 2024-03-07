import { useState } from "react";
import { validateEmail } from "../utils/validator";

const styles = {
  formContainer:{
    height:"70vh"
  },
  name: {
    height: "5vh",
    
  },
  email: {
    height: "5vh",
    padding:"1.5%"
  },
  message: {
    height: "25vh",
    textAlign: "left",
  },
  button:{
    maxWidth: "",
    height:"10%",
    
  }
};
export default function ContactMePage() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Invalid Email");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    alert(`Hello ${name}`);
  };

  return (
    <div className="body-content container text-center">
      <h1>Hello! Please leave your message here</h1>
      <form
        style={styles.formContainer}
        className="form row d-flex justify-content-center align-items-center"
        onSubmit={handleFormSubmit}
      >
        <div></div>
        <input
          styles={styles.name}
          className="my-1 col-12 w-50 mx-1 p-3"
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="your name here"
        />
        <input
          style={styles.email}
          className="my-1 col-12 w-50 mx-1"
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="your email here"
        />
        <input
          style={styles.message}
          className="my-1 col-12 w-50 mx-1"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button style={styles.button} className="mt-4 w-50 mx-20" type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
