import Link from 'next/link';
import Image from 'next/image';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const dateReadable = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const exploreMoreLink = `/events/${id}`;

  return (
    <li className='p-4 shadow  rounded mb-4 bg-white'>
      <h2 className='py-4 text-2xl'>{title}</h2>
      <Image
        src={'' + image}
        alt='title'
        width={360}
        height={160}
        loading='lazy'
      />

      <div className='py-2'>
        <p className='font-bold text-gray-600 mb-2'>{dateReadable}</p>
        <address className='py-2 w-[180px]'>{location}</address>

        <div className='flex justify-end items-end'>
          <Link
            className='p-2 underline text-blue-700 cursor-pointer'
            href={exploreMoreLink}
          >
            Explore more
          </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
