/* eslint-disable react/prop-types */
const FormInput = ({ label, placeholder, type }) => {
  return (
    <div className="flex flex-col gap-1 mt-5 w-full">
      <label className=" text-start font-semibold">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        className="bg-slate-200 px-4 py-2 rounded-md border border-slate-300 text-slate-500 placeholder:text-slate-500 w-full placeholder:text-xs"
      />
    </div>
  );
};

export default FormInput;
