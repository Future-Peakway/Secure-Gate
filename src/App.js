import React, { useState } from "react";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const handlePasswordLengthChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const handleIncludeUppercaseChange = () => {
    setIncludeUppercase(!includeUppercase);
  };

  const handleIncludeLowercaseChange = () => {
    setIncludeLowercase(!includeLowercase);
  };

  const handleIncludeNumbersChange = () => {
    setIncludeNumbers(!includeNumbers);
  };

  const handleIncludeSymbolsChange = () => {
    setIncludeSymbols(!includeSymbols);
  };

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";

    let password = "";
    for (let i = 0, n = charset.length; i < passwordLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }

    setPassword(password);
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="container">
      <h1>Alpha Password Generator</h1>
      <div className="inner-container">
        <label htmlFor="passwordLength">Password Length:</label>
        <input
          type="number"
          id="passwordLength"
          min="8"
          max="50"
          value={passwordLength}
          onChange={handlePasswordLengthChange}
        />
      </div>
      <div className="form-group">
        <label>
          Include Uppercase Letters:
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={handleIncludeUppercaseChange}
          />
        </label>
        <br />
        <label>
          Include Lowercase Letters:
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={handleIncludeLowercaseChange}
          />
        </label>
        <br />
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={handleIncludeNumbersChange}
          />
        </label>
        <br />
        <label>
          Include Symbols:
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={handleIncludeSymbolsChange}
          />
        </label>
        <br />
      </div>
      <div className="password-container">
        <button onClick={generatePassword}>Generate Password</button>
        <br />{" "}
        <div>
          {password && (
            <div className="password">
              <p>{password}</p>
              <button className="copy-button" onClick={handleCopyClick}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PasswordGenerator;
