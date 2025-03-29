import '@/style.css';
import IMAGE from '@/bg.png';
import LOGO from '@/react.svg';
const App = () => {
    return (
        <>
            <img src={IMAGE} alt='bg' width={1000} height={200} />
            <img src={LOGO} alt='logo' width={100} height={100} />
            <h1 className='text-orange-500'>App React Typescript webpack</h1>
        </>
    );
};

export default App;
