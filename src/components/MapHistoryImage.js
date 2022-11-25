import React from "react";
import styled from "styled-components";

const MapHistoryImage = (historyObj) => {
  return (
    <Pic>
      <Img src={historyObj.files[0].url} />
    </Pic>
  );
};

export default MapHistoryImage;

const Pic = styled.div`
  background: #ffffff;
  border: 1px solid #e2e2e2;
  boxshadow: 1px 3px 4px rgba(0, 0, 0, 0.1);
  borderradius: 10px;
  textalign: center;
  margin: 3px;
`;

const Img = styled.img`
  height: 130px;
  width: 130px;
  objectfit: contain;
`;
