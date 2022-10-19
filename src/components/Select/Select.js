import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <Presentational>
        {displayedValue}
        <IconWrapper style={{ '--width': 24 + 'px' }}>
          <Icon id="chevron-down" size="24" strokeWidth="2" />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const SelectWrapper = styled('select')`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Presentational = styled('div')`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 12px 52px 12px 16px;
  color: ${COLORS.gray700};
  font-weight: 400;
  /* postion: relative; */

  ${SelectWrapper}:focus + & {
    outline: 1px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const Wrapper = styled('div')`
  position: relative;
  width: fit-content;
`;

/**
 * Instead of composing <Icon />, use wrapper for the Icon instead
 */
const IconWrapper = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  pointer-events: none;
  width: var(--width);
  height: var(--width);
`;

export default Select;
