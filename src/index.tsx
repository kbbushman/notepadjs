import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import CodeCell from './components/code-cell';

const App = () => {
  return (
    <div>
      <h1>JBook</h1>
      <CodeCell />
      <CodeCell />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
