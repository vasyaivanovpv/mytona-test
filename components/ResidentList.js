import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Loader from "./Loader";
import ResidentBlock from "./ResidentBlock";

const ResidentList = ({ location }) => {
  const [lastIndex, setLastIndex] = useState(19);
  return (
    <div className="ResidentList-root">
      <h2 className="ResidentList-header">Residents</h2>
      <div className="ResidentList-list">
        <InfiniteScroll
          dataLength={lastIndex}
          next={() => {
            setLastIndex(lastIndex + 20);
          }}
          hasMore={location.residents.length > lastIndex}
          loader={<Loader />}
        >
          {location.residents.slice(0, lastIndex).map((resident) => {
            console.log(resident);
            if (!resident.id)
              return (
                <p style={{ textAlign: "center" }}>
                  <b>No residents!</b>
                </p>
              );
            return (
              <ResidentBlock
                key={resident.id}
                resident={resident}
                locationName={location.name}
              />
            );
          })}
        </InfiniteScroll>
      </div>
      <style jsx>
        {`
          .ResidentList-root {
            min-width: 398px;
            margin: 0 auto;
          }
          .ResidentList-header {
            text-align: center;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            margin-bottom: 14px;
          }
        `}
      </style>
    </div>
  );
};

export default ResidentList;
