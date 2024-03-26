import React, { useState } from "react";
import { Form, Input, Button, Upload, Space } from "antd";

const { Dragger } = Upload;

function BlockGenerator({ addBlock }) {
  const [isText, setIsText] = useState(true);

  const handleAddBlock = () => {
    if (isText) {
      addBlock("text");
    } else {
      addBlock("image");
    }
  };

  return (
    <div>
      <Form>
        <Form.Item>
          {isText ? (
            <Input.TextArea
              placeholder="Enter text (maximum 250 words)"
              rows={4}
              disabled={!isText}
            />
          ) : (
            <Dragger>
              <p className="ant-upload-drag-icon">
                <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
                  <path
                    d="M512 128v768c0 17.7-9.5 32-26.9 42.8L128 946.7c-12.9 8.4-26.9 13.7-42.9 16.9-.1.1-.2.2-.3.3-.7.7-1.7 1-2.7 1-.2 0-.3-.1-.3-.1-24.8-19.3-43.9-42.2-48.5-68.9-.5-2.6-1.1-5.3-1.4-8.1C40.1 689.1 32 658.4 32 624c0-28.7 14.5-53.9 36.4-71.9-4.9-5.9-4.9-15.9 0-21.7L410.9 153.7c7.9-9.9 19.4-16.1 32.9-16.1 22.1 0 37.6 15.2 37.6 36.8z"
                    data-cap="butt"
                    data-color="color-2"
                    data-fill="currentColor"
                    data-fill-rule="nonzero"
                    data-miterlimit="10"
                    data-opacity="0.4"
                    data-origin="calculate"
                    data-rotate="0"
                    data-skew="0"
                    data-transform="matrix(1,0,0,1,0,0)"
                    data-x="0"
                    data-y="0"
                  />
                </svg>
              </p>
              <p className="ant-upload-text">
                Click or drag file here to upload
              </p>
            </Dragger>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleAddBlock}>
            Add Block
          </Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={() => setIsText(!isText)}>
            Switch to {isText ? "Image" : "Text"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}



export default BlockGenerator