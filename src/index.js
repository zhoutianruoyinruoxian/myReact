import ReactDOM from 'react-dom';
import route from './routes/route-index.jsx';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn'); // 设置moment全局语言


const Router = route();

ReactDOM.render(Router, document.getElementById('root'));
registerServiceWorker();
