import React, { useState } from "react";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    setSubmittedData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Data Entry Form</h1>

        <div className="form-row">
          <div className="half-width">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" required />
          </div>
          <div className="half-width">
            <label>Name</label>
            <input type="text" name="fullName" placeholder="Full Name" required />
          </div>
        </div>

        <label>Address</label>
        <input type="text" name="address" placeholder="1234 Main St" required />

        <label>Address 2</label>
        <input type="text" name="address2" placeholder="Apartment, studio, or floor" />

        <div className="form-row">
          <div className="half-width">
            <label>City</label>
            <input type="text" name="city" required />
          </div>
          <div className="half-width">
            <label>Province</label>
            <select name="province" required>
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="half-width">
            <label>Postal Code</label>
            <input type="text" name="postalCode" required />
          </div>
        </div>

        <div className="checkbox-container">
          <input type="checkbox" name="terms" required />
          <label>Agree to Terms & Conditions?</label>
        </div>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-info">
          <h2>Submitted Information</h2>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;