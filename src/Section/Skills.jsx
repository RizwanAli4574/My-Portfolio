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
  const fskills = [
    htmlpic, csspic, jspic, reactPic, tailwind,
    bootStrap,
  ];

  const oskills = [
    word, excel, canva
  ];

  // const fskills = [
  //   htmlpic, csspic, jspic, reactPic, tailwind,
  //   bootStrap, word, excel, canva
  // ];

  return (
    <section className="bg-black md:py-40 pt-20 pb-10">
      <h2 className="text-4xl font-bold text-center text-white mb-30">
       Frontend Skills
      </h2>

      <div className="scroll-container">
        <div className="scroll-items">

         
          {fskills.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

         
          {fskills.map((img, idx) => (
            <img
              key={idx + fskills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}
         
          {fskills.map((img, idx) => (
            <img
              key={idx + fskills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

        </div>
      </div>


      <h2 className="text-4xl font-bold text-center text-white mb-30 pt-15">
       Other Skills
      </h2>

      <div className="scroll-container">
        <div className="scroll-items">

          {oskills.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

      
          {oskills.map((img, idx) => (
            <img
              key={idx + oskills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

        </div>
      </div>


      {/* <h2 className="text-4xl font-bold text-center text-white mb-30">
        Skills
      </h2>

      <div className="scroll-container">
        <div className="scroll-items">

         
          {skills.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

         
          {skills.map((img, idx) => (
            <img
              key={idx + skills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

        </div>
      </div> */}
    </section>
  );
}

export default Skills;




