import React from 'react';


const Home = () => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <div className="home-container" style={{ backgroundImage: 'url("portback.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
      <div className="text-container text-center">
        <h1 className="display-10 " >Welcome To My <b>Portfolio</b></h1>
        <p className="lead display-4 text-dark"><b className='bg-dark text-light'>{greeting}</b> I Am <b className="text-light bg-dark">Satyam shrivastava</b></p>
      </div>
    </div>
  );
}

export default Home;
