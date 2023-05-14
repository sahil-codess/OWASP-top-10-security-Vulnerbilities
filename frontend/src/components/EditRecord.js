import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditRecord = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("Female");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getRecord = async () => {
      try {
        const res = await axios.get("http://localhost:5000/records/" + id);
        setName(res.data.data.name);
        setEmail(res.data.data.email);
        setPhoneNumber(res.data.data.phoneNumber);
        setGender(res.data.data.gender);
      } catch (error) {
        console.log(error);
      }
    };
    getRecord();
  }, [id]);

  const updateRecord = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/records/${id}`, {
        name,
        email,
        phoneNumber,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="column is-half">
        <form onSubmit={updateRecord}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                name="email"
                className="input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Phone Number</label>
            <div className="control">
              <input
                type="text"
                name="phone number"
                className="input"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  name="gender"
                  value={gender}
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
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecord;
