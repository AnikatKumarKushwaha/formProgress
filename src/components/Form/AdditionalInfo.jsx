/* eslint-disable react/prop-types */
import { useState } from "react";
import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormButton from "../../ui/FormButton";
import { useNavigate } from "react-router-dom";

const AdditionalInfo = ({ onNext }) => {
  const [info, setInfo] = useState({
    award: "",
    awardYear: "",
    recognition: "",
    recognitionYear: "",
    proBonoWork: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setInfo((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      award: info.award ? "" : "Award name is required",
      awardYear: info.awardYear ? "" : "Year is required",
      recognition: info.recognition ? "" : "Recognition is required",
      recognitionYear: info.recognitionYear ? "" : "Year is required",
      proBonoWork: info.proBonoWork ? "" : "Pro Bono Work summary is required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("additionalInfo", JSON.stringify(info));
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Additional Information</HeadingMedium>
      <HeadingSmall>
        Include any relevant details that strengthen your professional profile
        and credibility.
      </HeadingSmall>

      <form className="w-full">
        <FlexFormInput>
          <FormInput
            label="Award"
            placeholder="Award Name"
            type="text"
            value={info.award}
            onChange={(e) => handleChange("award", e.target.value)}
            error={errors.award}
          />
          <FormInput
            label="Year"
            placeholder="Year"
            type="text"
            value={info.awardYear}
            onChange={(e) => handleChange("awardYear", e.target.value)}
            error={errors.awardYear}
          />
        </FlexFormInput>

        <FlexFormInput>
          <FormInput
            label="Recognition"
            placeholder="Recognition"
            type="text"
            value={info.recognition}
            onChange={(e) => handleChange("recognition", e.target.value)}
            error={errors.recognition}
          />
          <FormInput
            label="Year"
            placeholder="Year"
            type="text"
            value={info.recognitionYear}
            onChange={(e) => handleChange("recognitionYear", e.target.value)}
            error={errors.recognitionYear}
          />
        </FlexFormInput>

        <FormInput
          label="Pro Bono Work"
          placeholder="Summary of any voluntary legal services offered."
          type="text"
          value={info.proBonoWork}
          onChange={(e) => handleChange("proBonoWork", e.target.value)}
          error={errors.proBonoWork}
        />
      </form>

      <div className="flex justify-between w-full mt-5">
        <div className=" sm:-translate-x-14">
          <FormButton color="gray" onClick={() => navigate("/main")}>
            Skip
          </FormButton>
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

export default AdditionalInfo;
