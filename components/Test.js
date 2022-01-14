import React, { useState, useEffect }  from "react";
// import useSound from 'use-sound';

const Test = () => {
  const [timeLeft, setTimeLeft] = useState(1);
  // const [play] = useSound('./delewoop.mp3');
  
  useEffect(() => {
    const intervalId = setInterval(() => {

      if(timeLeft%3 == 0){
        
        activateLasers();
      }
      setTimeLeft(timeLeft + 1);

    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

    const activateLasers = () => {
      // console.log("fire");
      new Audio('./delewoop.mp3').play();
      // play
    };

    const startIt = () => {
      console.log("DELELELE WHOOOOP")
    }

  return(
    <>            

      {/* {timeLeft} */}

      <button onClick={startIt}>
        DEDEDEDEDEDEDE WOOP
      </button>

    </>
  )
}

export default Test;