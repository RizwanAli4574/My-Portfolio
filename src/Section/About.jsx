import aboutpic from "../assets/About/About-pic-2.png";

function About() {
  return (

  <section
  id="about"
  className="flex items-center  px-6 
             pt-20 md:pt-35 lg:pt-45 pb-20 md:pb-26 md:px-22"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Text */}
    <div>
      <h2 className="text-4xl font-bold mb-5 text-white">About Me</h2>
      <p className="text-white leading-relaxed">
        I'm a passionate Frontend Developer with 1.5 years of experience,
        skilled in HTML, CSS, JavaScript, Tailwind, Bootstrap, and React. I
        focus on building responsive, modern, and clean user interfaces
        while continuously learning and improving.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src={aboutpic}
        alt="Profile"
        className="
          w-60 h-60        /* default: small screens */
          md:w-80 md:h-80  /* medium screens */
          lg:w-96 lg:h-96  /* large screens */
          rounded-2xl object-cover shadow-lg
        "
      />
    </div>
  </div>
</section>

  );
}

export default About;



 //   <section
  //     id="about"
  //     className=" flex items-center bg-black px-6 py-20"
  //   >
  //     <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
  //       <div>
  //         <h2 className="text-4xl font-bold mb-5 text-white">About Me</h2>
  //         <p className="text-white leading-relaxed">
  //           I'm a passionate Frontend Developer with 1.5 years of experience,
  //           skilled in HTML, CSS, JavaScript, Tailwind, Bootstrap, and React. I
  //           focus on building responsive, modern, and clean user interfaces
  //           while continuously learning and improving.
  //         </p>
  //       </div>

       
  //       <div className="flex justify-center">
  //         <img
  //           src={aboutpic}
  //           alt="Profile"
  //           className="
  //   w-60 h-60      /* default: small screens */
  //   md:w-80 md:h-80 /* medium screens */
  //   lg:w-100 lg:h-100  /* large screens */
  //   rounded-2xl object-cover shadow-lg
  // "
  //         />
  //       </div>
  //     </div>
  //   </section>