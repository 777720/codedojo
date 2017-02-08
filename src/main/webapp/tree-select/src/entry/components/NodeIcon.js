import React, { Component, PropTypes } from 'react'
const style ={
  width: '22px',
  height: '22px',
  border: '2px solid #ccc',
  display: 'inline-block',
  position: 'relative',
  margin: '2px 7px 0px 0px',
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
