import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    '--height': '8px',
    '--bar-radius': '4px',
    '--progress-radius': '4px 0 0 4px',
    '--padding': 0,
    '--progressHeight': '8px',
  },
  medium: {
    '--height': '12px',
    '--bar-radius': '4px',
    '--progress-radius': '4px 0 0 4px',
    '--padding': 0,
    '--progressHeight': '12px',
  },
  large: {
    '--height': '24px',
    '--bar-radius': '8px',
    '--progress-radius': '4px 0 0 4px',
    '--padding': '4px',
    '--progressHeight': '16px',
  },
};
const ProgressBar = ({ value, size }) => {
  return (
    <>
      <Wrapper
        style={sizes[size]}
        aria-valuemax="100"
        aria-valuenow={value}
        role="progressbar"
      >
        <VisuallyHidden>LEARNING PROGRESS</VisuallyHidden>
        <ProgressWrapper>
          <Progress value={value} />
        </ProgressWrapper>
      </Wrapper>
    </>
  );
};

export default ProgressBar;

const Wrapper = styled('div')`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  height: var(--height);
  border-radius: var(--bar-radius);
  overflow: hidden;
  padding: var(--padding);
`;

const ProgressWrapper = styled('div')`
  overflow: hidden;
  border-radius: 4px;
`;

const Progress = styled('div')`
  background-color: ${COLORS.primary};
  width: ${props => props.value + '%'};
  border-radius: var(--progress-radius);
  height: var(--progressHeight);
`;
