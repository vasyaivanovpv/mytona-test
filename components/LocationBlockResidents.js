const LocationBlockResidents = ({ residents }) => (
  <div className="LocationBlockResidents-root">
    {residents.map((resident) =>
      resident.id ? (
        <div key={resident.id} className="LocationBlockResidents-resident">
          <div className="LocationBlockResident-root">
            <img src={resident.image} alt="resident" />
          </div>
        </div>
      ) : null
    )}
    <style jsx>{`
      .LocationBlockResidents-root {
        display: flex;
      }
      .LocationBlockResidents-resident {
        margin-right: 20px;
      }
      .LocationBlockResident-root {
        width: 50px;
        height: 50px;
      }
      .LocationBlockResidents-resident:last-child {
        margin-right: 0;
      }
    `}</style>
  </div>
);

export default LocationBlockResidents;
