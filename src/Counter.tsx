import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button
                className='bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded'
                onClick={() => setCount((c) => c + 1)}
            >
                Count {count}
            </button>
        </div>
    );
};
export default Counter;
