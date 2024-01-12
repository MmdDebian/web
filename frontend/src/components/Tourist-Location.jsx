import { Carousel, Col, Container } from "react-bootstrap"

export const TouristLocation = (props)=>{
    if(!props){
      return <h1>پیدا نشد</h1>
    }

    return(
        <>
          <Container>
            <Row>
              <Col>
              <Carousel>
              <Carousel.Item>
                <img src='' width="100%"/>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              </Carousel>
              </Col>
            </Row>
          </Container>
        </>
    )
}