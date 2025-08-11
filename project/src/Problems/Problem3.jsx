import React, { useState } from "react";
import { Card, InputNumber, Button, Typography } from "antd";
import { NumberOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Problem3() {
  const [input, setInput] = useState(1);
  const [series, setSeries] = useState([]);

  const generateSeries = () => {
    let largestOdd = input % 2 === 0 ? input - 1 : input;
    let result = [];
    for (let i = 0; i < largestOdd; i++) {
      result.push(1 + i * 2);
    }
    setSeries(result);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center", padding: 40 }}>
        <Card style={{ width: 400, textAlign: "center" }} bordered>
          <Title level={3}>
            <NumberOutlined /> Odd Number Series
          </Title>

          <InputNumber
            min={1}
            style={{ width: "100%", marginBottom: 15 }}
            placeholder="Enter a value"
            value={input}
            onChange={(value) => setInput(value)}
          />

          <Button type="primary" block onClick={generateSeries}>
            Generate
          </Button>

          {series.length > 0 && (
            <Title level={4} style={{ marginTop: 20 }}>
              {series.join(", ")}
            </Title>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Problem3;
