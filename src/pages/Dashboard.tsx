// App.tsx

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
  StarOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import "../style/Dashboard.scss"; // Import the SCSS file
import company from "../img/company.png"

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

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
              key: '8',
              icon: <LoginOutlined />,
              label: 'Logout',
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="menu-toggle" // Apply the class for styling
          />
        </Header>
        <Content className="content">Content</Content> {/* Apply the class for styling */}
      </Layout>
    </Layout>
  );
};

export default App;
