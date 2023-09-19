import Card from "./Card";

function Cards() {
  return (
    <div className="mt-10">
      <h1 className="text-center my-10 text-3xl">These are super heoros</h1>
      <div className=" grid grid-cols-3 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Cards;
