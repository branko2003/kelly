import React from 'react';
import foto from "../../assets/mujeres.jpg"
export function ImageNos() {
  return (
    <div > {/* Ajusta la cantidad de columnas en función del tamaño de la pantalla */}
      <div className="p-2 border rounded shadow-sm flex justify-center items-center"> {/* Centra la imagen */}
        <img src={foto} alt={`Foto`}  style={{ width: '500px', height: 'auto' }} /> {/* Aumenta el tamaño de la imagen */}
      </div>
    </div>
  );
}