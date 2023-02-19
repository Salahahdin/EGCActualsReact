import React, { useState } from 'react';
import {SettingOutlined } from '@ant-design/icons';
import { MenuProps, Modal } from 'antd';
import { Menu } from 'antd';

import FormApp from './formApp';


const items: MenuProps['items'] = [
  {
    label: 'Reports',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Reports',
        children: [
          {
            label: 'Get report!',
            key: 'setting:1',
          }
        ],
      },
    ],
  },
];


const EGCMenu = () => {
  const [current, setCurrent] = useState('mail');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (<><Menu onClick={showModal} selectedKeys={[current]} mode="horizontal" items={items} /><Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
  <FormApp/>
  </Modal></>
  );
};

export default EGCMenu;