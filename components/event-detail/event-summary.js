function EventSummary(props) {
  const { title } = props;

  return (
    <section className='bg-gradient-to-r from-cyan-700 to-blue-500  text-white p-8  text-center shadow-md tracking-widest'>
      <h1 className='text-3xl md:text-4xl font-extrabold  drop-shadow-lg'>
        {title}
      </h1>
    </section>
  );
}

export default EventSummary;
