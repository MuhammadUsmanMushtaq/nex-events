import Image from 'next/image';
import { BiMap } from 'react-icons/bi';
import { MdOutlineDateRange } from 'react-icons/md';

function EventLogistics(props) {
  const { title, date, address, image, imageAlt, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className='p-4 md:p-8 md:mt-4 md:gap-4 md:m-auto md:rounded  md:w-[640px] md:bg-gray-600/90 md:flex md:items-top'>
      <div className='w-full md:rounded md:w-[240px]'>
        <Image
          src={image}
          width={400}
          height={400}
          alt={imageAlt}
          className='md:rounded'
        />
      </div>
      <ul className='md:text-blue-200 tracking-wide'>
        <div className='flex gap-2 items-center pt-4 md:pt-0'>
          <MdOutlineDateRange size={24} />
          <p>{humanReadableDate}</p>
        </div>
        <div className='flex gap-2 items-center py-4 '>
          <BiMap size={24} />
          <address className='w-[180px]'>{address}</address>
        </div>
        <p className='md:w-[400px]'>{description}</p>
      </ul>
    </section>
  );
}

export default EventLogistics;
