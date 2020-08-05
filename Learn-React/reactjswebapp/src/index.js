import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Import cho trang ban hang
import 'font-awesome/css/font-awesome.min.css';
import './my-web-page/Card.css';
import './my-web-page/MyWebPage.css';
import { MyWebPage } from './my-web-page/MyWebPage.js';
// import cho may' tinh'
// import App from './Calculator.js';
// import './specialBtnHorizontal.css';
// import './Calculator.css';
// import './regularBtn.css';
// import './specialBtn.css';


// Render ứng dụng React tạo DOM có id là root
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyWebPage />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.register();
