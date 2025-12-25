import "../styles/skills.css";
import { useTranslation } from 'react-i18next';

export const Skills = () => {
  const { t } = useTranslation();
  
  return (
    <section className="skills">
      <h2 className="skills__title">{t('skills.title')}</h2>

      <div id="skills" className="skills__container">
        <img
          src="https://skillicons.dev/icons?i=androidstudio,aws,azure,blender,css,discord,django,docker,figma,git,github,githubactions,gitlab,gmail,gradle,heroku,html,idea,instagram,js,java,jquery,kali,kotlin,kubernetes,latex,linkedin,linux,maven,mongodb,mysql,nodejs,npm,php,postgres,postman,powershell,pycharm,python,react,reactnative,redis,spring,vercel,vite,vscode,windows,yarn&perline=10"
          alt="Skill Icons"
          className="skills__image"
        />
        <p className="skills__description">
          {t('skills.description')}
        </p>
      </div>
    </section>
  );
};

export default Skills;