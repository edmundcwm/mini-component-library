import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [width, setWidth] = useState('auto');

  useEffect(() => {
    const tempNode = document.createElement('div');
    document.body.appendChild(tempNode);
    tempNode.textContent = displayedValue;
    tempNode.style.width = 'fit-content';
    setWidth(tempNode.clientWidth);
    document.body.removeChild(tempNode);
  }, [displayedValue]);
  return (
    <Wrapper>
      <SelectWrapper
        value={value}
        onChange={onChange}
        style={{ '--width': width + 'px' }}
      >
        {children}
      </SelectWrapper>
      <SelectIcon id="chevron-down" size="20" strokeWidth="2" />
    </Wrapper>
  );
};

const Wrapper = styled('div')`
  position: relative;
  width: fit-content;
`;

//TODO use margin auto trick to align center;
const SelectIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  color: ${COLORS.gray700};
  pointer-events: none;
`;

const SelectWrapper = styled('select')`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 12px 12px 16px;
  color: ${COLORS.gray700};
  font-weight: 400;
  width: calc(var(--width) + 50px); // add 50px buffer

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
