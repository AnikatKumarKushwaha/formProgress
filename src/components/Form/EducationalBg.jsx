/* eslint-disable react/prop-types */
import { useState } from "react";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormButton from "../../ui/FormButton";

const EducationalBg = ({ onNext }) => {
  const [education, setEducation] = useState({
    degree: "",
    certification: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setEducation((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      degree: education.degree ? "" : "Degree is required",
      certification: education.certification ? "" : "Certification is required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("educationalBg", JSON.stringify(education));
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Educational Background</HeadingMedium>
      <HeadingSmall>
        Provide your academic credentials as they play a vital role in
        establishing your legal expertise.
      </HeadingSmall>

      <form className="w-full">
        <FormInput
          label="Degree"
          placeholder="[Degree Name], [University/Institution] (Year)"
          type="text"
          value={education.degree}
          onChange={(e) => handleChange("degree", e.target.value)}
          error={errors.degree}
        />

        <FormInput
          label="Certification"
          placeholder="[Certification Name] – Issued by [Organization]"
          type="text"
          value={education.certification}
          onChange={(e) => handleChange("certification", e.target.value)}
          error={errors.certification}
        />
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

export default EducationalBg;
