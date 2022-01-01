import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderSize: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderSize: 2,
    height: 36,
  },
}

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`;

const StyledInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--border-size) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-size: var(--font-size);
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize } />
      </IconWrapper>
      <StyledInput 
        {...delegated} 
        style={{ 
          '--width': width +'px', 
          '--height': styles.height + 'px', 
          '--font-size': styles.fontSize + 'px',
          '--border-size': styles.borderSize + 'px',
        }} 
      />
    </Wrapper>
  );
};

export default IconInput;
