import React, { useState,useEffect } from 'react';
import { useReparaciones } from "../../context/ProyectoContext";
import { Button, ButtonLink, Card, Label, ImageGallery, VideoGallery } from "../ui";
import Modal from 'react-modal';

// Establecer el elemento raíz para el modal
Modal.setAppElement('#root');

export function ReparacionCard({ reparacion }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalMonto, setTotalMonto] = useState(0);
  const [numPersonas, setNumPersonas] = useState(0);

  // Calcular el total del monto financiado y el número de personas
  useEffect(() => {
    let total = 0;
    let personas = 0;
    if (reparacion.patrocinadores && reparacion.patrocinadores.length > 0) {
      reparacion.patrocinadores.forEach(patrocinador => {
        total += patrocinador.monto;
        personas++;
      });
    }
    setTotalMonto(total);
    setNumPersonas(personas);
  }, [reparacion]);
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <Card>
        <header className="flex justify-between">
          <h1 className="text-2xl font-bold">{reparacion.titulo}</h1>
        </header>
        <Label htmlFor="title">Foto</Label>
        {reparacion.foto && reparacion.foto.length > 0 ? (
          <ImageGallery photos={reparacion.foto} />
        ) : (
          <p>No hay fotos disponibles.</p>
        )}
        <p>
          {/* format date dayjs(task.date).utc().format('DD/MM/YY')*/}
        </p>
        <Label htmlFor="title">Descripción</Label>
        <p className="text-slate-300">{reparacion.descripcion}</p>
        <Label htmlFor="title">Costo</Label>
        <p className="text-slate-300">{reparacion.costo}</p>
        <div className="flex gap-x-2 items-center">
          <Button onClick={openModal}>Ver detalles</Button>
        </div>
      </Card>


      <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%',
      height: 'auto',
      padding: 0, // Quita el padding para usar el estilo directo del contenido
      border: 'none' // Quita el borde del modal
    }
  }}
>
  <div onClick={closeModal} className="bg-zinc-800 p-10 rounded-md">
    <header className="flex justify-between">
      <h1 className="text-2xl font-bold">{reparacion.titulo}</h1>
    </header>
    {reparacion.video && reparacion.video.length > 0 ? (
      <VideoGallery videoUrl={reparacion.video} />
    ) : (
      <p>No hay videos disponibles.</p>
    )}
    <div className="flex flex-col md:flex-row md:gap-x-4">
      <div className="flex-1">
        <Label htmlFor="title">Descripción</Label>
        <p style={{ fontSize: '1.25rem' }}>{reparacion.descripcion}</p>
      </div>
      <div className="flex-1">
        <Label htmlFor="title">Costo</Label>
        <p style={{ fontSize: '1.25rem' }}>{reparacion.costo}</p>
      </div>
    </div>
    <div className="flex flex-col md:flex-row md:gap-x-4">
      <div className="flex-1">
        <Label htmlFor="title">Monto financiado</Label>
        <p style={{ fontSize: '1.25rem' }}>{totalMonto}</p>
        </div>
      <div className="flex-1">
        <Label htmlFor="title">Nro Personas que financiaron</Label>
        <p style={{ fontSize: '1.25rem' }}>{numPersonas}</p>
        </div>
    </div>
    <div className="flex gap-x-2 items-center">
    <ButtonLink to={`/add-cliente/${reparacion._id}`}>Financiar</ButtonLink>
    </div>
  </div>
</Modal>

    </>
  );
}