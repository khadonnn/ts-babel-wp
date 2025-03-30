import '@/style.css';
import IMAGE from '@/bg.png';
import LOGO from '@/react.svg';
const App = () => {
    return (
        <>
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
                    App React Typescript webpack -{process.env.NODE_ENV}{' '}
                    {process.env.name}
                </h1>
            </div>
        </>
    );
};

export default App;
