import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins']  max-sm:p-2 max-sm:mx-5 min-h-screen "
      >
        <div className="WRAPPER mt-12 flex max-sm:flex-col gap-5 ">
          <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold ">
            <h3 className="text-[#00040f] dark:text-white">
              Hi, there! <br />I am
            </h3>
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200">
              Ashutosh
              
            </span>

            <p className="ABOUT h-auto text-xl max-sm:text-[15px] bg-clip-text text-transparent  bg-gradient-to-r  from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-3 pl-1">
            A, front-end web developer with a passion for crafting responsive and visually appealing websites. I specialize in building intuitive user interfaces with a focus on clean design and seamless user experience. As I continue to develop my skills.


            </p>
          </div>

          <Lottie
            animationData={computer}
            loop={true}
            className="max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
          />
        </div>
      </section>
    </>
  );
};
export default About;
