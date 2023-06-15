import Paciente from "./Paciente";

const ListadoPaciente = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <>
      {pacientes && pacientes.length ? (
        <div className="md:w-3/5 text-center font-black h-screen md:overflow-y-scroll 2xl:w-1/2">
          <h2 className="text-2xl">ListadoPaciente</h2>
          <p className="font-bold mt-5">
            Administra tus pacientes y {""}
            <span className="text-indigo-700">Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </div>
      ) : (
        <div className="md:w-3/5 text-center font-black h-screen md:overflow-y-scroll">
          <h2 className="text-2xl">No hay Pacientes</h2>
          <p className="font-bold mt-5">
            Comienza agregando Pacientes y {""}
            <span className="text-indigo-700">aparecerán en este lugar</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ListadoPaciente;
