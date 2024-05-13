import { useEffect, useState } from 'react';
import { Firefly, Wrapper } from './styled';

interface Firefly {
  id: string;
  top: string;
  left: string;
  animation: string;
}

const createFirefly = (): Firefly => ({
  id: `${Math.random()}`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animation: `${Math.random() * 10 + 10}s`,
});

export const Fireflies = () => {
  const [fireflies, setFireflies] = useState<Array<Firefly>>([]);

  useEffect(() => {
    const addFireflyPeriodic = () => {
      const newFirefly = createFirefly();

      setFireflies((prev) => [...prev.slice(-100), newFirefly]);
    };

    const interval = setInterval(() => {
      addFireflyPeriodic();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {fireflies.map((props) => (
        <Firefly key={props.id} {...props}/>
      ))}
    </Wrapper>
  );
};
