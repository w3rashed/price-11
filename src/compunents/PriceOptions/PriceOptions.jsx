import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const gymMemberships = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Limited access to weight training area",
        "Group fitness classes",
        "Discounts on gym merchandise",
        "Monthly fitness assessment",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Full access to cardio and weight training areas",
        "Access to all group fitness classes",
        "Personalized workout plan",
        "Locker room and shower facilities",
        "Nutritional counseling session",
        "Access to online workout videos",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      features: [
        "All Standard membership features",
        "Unlimited access to sauna and steam room",
        "Complimentary towel service",
        "Discounts on personal training sessions",
        "Monthly massage session",
        "Free guest passes",
      ],
    },
  ];

  return (
    <div className="m-12  ">
      <h2 className="text-5xl">Best Price in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {gymMemberships.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
