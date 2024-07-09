import { Link } from "react-router-dom";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
      <h1 className="text-2xl font-bold">
      CROWDFUNDING MUJERES BOLIVIANAS
      </h1>
      <ul className="flex gap-x-2">
        <>
          <li>
            <ButtonLink to="/add-proyectos">Añadir proyecto</ButtonLink>
            <ButtonLink to="/proyectos">ver proyectos</ButtonLink>
          </li>
        </>
      </ul>
    </nav>
  );
}