import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      setMessage("Please enter your name.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/?name=${name}`);
      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage("Error fetching data.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter Your Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button onClick={handleSubmit} style={{ marginLeft: "10px", padding: "10px", fontSize: "16px" }}>
        Say Hello
      </button>
      <h3>{message}</h3>
    </div>
  );
}

export default App;
