import React from 'react';
import './skillcard.css';

function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <img src={skill.icon} alt={skill.name} className="skill-icon" />
      <p className="skill-name">{skill.name}</p>
    </div>
  );
}

export default SkillCard;
