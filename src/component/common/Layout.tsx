import React from 'react';
import styled from 'styled-components';
import { Inner } from './../../style/inner';

const Layout = (props: any) => {
  const Wrapper = styled.div`
    width: 100%;
    margin-top: 64px;
    padding: 8px;
    background-color: #2a303c;
  `;

  const LayoutInner = styled(Inner)`
    width: 1360px;
    margin: 0 auto;
  `;

  return (
    <Wrapper>
      <LayoutInner>{props.children}</LayoutInner>
    </Wrapper>
  );
};

export default Layout;