import React from 'react';
import { useState } from 'react';
import { validateEmail } from '../../utils/validateEmail';

const Contact = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('The email is invalid');
      return;
    }
    if (!name) {
      setErrorMessage('Please enter a valid name');
      return;
    }
    if (!message) {
      setErrorMessage('Please enter a valid message');
      return;
    }
    alert(`${name}, your email has been sent`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className='flex items-center justify-center w-100'>
        <form className="w-full max-w-lg grid m-px">
          <h2>Contact Form:</h2>
          <input className='form-input m-4' value={email} name="email" onChange={handleInputChange} type="email" placeholder="Email" />

          <input className='form-input m-4' value={name} name="name" onChange={handleInputChange} type="text" placeholder="Name" />

          <textarea className='form-textarea m-4' value={message} name="message" onChange={handleInputChange} type="text" placeholder="Message" />

          <button className='block button m-4' class="btn btn-primary" type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

    </section>
  );
}

export default Contact;