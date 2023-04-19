import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  console.log(value);

  return (
    <Selector value={value} onChange={onChange}>
      {children}
    </Selector>
  );
};

const Selector = styled.select`
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  height: 43px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 400;
  font-size: 1rem;
  width: min-content;

  &::after {
    content: ${<Icon id='chevron-up'/>}
  }
`;

export default Select;
