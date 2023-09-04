import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about" style={{backgroundColor:"#474747"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img src="me.jpg" alt="Satyam Shrivastava" className="img-fluid" style={{border:"2px solid black", borderRadius:"4%"}} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-content ">
              <h2 className='text-light'>About Me</h2>
              <p className='text-light'>
                Hi, I'm Satyam Shrivastava, a passionate software engineer with a strong background in web development and
                problem-solving. I have experience in working with various technologies and frameworks to build robust and
                user-friendly applications.
              </p>
              <p className='text-light'>
                My expertise includes front-end and back-end development, as well as creating responsive and intuitive
                user interfaces. I'm dedicated to continuous learning and staying up-to-date with the latest trends in the
                tech industry.
              </p>
              <p className='text-light'>
                When I'm not coding, you can find me exploring new technologies, reading tech blogs, and enjoying outdoor
                activities.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="https://drive.google.com/file/d/16yBejAxBTHAIvfy3gj6zJWyLvwy30ira/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
