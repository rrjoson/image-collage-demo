import React, { useState } from "react";
import { List, InputItem, Button } from "antd-mobile";

export default function GetImages({ onSubmit }) {
  const [firstUrl, setFirstUrl] = useState("");
  const [secondUrl, setSecondUrl] = useState("");

  return (
    <form>
      <List>
        <InputItem
          name="Before"
          onChange={e => setFirstUrl(e)}
          value={firstUrl}
        >
          Before
        </InputItem>
        <InputItem
          name="After"
          onChange={e => setSecondUrl(e)}
          value={secondUrl}
        >
          After
        </InputItem>

        <Button
          type="primary"
          onClick={() => {
            onSubmit(firstUrl, secondUrl);
          }}
        >
          Generate Collage
        </Button>
      </List>
    </form>
  );
}
