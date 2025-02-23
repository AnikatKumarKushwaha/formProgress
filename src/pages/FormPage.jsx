import { useState } from "react";
import ProgressBar from "../components/Form/ProgressBar";
import HeadingLarge from "../ui/HeadingLarge";
import HeadingSmall from "../ui/HeadingSmall";

import ProfileDetailComponet from "../components/Form/ProfileDetailComponet";
import ProfessionalDetail from "../components/Form/ProfessionalDetail";
import WorkExperience from "../components/Form/WorkExperience";
import EducationalBg from "../components/Form/EducationalBg";
import Specialization from "../components/Form/Specialization";
import AdditionalInfo from "../components/Form/AdditionalInfo";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/main");
    }
  };

  const stepComponents = {
    0: <ProfileDetailComponet onNext={handleNext} />,
    1: <ProfessionalDetail onNext={handleNext} />,
    2: <WorkExperience onNext={handleNext} />,
    3: <EducationalBg onNext={handleNext} />,
    4: <Specialization onNext={handleNext} />,
    5: <AdditionalInfo onNext={handleNext} />,
  };

  return (
    <div className="bg-slate-50  flex justify-center items-center py-10">
      <div className="bg-white shadow-sm w-[99%] md:w-[80%] rounded-sm flex flex-col  items-center p-10">
        <HeadingLarge>{"Let's"} get to know you</HeadingLarge>
        <HeadingSmall>
          Please fill in this short form so that we can get to know you better
        </HeadingSmall>

        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <div className=" text-center">{stepComponents[currentStep]}</div>
      </div>
    </div>
  );
};

export default FormPage;
