import { BusStop } from '../BusStop';
import './style.css';

export const JourneyDetail = ({ journey }) => {
  const busStopsMap = () => {
    return (
      <>
        {journey.stops.map((stop) => (
          <BusStop
            key={stop.name}
            name={stop.name}
            station={stop.station}
            time={stop.time}
          />
        ))}
      </>
    );
  };

  console.log(journey);
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">{busStopsMap(journey)}</div>
    </div>
  );
};
