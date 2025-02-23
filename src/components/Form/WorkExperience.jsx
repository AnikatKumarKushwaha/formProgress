import { useState } from "react";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormCheckBox from "../../ui/FormCheckBox";
import { IoIosAddCircle } from "react-icons/io";

const WorkExperience = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Work Experience</HeadingMedium>
      <HeadingSmall>
        Detail your professional experience accurately, as it will be crucial
        for case handling and client trust.
      </HeadingSmall>
      <form className="w-full">
        <FormInput
          label="Total Years of Practice"
          placeholder="X Years"
          type="text"
        />
        <FormInput
          label="Key Roles"
          placeholder="Legal Advisor, [Company Name] (Year–Year)
"
          type="text"
        />

        <FormInput
          label="Significant cases"
          placeholder="[Case Name/Type] – Brief description of role and outcome."
          type="text"
        />
        <div className="flex justify-between items-center mt-5">
          <FormCheckBox
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
            text="i’m currently working in this role"
          />
          <div className="flex items-center gap-2">
            <IoIosAddCircle />
            <p className="text-xs text-stone-700">Add another degree</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;
