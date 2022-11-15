import { useRef } from 'react';
import Button from '../ui/button';

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className='p-2' onSubmit={submitHandler}>
      <div className='bg-white py-4 px-2 mt-2 flex flex-wrap gap-4 justify-between md:flex-row md:mt-2 md:items-center md:w-[640px] md:m-auto md:p-2 shadow  rounded'>
        <div>
          <label className='font-bold' htmlFor='year'>
            Year
          </label>
          <select
            id='year'
            className='border-2 border-gray-400 rounded ml-2 p-0.5'
            ref={yearInputRef}
          >
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </div>
        <div>
          <label className='font-bold' htmlFor='month'>
            Month
          </label>
          <select
            id='month'
            className='border-2 border-gray-400 rounded ml-2 p-0.5'
            ref={monthInputRef}
          >
            <option value='1'>January</option>
            <option value='2'>February</option>
            <option value='3'>March</option>
            <option value='4'>April</option>
            <option value='5'>May</option>
            <option value='6'>June</option>
            <option value='7'>July</option>
            <option value='8'>August</option>
            <option value='9'>September</option>
            <option value='10'>October</option>
            <option value='11'>November</option>
            <option value='12'>December</option>
          </select>
        </div>

        <Button>Find Event</Button>
      </div>
    </form>
  );
}

export default EventsSearch;
