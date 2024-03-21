import { BsCheckCircleFill } from "react-icons/bs";
const Features = ({ features }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <BsCheckCircleFill></BsCheckCircleFill>
        {features}
      </p>
    </div>
  );
};

export default Features;
