import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecord = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Female");
  const navigate = useNavigate();

  const saveRecord = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/records", {
        name,
        email,
        phoneNumber,
        gender,
      });
      navigate("/records");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="m-10 p-16">
        <form onSubmit={saveRecord}>
          <div className="field">
            <label className="label">Name</label>
            <div className="form-control">
              <input
                type="text"
                name="name"
                className="input rounded-md"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="form-control">
              <input
                type="text"
                name="email"
                className="input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number</label>
            <div className="form-control">
              <input
                type="text"
                name="phone number"
                className="input"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="form-control">
              <div className="">
                <select className="select select-accent"
                  name="gender"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="">
              <button type="submit" className="btn-primary btn-md rounded-md">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecord;
