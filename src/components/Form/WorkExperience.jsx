/* eslint-disable react/prop-types */
import { useState } from "react";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormCheckBox from "../../ui/FormCheckBox";
import { IoIosAddCircle } from "react-icons/io";
import FormButton from "../../ui/FormButton";

const WorkExperience = ({ onNext }) => {
  const [formData, setFormData] = useState({
    yearsOfPractice: "",
    keyRoles: "",
    significantCases: "",
    currentlyWorking: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleCheckboxChange = (event) => {
    setFormData({ ...formData, currentlyWorking: event.target.checked });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.yearsOfPractice) newErrors.yearsOfPractice = "Required";
    if (!formData.keyRoles) newErrors.keyRoles = "Required";
    if (!formData.significantCases) newErrors.significantCases = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("workExperience", JSON.stringify(formData));
      onNext();
    }
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
          name="yearsOfPractice"
          value={formData.yearsOfPractice}
          onChange={handleChange}
          error={errors.yearsOfPractice}
        />

        <FormInput
          label="Key Roles"
          placeholder="Legal Advisor, [Company Name] (Year–Year)"
          type="text"
          name="keyRoles"
          value={formData.keyRoles}
          onChange={handleChange}
          error={errors.keyRoles}
        />

        <FormInput
          label="Significant Cases"
          placeholder="[Case Name/Type] – Brief description of role and outcome."
          type="text"
          name="significantCases"
          value={formData.significantCases}
          onChange={handleChange}
          error={errors.significantCases}
        />

        <div className="flex justify-between items-center mt-5">
          <FormCheckBox
            isChecked={formData.currentlyWorking}
            handleCheckboxChange={handleCheckboxChange}
            text="I’m currently working in this role"
          />
          <div className="flex items-center gap-2 cursor-pointer">
            <IoIosAddCircle className=" text-xl" />
            <p className="text-xs text-stone-700">Add another role</p>
          </div>
        </div>
      </form>

      <div className="flex justify-between w-full mt-5">
        <div className=" sm:-translate-x-14">
          <FormButton color="gray">Skip</FormButton>
        </div>
        <div className=" sm:translate-x-14">
          <FormButton onClick={handleNext} color="green">
            Next
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
