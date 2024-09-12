import React, { useState } from "react";
import "./form.scss";
import PhoneInput from 'react-phone-number-input'


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    primaryRequirement: "Game Development",
    phone: "",
    companyName: "",
    projectBrief: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <div className="form-items">
        <div className="form-left">
          <div className="text-container">
            <h2 className="h2">
              Let's <span>Discuss</span>
            </h2>

            <p>
              Get in Touch with Our Mobile Game Development Experts. All
              projects and ideas are secured by NDA & IP is your’s
            </p>
          </div>

          <img
            src="https://polymator.com/wp-content/uploads/2024/01/cta-art.webp"
            alt=""
          />
        </div>

        <div className="form-right">

          <div className="form">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Primary Requirement</label>
                <select
                  name="primaryRequirement"
                  value={formData.primaryRequirement}
                  onChange={handleChange}
                >
                  <option value="Game Development">Game Development</option>
                  <option value="3D Art Services">3D Art Services</option>
                  <option value="AR/VR Development">AR/VR Development</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mobile Phone</label>
                <div className="phone-input">
                  <span className="flag">🇮🇳</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Your Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group full-width">
                <label>Brief About The Project</label>
                <textarea
                  name="projectBrief"
                  placeholder="Brief About The Project"
                  value={formData.projectBrief}
                  onChange={handleChange}
                  rows={6}
                  style={{height: "auto"}}
                ></textarea>
              </div>


              <button type="submit">
                Submit
              </button>
            
            </form>
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default Form;
