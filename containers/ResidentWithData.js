import Resident from "../components/Resident";
import { useQuery } from "@apollo/react-hooks";
import { RESIDENT_QUERY } from "../graphql/query";

import Loader from "../components/Loader";

const ResidentWithData = ({ id }) => {
  const { data, loading, error } = useQuery(RESIDENT_QUERY, {
    variables: {
      id: id,
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  if (!data && loading) return <Loader />;

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  return data && <Resident resident={data.character} />;
};

export default ResidentWithData;
