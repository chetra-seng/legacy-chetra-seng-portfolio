import "./index.scss";

const AnimatedLetter = ({ letterClass, strArray, idx }: any) => {
  return (
    <span>
      {strArray.map((char: string, i: number) => (
        <span key={`${char}${i}`} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetter;
