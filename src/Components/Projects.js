import React, { Component } from 'react';

class Projects extends Component {
  render() {

    if(this.props.data){
      var gameProjects = this.props.data.game_projects.map(function(project) {
        return (
          <div key={project.title} className="row education">
            <div className="row">
              <h1><span>{project.title}</span></h1>
            </div>
            <div className="row">
              <h3><span>{project.description}</span></h3>
            </div>

            <div className = "row">
              <div className="six columns main-col">
                <img src="images/projects/othello.png" width="640" height="480"/>
              </div>
              <div className="six columns main-col">
                <video width="640" height="480" autoPlay controls>
                  <source src="videos/intro.mp4" type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="row">
              <div className="four columns main-col">
                <h3><span>Engine: {project.credits.engine}</span></h3>
              </div>
              <div className="four columns main-col">
                <h3><span>Time: {project.credits.time}</span></h3>
              </div>
            </div>
          </div>
        )
      });

      // var skillmessage = this.props.data.skillmessage;
      // var education = this.props.data.education.map(function(education){
      //   return <div key={education.school}><h3>{education.school}</h3>
      //   <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
      //   <p>{education.description}</p></div>
      // })
      // var work = this.props.data.work.map(function(work){
      //   return <div key={work.company}><h3>{work.company}</h3>
      //       <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
      //       <p>{work.description}</p>
      //   </div>
      // })
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'bar-expand '+skills.name.toLowerCase();
      //   return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="gameProjects">
      <div className="row twelve columns"><h1> Game Projects </h1></div>
      <div>
         {gameProjects}
      </div>
   </section>
    );
  }
}

export default Projects;
