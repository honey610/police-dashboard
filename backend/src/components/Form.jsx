import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  let [formdata, setFormdata] = useState({
    userName: "",
    userId: "",
    incidentDetail: ""
  });

  const [details, setdetails] = useState([]);
  const navigate = useNavigate();

  //  useEffect(() => {
  //   try {
  //     const storedData = localStorage.getItem("efirHistory");
  //     if (storedData) {
  //       setdetails(JSON.parse(storedData));
  //     }
  //   } catch (error) {
  //     console.error("Error reading localStorage:", error);
  //   }
  // }, []);

  // // 🔹 Save to localStorage whenever details change
  // useEffect(() => {
  //   try {
  //     localStorage.setItem("efirHistory", JSON.stringify(details));
  //   } catch (error) {
  //     console.error("Error writing to localStorage:", error);
  //   }
  // }, [details]);

  let handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    setFormdata({
      ...formdata,
      [fieldName]: fieldValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/efir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formdata)
      });

      if (res.ok) {
        alert("✅ E-FIR submitted successfully!");

        // append to table
        setdetails((prev) => [...prev, formdata]);

        // reset form
        setFormdata({
          userName: "",
          userId: "",
          incidentDetail: ""
        });

        // navigate("/"); // optional
      } else {
        alert("❌ Failed to submit E-FIR");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Backend error");
    }
  };

  return (
    <div className="card heatmap-card">
      <h2>Generate E-FIR</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="touristName" className="form-label">
            Tourist Name
          </label>
          <input
            value={formdata.userName}
            type="text"
            className="form-control"
            id="touristName"
            placeholder="Enter tourist name"
            name="userName"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="touristId" className="form-label">
            Tourist ID
          </label>
          <input
            value={formdata.userId}
            type="text"
            className="form-control"
            id="touristId"
            placeholder="Enter tourist ID"
            name="userId"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="incidentDetails" className="form-label">
            Incident Details
          </label>
          <textarea
            value={formdata.incidentDetail}
            className="form-control"
            id="incidentDetails"
            rows="3"
            placeholder="Describe the incident"
            name="incidentDetail"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit E-FIR
        </button>
      </form>

      {/* ✅ Always show table */}
      <div style={{ marginTop: "30px" }}>
        <h3>E-FIR History</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Tourist Name</th>
              <th>Tourist ID</th>
              <th>Incident Details</th>
            </tr>
          </thead>
          <tbody>
            {details.length > 0 ? (
              details.map((record, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{record.userName}</td>
                  <td>{record.userId}</td>
                  <td>{record.incidentDetail}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center", color: "gray" }}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
