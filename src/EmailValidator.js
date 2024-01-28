import { useState } from 'react';

function EmailValidator() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  function validate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleChangeEmail(e) {
    const newEmail = e.target.value;
    setEmail(newEmail);

    console.log(newEmail);

    setIsValid(validate(newEmail));
  }

  return (
    <div className="email-validator-box">
      <label>Input Email Here </label>
      <input
        className={isValid ? 'correct' : ''}
        type="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      {email ? (
        <p
          style={
            isValid
              ? { backgroundColor: '#0f9b0f' }
              : { backgroundColor: 'red' }
          }
        >
          {isValid
            ? "Now It's Valid Email ✔✔✔🔥"
            : 'Not a valid Email ❌❌❌💥'}
        </p>
      ) : null}
    </div>
  );
}

export default EmailValidator;
