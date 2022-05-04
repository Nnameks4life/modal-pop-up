import React from 'react';
import { Collapse, Select } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Panel } = Collapse;


function callback(key) {
  console.log(key);
}

const text = `
You can buy our African sourced and Manufactured Products from the comfort of your home
`;

// const genExtra = () => (
//   <SettingOutlined
//     onClick={event => {
//       // If you don't want click extra trigger collapse, you can prevent this:
//       event.stopPropagation();
//     }}
//   />
// );

class Demo extends React.Component {
  state = {
    expandIconPosition: 'right',
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
    return (
      <>
        <Collapse
          defaultActiveKey={['1']}
          onChange={callback}
          expandIconPosition={expandIconPosition}
        >
          
          <Panel header="What kind of Products do you deal on in Africa" key="2" >
            <div>{text}</div>
          </Panel>
          
        </Collapse>
        
        
      </>
    );
  }
}

export default Demo;