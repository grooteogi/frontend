import React from 'react';
import './box.css';

type BoxProps = {
  width: number;
  height: number;
};

export const Box = ({ width, height }: BoxProps) => (
  <div className="box" style={{ width: width, height: height }}>
    <p></p>
  </div>
);
