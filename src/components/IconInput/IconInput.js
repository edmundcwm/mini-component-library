import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    iconSize: 16,
    strokeWidth: 1,
    borderWidth: 1,
    height: 24,
    fontSize: 14 / 16,
    paddingStart: 24,
  },
  large: {
    iconSize: 24,
    strokeWidth: 2,
    height: 36,
    borderWidth: 2,
    fontSize: 18 / 16,
    paddingStart: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = sizes[size];

  if (!styles) {
    throw new Error(`invalid size provided: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        aria-hidden={true}
        style={{
          '--size': styles.iconSize + 'px',
        }}
      >
        <Icon
          id={icon}
          size={styles.iconSize}
          strokeWidth={styles.strokeWidth}
        />
      </IconWrapper>
      <InputWrapper
        style={{
          '--borderWidth': styles.borderWidth + 'px',
          '--paddingStart': styles.paddingStart + 'px',
          '--fontSize': styles.fontSize + 'rem',
          '--width': width + 'px',
          '--height': styles.height + 'px',
        }}
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

const Wrapper = styled('label')`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputWrapper = styled('input')`
  font-size: var(--fontSize);
  font-weight: 700;
  width: var(--width);
  height: var(--height);
  border: none;
  padding-left: var(--paddingStart);
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

export default IconInput;
