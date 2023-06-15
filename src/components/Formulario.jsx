import { useState, useEffect } from "react";
import MensajeError from "./MensajeError";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      setError(true);
      //Coloca el state de error el false, por ende desaparece el msj de error
      setTimeout(() => setError(false), 2000);
      return;
    }

    //setError(false);

    //Datos llenados
    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };

    if (paciente.id) {
      //Editando el registro
      nuevoPaciente.id = paciente.id;
      const pacienteActualizado = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? nuevoPaciente : pacienteState
      );

      setPacientes(pacienteActualizado);
      setPaciente({});
    } else {
      //Nuevo registro
      nuevoPaciente.id = generarId();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    //Borrar los campos del form
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };

  //Generar ID unico para los pacientes
  const generarId = () => {
    const fecha = Date.now().toString(25);
    const random = Math.random().toString(25).substring(2);
    return fecha + random;
  };

  return (
    <div className="md:w-2/5 text-center 2xl:w-1/2 ">
      <h2 className="font-black text-2xl">Seguimiento Pacientes</h2>
      <p className="mt-5 font-bold">
        Añade pacientes y {""}
        <span className="text-indigo-700">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-left mt-8 p-6 rounded-md shadow-md mb-6 mx-3"
      >
        {/* Mensaje de Error Si los campos estan vacios */}
        {error && <MensajeError>Campos vacios</MensajeError>}

        {/* Campo Nombre Mascota */}
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block font-bold uppercase text-sm text-gray-700 mb-2"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            className="p-2 border-2 w-full rounded-md placeholder:text-gray-400 "
            placeholder="Nombre de la Mascota"
            autoFocus
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        {/* Campo Propietario */}
        <div className="mb-4">
          <label
            htmlFor="propietario"
            className="block font-bold uppercase text-sm text-gray-700 mb-2"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="p-2 border-2 w-full rounded-md placeholder:text-gray-400 "
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        {/* Campo Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-bold uppercase text-sm text-gray-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 border-2 w-full rounded-md placeholder:text-gray-400 "
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Campo Alta */}
        <div className="mb-4">
          <label
            htmlFor="alta"
            className="block font-bold uppercase text-sm text-gray-700 mb-2"
          >
            Alta
          </label>
          <input
            type="date"
            id="alta"
            className="p-2 border-2 w-full rounded-md placeholder:text-gray-400 "
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        {/* Campo Sintomas */}
        <div className="mb-4">
          <label
            htmlFor="sintomas"
            className="block font-bold uppercase text-sm text-gray-700 mb-2"
          >
            Sintomas
          </label>
          <textarea
            className="p-2 border-2 w-full rounded-md placeholder:text-gray-400 "
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-700 text-white font-bold uppercase p-2 rounded-sm hover:bg-indigo-800 cursor-pointer transition-all"
          value={paciente.id ? "Editar Paciente" : "Guardar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
