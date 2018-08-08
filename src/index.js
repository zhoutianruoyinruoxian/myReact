import ReactDOM from 'react-dom';
import route from './routes/route-index.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

const Router = route();

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
