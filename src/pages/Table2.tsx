import React from 'react';
import { Table, Space, Checkbox } from 'antd';
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    month: 'January',
    status: 'Completed',
    completion: 85,
    businessUnit: 'Unit A',
  },
  {
    key: '2',
    month: 'February',
    status: 'In Progress',
    completion: 75,
    businessUnit: 'Unit B',
  },
  // Add more data as needed
];

interface DataSourceItem {
  key: string;
  month: string;
  status: string;
  completion: number;
  businessUnit: string;
}

const columns = [
  {
    title: <Checkbox />,
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: (_: any, record: DataSourceItem) => <Checkbox />,
  },
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Completion',
    dataIndex: 'completion',
    key: 'completion',
  },
  {
    title: 'Business Unit',
    dataIndex: 'businessUnit',
    key: 'businessUnit',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: DataSourceItem) => (
      <Space size="middle">
        <a onClick={() => handleDelete(record.key)}><DeleteOutlined /></a>
        <a onClick={() => handleShare(record.key)}><ShareAltOutlined /></a>
      </Space>
    ),
  },
];

const handleDelete = (key: string) => {
  // Handle delete action
};

const handleShare = (key: string) => {
  // Handle share action
};

const Table2: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Table2;
