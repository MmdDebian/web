import { Col, Container, Row } from "react-bootstrap"

export const About = ()=>{
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img src="https://w0.peakpx.com/wallpaper/1021/487/HD-wallpaper-technology-code-programming-programmer.jpg" width='%100' />
                    </Col>
                    <Col>
                        <h1>درباره ما</h1>
                        <p>
                             پلتفرمی برای مشاهده و اطلاع از ماکان دقیق و اماکانات رفاهی
                             شما میتوانید تمامی این موارد را در این پلتفرم تنها با روشن کردن <b>GPS</b> خود انجام دهید 
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}