/* eslint-disable react/prop-types */
import { useState } from "react";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormButton from "../../ui/FormButton";

const Specialization = ({ onNext }) => {
  const [specialization, setSpecialization] = useState({
    keySpecializations: "",
    languages: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setSpecialization((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      keySpecializations: specialization.keySpecializations
        ? ""
        : "Specialization is required",
      languages: specialization.languages ? "" : "Languages are required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("specialization", JSON.stringify(specialization)); //
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Specializations & Skills</HeadingMedium>
      <HeadingSmall>
        Highlight your key practice areas and skills to help clients find the
        right legal expertise.
      </HeadingSmall>

      <form className="w-full">
        <FormInput
          label="Key Specializations"
          placeholder="(e.g., Contract Negotiation, Arbitration, Litigation Strategy)"
          type="text"
          value={specialization.keySpecializations}
          onChange={(e) => handleChange("keySpecializations", e.target.value)}
          error={errors.keySpecializations}
        />

        <FormInput
          label="Languages"
          placeholder="e.g., Assamese, Hindi, Bengali, English"
          type="text"
          value={specialization.languages}
          onChange={(e) => handleChange("languages", e.target.value)}
          error={errors.languages}
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

export default Specialization;
