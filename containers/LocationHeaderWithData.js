import { useQuery } from "@apollo/react-hooks";
import { LOCATION_QUERY } from "../graphql/query";

import LocationHeader from "../components/LocationHeader";
import Loader from "../components/Loader";

const LocationHeaderWithData = ({ id }) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, {
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
  return (
    <>
      {data && (
        <LocationHeader name={data.location.name} type={data.location.type} />
      )}
    </>
  );
};

export default LocationHeaderWithData;
