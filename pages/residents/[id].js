import { useRouter } from "next/router";

import Layout from "../../components/Layout";
import ResidentWithData from "../../containers/ResidentWithData";

const Resident = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="Resident-root">
        <ResidentWithData id={+router.query.id} />
      </div>
      <style jsx>{`
        .Resident-root {
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

export default Resident;
