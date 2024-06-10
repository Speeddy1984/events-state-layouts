import { useState } from "react";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

export const Store = (props) => {
  const products = props.products;
  const [view, setView] = useState("module");

  const handleSwitch = () => {
    setView((prevView) => (prevView === "module" ? "list" : "module"));
  };

  const icon = view === "module" ? "view_list" : "view_module";

  return (
    <div>
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      {view === "module" ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </div>
  );
};

export default Store;
