import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { variable } from "../utils"
import axios from 'axios';
import { location_data } from "../data";

export const Home = (props)=>{
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <center className="mt-5">
                            <h1>
                            پلتفرم آنلاین مشاهده اماکن تفریحی
                            </h1>
                            <h3 className="text-secondary">
                                امکاناتی متنوع برای آگاهی از مقصد های شما
                            </h3> 
                            <div className="header-start-div">
                               <button>شروع سریع</button>
                            </div>
                        </center>
                    </Col>
                </Row>
            </Container>
        </>
    )
}