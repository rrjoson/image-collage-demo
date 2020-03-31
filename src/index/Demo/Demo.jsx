import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card } from "antd-mobile";

//import { Test } from './Demo.styles';

const Demo = props => {
  const [show, setShow] = useState(false);

  return (
    <div className="DemoWrapper">
      <Card>
        <Card.Header title="Example 1" />
        <Card.Body className="flex items-center justify-between">
          <img
            className="w-20 object-fit"
            src="https://cdn.filestackcontent.com/sLN8lGHQ6usJyMhTPRdv"
          />
          <img
            className="w-20 object-fit"
            src="https://cdn.filestackcontent.com/V1PCGBLReaCZ6aPQkHte"
          />
          <div className="text-3xl">➡</div>
          <img
            className="w-40 object-fit"
            src="https://process.filestackapi.com/AyUAuYoWSQx2jUNVoq31Az/collage=files:[%22https://cdn.filestackcontent.com/V1PCGBLReaCZ6aPQkHte],w:800,h:600,/%22https://cdn.filestackcontent.com/sLN8lGHQ6usJyMhTPRdv%22"
          />
        </Card.Body>
      </Card>
    </div>
  );
};

Demo.propTypes = {
  // bla: PropTypes.string,
};

Demo.defaultProps = {
  // bla: 'test',
};

export default Demo;
