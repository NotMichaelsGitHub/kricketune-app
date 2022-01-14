import React, { useState, useEffect }  from "react";
import {Container, Image, Button} from 'react-bootstrap';

const Main = () => {
  
  // const activateLasers = () => {
  //   new Audio('./delewoop.mp3').play();
  // };

  return(
    <Container className="text-center">            
      <Image src="/kricketune.png" className="img" fluid />
      <br></br>
        
      {/* <Button onClick={activateLasers}>
        Activate Lasers
      </Button> */}

      <br></br><br></br>

    </Container>
  )
}

export default Main;