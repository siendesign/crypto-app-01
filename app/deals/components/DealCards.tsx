import DealCard from "./DealCard";
import SearchandFilter from "./SearchandFilter";

const DealCards = () => {
  return (
    <div className="space-y-4 col-span-12 md:col-span-9">
      <SearchandFilter />
      {[1, 2, 3, 4, 5].map((item, index) => (
        <div className="">
          <DealCard />
        </div>
      ))}
    </div>
  );
};

export default DealCards;
