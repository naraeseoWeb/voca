import { useParams } from 'react-router-dom/cjs/react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';

const Day = () => {
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  const wordList = words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {wordList.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Day;
