import Link from "next/link";
import ArrowBackBtn from "./ArrowBackBtn";

const Resident = ({ resident }) => (
  <div className="Resident-container">
    <div className="Resident-arrowBack">
      <ArrowBackBtn />
    </div>
    <div className="Resident-img">
      <div className="ResidentImg-root">
        <img src={resident.image} alt="resident" />
      </div>
    </div>
    <div className="Resident-body">
      <div className="Resident-section">
        <div className="Resident-header">{resident.name}</div>
        <div className="Resident-location">
          <Link
            href="/locations/[id]"
            as={`/locations/${resident.location.id}`}
          >
            <a>{resident.location.name}</a>
          </Link>
        </div>
        <div className="Resident-species">{resident.species}</div>
      </div>
      <div className="Resident-section">
        <div className="Resident-header">Status:</div>
        <div className="Resident-text">{resident.status}</div>
      </div>
      <div className="Resident-section">
        <div className="Resident-header">Home planet:</div>
        <div className="Resident-text">{resident.origin.name}</div>
      </div>
    </div>
    <style jsx>{`
      .Resident-container {
      }
      .Resident-arrowBack {
        position: absolute;
        top: 10px;
        left: 14px;
      }
      .Resident-img {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 40px 0;
      }
      .ResidentImg-root {
        width: 300px;
        height: 300px;
      }
      .Resident-body {
        padding: 13px;
      }
      .Resident-section {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        margin-bottom: 7px;
      }
      .Resident-text {
        color: #dcdcdc;
      }
      .Resident-location,
      .Resident-species {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #dcdcdc;
      }
      @media (min-width: 424px) {
        .Resident-body {
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Resident;
