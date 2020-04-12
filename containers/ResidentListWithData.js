import { useQuery } from "@apollo/react-hooks";
import { RESIDENTS_QUERY } from "../graphql/query";

import Loader from "../components/Loader";
import ResidentList from "../components/ResidentList";

const ResidentListWithData = ({ id }) => {
  const { data, loading, error } = useQuery(RESIDENTS_QUERY, {
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

  const onLoadMore = () => {};

  return (
    <>
      {data && (
        <ResidentList
          location={data.location}
          onLoadMore={onLoadMore}
          loading={loading}
        />
      )}
    </>
  );
};

export default ResidentListWithData;
