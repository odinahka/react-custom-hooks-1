import { useState, useEffect } from "react";

const useCounter = (condition = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
       if(condition) setCounter((prevCounter) => prevCounter + 1);
       if(!condition) setCounter((prevCounter) => prevCounter - 1);

      }, 1000);
  
      return () => clearInterval(interval);
    }, [condition]);

    return counter;
};

export default useCounter;

