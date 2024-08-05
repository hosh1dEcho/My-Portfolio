import React from 'react';
import "./skills.css"
import Frontend from './Frontend';
import Backend from './Backend';
import Learn from './Learn';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container grid container">
        <Frontend/>
        <Backend/>
        <Learn/>
        
      </div>
    </section>
  );
}

export default Skills