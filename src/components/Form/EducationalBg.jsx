import { IoIosAddCircle } from "react-icons/io";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";

const EducationalBg = () => {
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
          placeholder="[Degree Name], [University/Institution] (Year of Graduation"
          type="text"
        />
        <FormInput
          label="Certification"
          placeholder="[Certification Name] – Issued by [Organization]."
          type="text"
        />
        <div className=" mt-5">
          <div className="flex items-center gap-2">
            <IoIosAddCircle />
            <p className="text-xs text-stone-700">Add another degree</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EducationalBg;
