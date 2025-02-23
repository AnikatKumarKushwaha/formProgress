import { IoIosAddCircle } from "react-icons/io";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";

const Specialization = () => {
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
        />
        <div className=" mt-5">
          <div className="flex items-center gap-2">
            <IoIosAddCircle />
            <p className="text-xs text-stone-700">Add another skill</p>
          </div>
        </div>
        <FormInput
          label="Languages"
          placeholder="e,g, Assamese, Hindi, Bengali, English"
          type="text"
        />
      </form>
    </div>
  );
};

export default Specialization;
