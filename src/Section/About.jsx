import aboutpic from "../assets/About/About-pic-2.png";

function About() {
  return (
    <section
      id="about"
      className=" py-16 flex items-center bg-black px-6 pt-22"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-4xl font-bold mb-5 text-white">About Me</h2>
          <p className="text-white leading-relaxed">
            I'm a passionate Frontend Developer with 1.5 years of experience,
            skilled in HTML, CSS, JavaScript, Tailwind, Bootstrap, and React. I
            focus on building responsive, modern, and clean user interfaces
            while continuously learning and improving.
          </p>
        </div>

       
        <div className="flex justify-center">
          <img
            src={aboutpic}
            alt="Profile"
            className="
    w-60 h-60      /* default: small screens */
    md:w-80 md:h-80 /* medium screens */
    lg:w-100 lg:h-100  /* large screens */
    rounded-2xl object-cover shadow-lg
  "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
