
const SectionTitle = ({subtitle, header}) => {
    // console.log(subtitle,header);
    return (
        <div className='text-center w-1/3 mx-auto mt-32'>
            <p className='text-[#D99904] inter italic capitalize'>---{subtitle}---</p>
            <h1 className='inter font-normal text-3xl border-y-2 border-[#E8E8E8] py-5 mt-5 mb-10 uppercase'>{header}</h1>
        </div>
    );
};

export default SectionTitle;