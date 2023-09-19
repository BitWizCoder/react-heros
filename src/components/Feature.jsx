import PropTypes from "prop-types";
import { HiCheckCircle } from "react-icons/hi";

function Feature({ feature }) {
  return (
    <div>
      <p className="flex items-center gap-2">
        {" "}
        <HiCheckCircle className="text-green-300 text-xl" /> {feature}
      </p>
    </div>
  );
}

Feature.propTypes = {
  feature: PropTypes.string,
};

export default Feature;
