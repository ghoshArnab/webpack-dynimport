
import React from 'react';
import ReactDOM from 'react-dom';
export default async function bye() {


  console.log('from nested component 2');
  ReactDOM.render(<p>abc</p>,document.getElementById('showComponents'));
  //document.getElementById('showComponents').textContent = "hello from inner most comp";
}