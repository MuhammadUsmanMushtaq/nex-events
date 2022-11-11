import Image from 'next/image';
import Button from '../ui/button';
import { MdOutlineDateRange } from 'react-icons/md';
import { BiMap } from 'react-icons/bi';

function EventItem({ id, title, image, date, location }) {
  const dateReadable = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreMoreLink = `/events/${id}`;

  return (
    <li className='p-4 shadow  rounded mb-4 bg-white md:flex md:w-[640px] m-auto'>
      <div className='w-full md:w-[240px] mr-8 '>
        <Image
          src={image}
          alt='title'
          width={400}
          height={400}
          className='w-auto rounded'
        />
      </div>

      <div className=' md:flex md:flex-col'>
        <h2 className='pt-4 text-2xl '>{title}</h2>
        <div className='py-4 flex gap-2 items-center'>
          <MdOutlineDateRange size={24} />
          <p className='font-bold text-gray-600 '>{dateReadable}</p>
        </div>
        <div className='pb-4 flex gap-2 items-center'>
          <BiMap size={24} />
          <address className=' w-[180px]'>{location}</address>
        </div>

        <Button link={exploreMoreLink}>
          Explore Event <span className='ml-2'>&#10132;</span>
        </Button>
      </div>
    </li>
  );
}

export default EventItem;
