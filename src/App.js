import './App.less';
import 'antd/dist/antd.less';
import {Typography, Button} from 'antd';
import Typewriter from 'typewriter-effect'
import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import './css/Landing.css'
import { Layout, Menu, Tabs} from 'antd';
import {HomeOutlined, AppstoreOutlined} from '@ant-design/icons'
import { magenta } from '@ant-design/colors';
import { useState } from 'react';
import Applications from './pages/Applications';
import logo from './assets/chioalpha.png';
const { Header, Content, Footer } = Layout;
const {TabPane} = Tabs;
const {Title} = Typography;
function App() {
  const [selectedIndex, setSelectedIndex] = useState("1");
  return (
    <Layout  style={{ minHeight: "100vh" }} className="layout">
      <Content style={{padding: '0 50px', display: 'flex', width: '100%', alignItems:'center'}}>
        <Tabs tabPosition="left" style={{width: '100%', alignItems: 'center'}} activeKey={selectedIndex} size="large" defaultActiveKey={1} onChange={e => setSelectedIndex(e)}>
          <TabPane  tab={<span>
            <HomeOutlined/>
            Home
          </span>} key="1">
          <div className="landing"> 
          <Title className="header">We provide&nbsp;<Typewriter onInit={(typewriter) => {
                typewriter.typeString('simple')
                .pauseFor(2500)
                .deleteAll()
                .typeString('quick')
                .pauseFor(2500)
                .deleteAll()
                .start()
            }}
            options={{
                autoStart: true,
                loop: true,
                cursor: ""
            }}/>&nbsp;applications</Title>
            <Button onClick={e => setSelectedIndex("2")} icon={<LoginOutlined />} size="large" shape="round" type="primary">Explore solutions</Button>
        </div>
          </TabPane>
          <TabPane tab={<span>
            <AppstoreOutlined />
            Applications
          </span>} key="2">
            <Applications />
          </TabPane>
        </Tabs>

      </Content>
    <Footer style={{ textAlign: 'center' }}>Chio ©{new Date().getFullYear()}</Footer>
  </Layout>
  
  );
}

export default App;
