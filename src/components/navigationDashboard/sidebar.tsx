import Logo from '../../assets/logo-creative-tim-black.svg';
import DashboardLogo from '../../assets/LogoDASHBOARD.svg';
import Dashboard from '../../assets/icons/dashboard';
import Bar from '../../assets/icons/bar';
import Card from '../../assets/icons/card';
import Profile from '../../assets/icons/profile';
import SidebarBg from '../../assets/sidebarBg.svg';

import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const Links = [
    { path: '/', title: 'Dashboard', icons: <Dashboard /> },
    { path: '/table', title: 'Table', icons: <Bar /> },
    { path: '/billing', title: 'Billing', icons: <Card /> },
    // { path: '/#', title: 'RTL', icons: Spanner },

    { path: '/profile', title: 'Profile', icons: <Profile /> },
  ];

  return (
    <div className='w-[246.5px] h-100% mr-[35px]'>
      <div className='flex gap-3 mt-[46px] justify-center'>
        <img src={Logo} alt='logo' />
        <img src={DashboardLogo} alt='dashboard' />
      </div>
      <hr className='border-[1px] w-[233.25px mt-[27.5px] mb-[22.5px] flex justify-center' />

      {Links.map((link) => {
        return (
          <div
            className={`${
              location.pathname === link.path && 'bg-[#ffffff]'
            }  items-center gap-3 pl-[16px]  align-middle  rounded-[15px]  w-[219.5px] h-[54px] flex  ml-[30.5px] justify-middle  cursor-pointer ${
              location.pathname === link.path
                ? 'text-[#2D3748]'
                : 'text-[#A0AEC0]'
            } text-[12px] font-[700] text-[Helvetica]`}
            key={link.title}
            onClick={() => navigate(link.path)}
          >
            <div
              className={`rounded-xl flex align-middle h-[30px] w-[30px] p-1 ${
                location.pathname === link.path
                  ? 'bg-[#4FD1C5]'
                  : 'bg-[#ffffff]'
              }`}
            >
              <span
                className={`${
                  location.pathname === link.path
                    ? 'text-[#ffffff]'
                    : 'text-[#4FD1C5]'
                } m-auto`}
              >
                {' '}
                {link.icons}
              </span>
              {/* <img src={link.icons} alt='image' /> */}
            </div>
            <div>{link.title}</div>
          </div>
        );
      })}
      <div className='text-[#2D3748] text-[12px] mt-[24px] ml-[47.5px] font-[700]'>
        ACCOUNT PAGES
      </div>
      <img
        src={SidebarBg}
        alt='sidebarBg'
        className='mt-[69.5px] ml-[34px] mb-10'
      />
    </div>
  );
};

export default Sidebar;
