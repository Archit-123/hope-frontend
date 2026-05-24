import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useAuth } from "../context/AuthContext";
import API from "../api/authApi";
import "../styles/dashboard.css";
import { FaPencilAlt } from "react-icons/fa";

function Dashboard() {
  const { user } = useAuth();

  const currentUser = user?.user || user;

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    nomineeName: "",
    email: "",
    gender: "",
    note: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [selectedNominee, setSelectedNominee] = useState(null);

  const handleDelete = async () => {
    try {
      await API.delete(`/nominees/${selectedNominee._id}`);

      setNominees((prev) =>
        prev.filter((item) => item._id !== selectedNominee._id),
      );

      setShowModal(false);

      setEditMode(false);

      setSelectedNominee(null);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res;

      if (editMode) {
        res = await API.put(`/nominees/${selectedNominee._id}`, formData);

        setNominees((prev) =>
          prev.map((item) =>
            item._id === selectedNominee._id ? res.data : item,
          ),
        );
      } else {
        res = await API.post("/nominees/add-nominee", formData);

        setNominees((prev) => [res.data, ...prev]);
      }

      // Reset everything after save/update
      setShowModal(false);

      setEditMode(false);

      setSelectedNominee(null);

      setFormData({
        nomineeName: "",
        email: "",
        gender: "",
        note: "",
      });
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed");
    }
  };

  const [nominees, setNominees] = useState([]);

  useEffect(() => {
    fetchNominees();
  }, []);

  const fetchNominees = async () => {
    try {
      const res = await API.get("/nominees/my-nominees");

      setNominees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="dashboard">
        <h1>Welcome {currentUser?.username}</h1>

        <button
          className="add-btn"
          onClick={() => {
            setEditMode(false);

            setSelectedNominee(null);

            setFormData({
              nomineeName: "",
              email: "",
              gender: "",
              note: "",
            });

            setShowModal(true);
          }}
        >
          + Add Nominee
        </button>

        {/* Nominee Cards */}
        <div className="nominee-grid">
          {nominees.map((nominee) => (
            <div key={nominee._id} className="nominee-card">
              <h3>{nominee.nomineeName}</h3>

              <p>{nominee.email}</p>

              <p>{nominee.gender}</p>

              <p>{nominee.note}</p>
              <button
                className="edit-btn"
                onClick={() => {
                  setEditMode(true);

                  setSelectedNominee(nominee);

                  setFormData({
                    nomineeName: nominee.nomineeName,

                    email: nominee.email,

                    gender: nominee.gender,

                    note: nominee.note,
                  });

                  setShowModal(true);
                }}
              >
                <FaPencilAlt />
              </button>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {showModal && (
          <div
            className="modal-overlay"
            onClick={() => {
              setShowModal(false);

              setEditMode(false);

              setSelectedNominee(null);
            }}
          >
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>Add Nominee</h2>

              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="nomineeName"
                  placeholder="Nominee Name"
                  value={formData.nomineeName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Nominee Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={editMode}
                />

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>

                  <option value="Male">Male</option>

                  <option value="Female">Female</option>

                  <option value="Other">Other</option>
                </select>

                <textarea
                  name="note"
                  placeholder="Enter details"
                  value={formData.note}
                  onChange={handleChange}
                  required
                />

                <div className="button-group">
                  <button type="submit">{editMode ? "Update" : "Save"}</button>

                  {editMode && (
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);

                      setEditMode(false);

                      setSelectedNominee(null);

                      setFormData({
                        nomineeName: "",
                        email: "",
                        gender: "",
                        note: "",
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Dashboard;
