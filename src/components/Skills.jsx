import React from "react";
import "./css_modules/Skills.css";

const skills = [
  { name: "Java", link: "https://www.java.com/", imgSrc: "https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=512", imgAlt: "Java" },
  { name: "Python", link: "https://www.python.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg", imgAlt: "Python" },
  { name: "Javascript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png", imgAlt: "Javascript" },
  { name: "Git", link: "https://git-scm.com/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg", imgAlt: "Git" },
  { name: "React", link: "https://react.dev/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", imgAlt: "React" },
  { name: "Spring Boot", link: "https://spring.io/projects/spring-boot", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg", imgAlt: "Spring Boot" },
  // { name: "TensorFlow", link: "https://www.tensorflow.org/", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg", imgAlt: "TensorFlow" },
];

const SkillItem = ({ name, link, imgSrc, imgAlt }) => (
    <div className="skill-item">
        <a target="_blank" rel="noopener noreferrer" href={link} className="skill-link">
            <img 
                alt={imgAlt}
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                className="skill-image"
                src={imgSrc}
                style={{ color: "transparent" }}
            />
        </a>
        <p className="skill-name">{name}</p>
    </div>
);

export default function Skills() {
  return (
    <div className="main">
      <div  style={{ textAlign: "center" }}  className="about">
        <span className="span-btn">Skills</span>
      </div>
      <p className="description-txt">The skills, I am good at:</p>
      <div className="skills-grid">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            link={skill.link}
            imgSrc={skill.imgSrc}
            imgAlt={skill.imgAlt}
          />
        ))}
      </div>
    </div>
  );
}

