// rafce

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, alta, sintomas, id } = paciente;

  const handleEliminar = () => {
    const confirmar = confirm("Desea eliminar al paciente ", nombre);
    if (confirmar) eliminarPaciente(id);
  };

  return (
    <div className="bg-white text-left font-normal mt-8 mx-3 p-5 shadow-md rounded-lg">
      <p className="font-bold text-gray-800 uppercase mb-2">
        Nombre: {""}
        <span className="font-normal">{nombre}</span>
      </p>

      <p className="font-bold text-gray-800 uppercase mb-2">
        Propietario: {""}
        <span className="font-normal">{propietario}</span>
      </p>

      <p className="font-bold text-gray-800 uppercase mb-2">
        Email: {""}
        <span className="font-normal">{email}</span>
      </p>

      <p className="font-bold text-gray-800 uppercase mb-2">
        Fecha Alta: {""}
        <span className="font-normal">{alta}</span>
      </p>

      <p className="font-bold text-gray-800 uppercase mb-2">
        Síntomas: {""}
        <span className="font-normal">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="py-2 px-5 bg-indigo-700 hover:bg-indigo-800 rounded-lg text-white font-bold uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-5 bg-red-700 hover:bg-red-800 rounded-lg text-white font-bold uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
