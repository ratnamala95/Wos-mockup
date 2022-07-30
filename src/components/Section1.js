import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// images

import image1 from '../img/collection1.jpg'
import image2 from '../img/collection2.jpg'
import image3 from '../img/collection3.jpg'
import { Row, Col , Image} from "react-bootstrap";


function Section1(){

    return(
        <Container>
            <Row style={{marginTop:'17rem'}}>
                <Col className='my-3 p-3'>
                    <Image src={image1} style={{width:'25rem', height:'40rem'}} rounded={true}></Image>
                </Col>
                <Col className='my-3 p-3'>
                    <Image src={image3} style={{width:'25rem', height:'40rem'}} rounded={true}></Image>
                </Col>
                <Col className='my-3 p-3'>
                    <Image src={image2} style={{width:'25rem', height:'40rem'}} rounded={true}></Image>
                </Col>
            </Row>
        </Container>
    );

}


export default Section1;