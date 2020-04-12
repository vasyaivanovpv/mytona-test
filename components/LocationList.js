import { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "./Loader";
import LocationBlock from "./LocationBlock";

const LocationList = ({ locations, onLoadMore, hasMore }) => {
  return (
    <div className="Locations-root">
      <InfiniteScroll
        dataLength={locations.results.length}
        next={() => {
          onLoadMore();
        }}
        hasMore={hasMore}
        loader={<Loader />}
      >
        {locations.results.map((location) => (
          <LocationBlock key={location.id} location={location} />
        ))}
      </InfiniteScroll>
      <style jsx>{`
        display: block;
        min-width: 398px;
        margin: 0 auto;
        padding: 0 10px;
      `}</style>
    </div>
  );
};

export default LocationList;
