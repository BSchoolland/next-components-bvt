'use client';
import React from 'react';
import ToolTip from '@/components/tooltip'
// use tailwind css for styling

const Page = () => {
  return (
    <div className="demo"> 
        <h1>Tooltip Demo</h1>
        <ToolTip message="click to go back to home page">
          <a href="/">Back to home</a>
        </ToolTip>
        <br />
        <ToolTip message="this is a tooltip">
          <button>Hover over me</button>
        </ToolTip>
        <br />
        <ToolTip message="this is a tooltip">
          <h3>Hover over me</h3>
          </ToolTip>
    </div>
  );
};

export default Page;
