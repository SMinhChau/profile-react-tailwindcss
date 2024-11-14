import React, { useMemo } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useWindowSize } from '@/hook/useWindowSize';
import { SizesScreen } from '@/utils/common';

import { AiOutlineMenu } from 'react-icons/ai';
import { MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md';
import ToggleMode from '../common/toggle-mode';

const HeaderMenus = [
  [1, 'Home', '/#info'],
  [2, 'Experiences', '/#experiences'],
  [3, 'Activities', '/activities'],
  [4, 'Projects', '/projects'],
  [5, 'About', '/about'],
];

type Props = {
  nonNavbar?: boolean;
};

const Header: React.FC<Props> = ({ nonNavbar }: Props) => {
  const { width } = useWindowSize();

  const renderNavbar = useMemo(() => {
    return (
      <div className="center-box justify-end ">
        {width < SizesScreen.md ? (
          <>
            {nonNavbar ? (
              <>
                <span className="relative pl-4 before:contents-[' '] before:bg-blue_border before:w-[2px] before:h-full before:absolute before:left-0">
                  <ToggleMode />
                </span>
              </>
            ) : (
              <>
                <div className="icon-menu" aria-controls="mobile-menu" aria-expanded="false">
                  <AiOutlineMenu />
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {!nonNavbar && (
              <nav className="flex sm:justify-center space-x-4">
                {HeaderMenus.map(([id, title, url]) => (
                  <a key={id} href={url} className="rounded-lg px-3 py-2 menu-item">
                    {title}
                  </a>
                ))}
              </nav>
            )}
            <span className="relative pl-4 before:contents-[' '] before:bg-blue_border before:w-[2px] before:h-full before:absolute before:left-0">
              <ToggleMode />
            </span>
          </>
        )}
      </div>
    );
  }, [width]);

  return (
    <div className="container min-h-[70px] w-full grid grid-cols-[30%_minmax(70%,_1fr)_100px] border-solid border-b-2 border-blue_border">
      <div className="wrapper-logo flex items-center">
        <a href="/">
          <img src="/images/sky-life-logo.png" alt="logo" className="logo" />
        </a>
      </div>
      {renderNavbar}
    </div>
  );
};

export default Header;
