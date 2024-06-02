import { FC } from 'react';
import SignIn from '../../assets/signIn.svg';
import Settings from '../../assets/settings.svg';
import Bell from '../../assets/notification.svg';

interface Props {
  title: string;
}

const Topbar: FC<Props> = ({ title }) => {
  return (
    <div className='mr-[47.5px]'>
      <div className='mb-[26.5] w-[100%] flex justify-between'>
        <div className='flex gap-1 items-center '>
          <div className='text-[12px] text-[#A0AEC0]'>Pages</div>
          <div>/</div>
          <div className='text-[12px]'>{title}</div>
        </div>

        <div className=' flex gap-4 items-center'>
          <div className='flex items-center    h-[39.5px]'>
            {/* <SearchIcon className="h-5 w-5 text-gray-500" /> */}
            <input
              type='text'
              placeholder='Type here'
              className='ml-2 flex-grow rounded-xl outline-none border-[#E2E8F0]'
            />
          </div>
          <div className='flex items-center gap-1 cursor-pointer'>
            <div>
              <img src={SignIn} alt='sign' />
            </div>
            <div className='text-[#718096] text-[12px] font-[700]'>Sign In</div>
          </div>
          <div className='cursor-pointer'>
            <img src={Settings} alt='setting' />
          </div>
          <div className='cursor-pointer'>
            <img src={Bell} alt='bell' />
          </div>
        </div>
      </div>

      <div className='text-[#2D3748] text-[14px] font-[700] mb-[26.5px]'>
        {title}
      </div>
    </div>
  );
};

export default Topbar;
