import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <div className='p-2 '>
      <h2 className='text-3xl md:4xl mt-6 text-center font-extrabold  drop-shadow-lg '>
        Featured Events
      </h2>
      <EventList items={featureEvents} />
    </div>
  );
}

export default Home;
