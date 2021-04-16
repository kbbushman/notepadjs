import ReactDOM from 'react-dom';
import { useState } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const handleClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <h1>JBook</h1>
      <CodeEditor initialValue="" onChange={(value) => setInput(value)} />
      <div>
        <button onClick={handleClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
