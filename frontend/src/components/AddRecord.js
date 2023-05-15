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
          <div className="mb-6">
            <label className="block font-bold text-black mb-2" htmlFor="name">
              Name
            </label>
            <div className="form-control">
              <input
                type="text"
                name="name"
                className="input input-bordered border-black text-black bg-white rounded-md w-full"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-bold text-black mb-2" htmlFor="email">
              Email
            </label>
            <div className="form-control">
              <input
                type="text"
                name="email"
                className="input input-bordered border-black text-black bg-white rounded-md w-full"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block font-bold text-black mb-2"
              htmlFor="phone-number"
            >
              Phone Number
            </label>
            <div className="form-control">
              <input
                type="text"
                name="phone-number"
                className="input input-bordered border-black text-black bg-white rounded-md w-full"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-bold text-black mb-2" htmlFor="gender">
              Gender
            </label>
            <div className="form-control">
              <div className="">
                <select
                  className="select select-bordered border-black text-black bg-white select-accent block w-full rounded-md"
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

          <div className="mb-6">
            <div className="">
              <button
                type="submit"
                className="btn btn-primary btn-block rounded-md"
              >
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
