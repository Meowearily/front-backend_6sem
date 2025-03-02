// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import styled from 'styled-components'

import App from "./App.jsx";

const Wrapper = styled.section`
  padding: 1em;
  background: lightblue;
`;

const root = createRoot(document.getElementById("root"));
root.render(
  <Wrapper>
    <StrictMode>
      <App />
    </StrictMode>
  </Wrapper>
);