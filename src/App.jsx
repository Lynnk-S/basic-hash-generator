import { useState } from "react";
import "./App.css";
import CryptoJS from "crypto-js";
import InputField from "./components/InputField";
import Button from "./components/Button";
import HashResult from "./components/HashResult";

function App() {
  const [inputText, setInputText] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [sha1Hash, setSha1Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");

  const generateHashes = () => {
    setMd5Hash(CryptoJS.MD5(inputText).toString());
    setSha1Hash(CryptoJS.SHA1(inputText).toString());
    setSha256Hash(CryptoJS.SHA256(inputText).toString());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Generador de hashes
        </h1>

        <InputField
          label="Texto de entrada"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <Button onClick={generateHashes}>Generar hashes</Button>

        <div className="mt-6">
          <HashResult label="MD5" value={md5Hash} />
          <HashResult label="SHA-1" value={sha1Hash} />
          <HashResult label="SHA-256" value={sha256Hash} />
        </div>
      </div>
    </div>
  );
}

export default App;
