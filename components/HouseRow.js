import currencyFormatter from "@/helpers/currencyFormatter";

export default function HouseRow({ house, setSelectedHouse }) {
  return (
    <tr onClick={() => setSelectedHouse(house)}>
      <td>{house.address}</td>
      <td>{house.country}</td>
      <td>{currencyFormatter.format(house.price)}</td>
    </tr>
  );
}
