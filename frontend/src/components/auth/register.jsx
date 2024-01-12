import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row , Container , Card , Col} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
// import { Formik } from 'formik';

export const Register = ()=>{

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4 back-color form-style text-color">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase logo text-color">
                    Parvaz
                  </h2>
                  <div className="mb-3">
                    <Form>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>نام</Form.Label>
                      <Form.Control type="text" className='back-color text-color' placeholder="نام را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>نام خانوادگی</Form.Label>
                      <Form.Control type="text" className='back-color text-color' placeholder="نام خانوادگی را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>ایمیل</Form.Label>
                      <Form.Control type="email" className='back-color text-color' placeholder="ایمیل را وارد کنید" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>پسورد</Form.Label>
                      <Form.Control type="text" className='back-color text-color' placeholder="رمز را وارد کنید" />
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
                        <NavLink to="/auth/login" className="text-primary fw-bold">
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