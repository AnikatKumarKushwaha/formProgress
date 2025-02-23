/* eslint-disable react/prop-types */

const ProgressBar = ({ currentStep }) => {
  const colors = [
    "bg-purple-900",
    "bg-purple-800",
    "bg-purple-700",
    "bg-purple-600",
    "bg-purple-500",
    "bg-purple-400",
  ];

  return (
    <div className="flex gap-4 my-8">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`h-2 w-20 rounded-full transition-all duration-300 ${
            index <= currentStep ? colors[index] : "bg-gray-100"
          }`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
