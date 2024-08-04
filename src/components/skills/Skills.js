import React from 'react';
import { SkillsData } from './SkillsData';
import SkillCard from './SkillCard';
import './skills.css';

function Skills() {
  const data = SkillsData;

  return (
    <div className="skills">
      <div className="skills-container">
        {data.map((item) => (
          <div className="skills-section" key={item.type}>
            <h3 className="skills-section-title">{item.type}</h3>
            <div className="skills-list">
              {item.list.map((skill) => (
                <SkillCard skill={skill} key={skill.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
