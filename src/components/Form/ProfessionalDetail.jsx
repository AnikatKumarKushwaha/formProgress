import FlexFormInput from "../../ui/FlexFormInput";
import FormInput from "../../ui/FormInput";
import HeadingMedium from "../../ui/HeadingMedium";
import HeadingSmall from "../../ui/HeadingSmall";

const ProfessionalDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center w-96">
      <HeadingMedium>Professional Details</HeadingMedium>
      <HeadingSmall>
        Fill out your profile for clients to better understand your service
      </HeadingSmall>
      <form>
        <FormInput
          label="Practice Area(s)"
          placeholder="(e.g., Corporate Law, Family Law, Intellectual Property)"
          type="text"
        />
        <FormInput
          label="Bar Membership"
          placeholder="Bar Association Name"
          type="text"
        />
        <FlexFormInput>
          <FormInput
            placeholder="Membership ID/Registration Number"
            type="text"
          />
          <FormInput placeholder="Year of Admission" type="number" />
        </FlexFormInput>
      </form>
    </div>
  );
};

export default ProfessionalDetail;
