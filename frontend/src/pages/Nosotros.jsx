import foto from "../assets/mujeres.jpg"

export function Nosotros() {

    return (
        <>
            <div className="flex items-center p-4 border rounded shadow-sm"> {/* Contenedor flex para la imagen y el texto */}
                <div className="flex-shrink-0 mr-4"> {/* Ajusta el margen derecho para separar la imagen del texto */}
                    <img src={foto} alt="Foto" style={{ width: '500px', height: 'auto' }} /> {/* Imagen a la izquierda */}
                </div>
                <div> {/* Contenedor para el texto */}
                    <h2 className="text-4xl font-bold mb-4 text-blue-700">Financiamiento para emprendedoras</h2> {/* Título más grande y de otro color */}
                    <p><strong className="text-3xl text-purple-700">Misión</strong></p> {/* Misión más grande y de color */}
                    <p className="text-xl ">Nuestro compromiso es con cada mujer boliviana que sueña con emprender. Proveemos las herramientas, el financiamiento y el apoyo integral necesarios para que ellas puedan iniciar y desarrollar negocios exitosos. Creemos en la capacidad y el potencial de las mujeres bolivianas, y estamos dedicados a transformar esas aspiraciones en realidades tangibles.</p>
                    <p><strong className="text-3xl text-purple-700">Visión</strong></p> {/* Visión más grande y de color */}
                    <p className="text-xl ">Aspiramos a ser el principal referente de apoyo para las mujeres emprendedoras en Bolivia, creando un entorno inclusivo y accesible donde cada mujer pueda encontrar las oportunidades y recursos necesarios para prosperar. Imaginamos un futuro donde las mujeres bolivianas lideren con confianza y éxito, impactando positivamente sus comunidades y el país entero.</p>
                </div>
            </div>
        </>
    );
}