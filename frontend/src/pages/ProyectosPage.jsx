import { useEffect } from "react";
import { useReparaciones } from "../context/ProyectoContext";
import { ReparacionCard } from "../components/proyectos/ProyectoCard";
import { ImFileEmpty } from "react-icons/im";

export function ReparacionesPage() {
  const { reparaciones, getReparaciones} = useReparaciones();
  useEffect(() => {
    getReparaciones();
  }, []);

  return (
    <>
      {reparaciones.length === 0 && (
        <div className="flex justify-center items-center p-10">
          <div>
            <ImFileEmpty className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="font-bold text-xl">
              Aún no hay reservas, agregue una nueva reserva
            </h1>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {reparaciones.map((reparacion) => (
          <ReparacionCard reparacion={reparacion} key={reparacion._id} />
        ))}
      </div>
    </>
  );
}