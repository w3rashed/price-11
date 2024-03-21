import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-green-300 p-6 rounded-2xl flex flex-col text-center">
      <h2>
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="flex-grow">
        {features.map((features, index) => (
          <Features key={index} features={features}></Features>
        ))}
      </div>
      <button className="btn">buy now</button>
    </div>
  );
};

export default PriceOption;
