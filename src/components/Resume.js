import {useState,React} from 'react'
import {InputGroup,FormControl, Form,Button,Row,Col } from 'react-bootstrap'

function Resume() {

   
    return (
        <div style={{width:"50%",marginLeft:"30%"}}>
            
            <div style={{borderRadius:"6px",boxShadow:"0px 0px 22px 5px grey",padding:"30px",width:"90%"}}>
                <h3 style={{textAlign:"center",marginBottom:"30px"}}>Resume Builder</h3>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
    <Form.Control type="text" placeholder='Name' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
    <Form.Control type="email"  placeholder='E-Mail'/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
   
    <Form.Control as="textarea" rows={3} placeholder='Address' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
   
    <Form.Control type="text"  placeholder='Phone Number'/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Education</Form.Label>
    <Form.Control type="text" placeholder="Institute" />
    <Row>
    <Col><Form.Control type="text" placeholder="Degree " className="mt-4" /></Col>
    <Col><Form.Control type="text" placeholder="Year " className="mt-4" /></Col>
   </Row>
   <Button className='mt-3' variant="success">Add more field</Button>{' '}
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Experience</Form.Label>
    <Form.Control type="text" placeholder="Company" />
    <Row>
    <Col><Form.Control type="text" placeholder="Designation " className="mt-4" /></Col>
    <Col><Form.Control type="text" placeholder="Year " className="mt-4" /></Col>
   </Row>
   <Button className='mt-3' variant="success">Add more field</Button>{' '}
  </Form.Group>
  <Form.Label>Skills</Form.Label>
  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label" for="flexCheckDefault">
    Javascript
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label" for="flexCheckDefault">
    php
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" />
  <label class="form-check-label" for="flexCheckDefault">
    Java
  </label>
</div>
<div className="d-grid gap-2 mt-5">
  <Button variant="primary" size="lg">
    Submit
  </Button>
  </div>
</Form>
</div>
        </div>
    )
}

export default Resume
