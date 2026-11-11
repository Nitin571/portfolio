import React from 'react';
import { Code2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import {
  JavaIcon,
  JavaScriptIcon,
  CIcon,
  PythonIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  SpringIcon,
  ApiIcon,
  MySqlIcon,
  MongoDbIcon,
  GitIcon,
  GitHubIcon,
  VsCodeIcon,
  PostmanIcon,
  DsaIcon,
} from './TechIcons';
import '../styles/Skills.css';

const TECH_ICON_MAP = {
  JavaIcon,
  JavaScriptIcon,
  CIcon,
  PythonIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  SpringIcon,
  ApiIcon,
  MySqlIcon,
  MongoDbIcon,
  GitIcon,
  GitHubIcon,
  VsCodeIcon,
  PostmanIcon,
  DsaIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header skills-header">
          <h2 className="section-title">{skillsData.heading}</h2>
          <p className="section-desc">{skillsData.description}</p>
        </div>

        {/* Organized Category Rows */}
        <div className="skills-stack-layout">
          {skillsData.skillGroups.map((group) => (
            <div key={group.category} className="skill-row">
              <span className="skill-row-title">{group.category}</span>
              <div className="skill-chips-list">
                {group.skills.map((skill) => {
                  const IconComp = TECH_ICON_MAP[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="skill-chip">
                      <div className="chip-icon-box" aria-hidden="true">
                        <IconComp size={16} />
                      </div>
                      <span className="chip-name">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
