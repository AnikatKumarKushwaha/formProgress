/* eslint-disable react/prop-types */
const FormInput = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1 mt-5 w-full">
      <label className="text-start font-semibold">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-slate-200 text-slate-500 px-4 py-2 rounded-md border w-full placeholder:text-xs placeholder:text-slate-400 
            ${error ? "border-red-500" : "border-slate-300"}`}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default FormInput;
