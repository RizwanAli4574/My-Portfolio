import htmlpic from "../assets/F-Skills/Html.png";
import csspic from "../assets/F-Skills/Css.png";
import jspic from "../assets/F-Skills/Js.png";
import reactPic from "../assets/F-Skills/React.png";
import tailwind from "../assets/F-Skills/Tail.png";
import bootStrap from "../assets/F-Skills/Boot.png";

import word from "../assets/OSkills/Word.png";
import excel from "../assets/OSkills/Excel.png";
import canva from "../assets/OSkills/Canva.png";
import PP from "../assets/OSkills/P-Point.png";
import Ai from "../assets/OSkills/Ai.png";

import vscode from "../assets/T-skills/Vs-Code.png";
import git from "../assets/T-skills/Git.png";
import github from "../assets/T-skills/Github.png";
import npm from "../assets/T-skills/Npm.png";
import dev from "../assets/T-skills/DevTools.webp";
import "../styles/Skills.css";

function Skills() {
  const fskills = [htmlpic, csspic, jspic, reactPic, tailwind, bootStrap];

  const tskills = [vscode, git, github, dev, npm];

  const oskills = [word, excel, PP, canva, Ai];

  return (
    <section className="bg-black md:py-40 pt-20 pb-10">
      {/* Frontend Skills */}
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-30 animate-pulse">
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
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-30 pt-15 animate-pulse">
        Tools Skills
      </h2>

      <div className=" scroll-container-2">
        <div className=" scroll-items">
          {tskills.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

           {tskills.map((img, idx) => (
            <img
              key={idx + tskills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}

          {tskills.map((img, idx) => (
            <img
              key={idx + tskills.length}
              src={img}
              alt="Skill"
              className="skill-img"
            />
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <h2 className="text-4xl font-bold text-center text-indigo-400 mb-30 pt-15 animate-pulse">
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
              className="skill-img "
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
