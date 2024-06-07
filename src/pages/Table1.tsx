import React from 'react';
import { Table, Space, Checkbox } from 'antd';
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    assessmentTitle: 'Assessment 1',
    type: 'Type A',
    numOfSupplies: 10,
    score: 85,
    riskClassification: 'High',
    status: 'Completed',
    result: 'Pass',
  },
  {
    key: '2',
    assessmentTitle: 'Assessment 2',
    type: 'Type B',
    numOfSupplies: 15,
    score: 75,
    riskClassification: 'Medium',
    status: 'In Progress',
    result: 'Fail',
  },
  // Add more data as needed
];

interface DataSourceItem {
  key: string;
  assessmentTitle: string;
  type: string;
  numOfSupplies: number;
  score: number;
  riskClassification: string;
  status: string;
  result: string;
}

const columns = [
  {
    title: <Checkbox />,
    dataIndex: 'checkbox',
    key: 'checkbox',
    render: (_: any, record: DataSourceItem) => <Checkbox />,
  },
  {
    title: 'Assessment Title',
    dataIndex: 'assessmentTitle',
    key: 'assessmentTitle',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'No. of Supplies',
    dataIndex: 'numOfSupplies',
    key: 'numOfSupplies',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Risk Classification',
    dataIndex: 'riskClassification',
    key: 'riskClassification',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
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

const Table1: React.FC = () => {
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Table1;
