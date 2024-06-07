import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PaperClipOutlined,
  UserOutlined,
  QrcodeOutlined,
  PieChartOutlined,
  ExclamationCircleOutlined,
  TruckOutlined,
  LineChartOutlined,
  StarOutlined,
  LoginOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Select, Avatar } from 'antd';
import "../style/Dashboard.scss"; // Import the SCSS file
import company from "../img/company.png"
import Table1 from './Table1';
import Table2 from './Table2';


const { Header, Sider, Content } = Layout;
const { Option } = Select;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedButton, setSelectedButton] = useState('DATA ENTRY');

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  const renderContent = () => {
    if (selectedButton === 'DATA ENTRY') {
      return <Table1 />;
    } else if (selectedButton === 'TRACKER') {
      return <Table2 />;
    }
    return null;
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className="sider">
        <div className="company-logo">
            <img src={company} alt="caompany" />
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <QrcodeOutlined />,
              label: 'Entity Manager',
            },
            {
              key: '3',
              icon: <PieChartOutlined />,
              label: 'Data Manager',
            },
            {
              key: '4',
              icon: <PaperClipOutlined />,
              label: 'Reporting',
            },
            {
              key: '5',
              icon: <ExclamationCircleOutlined />,
              label: 'Materiality',
            },
            {
              key: '6',
              icon: <TruckOutlined />,
              label: 'Suppliers',
            },
            {
              key: '7',
              icon: <LineChartOutlined />,
              label: 'Analytics',
            },
            {
              key: '8',
              icon: <StarOutlined />,
              label: 'Targets',
            },
            {
              key: '9',
              icon: <LoginOutlined />,
              label: 'Logout',
            }
          ]}
        />
      </Sider>
      <Layout>
      <Header className="custom-header">
          <div className="top-row">
            <div className="left-section">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className="menu-toggle"
              />
              <span className="view-name">View Name</span>
              <Select defaultValue="North India Region" className="region-dropdown">
                <Option value="North India Region">North India Region</Option>
                {/* Add other options here */}
              </Select>
            </div>
            <div className="right-section">
              <div className="profile">
                <span className="profile-name">John Doe</span>
                <Avatar icon={<UserOutlined />} />
              </div>
            </div>
          </div>
          <div className="bottom-row">
            <div className="middle-section">
            <Button
                className={selectedButton === 'DATA ENTRY' ? 'nav-item active' : 'nav-item'}
                onClick={() => handleButtonClick('DATA ENTRY')}
              >
                DATA ENTRY
              </Button>
              <Button
                className={selectedButton === 'TRACKER' ? 'nav-item active' : 'nav-item'}
                onClick={() => handleButtonClick('TRACKER')}
              >
                TRACKER
              </Button>
            </div>
            <div >
            <span className="for-label">For: </span>
            <Select defaultValue="FY 2023-24" className="fiscal-year-dropdown">
            
              <Option value="FY 2023-24" className="fiscal-year-option">FY 2023-24</Option>
              {/* Add other options here */}
            </Select>
            <Button className="submit-button">Submit for Approval</Button>
            </div>
          </div>
        </Header>
        <Content className="content">
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
