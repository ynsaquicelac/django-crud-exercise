import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PersonasPage } from "./pages/PersonasPage";
import { PersonaFormPage } from "./pages/PersonaFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/personas" />} />
          <Route path="/personas" element={<PersonasPage />} />
          <Route path="/personas-create" element={<PersonaFormPage />} />
          <Route path="/personas/:id" element={<PersonaFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>

  )
}

export default App