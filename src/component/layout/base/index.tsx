import Footer from '@/component/footer';
import Header from '@/component/header';
import { ThemeContextOverFlow } from '@/context/overflow';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  const [isOverFlow, setIsOverFlow] = useState(false);

  return (
    <ThemeContextOverFlow.Provider
      value={{
        isOverFlow: isOverFlow,
        setIsOverFlow: (isOverFlow: boolean) => setIsOverFlow(isOverFlow),
      }}
    >
      <div
        className={`container mx-auto h-dvh w-full flex flex-col items-start px-[10%] sm:px-[7%] ${
          isOverFlow ? 'max-lg:overflow-hidden' : 'max-lg:overflow-y-auto'
        }`}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeContextOverFlow.Provider>
  );
};

export default BaseLayout;
