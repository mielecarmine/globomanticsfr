import Image from "next/image";
import styles from "../styles/Banner.module.css";

export default function Banner(props) {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <Image
            src={"/GloboLogo.png"}
            alt="GloboLogo"
            width={"400"}
            height={"250"}
          />
        </div>
        <div className="col-6 d-flex align-items-center">
          <h2 className={`fs-2 fw-bold fst-italic ${styles.coloured}`}>
            {props.headerText}
          </h2>
        </div>
      </div>
    </>
  );
}
