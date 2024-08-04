import React from "react";
import { Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

export default function Card(props) {
    return (
        <Col md={4} sm={12} key={props.index} className="mb-4">
                    <Fade bottom duration={2000} distance="20px">
                        <div className="cert-card">
                            <div className="content">
                                <a href={props.val.dlink} target="_blank" rel="noopener noreferrer">
                                    <div className="content-overlay"></div>
                                    <div className="cert-header" style={{ backgroundColor: "white" }}>
                                        <img className="logo_img" src={props.val.image} alt={props.val.title} />
                                    </div>
                                    <div className="content-details fadeIn-top">
                                        <h3 className="content-title" style={{ color: "black" }}>
                                            Click to View
                                        </h3>
                                    </div>
                                </a>
                            </div>
                            <div className="cert-body">
                                <h2 className="cert-body-title" style={{ fontWeight: 700, color: "rgb(223, 129, 129)" }}>
                                    {props.val.title}
                                </h2>
                                <h3 className="cert-body-subtitle" style={{ color: "#FFD700", marginBottom: "0px" }}>
                                    - {props.val.org}
                                </h3>
                            </div>
                        </div>
                    </Fade>
                </Col>
    )
}