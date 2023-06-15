const MensajeError = ({ children }) => {
  return (
    <div className="bg-red-800 text-center text-white uppercase p-2 font-bold mb-4 rounded-md">
      <p>{children}</p>
    </div>
  );
};

export default MensajeError;
