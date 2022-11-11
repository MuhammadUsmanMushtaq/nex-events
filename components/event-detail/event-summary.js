function EventSummary(props) {
  const { title } = props;

  return (
    <section className='bg-blue-800 text-white p-8  text-center shadow-md tracking-widest'>
      <h1 className='text-3xl md:text-4xl'>{title}</h1>
    </section>
  );
}

export default EventSummary;
