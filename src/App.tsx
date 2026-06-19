import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    setResult(`분석할 문장:\n${text}`);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px" }}>
      <h1>Chinese Study Assistant</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="중국어 문장을 입력하세요"
        rows={8}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <br />
      <br />

      <button onClick={handleAnalyze}>
        분석하기
      </button>

      <hr />

      <pre>{result}</pre>
    </div>
  );
}

export default App;