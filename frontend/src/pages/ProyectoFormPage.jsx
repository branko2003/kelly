import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../components/ui";
import { useReparaciones } from "../context/ProyectoContext";
import { Textarea } from "../components/ui/Textarea";
import { get, useForm } from "react-hook-form";

import { useClientes } from "../context/ClienteContext";


export function ReparacionFormPage() {
  const { createReparacion, getReparacion, updateReparacion } = useReparaciones();
  const { clientes, getClientes } = useClientes();

  const [accesorios, setAccesorios] = useState([{ id: Math.random(), value: "" }]);
  const [fotos, setFotos] = useState([]);
  const [video, setVideo] = useState([]);



  const navigate = useNavigate();
  const params = useParams();
  const { register, setValue, handleSubmit, formState: { errors }, } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('foto', fotos);
      formData.append('video', video);

      // Añadir datos del formulario manualmente
      formData.append('descripcion', data.descripcion);
      formData.append('costo', data.costo);
      formData.append('titulo', data.titulo);

      console.log(data);
      // Para ver lo que contiene FormData
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      if (params.id) {
        updateReparacion(params.id,
          formData
        );
      } else {

        createReparacion(formData
        );
      }
      navigate("/proyectos");
    } catch (error) {
      console.log(error);
       window.location.href = "/";
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type.startsWith("image/")) {
      setFotos(file);
    } else if (file.type.startsWith("video/")) {
      setVideo(file);
    }
  };


  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="titulo">Titulo:</Label>
        <Input
          type="text"
          name="titulo"
          rows="3"
          {...register("titulo")}
        ></Input>
        <Label htmlFor="descripcion">Descripción:</Label>
        <Textarea
          name="descripcion"
          id="descripcion"
          rows="3"
          {...register("descripcion")}
        ></Textarea>

        <Label htmlFor="costo">Costo:</Label>
        <Input
          type="number"
          name="costo"
          rows="3"
          {...register("costo")}
        ></Input>


        <Label htmlFor="fotos">Foto:</Label>
        <Input
          type="file"
          name="foto"
          accept="image/*"

          onChange={handleFileChange}

        />
        <Label htmlFor="video">Video:</Label>
        <Input
          type="file"
          name="video"
          accept="video/*"

          onChange={handleFileChange}

        />

        <Button>Guardar Reserva</Button>
      </form>
    </Card>
  );
}