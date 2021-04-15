import * as esbuild from 'esbuild-wasm';
import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';

const App = () => {
  const ref = useRef<any>();
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    startService();
  }, []);

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
    });
  };

  const handleClick = async () => {
    if (!ref.current) return;

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [unpkgPathPlugin(), fetchPlugin(input)],
      define: {
        'process.env.NODE_ENV': '"production"',
        global: 'window',
      },
    });

    setCode(result.outputFiles[0].text);
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
