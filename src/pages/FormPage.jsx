import { useState } from "react";
import ProgressBar from "../components/Form/ProgressBar";
import HeadingLarge from "../ui/HeadingLarge";
import HeadingSmall from "../ui/HeadingSmall";

import ProfileDetailComponet from "../components/Form/ProfileDetailComponet";
import ProfessionalDetail from "../components/Form/ProfessionalDetail";
import WorkExperience from "../components/Form/WorkExperience";
import EducationalBg from "../components/Form/EducationalBg";
import Specialization from "../components/Form/Specialization";
import FormButton from "../ui/FormButton";
import AdditionalInfo from "../components/Form/AdditionalInfo";

const FormPage = () => {
  const totalSteps = 6;
  const [currentStep, setCurrentStep] = useState(0);

  const stepComponents = {
    0: <ProfileDetailComponet />,
    1: <ProfessionalDetail />,
    2: <WorkExperience />,
    3: <EducationalBg />,
    4: <Specialization />,
    5: <AdditionalInfo />,
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-slate-50 h-[90vh] flex justify-center items-center py-20">
      <div className="bg-white shadow-sm w-[80%] rounded-sm flex flex-col  items-center p-10">
        <HeadingLarge>Let's get to know you</HeadingLarge>
        <HeadingSmall>
          Please fill in this short form so that we can get to know you better
        </HeadingSmall>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Render the correct component */}
        <div className=" text-center">{stepComponents[currentStep]}</div>

        {/* Buttons */}
        <div className="flex justify-between mt-5 w-[600px]">
          <FormButton
            onClick={handleBack}
            disabled={currentStep === 0}
            color="gray"
          >
            Skip
          </FormButton>
          <FormButton
            onClick={handleNext}
            disabled={currentStep >= totalSteps - 1}
            color="green"
          >
            Next
          </FormButton>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
