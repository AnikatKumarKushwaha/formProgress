import { IoIosAddCircle } from "react-icons/io";
import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Additional Information</HeadingMedium>
      <HeadingSmall>
        Include any relevant details that strengthen your professional profile
        and credibility.
      </HeadingSmall>
      <form>
        <FlexFormInput>
          <FormInput label="Award" placeholder="Award Name" type="text" />
          <FormInput label="Year" placeholder="Year" type="text" />
        </FlexFormInput>
        <FlexFormInput>
          <FormInput
            label="Recognition"
            placeholder="Recognition"
            type="text"
          />
          <FormInput label="Year" placeholder="Year" type="text" />
        </FlexFormInput>
        <FormInput
          label="Pro Bono Work"
          placeholder="Summary of any voluntary legal services offered."
          type="text"
        />
        <div className="flex items-center gap-2 mt-5">
          <IoIosAddCircle />
          <p className="text-xs text-stone-700">Add another degree</p>
        </div>
      </form>
    </div>
  );
};

export default AdditionalInfo;
