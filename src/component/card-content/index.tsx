import React, { ReactNode } from "react";
import "./card-content.css";
import { formatDateTime } from "@/untils/common";
import { ExperiencesType } from "@/untils/content";

type Props = {
  // children?: ReactNode;
  styled?: object;
  item: ExperiencesType;
};

const CardContent: React.FC<Props> = ({ styled, item }: Props) => {
  const { start_date, end_date, company_name, description } = item;
  return (
    <div className={`card-list ${styled}`}>
      <h2 className="card-time">
        {`Time: ${formatDateTime(start_date)} - ${formatDateTime(end_date)}`}
      </h2>
      <h4 className="card-name">{company_name}</h4>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default CardContent;
