import './style.css';

import React from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export const Form = () => {
  const { register, errors, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
    // alert(JSON.stringify(data));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:5000/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch data::", data);
        try {
          // await Auth.signIn(email, password);
          // userHasAuthenticated(true);
          if (data.token) {
            history.push("/home");
          } else alert(data.message);
        } catch (e) {
          alert(e.message);
        }
      });
  };

  return (
    <div className="App">
      <center>
        <h1>Login Form</h1>
      </center>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
          })}
        />
        {errors.email?.type === "required" && <p>Your input is required</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: 8,
          })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
