/* eslint-disable react/prop-types */
import { useState } from "react";
import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";
import FormButton from "../../ui/FormButton";
import { useNavigate } from "react-router-dom";

const ProfileDetailComponet = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      localStorage.setItem("profileData", JSON.stringify(formData));
      onNext();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Profile Details</HeadingMedium>
      <HeadingSmall>
        Please use your real name as this will be required for identity
        verification
      </HeadingSmall>
      <form>
        <FlexFormInput>
          <FormInput
            label="First Name"
            placeholder="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />

          <FormInput
            label="Last Name"
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </FlexFormInput>

        <FormInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Date of Birth"
          placeholder="Date/Month/Year"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          error={errors.dob}
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

export default ProfileDetailComponet;
