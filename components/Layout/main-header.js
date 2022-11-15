import Link from 'next/link';

function MainHeader() {
  return (
    <header className='px-4 py-6 bg-black text-blue-200 flex justify-between items-center'>
      <div className='text-2xl md:text-3xl '>
        <Link href='/'>NextEvent</Link>
      </div>
      <nav>
        <ul>
          <li className='md:text-1xl '>
            <Link href='/events'>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
