import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";

const ProfileDetailComponet = () => {
  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Profile Details</HeadingMedium>
      <HeadingSmall>
        Please use your real name as this will be required identity verification
      </HeadingSmall>
      <form>
        <FlexFormInput>
          <FormInput label="First Name" placeholder="First Name" type="text" />
          <FormInput label="Last Name" placeholder="Last Name" type="text" />
        </FlexFormInput>
        <FormInput label="Email" placeholder="Enter your email" type="email" />
        <FormInput
          label="Date of Birth"
          placeholder="Date/Month/Year"
          type="date"
        />
      </form>
    </div>
  );
};

export default ProfileDetailComponet;
