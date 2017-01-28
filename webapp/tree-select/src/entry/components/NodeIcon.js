import React, { Component, PropTypes } from 'react'
const style ={
  width: '15px',
  height: '15px',
  border: '2px solid blue',
}
export default function NodeIcon({selected, onClick}) {
  if (selected === 'all') {
    return (
      <span style={style} onClick={onClick}>&nbsp;&radic;&nbsp;</span>
    );
  } else if (selected === 'none') {
    return (
      <span style={style} onClick={onClick}>&nbsp;&nbsp;&nbsp;</span>
    );
  }
  return (
    <span style={style} onClick={onClick}>--</span>
  );
}
