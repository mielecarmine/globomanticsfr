import Banner from "./Banner";
import HouseList from "./HouseList";

export default function App() {
  return (
    <>
      <div className="container">
        <Banner headerText="Consegnando case in tutto il mondo" />
        <HouseList />
      </div>
    </>
  );
}
