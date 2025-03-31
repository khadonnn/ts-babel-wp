import '@/style.css';
import IMAGE from '@/bg.png';
import LOGO from '@/react.svg';
import Counter from '@/Counter';

const App = () => {
    return (
        <div className='flex flex-col items-center h-screen'>
            <img src={IMAGE} alt='bg' className='w-full h-auto ' />
            <div className='flex justify-center items-center'>
                <img
                    src={LOGO}
                    alt='logo'
                    width={100}
                    height={100}
                    className='animate-spin-infinity'
                />
                <h1 className='text-cus-red text-2xl'>
                    App React - Typescript - Webpack - Tailwind -{' '}
                    {process.env.NODE_ENV} {process.env.name}
                </h1>
            </div>
            <Counter />
        </div>
    );
};

export default App;
