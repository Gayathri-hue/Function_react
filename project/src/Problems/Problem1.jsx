import React, { useState } from "react";
import { Card, InputNumber, Select, Button, Typography } from "antd";
import { CalculatorOutlined } from "@ant-design/icons";

const { Option } = Select;
const { Title } = Typography;

function Problem1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("Addition");
  const [result, setResult] = useState(null);

  const calculate = () => {
    let res = null;

    switch (operation) {
      case "Addition":
        res = a + b;
        break;
      case "Subtraction":
        res = a - b;
        break;
      case "Multiplication":
        res = a * b;
        break;
      case "Division":
        res = b !== 0 ? a / b : "Error (Divide by 0)";
        break;
      default:
        res = "Invalid Operation";
    }

    setResult(res);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
      <Card style={{ width: 400, textAlign: "center" }} bordered>
        <Title level={3}>
          <CalculatorOutlined /> Simple Calculator
        </Title>

        <InputNumber
          style={{ width: "100%", marginBottom: 15 }}
          placeholder="Enter value A"
          value={a}
          onChange={(value) => setA(value)}
        />

        <InputNumber
          style={{ width: "100%", marginBottom: 15 }}
          placeholder="Enter value B"
          value={b}
          onChange={(value) => setB(value)}
        />

        <Select
          style={{ width: "100%", marginBottom: 15 }}
          value={operation}
          onChange={(value) => setOperation(value)}
        >
          <Option value="Addition">Addition</Option>
          <Option value="Subtraction">Subtraction</Option>
          <Option value="Multiplication">Multiplication</Option>
          <Option value="Division">Division</Option>
        </Select>

        <Button
          type="primary"
          block
          onClick={calculate}
          icon={<CalculatorOutlined />}
        >
          Calculate
        </Button>

        {result !== null && (
          <Title level={4} style={{ marginTop: 20 }}>
            Result: {result}
          </Title>
        )}
      </Card>
    </div>
  );
}

export default Problem1;
