import React, { useState } from 'react';
import { Col, Form, FormGroup, Row } from 'reactstrap';

const style = {
  width: '20px', height: '20px', borderRadius: '100%', backgroundColor: 'red',
  ':focus': {
    outline: 'none !important'
  }
}

function App() {
  const [color, setColor] = useState( '#FFFFFF' )
  return (
    <div className="App">
      <Form >
        <Row>
          <FormGroup tag={Col} className="d-flex">

          </FormGroup>
          <FormGroup tag={Col} className="d-flex">

            <input className="border-none" style={style}
              type="color" name="color" id="exampleEmail" value={color} onChange={e => { setColor( e.target.value ) }} placeholder="with a placeholder" />
          </FormGroup>
        </Row>

      </Form>
    </div>
  );
}

export default App;
