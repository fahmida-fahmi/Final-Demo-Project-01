import img from '../../../../assets/others/cupcake-dribbble.gif'
const HomeDashboard = () => {
    return (
        <div className='bg-white h-[100vh] flex justify-center flex-col items-center'>
            <img src={img} alt="" />
            <h1 className='text-7xl mx-auto w-2/3 text-center mb-56 cinzel'>Welcome to Bistro Boss Your Dashboard</h1>
        </div>
    );
};

export default HomeDashboard;