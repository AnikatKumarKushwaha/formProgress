/* eslint-disable react/prop-types */
const FormButton = ({ children, onClick, disabled, color = "green" }) => {
  const colorClasses = {
    green: "bg-green-950 hover:bg-green-700",
    slate: "bg-slate-500 hover:bg-slate-700",
    gray: "bg-gray-400 hover:bg-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`text-white px-4 py-2 rounded-md shadow-md transition text-sm
          ${
            disabled
              ? "bg-gray-400 cursor-not-allowed opacity-50"
              : colorClasses[color]
          }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FormButton;
