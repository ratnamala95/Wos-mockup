import React from "react";
import { Col } from "react-bootstrap";
import Image from  'react-bootstrap/Image';


function ImageComponent({imgprop}){
    return(
        <Col>
            <Image src={imgprop}></Image>
        </Col>
    );
}


export default ImageComponent;