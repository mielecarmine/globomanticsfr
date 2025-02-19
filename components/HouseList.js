import HouseRow from "./HouseRow";

export default function HouseList() {
  return (
    <>
      <div className="text-center mt-5">
        <h5 className="fs-3">Case attualmente disponibili</h5>
      </div>
      <table class="table table-hover mt-5">
        <thead>
          <tr>
            <th scope="col">Indirizzo</th>
            <th scope="col">Paese</th>
            <th scope="col">Offerta corrente</th>
          </tr>
        </thead>
        <tbody>
            <HouseRow />
        </tbody>
      </table>
    </>
  );
}
