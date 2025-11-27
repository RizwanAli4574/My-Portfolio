import { useEffect, useRef, } from "react";
import heroPic from "../assets/HeroPic/04.png";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

function useRotatingAnimation(initialAngle = 0, rotationSpeed = 0.3) {
  const ellipseRef = useRef(null);
  const angleRef = useRef(initialAngle);
  const frameRef = useRef(null);

  useEffect(() => {
    const rotate = () => {
      if (ellipseRef.current) {
        angleRef.current += rotationSpeed;
        ellipseRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }
      frameRef.current = requestAnimationFrame(rotate);
    };

    frameRef.current = requestAnimationFrame(rotate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [rotationSpeed]);

  return ellipseRef;
}

// function useRoleSwitcher(roles, interval = 1800) {
//   const [role, setRole] = useState(roles[0]);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setRole((prev) => roles[(roles.indexOf(prev) + 1) % roles.length]);
//     }, interval);

//     return () => clearInterval(id);
//   }, [roles, interval]);

//   return role;
// }

const Hero = () => {
  const ellipseRef = useRotatingAnimation();
  // const role = useRoleSwitcher([
  //   "FRONTEND DEVELOPER",
  //   "HTML",
  //   "CSS",
  //   "JAVASCRIPT",
  //   "REACT JS",
  //   "BOOTSTRAP",
  //   "TAILWIND",
  // ]);

  return (
    <section className="min-h-[calc(dvh-4rem)]  bg-no-repea md:pt-5 md:px-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pb-10 pt-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem] md:max-w-screen">
          <h1>
            <span className="mb-0 block text-3xl font-bold text-white">
              Hi - I'm Rizwan Ali
            </span>
            <span className="w-fit block lg:text-[1.75rem] text-2xl font-bold text-indigo-500 lg:pt-5 animate-pulse">
               FRONTEND DEVELOPER
            </span>
            {/* <span className="block lg:text-[1.75rem] text-2xl font-bold text-indigo-500 lg:pt-4 w-[350px]  transition-all duration-500 ">
              {role}
            </span> */}
          </h1>

          <h2 className="mt-0 text-xl text-white">
            Crafting innovative solutions to solve real-world problems
          </h2>

          <div className="mt-6 flex flex-wrap gap-3 ">
            <a
              href="#contact"
              className="min-w-25 cursor-pointer rounded-lg bg-indigo-500 px-[14px] py-[10px] text-center text-2xl font-bold text-white animate-pulse hover:animate-none"
            >
              Hire Me
            </a>

            <a
              href="https://www.linkedin.com/in/rizwan--ali"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg  px-[14px] py-[10px] text-2xl  text-blue-700 bg-indigo-50 animate-pulse hover:animate-none"
            >
              <span className="text-4xl">
                {" "}
                <FaLinkedin />{" "}
              </span>
            </a>

            <a
              href="https://github.com/RizwanAli4574"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg  px-[14px] py-[10px] text-2xl text-black bg-indigo-50 animate-pulse hover:animate-none"
            >
              <span className="text-4xl">
                <IoLogoGithub />{" "}
              </span>
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem] pt-10 sm:pt-0">
          <div className="relative w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[20rem] md:h-[20rem] lg:w-[25.75rem] lg:h-[25.75rem] ">
            <img
              src={heroPic}
              alt="Rizwan Ali"
              className="absolute left-0 top-0 h-full w-full object-contain "
            />

            <div
              ref={ellipseRef}
              className="absolute left-0 top-0 h-full w-full will-change-transform"
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 412 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="206"
                  cy="206.401"
                  r="204"
                  stroke="#6366F1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="24 46 67 89"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
