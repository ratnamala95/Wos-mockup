import React from "react";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

// images

import image1 from '../img/collection1.jpg'
import image2 from '../img/collection2.jpg'
import image3 from '../img/collection3.jpg'
import { Row , Image} from "react-bootstrap";


function ImageSection(){

    return(
        <Container fluid={true}>
            <Row lg={3} xl={3} xxl={3} xs={1} md='auto' className="mt-5 ">
                <Image src={image1} style={{ height:'40rem'}} className='mx-auto my-auto px-5' rounded={true} ></Image>
                <Image src={image3} style={{ height:'40rem'}} className='mx-auto my-auto px-5' rounded={true} ></Image>
                <Image src={image2} style={{ height:'40rem'}} className='mx-auto my-auto px-5' rounded={true} ></Image>
            </Row>
        </Container>
    );

}


export default ImageSection;