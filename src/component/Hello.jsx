import { useState } from 'react';
import styled from 'styled-components';
import Username from './Username';

function Hello() {
  const handleShowName = () => {
    console.log('Mike');
  };

  const showText = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Div>
        <h1>Hello</h1>
        <button onClick={handleShowName}>Show Name</button>
        <button>Show Age</button>
        <input type='text' onChange={showText} />
      </Div>
    </>
  );
}

function ChangeName({ age }) {
  const [name, setName] = useState('Mike');
  const [agePlus, setAgePlus] = useState(age);

  console.log(age);

  const handleChange = () => {
    setName(name === 'Mike' ? 'Jane' : 'Mike');
    setAgePlus((age = age + 1));
  };

  return (
    <Div>
      <h3>
        {name} ({agePlus})
      </h3>
      <Username name={name} />
      <button onClick={handleChange}>Change Name</button>
    </Div>
  );
}

const Div = styled.div`
  text-align: center;
`;

export default Hello;
Hello.ChangeName = ChangeName;
