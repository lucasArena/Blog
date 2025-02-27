import styled, {css} from 'styled-components';

import {ITextareaContainer} from './textarea.interface';

import Tooltip from '../tooltip/index.component';

export const Container = styled.div<ITextareaContainer>`
  background: ${({theme}) => theme.colors.background};
  border-radius: 10px; 
  border: 2px solid ${({theme}) => theme.colors.background};
  padding: 16px;
  width: 100%;
  color: ${({theme}) => theme.colors.placeholder};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.colors.error};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${(props) => props.theme.colors.secundary};
      border-color: ${(props) => props.theme.colors.secundary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${(props) => props.theme.colors.secundary};
    `}

  textarea {
    flex: 1;
    border: 0;
    background: transparent;
    color: ${({theme}) => theme.colors.text};

    &::placeholder {
      color: ${({theme}) => theme.colors.placeholder};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: ${(props) => props.theme.colors.error};
    color: #fff;

    &::before {
      border-color: ${(props) => props.theme.colors.error} transparent;
    }
  }
`;
