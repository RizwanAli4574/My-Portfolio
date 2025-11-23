// import htmlpic from "../assets/Skills/Html.png";
// import csspic from "../assets/Skills/Css.png";
// import jspic from "../assets/Skills/Js.png";
// import react from "../assets/Skills/React.png";
// import tailwind from "../assets/Skills/Tail.png";
// import BootStrap from "../assets/Skills/Boot.png";

// function Skills(){
//     return (
//         <section id="skills" className="bg-black py-16">
//   <h2 className="text-4xl font-bold text-center text-white mb-10">
//     Skills
//   </h2>

//   <div className="overflow-hidden whitespace-nowrap w-full">
//     <div className="flex items-center space-x-10 animate-scroll">

//       {/* HTML */}
//       <img src={htmlpic}className="w-40 h-40" alt="HTML" />

//       {/* CSS */}
//       <img src={csspic} className="w-40 h-40" alt="CSS" />

//       {/* JavaScript */}
//       <img src={jspic} className="w-40 h-40" alt="JavaScript" />

//       {/* React */}
//       <img src={react} className="w-40 h-40" alt="React" />

//       {/* Tailwind */}
//       <img src={tailwind} className="w-40 h-40" alt="Tailwind" />

//       {/* Bootstrap */}
//       <img src={BootStrap} className="w-40 h-40" alt="Bootstrap" />

//       {/* HTML */}
//       <img src={htmlpic}className="w-40 h-40" alt="HTML" />

//       {/* CSS */}
//       <img src={csspic} className="w-40 h-40" alt="CSS" />

//       {/* JavaScript */}
//       <img src={jspic} className="w-40 h-40" alt="JavaScript" />

//       {/* React */}
//       <img src={react} className="w-40 h-40" alt="React" />

//       {/* Tailwind */}
//       <img src={tailwind} className="w-40 h-40" alt="Tailwind" />

//       {/* Bootstrap */}
//       <img src={BootStrap} className="w-40 h-40" alt="Bootstrap" />

//     </div>
//   </div>
// </section>

//     )
//    }

//    export default Skills

import htmlpic from "../assets/Skills/Html.png";
import csspic from "../assets/Skills/Css.png";
import jspic from "../assets/Skills/Js.png";
import reactPic from "../assets/Skills/React.png";
import tailwind from "../assets/Skills/Tail.png";
import bootStrap from "../assets/Skills/Boot.png";
import word from "../assets/Skills/Word.png";
import excel from "../assets/Skills/Excel.png";
import canva from "../assets/Skills/Canva.png";
import "../styles/Skills.css";

function Skills() {
  const skills = [
    htmlpic, csspic, jspic, reactPic, tailwind,
    bootStrap, word, excel, canva
  ];

  // Triple repeat
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="bg-black py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Skills
      </h2>

      <div className="scroll-container">
        <div className="scroll-items">
          {repeatedSkills.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Skill"
              className="w-40 h-40 mx-5"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
