import PropTypes from "prop-types";
import Feature from "./Feature";

function PriceOption({ option }) {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-600 rounded-md p-4 text-white flex flex-col">
      <h2 className=" text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl my-8 text-center">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature} />
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">By Now</button>
    </div>
  );
}

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
