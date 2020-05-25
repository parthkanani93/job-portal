import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Label, Input, FormText,
    Col, Row,
} from 'reactstrap';


function Navigationbar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [modal1, setModal1] = useState(false);

    const togglemodal = () => setModal(!modal);
    const togglemodal1 = () => setModal1(!modal1);

    return (

        <div>

            <div className="container-fluid">
                <Navbar className="navbar navbar-dark bg-dark" color="light" light expand="md">
                    <NavbarBrand href="/">Job Portal</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">About </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Contact</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>
                            <Button color="success" onClick={togglemodal} >Sign in</Button>{' '}
                            <Button color="warning" onClick={togglemodal1}>Sign up</Button>{' '}

                        </NavbarText>
                    </Collapse>
                </Navbar>




                {/* for sign in */}
                <Modal isOpen={modal} toggle={togglemodal} className={className}>
                    <ModalHeader toggle={togglemodal}>Sign in</ModalHeader>
                    <ModalBody>

                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                            </FormGroup>
                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={togglemodal}>Sign in</Button>{' '}
                        <Button color="secondary" onClick={togglemodal}>Cancel</Button>
                    </ModalFooter>
                </Modal>


                {/* for sign up */}

                <Modal isOpen={modal1} toggle={togglemodal1} className={className}>
                    <ModalHeader toggle={togglemodal1}>Sign up</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Label>Fist Name</Label>
                                    <Input type="text" name="name" id="examplename" placeholder="Enter First name" />

                                </Col>
                                <Col md={6}>
                                    <Label>Last Name</Label>
                                    <Input type="text" name="last name" id="last name" placeholder="Enter Last name" />

                                </Col>
                            </Row>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Email" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">Password</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="create password" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="exampleAddress">Address</Label>
                                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress2">Address 2</Label>
                                <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">City</Label>
                                        <Input type="text" name="city" id="exampleCity" />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">State</Label>
                                        <Input type="text" name="state" id="exampleState" />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">Zip</Label>
                                        <Input type="text" name="zip" id="exampleZip" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck" />
                                <Label for="exampleCheck" check>Agree all terms and conditions</Label>
                            </FormGroup>
                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={togglemodal1}>Sign up</Button>{' '}
                        <Button color="secondary" onClick={togglemodal1}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>




        </div>


    );


}

export default Navigationbar;
