import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import LocationHeaderWithData from "../../containers/LocationHeaderWithData";
import ResidentListWithData from "../../containers/ResidentListWithData";

const Location = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="Location-root">
        <LocationHeaderWithData id={+router.query.id} />
        <ResidentListWithData id={+router.query.id} />
      </div>
      <style jsx>{`
        .Location-root {
          position: relative;
          display: block;
          min-width: 398px;
          margin: 0 auto;
          padding: 0 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Location;
