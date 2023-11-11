import { JourneyPicker } from '../../components/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail';
import React, { useState } from 'react';
import { SelectedSeat } from '../../components/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {!journey ? null : (
        <>
          <div>Nalezeno spojení s id {journey.journeyId}</div>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
        </>
      )}
    </main>
  );

  /*
  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {!journey ? null : (
        <>
          <div>Nalezeno spojení s id {journey.journeyId}</div>
          <JourneyDetail
            name={journey.stops.name}
            station={journey.stops.station}
            time={journey.stops.time}
          />
        </>
      )}
    </main>
  );
}*
*/
};
