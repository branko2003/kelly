import React from 'react';

export function VideoGallery({ videoUrl }) {
  const baseUrl = 'http://localhost:4000/';
  return (
    <div> {/* Ajusta la cantidad de columnas en función del tamaño de la pantalla */}
      <div className="p-2 rounded shadow-sm flex justify-center items-center"> {/* Centra el video */}
        <video 
          src={`${baseUrl}${videoUrl}`} 
          controls 
          autoPlay 
          style={{ width: '500px', height: 'auto' }} // Aumenta el tamaño del video
        >
          Tu navegador no soporta la etiqueta de video.
        </video>
      </div>
    </div>
  );
}