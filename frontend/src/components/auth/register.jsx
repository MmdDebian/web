import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row , Container , Card , Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

export const Register = ()=>{
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Parvaz
                  </h2>
                  <div className="mb-3">
                    <Form>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>نام</Form.Label>
                      <Form.Control type="text" placeholder="نام را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>نام خانوادگی</Form.Label>
                      <Form.Control type="text" placeholder="نام خانوادگی را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>ایمیل</Form.Label>
                      <Form.Control type="email" placeholder="ایمیل را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>پسورد</Form.Label>
                      <Form.Control type="text" placeholder="رمز را وارد کنید" />
                    </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        حساب کاربری دارید??{' '}
                        <NavLink to="/auth/auth" className="text-primary fw-bold">
                         ورود
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}