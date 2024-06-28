import { Route, Routes, useNavigate } from "react-router-dom";
import "./FinderPage.scss";
import { useState } from "react";
import Age from "../../components/Age/Age";

export default function FinderPage() {
  const [age, setAge] = useState(null);
  const [theme, setTheme] = useState(null);
  const [pices, setPices] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <section className="finder">
      <Routes>
        <Route path="age" element={<Age setAge={setAge} />} />
        <Route path="theme" element={<p>theme</p>} />
        <Route path="pices" element={<p>pices</p>} />
        <Route path="price" element={<p>price</p>} />
      </Routes>
    </section>
  );
}
