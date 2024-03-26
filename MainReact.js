import React, { useState } from "react";
import BlockGenerator from "./BlockGenerator";

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const addTextBlock = () => {
    if (blocks.filter((block) => block.type === "text").length < 10) {
      setBlocks([...blocks, { type: "text", content: "" }]);
    }
  };

  const addImageBlock = () => {
    if (blocks.filter((block) => block.type === "image").length < 10) {
      setBlocks([...blocks, { type: "image", content: "" }]);
    }
  };

  const updateBlock = (index, type, newContent) => {
    if (type === "text" && newContent.length <= 250) {
      setBlocks(
        blocks.map((block, i) => {
          if (i === index) {
            return { ...block, content: newContent };
          }
          return block;
        })
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        fontFamily: "Times New Roman",
        fontSize: "12px",
      }}
    >
      {blocks.map((block, index) => {
        if (block.type === "text") {
          return (
            <BlockGenerator
              key={index}
              type="text"
              content={block.content}
              updateBlock={(newContent) => {
                updateBlock(index, "text", newContent);
              }}
            />
          );
        }

        if (block.type === "image") {
          return (
            <BlockGenerator
              key={index}
              type="image"
              content={block.content}
              updateBlock={() => {
                addImageBlock();
              }}
            />
          );
        }
        return null;
      })}

      <BlockGenerator
        type="text"
        updateBlock={addTextBlock}
        content={""}
      />
    </div>
  );
};

export default App;