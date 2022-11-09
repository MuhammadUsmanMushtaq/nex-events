import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/EventList';

function Home() {
  const featureEvents = getFeaturedEvents();
  return (
    <div className='p-4 bg-slate-300'>
      <EventList items={featureEvents} />
    </div>
  );
}

export default Home;
