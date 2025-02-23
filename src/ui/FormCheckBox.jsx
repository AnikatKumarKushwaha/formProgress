/* eslint-disable react/prop-types */
const FormCheckBox = ({ isChecked, handleCheckboxChange, text }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="agree"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 accent-purple-600"
      />
      <label htmlFor="agree" className="text-gray-700 text-xs">
        {text}
      </label>
    </div>
  );
};

export default FormCheckBox;
