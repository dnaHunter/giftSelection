import { Route, Routes } from "react-router-dom";
import "./FinderPage.scss";
import { useState } from "react";

export default function FinderPage() {
  const [age, setAge] = useState(null);
  const [theme, setTheme] = useState(null);
  const [pices, setPices] = useState(null);
  const [price, setPrice] = useState(null);

  return (
    <section className="finder">
      <p> Finder</p>
      <Routes>
        <Route path="age" element={<p>age</p>} />
        <Route path="theme" element={<p>theme</p>} />
        <Route path="pices" element={<p>pices</p>} />
        <Route path="price" element={<p>price</p>} />
      </Routes>
    </section>
  );
}
