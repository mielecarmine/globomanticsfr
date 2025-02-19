import Image from "next/image";
import defaultPhoto from "../helpers/defaultPhoto.jpeg"

export default function House({ house }) {
  return (
    <>
      <div className="row mt-4">
        <div className="col-5">
          <Image
            className="img-fluid"
            src={house.photo ? `/housesImages/${house.photo}.jpeg` : defaultPhoto }
            alt="house"
            width={"500"}
            height={"500"}
          />
        </div>
        <div className="col-7 d-flex flex-column">
          <h3 className="fs-2 fw-bold">{house.country}</h3>
          <h2 className="fs-1">{house.address}</h2>
          <h2 className="fs-3">{house.price}</h2>
          <div className="">{house.description}</div>
        </div>
      </div>
    </>
  );
}
