import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import mern from '../../images/Mern.png';
import aws from '../../images/AWS.png';
import gavs from "../../images/Gavs.jpg";
import Card from "./Card";

export default function Certificate() {
    const data = [
        {dlink:"https://drive.google.com/file/d/1DD6QKZ42Wf074mCXWS9b1b8UBTzHMhRi/view", image:aws, title:"AWS Certified Cloud Practitioner", org:"AWS"},
        {dlink:"https://drive.google.com/file/d/1XcBDLAk5o7LzVgGYFgDFuNHQcvExMwyP/view", image:mern, title:"MERN Full Stack Internship Program", org:"ETHNUS"},
        {dlink:"https://drive.google.com/file/d/1cv2SU26ffdtyGd8SmFbiYHbE9kiQwv1W/view?usp=drive_link", image:gavs, title:"MERN Full Stack Internship Program", org:"GS Labs|Gavs"}
        // Add more items if necessary
    ];

    const getCertificate = () => {
        return data.map((val, index) => {
            return(
                <Card val={val} index={index}/>
            )
        });
    }

    return (
        <section className="home-section">
            <Container fluid id="home">
                <Container className="mt-5">
                    <div>
                        <Container fluid className="certificate-section" id="about">
                            <Container>
                                <Row>
                                    <Col md={12} className="mt-5">
                                        <Row>
                                            {getCertificate()}
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </div>
                    <div className="blog--viewAll"></div>
                </Container>
            </Container>
        </section>
    );
}
