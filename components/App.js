import { useState } from "react";
import Banner from "./Banner";
import House from "./House";
import HouseList from "./HouseList";

export default function App() {
  const [selectedHouse, setSelectedHouse] = useState();

  return (
    <>
      <div className="container">
        <Banner headerText="Consegnando case in tutto il mondo" />
        {selectedHouse ? <House house={selectedHouse}/> : <HouseList setSelectedHouse={setSelectedHouse} />}
      </div>
    </>
  );
}
