import htmlpic from "../assets/F-Skills/Html.png";
import csspic from "../assets/F-Skills/Css.png";
import jspic from "../assets/F-Skills/Js.png";
import reactPic from "../assets/F-Skills/React.png";
import tailwind from "../assets/F-Skills/Tail.png";
import bootStrap from "../assets/F-Skills/Boot.png";
import word from "../assets/F-Skills/Word.png";
import excel from "../assets/F-Skills/Excel.png";
import canva from "../assets/F-Skills/Canva.png";
import vscode from "../assets/T-skills/Vs-Code.png";
// import vscode from "../assets/T-skills/Vs-Code.png";
// import vscode from "../assets/T-skills/Vs-Code.png";
import "../styles/Skills.css";

function Skills() {
  const fskills = [
    htmlpic, csspic, jspic, reactPic, tailwind,
    bootStrap,
  ];


  const tskills = [
    vscode,
  ];

  const oskills = [
    word, excel, canva
  ];

  return (
    <section className="bg-black md:py-40 pt-20 pb-10">

      {/* Frontend Skills */}
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


     
        {/* Tools Skills */}
      <h2 className="text-4xl font-bold text-center text-white mb-30 pt-15">
       Tools Skills
      </h2>

      <div className="flex justify-center">
  <div className="flex items-center">
    {tskills.map((img, idx) => (
      <img
        key={idx}
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

    </section>
  );
}

export default Skills;




