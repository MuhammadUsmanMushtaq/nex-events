import Link from 'next/link';

function Button({ children, link, onClick }) {
  if (link) {
    return (
      <Link href={link} legacyBehavior>
        <a className='w-full block md:w-[160px] md:inline md:mt-auto  text-center px-4 py-2 text-white  bg-blue-500 hover:bg-blue-550 hover:shadow-md rounded'>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      className=' w-full md:w-[160px] md:inline md:mt-auto  text-center px-4 py-2 text-white  bg-blue-500 hover:bg-blue-550 hover:shadow-md rounded'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
