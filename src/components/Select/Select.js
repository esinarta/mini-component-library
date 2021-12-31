import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const StyledSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;
  border: none;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & { 
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
