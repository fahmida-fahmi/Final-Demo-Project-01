
const Button = ({button}) => {
    return (
        <div className='flex justify-center '>

            <button className='cursor-pointer uppercase rounded-lg bg-white p-4 border-b-4 border-red-500  text-black font-semibold'>{button}</button>
        </div>
    );
};

export default Button;