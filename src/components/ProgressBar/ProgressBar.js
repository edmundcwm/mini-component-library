/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    '--height': '8px',
    '--width': '185px',
    '--bar-radius': '4px',
    '--padding': 0,
  },
  medium: {
    '--height': '12px',
    '--width': '370px',
    '--bar-radius': '4px',
    '--padding': 0,
  },
  large: {
    '--height': '24px',
    '--width': '370px',
    '--bar-radius': '8px',
    '--padding': '4px',
  },
};
const ProgressBar = ({ value, size }) => {
  return (
    <Progress style={sizes[size]} id="file" max="100" value={value}>
      <VisuallyHidden>Progress</VisuallyHidden>
    </Progress>
  );
};

export default ProgressBar;

const Progress = styled('progress')`
  & {
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    -webkit-appearance: none;
    appearance: none;
    height: var(--height);
    width: var(--width);
    border-radius: var(--bar-radius);
  }

  &[value]::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: var(--bar-radius);
    padding: var(--padding);
    overflow: hidden;
  }
  &[value]::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${props => (props.value === 100 ? '4px' : '4px 0 0 4px')};
  }
  &[value]::-moz-progress-bar {
    background-color: ${COLORS.transparentGray15};
  }
`;
