import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import API from "../api/authApi";

function NotesForMe() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [selectedNote, setSelectedNote] = useState(null);
  const [otp, setOtp] = useState("");

  const handleSendOtp = async () => {
    await API.post("/nominees/send-otp", {
      noteId: selectedNote._id,
    });

    alert("OTP sent");
  };

  const handleVerify = async () => {
    try {
      const res = await API.post("/nominees/verify-otp", {
        otp,
        noteId: selectedNote._id,
      });

      console.log("Response:", res.data);

      if (res.data.verified) {
        setSelectedNote((prev) => ({
          ...prev,
          unlocked: true,
          unlockedNote: res.data.note,
        }));
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Verification failed");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await API.get("/nominees/notes-for-me");

      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h1>Notes For Me</h1>

      <div className="nominee-grid">
        {notes.map((note) => (
          <div
            key={note._id}
            className="nominee-card"
            onClick={() => {
              setSelectedNote(note);
              setShowModal(true);
            }}
          >
            <h3>{note.nomineeName}</h3>

            <p>
              <strong>From:</strong> {note.user?.username} | {note.user?.email}
            </p>

            <p>🔒 Unlock Note</p>
          </div>
        ))}
      </div>

      {showModal && selectedNote && (
        <div
          className="modal-overlay"
          onClick={() => {
            setShowModal(false);
            setOtp("");
            setSelectedNote(null);
          }}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Unlock Note</h2>

            {!selectedNote.unlocked ? (
              <>
                <button onClick={handleSendOtp}>Send OTP</button>

                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />

                <button onClick={handleVerify}>Verify</button>
              </>
            ) : (
              <>
                <h3>Unlocked Note</h3>

                <p>{selectedNote.unlockedNote}</p>

                <button
                  onClick={() => {
                    setShowModal(false);
                    setOtp("");
                    setSelectedNote(null);
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default NotesForMe;
