import "../styles/skills.css";
export const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">Programming skills</h2>



      <div id="skills" className="skills__container">
        <img
          src="https://skillicons.dev/icons?i=androidstudio,aws,azure,blender,css,discord,django,docker,figma,git,github,githubactions,gitlab,gmail,gradle,heroku,html,idea,instagram,js,java,jquery,kali,kotlin,kubernetes,latex,linkedin,linux,maven,mongodb,mysql,nodejs,npm,php,postgres,postman,powershell,pycharm,python,react,reactnative,redis,spring,vercel,vite,vscode,windows,yarn&perline=10"
          alt="Skill Icons"
          className="skills__image"
        />
        <p className="skills__description">
        These are the tools I work with every day. I don’t stick to any specific language or framework — I choose whatever fits the challenge best and push it as far as it needs to go. As a developer, I can pick up any technology because it’s no longer just about writing functions; it’s about understanding the logic, the flow, and how information moves through the system. Once you get that, everything else is just a matter of adaptation.
        </p>

      </div>
    </section>
  );
};

export default Skills;