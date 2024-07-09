import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Card, Input, Label } from "../components/ui";
import { useClientes } from "../context/ClienteContext";
import { useForm } from "react-hook-form";
dayjs.extend(utc);

export function ClienteFormPage() {
  const { createCliente, updateCliente } = useClientes();
  const navigate = useNavigate();
  const params = useParams();
  const {register, handleSubmit, formState: { errors },} = useForm();

  const onSubmit = async (data) => {
    try {
      /*
      if (params.id) {
        updateCliente(params.id, {
          ...data,
        });
      } else {
        createCliente({
          ...data,
        });
      }*/
     data.proyecto=params.id
        createCliente({
          ...data,
        });
       navigate("/proyectos");
    } catch (error) {
      console.log(error);
      // window.location.href = "/";
    }
  };


  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="nombre">nombre:</Label>
        <Input
          type="text"
          name="nombre"
          placeholder="Ingrese el nombre"
          {...register("nombre")}
          autoFocus
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">Ingrese el nombre</p>
        )}
        <Label htmlFor="apellido">apellido:</Label>
        <Input
          type="text"
          name="apellido"
          placeholder="Ingrese el apellido"
          {...register("apellido")}
          autoFocus
        />
        <Label htmlFor="email">email:</Label>
        <Input
          type="email"
          name="email"
          placeholder="Ingrese el email"
          {...register("email")}
          autoFocus
        />
        <Label htmlFor="tarjeta">tarjeta:</Label>
        <Input
          type="number"
          name="tarjeta"
          placeholder="Ingrese la tarjeta"
          {...register("tarjeta", { 
            required: "Este campo es obligatorio", 
            minLength: { value: 12, message: "La tarjeta debe tener al menos 12 números" } 
          })}
          autoFocus
        />
       <Label htmlFor="monto">monto:</Label>
        <Input
          type="number"
          name="monto"
          placeholder="Ingrese el monto"
          {...register("monto")}
          autoFocus
        />
        <Button>Guardar</Button>
      </form>
    </Card>
  );
}