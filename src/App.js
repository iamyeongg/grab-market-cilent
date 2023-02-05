import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from "./main"
import { Switch, Route, Link, useHistory } from 'react-router-dom';
import ProductPage from './product';
import UploadPage from './upload';
// react-router-dom 에 link를 넣음, link태그를 통해 로고를 클리가면 main 화면으로 전환되도록 함
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push('/upload')
            }}
            icon={<DownloadOutlined />}
          >
            상품업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
