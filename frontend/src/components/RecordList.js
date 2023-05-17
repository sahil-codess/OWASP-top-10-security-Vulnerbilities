import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./utils/auth";

const RecordList = () => {
  const [records, setRecords] = useState([]);
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    handleRecord();
  }, []);

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const handleRecord = async () => {
    await axios
      .get("http://localhost:5000/records")
      .then((res) => {
        setRecords(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/records/${id}`);
      handleRecord();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center flex-col">
        <Link to="/add" className="btn-primary p-2 rounded-lg w-28 mt-10">
          Add Record
        </Link>
        <table className="table border-collaps table-normal mt-5">
          <thead className="border">
            <tr className="text-white">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => {
              return (
                <tr key={index} className="text-white">
                  <td>{index + 1}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.phoneNumber}</td>
                  <td>{record.gender}</td>
                  <td>
                    <Link
                      to={`/edit/${record._id}`}
                      className="btn btn-accent p-2 pl-4 pr-4 rounded-md"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteRecord(record._id)}
                      className="btn btn-circle btn-outline btn-error"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="btn-error p-2 rounded-lg w-28 mt-10"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default RecordList;
