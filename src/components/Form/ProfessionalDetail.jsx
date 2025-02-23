/* eslint-disable react/prop-types */
import { useState } from "react";
import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormButton from "../../ui/FormButton";
import { useNavigate } from "react-router-dom";

const ProfessionalDetail = ({ onNext }) => {
  const [formData, setFormData] = useState({
    practiceArea: "",
    barMembership: "",
    membershipId: "",
    admissionYear: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.practiceArea) newErrors.practiceArea = "Required";
    if (!formData.barMembership) newErrors.barMembership = "Required";
    if (!formData.membershipId) newErrors.membershipId = "Required";
    if (!formData.admissionYear) newErrors.admissionYear = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("professionalDetails", JSON.stringify(formData));
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Professional Details</HeadingMedium>
      <HeadingSmall>
        Fill out your profile for clients to better understand your service
      </HeadingSmall>
      <form>
        <FormInput
          label="Practice Area(s)"
          placeholder="(e.g., Corporate Law, Family Law)"
          type="text"
          name="practiceArea"
          value={formData.practiceArea}
          onChange={handleChange}
          error={errors.practiceArea}
        />

        <FormInput
          label="Bar Membership"
          placeholder="Bar Association Name"
          type="text"
          name="barMembership"
          value={formData.barMembership}
          onChange={handleChange}
          error={errors.barMembership}
        />

        <FlexFormInput>
          <FormInput
            label="Membership ID"
            placeholder="Membership ID"
            type="text"
            name="membershipId"
            value={formData.membershipId}
            onChange={handleChange}
            error={errors.membershipId}
          />

          <FormInput
            label="Year of Admission"
            placeholder="Year"
            type="number"
            name="admissionYear"
            value={formData.admissionYear}
            onChange={handleChange}
            error={errors.admissionYear}
          />
        </FlexFormInput>
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

export default ProfessionalDetail;
