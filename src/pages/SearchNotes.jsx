import { useState } from "react";

import Layout from "../components/Layout";

import API from "../api/authApi";

function SearchNotes() {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;

    setSearch(value);

    try {
      const res = await API.get(`/nominees/search?q=${value}`);

      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1>Search Nominees</h1>

        <input
          type="text"
          placeholder="Search nominee"
          value={search}
          onChange={handleSearch}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <div className="nominee-grid">
          {results.map((nominee) => (
            <div key={nominee._id} className="nominee-card">
              <h3>{nominee.nomineeName}</h3>

              <p>
                <strong>Email:</strong>

                {nominee.email}
              </p>

              <p>
                <strong>Gender:</strong>

                {nominee.gender}
              </p>

              <p>
                <strong>Created By:</strong>

                {nominee.user?.username}
              </p>

              <p>{nominee.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default SearchNotes;
