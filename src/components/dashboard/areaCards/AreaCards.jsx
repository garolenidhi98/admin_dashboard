import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#475be8"]}
        percentFillValue={80}
        cardInfo={{
          title: "Total Orders",
          value: "75",
          text: "3%",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Total Delivered",
          value: "70",
          text: "3%",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Cancelled",
          value: "05",
          text: "3%",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#e034cc"]}
        percentFillValue={40}
        cardInfo={{
          title: "Total Revenue",
          value: "$12K",
          text: "3%",
        }}
      />
      <AreaCard
        colors={["#163d7a", "#4485eb"]}
        percentFillValue={75}
        cardInfo={{
          title: "Net Profit",
          value: "$6759.25",
          text: "3%",
        }}
      />
    </section>
  );
};

export default AreaCards;
