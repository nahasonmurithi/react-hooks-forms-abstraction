import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  function handleFirstNameChange(e) {
    setFormData({
      ...formData,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setFormData({
      ...formData,
      lastName: e.target.value,
    });
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
/*
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  */

  return (
    <form>
      <input 
      type="text" 
      name="firstName" 
      onChange={handleFirstNameChange} 
      value={formData.firstName} />
      <input 
      type="text" 
      name="lastName"
      onChange={handleLastNameChange} 
      value={formData.lastName} />
      <input 
      type="checkbox"
      name="admin"
      onChange={handleChange}
      checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
