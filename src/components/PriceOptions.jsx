import PriceOption from "./PriceOption";

function PriceOptions() {
  const priceoptions = [
    {
      id: 1,
      name: "Basic Membership",
      description: "Access to cardio and weightlifting areas",
      price: 29.99,
      billingCycle: "Monthly",
      features: [
        "Unlimited access to cardio equipment",
        "Unlimited access to weightlifting equipment",
        "Access to locker rooms",
        "Access to fitness classes (limited)",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      description:
        "Access to all facilities including group classes, pool, and sauna",
      price: 49.99,
      billingCycle: "Monthly",
      features: [
        "Unlimited access to cardio equipment",
        "Unlimited access to weightlifting equipment",
        "Access to group exercise classes",
        "Access to indoor pool",
        "Access to sauna",
        "Access to locker rooms",
        "Discounted personal training sessions",
      ],
    },
    {
      id: 3,
      name: "Annual Membership",
      description: "12 months of access to all facilities",
      price: 499.99,
      billingCycle: "Annually",
      features: [
        "Unlimited access to cardio equipment",
        "Unlimited access to weightlifting equipment",
        "Access to group exercise classes",
        "Access to indoor pool",
        "Access to sauna",
        "Access to locker rooms",
        "Discounted personal training sessions",
        "Access to outdoor sports courts",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid grid-cols-3 gap-5">
        {priceoptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
}

export default PriceOptions;
