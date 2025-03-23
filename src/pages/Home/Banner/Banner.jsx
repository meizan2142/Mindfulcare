import HomeBannerimage from '/src/assets/Home/Bannerimage.png';
import Logo1 from '/src/assets/Home/logo1.png';
import Logo2 from '/src/assets/Home/logo2.png';
import Logo3 from '/src/assets/Home/logo3.png';
import Logo4 from '/src/assets/Home/logo4.png';

const Banner = () => {
  return (
    <div className="grid lg:flex w-full 2xl:w-[1500px] mx-auto justify-between ">
      <div className="2xl:w-1/2 ">
        <div className="grid space-y-12 pt-10 2xl:pt-24">
          <h1
            style={{ fontFamily: 'Manrope, sans-serif' }}
            className="text-5xl lg:text-[68px] font-extrabold"
          >
            Healthy Minds, Happy Lives{' '}
            <span className="text-[#EC744A]"> Mental Health</span> Consultancy
          </h1>
          <p
            className="text-lg font-normal"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam.{' '}
          </p>
          <a
            style={{ fontFamily: 'Manrope, sans-serif' }}
            className=" bg-[#EC744A] text-white w-44 rounded-full text-center p-3 text-xl font-bold"
            href=""
          >
            Get Started
          </a>
          <div className="grid grid-cols-2 lg:flex gap-x-6 gap-y-3 pt-4 2xl:pt-8">
            <span>
              <img src={Logo1} alt="" />
            </span>
            <span>
              <img src={Logo2} alt="" />
            </span>
            <span>
              <img src={Logo3} alt="" />
            </span>
            <span>
              <img src={Logo4} alt="" />
            </span>
          </div>
        </div>
      </div>
      <div className="2xl:w-1/2 pt-8 2xl:pt-44">
        <img src={HomeBannerimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
