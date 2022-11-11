import EventItem from './EventItem';

function EventList({ items }) {
  return (
    <ul className='p-2'>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
