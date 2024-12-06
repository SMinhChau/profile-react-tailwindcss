import './mobile-header.css';
import ToggleMode from '@/component/common/toggle-mode';
import { AiOutlineMenu } from 'react-icons/ai';

const MobileHeader = () => {
  return (
    <div className="wrapper">
      <div className="content">
        <ToggleMode />
      </div>
      <AiOutlineMenu />
    </div>
  );
};

export default MobileHeader;
