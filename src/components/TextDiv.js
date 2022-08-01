import React from "react";
import { Container } from "react-bootstrap";


function TextDiv({text__snippet}){
    return(
        <Container fluid={true} className='my-5'>
            <div className="mx-5 my-auto px-auto text-center    ">
                {text__snippet}
            </div>
        </Container>
    );
}

export default TextDiv;