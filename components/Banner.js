import Image from "next/image";
import styles from "../styles/Banner.module.css"

export default function Banner() {
    return (
        <>
            <div className="row">
                <div className="col-5">
                    <Image src={"/GloboLogo.png"} alt="GloboLogo" width={"300"} height={"150"} />
                </div>
                <div className="col-7 d-flex align-items-center">
                    <h2 className={`fs-3 fw-bold ${styles.coloured}`}>Consegnando case in tutto il mondo</h2>
                </div>
            </div>
        </>
    );
}