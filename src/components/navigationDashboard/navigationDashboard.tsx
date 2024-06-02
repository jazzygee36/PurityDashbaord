import React, { FC } from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';

interface Props {
  children: React.ReactNode;
  title: string;
}

const NavigationDashboard: FC<Props> = ({ children, title }) => {
  return (
    <div className='flex '>
      <Sidebar />

      <div className='w-[100%] mt-[31.5px] '>
        <Topbar title={title} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default NavigationDashboard;
