import { useState } from "react";
import Form from "./components/Form";
import User from "./components/user";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const [data, setdata] = useState(null);

  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto my-10 p-4 bg-gray-700 shadow-2xl rounded-xl">
        <Routes>
          <Route index element={<Navigate replace to="form" />} />
          <Route path="form" element={<Form setdata={setdata} />} />
          <Route path="user" element={<User userData={data} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
