import {
  createContext,
  //  useContext,
  useState,
} from 'react';

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(10);

  const options = {
    counter1: setCounter1,
    counter2: setCounter2,
    counter3: setCounter3,
  };

  const handleClick = ({ target: { name } }) => {
    options[name]((prev) => prev + 1);
  };

  return (
    <CounterContext.Provider
      value={{ counter1, counter2, counter3, handleClick }}>
      {children}
    </CounterContext.Provider>
  );
};

// export const CounterContext1 = createContext();

// export const CounterContext1Provider = ({ children }) => {
//   const [a, setA] = useState(1);
//   return (
//     <CounterContext1.Provider value={{ a, setA }}>
//       {children}
//     </CounterContext1.Provider>
//   );
// };
// export const CounterContext2 = createContext();

// export const CounterContext2Provider = ({ children }) => {
//   const [b, setb] = useState('1');
//   return (
//     <CounterContext2.Provider value={{ b, setb }}>
//       {children}
//     </CounterContext2.Provider>
//   );
// };

// // usage of context
// export const Wrapper = () => {
//   return (
//     <CounterContext1Provider>
//       <CounterContext2Provider>
//         <Test1 />
//       </CounterContext2Provider>
//     </CounterContext1Provider>
//   );
// };

// const Test1 = () => {
//   const { b } = useContext(CounterContext2);
//   console.log('context2 test1 :>> ', b);
//   return (
//     <div>
//       Hello test1
//       <Test2 />
//     </div>
//   );
// };
// const Test2 = () => {
//   const { a, setA } = useContext(CounterContext1);
//   console.log('context1 test2:>>>>>>> ', a);
//   const { b } = useContext(CounterContext2);
//   console.log('context2 test2 :>>>>>>>>', b);

//   return (
//     <button
//       type='button'
//       onClick={() => setA((prev) => prev + 1)}>
//       Click
//     </button>
//   );
// };
