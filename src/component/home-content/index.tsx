import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  id: string;
};

const HomeContent: React.FC<Props> = ({ children, id }: Props) => {
  return (
    <div
      id={id}
      className="container m-auto h-dvh flex flex-col gap-5 py-[50px]"
    >
      {children}
    </div>
  );
};

export default HomeContent;
