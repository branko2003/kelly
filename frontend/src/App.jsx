import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";


import { ClienteProvider } from "./context/ClienteContext";
import { ClienteFormPage } from "./pages/ClienteFormPage";
import { ClientesPage} from "./pages/ClientesPage";

import { ReparacionProvider } from "./context/ProyectoContext";

import { ReparacionFormPage } from "./pages/ProyectoFormPage";
import { ReparacionesPage } from "./pages/ProyectosPage";

//import { ProfilePage} from "./pages/ProfilePage";

function App() {
  return (
        <ClienteProvider>
          <ReparacionProvider>
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0">
            <Navbar />
            <Routes>
              <Route path="/proyectos" element={<ReparacionesPage />} />
              <Route path="/reparaciones/:id" element={<ReparacionFormPage />} />
              <Route path="/add-proyectos" element={<ReparacionFormPage />} />

              <Route path="*" element={<Navigate to="/proyectos" />} />

                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/add-cliente" element={<ClienteFormPage />} />
                <Route path="/add-cliente/:id" element={<ClienteFormPage />} />
            </Routes>
          </main>
          
        </BrowserRouter>
        </ReparacionProvider>
        </ClienteProvider>
  );
}

export default App;