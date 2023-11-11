import { JourneyPicker } from '../../components/JourneyPicker';
import React, { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  };

  console.log(journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {!journey ? null : <div>Nalezeno spojení s id {journey.journeyId}</div>}
    </main>
  );
};
