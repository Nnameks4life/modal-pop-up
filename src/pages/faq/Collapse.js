import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const text = `
You can buy our African sourced and Manufactured Products from the comfort of your home
`;

const Demo = (props) => {
  return (
    <div>
      <Collapse>
        <Panel
          header="What kind of Products do you deal on in Africa"
          className="faqhead"
        >
          <p>{props.text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Demo;
