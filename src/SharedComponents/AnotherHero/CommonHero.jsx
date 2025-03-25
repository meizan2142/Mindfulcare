const CommonHero = ({heading, description}) => {
    return (
        <div className="flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-16 md:py-20 lg:py-24 bg-linear-to-r from-[#5EB47C] to-[#007D6E] bg-cover bg-center">
            <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-col sm:flex-row">
                <div className='border-3 w-[5px] sm:h-[328px] hidden 2xl:flex md:flex lg:flex h-[40px] border-white'>
                </div>
                <div className='py-4 sm:py-8 md:py-12 lg:py-20 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10'>
                    <h1
                        style={{ fontFamily: 'Manrope' }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] font-extrabold text-white"
                    >
                        {heading}
                    </h1>
                    <p
                        style={{ fontFamily: 'Poppins' }}
                        className="text-base sm:text-lg md:text-xl lg:text-[18px] font-normal text-white w-full sm:w-5/6 md:w-4/5 lg:w-2/3 leading-normal sm:leading-6"
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CommonHero