import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../Hooks/use-counter';

const ForwardCounter = () => {

    const count = useCounter();
//   const [counter, setCounter] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

  return <Card>{count}</Card>;
};

export default ForwardCounter;
