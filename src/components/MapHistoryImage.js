import React from "react";
import styled from "styled-components";

const MapHistoryImage = (historyObj) => {
  console.log(historyObj);
  return (
    <Pic>
      <Img src={historyObj} />
    </Pic>
  );
};

export default MapHistoryImage;

const Pic = styled.div`
  padding: 63px;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #8861c2;
  margin: 3px;
`;

const Img = styled.img``;
