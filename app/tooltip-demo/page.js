'use client';
import React from 'react';
import ToolTip from '@/components/tooltip'
// use tailwind css for styling

const Page = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "20px"}}>
        <h1>Tooltip Demo</h1>
        <ToolTip component={<p>Click the link to go back to the home page</p>}>
          <a href="/">Back to home</a>
        </ToolTip>
        <br />
        <ToolTip component={<p>Tooltips accept custom styling</p>} style={{backgroundColor: "darkblue", color: "white", padding: "10px"}}>
          <button>Hover over me</button>
        </ToolTip>
        <br />
        <ToolTip component={
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h2 style={{color: "green", fontSize: "20px"}}>Tooltips can contain any custom component</h2>
          <p>They can also be applied to any element</p>
          <button onClick={() => alert("Tooltips can even include interactive elements, if you set 'interactive' to true. Cool!")}>Click me</button>
        </div>
        } interactive>
          <h3>Hover over me</h3>
        </ToolTip>
    </div>
  );
};

export default Page;
