import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const ExpressionForm = () => {
  const [rules, setRules] = useState([
    { key: 'select', output: { value: '', operator: 'select', score: '' } },
  ]);

  const [combinator, setCombinator] = useState('');
  const [expressionResult, setExpressionResult] = useState(null);

  const handleAddRule = () => {
    setRules([...rules, { key: 'select', output: { value: '', operator: ' ', score: '' } }]);
  };

  const handleDeleteRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    setRules(updatedRules);
  };

  const handleChangeRule = (index, field, value) => {
    const updatedRules = [...rules];
    if (field === 'key') {
      updatedRules[index][field] = value;
      updatedRules[index].output = { value: '', operator: ' ', score: '' };
    } else {
      // Parsing the value as a number for 'value' and 'score'
      updatedRules[index].output[field] = field === 'value' || field === 'score' ? parseFloat(value) : value;
    }
    setRules(updatedRules);
  };

  const handleCombinatorChange = (event) => {
    setCombinator(event.target.value);
  };

  const isFormValid = () => {
    // Checking if any field is empty
    return rules.every(rule => rule.key && rule.output.operator && rule.output.value !== '' && rule.output.score !== '') && combinator !== '';
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const expression = { rules, combinator };
    setExpressionResult(expression);
    console.log(JSON.stringify(expression, null, 2));
  };

  return (
    <Container className="py-4" style={{ marginTop: '80px', textAlign: 'center', color: 'white' }}>
      <h2 className="mb-4">Expression Form</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="combinator" style={{ borderBottom: '1px solid #ced4da' }}>
              <Form.Label>Combinator</Form.Label>
              <Form.Control
                as="select"
                value={combinator}
                onChange={handleCombinatorChange}
                style={{ border: 'none', outline: 'none', borderBottom: '1px solid #ced4da', backgroundColor: 'transparent', color: 'aqua' }}
              >
                <option value=" " style={{color: 'black'}}>Select Any Combinator</option>
                <option value="and" style={{color: 'black'}}>AND</option>
                <option value="or" style={{color: 'black'}}>OR</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {rules.map((rule, index) => (
          <Row key={index} className="mb-3">
            <Col md={2}>
              <Form.Group controlId={`key-${index}`} style={{ borderBottom: '1px solid #ced4da' }}>
                <Form.Label>Rule Type</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.key}
                  onChange={(e) => handleChangeRule(index, 'key', e.target.value)}
                  style={{ border: 'none', outline: 'none', borderBottom: '1px solid #ced4da', backgroundColor: 'transparent', color: 'aqua' }}
                >
                  <option value="" style={{color: 'black'}}>Select Any Rule Type</option>
                  <option value="age" style={{color: 'black'}}>Age</option>
                  <option value="creditScore" style={{color: 'black'}}>Credit Score</option>
                  <option value="accountBalance" style={{color: 'black'}}>Account Balance</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId={`operator-${index}`} style={{ borderBottom: '1px solid #ced4da' }}>
                <Form.Label>Operator</Form.Label>
                <Form.Control
                  as="select"
                  value={rule.output.operator}
                  onChange={(e) => handleChangeRule(index, 'operator', e.target.value)}
                  style={{ border: 'none', outline: 'none', borderBottom: '1px solid #ced4da', backgroundColor: 'transparent', color: 'aqua' }}
                >
                  <option value="" style={{color: 'black'}}>Select Any Operator</option>
                  <option value=">" style={{color: 'black'}}>{'>'}</option>
                  <option value="<" style={{color: 'black'}}>{'<'}</option>
                  <option value=">=" style={{color: 'black'}}>{'>='}</option>
                  <option value="<=" style={{color: 'black'}}>{'<='}</option>
                  <option value="=" style={{color: 'black'}}>{'='}</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId={`value-${index}`} style={{ borderBottom: '1px solid #ced4da' }}>
                <Form.Label>Value</Form.Label>
                <Form.Control
                  type="text"
                  value={rule.output.value}
                  onChange={(e) => handleChangeRule(index, 'value', e.target.value)}
                  style={{ border: 'none', outline: 'none', borderBottom: '1px solid #ced4da', color: 'black' }}
                />
              </Form.Group>
            </Col>
            <Col md={2}>
              <Form.Group controlId={`score-${index}`} style={{ borderBottom: '1px solid #ced4da'  }}>
                <Form.Label>Score</Form.Label>
                <Form.Control
                  type="text"
                  value={rule.output.score}
                  onChange={(e) => handleChangeRule(index, 'score', e.target.value)}
                  style={{ border: 'none', outline: 'none', borderBottom: '1px solid #ced4da', color: 'black' }}
                />
              </Form.Group>
            </Col>
            <Col md={2} className="d-flex align-items-end">
              <Button variant="danger" onClick={() => handleDeleteRule(index)}>
                Delete
              </Button>
            </Col>
          </Row>
        ))}
        <Row>
          <Col md={2}>
            <Button variant="primary" onClick={handleAddRule}>
              Add Rule
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="success" type="submit" className="ml-2" disabled={!isFormValid()}>
              Submit
            </Button>
          </Col>
        </Row>
        {expressionResult && (
          <div className="mt-3">
            <h4>Expression Result:</h4>
            <div style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px' ,color:'black'}}>
              <pre>{JSON.stringify(expressionResult, null, 2)}</pre>
            </div>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default ExpressionForm;
