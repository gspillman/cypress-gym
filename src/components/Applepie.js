import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-3";
import { propTypes } from "react-bootstrap/esm/Image";
    
const Applepie = (props) => {
         
  return (
    <MDBContainer>
      <h3>{props.name}</h3>
      <Pie data={props.data} />
    </MDBContainer>
  );
}
    
export default Applepie;