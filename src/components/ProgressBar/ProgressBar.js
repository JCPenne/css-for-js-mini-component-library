/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  const styles = value === 100 ? { 'border-radius': 4 + 'px' } : {};

  let Component;
  if (size === 'large') {
    Component = LargeOuterBar;
  } else if (size === 'medium') {
    Component = MediumOuterBar;
  } else if (size === 'small') {
    Component = SmallOuterBar;
  } else {
    throw new Error(`Unrecognized ProgressBar size: ${size} Accepted sizes: small, medium, large`);
  }

  return (
    <>
      <Component
        role='progressbar'
        aria-valuenow={value}
        aria-valuemin='0'
        aria-valuemax='100'
      >
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Inner value={value} style={styles} />
      </Component>
    </>
  );
};

const OuterBase = styled.div`
  position: relative;
  width: 100%;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
`;

const LargeOuterBar = styled(OuterBase)`
  height: 24px;
  padding: Outer4px;
  border-radius: 8px;
`;
const MediumOuterBar = styled(OuterBase)`
  height: 12px;
`;
const SmallOuterBar = styled(OuterBase)`
  height: 8px;
`;

const Inner = styled.div`
  background-color: ${COLORS.primary};
  width: ${p => p.value}%;
  height: 100%;
  position: relative;
  border-radius: 4px 0px 0px 4px;
`;

export default ProgressBar;
