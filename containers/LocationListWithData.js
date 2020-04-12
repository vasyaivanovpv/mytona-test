import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOCATIONS_QUERY } from "../graphql/query";

import LocationList from "../components/LocationList";
import Loader from "../components/Loader";

const LocationListWithData = () => {
  const { data, loading, error, fetchMore } = useQuery(LOCATIONS_QUERY, {
    notifyOnNetworkStatusChange: true,
  });
  const [hasMore, setHasMore] = useState(true);

  if (!data && loading) return <Loader />;

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }

  const onLoadMore = () => {
    fetchMore({
      variables: {
        cursor: data.locations.info.next,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setHasMore(!!previousResult.locations.info.next);
        return previousResult.locations.info.next
          ? {
              locations: {
                ...previousResult.locations,
                results: [
                  ...previousResult.locations.results,
                  ...fetchMoreResult.locations.results,
                ],
                info: fetchMoreResult.locations.info,
              },
            }
          : previousResult;
      },
    });
  };

  return (
    <>
      {data && (
        <LocationList
          locations={data.locations}
          onLoadMore={onLoadMore}
          hasMore={hasMore}
        />
      )}
    </>
  );
};

export default LocationListWithData;
