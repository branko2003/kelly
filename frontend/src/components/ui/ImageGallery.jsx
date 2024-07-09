import React from 'react';

export function ImageGallery({ photos }) {
  const baseUrl = 'http://localhost:4000/';
  return (
    <div > {/* Ajusta la cantidad de columnas en función del tamaño de la pantalla */}
      <div className="p-2 border rounded shadow-sm flex justify-center items-center"> {/* Centra la imagen */}
        <img src={`${baseUrl}${photos}`} alt={`Foto`}  style={{ width: '500px', height: 'auto' }} /> {/* Aumenta el tamaño de la imagen */}
      </div>
    </div>
  );
}