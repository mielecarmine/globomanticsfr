import { useState } from "react";
import HouseRow from "./HouseRow";
import { useEffect } from "react";

const housesArray = [
];



export default function HouseList({ setSelectedHouse }) {
  const [houses, setHouses] = useState(housesArray);
  
  useEffect(() => {
    fetch('/houses.json') 
      .then((response) => response.json()) 
      .then((data) => setHouses(data)) 
      .catch((error) => console.error('Errore nel caricare i dati:', error)); 
  }, []);

  function addHouse() {
    setHouses([
      ...houses,
      {
        id: 4,
        address: "Meel Kade 321, The Hague",
        country: "The Netherlands",
        description:
          "Discreetly situated a unique two storey period home enviably located on the corner of Krom Road and Recht Road offering seclusion and privacy. The house features a magnificent double height reception room with doors leading directly out onto a charming courtyard garden.",
        price: 259500,
        photo: "534182",
      },
    ]);
  }
  return (
    <>
      <div className="text-center mt-5">
        <h5 className="fs-3">Case attualmente disponibili</h5>
      </div>
      <table className="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">Indirizzo</th>
            <th scope="col">Paese</th>
            <th scope="col">Offerta corrente</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((h) => (
            <HouseRow key={h.id} house={h} setSelectedHouse={setSelectedHouse}/>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mt-3" onClick={addHouse}>
        Aggiungi casa
      </button>
    </>
  );
}
