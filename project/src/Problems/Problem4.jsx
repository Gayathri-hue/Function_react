import React, { useState } from "react";
import { Card, Input, Button, Typography } from "antd";
import { OrderedListOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Problem4() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState({});

  const calculateMultiples = () => {
    let numbers = input
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));

    let countMap = {};
    for (let i = 1; i <= 9; i++) {
      countMap[i] = numbers.filter((num) => num % i === 0).length;
    }
    setResult(countMap);
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
        <Card style={{ width: 500, textAlign: "center" }} bordered>
          <Title level={3}>
            <OrderedListOutlined /> Multiples Count
          </Title>

          <Input
            placeholder="Enter numbers separated by commas"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ marginBottom: 15 }}
          />

          <Button type="primary" block onClick={calculateMultiples}>
            Calculate
          </Button>

          {Object.keys(result).length > 0 && (
            <pre style={{ marginTop: 20, textAlign: "left" }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Problem4;
