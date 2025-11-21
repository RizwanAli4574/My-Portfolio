import aboutpic from "../assets/About/About-pic.png";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-black px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side — Text */}
        <div>
          <h2 className="text-4xl font-bold mb-5 text-white">About Me</h2>
          <p className="text-white leading-relaxed">
            I'm a passionate Frontend Developer who loves building modern and
            responsive web applications.
          </p>
        </div>

        {/* Right Side — Image */}
        <div className="flex justify-center">
          <img
            src={aboutpic}
            alt="Profile"
            className="w-100 h-100 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
