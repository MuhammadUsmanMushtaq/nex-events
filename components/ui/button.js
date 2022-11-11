import Link from 'next/link';

function Button({ children, link }) {
  return (
    <Link href={link} legacyBehavior>
      <a className='w-full block md:w-[160px] md:inline  text-center px-4 py-2 text-white  bg-blue-500 hover:shadow-md rounded'>
        {children}
      </a>
    </Link>
  );
}

export default Button;
