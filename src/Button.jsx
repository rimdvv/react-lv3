import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Button() {
  return (
    <>
      <StButtonRow>
        <StButton borderCr='#54EFC3' bgCr='#ffffff' large>
          Large Primary Button
          <FontAwesomeIcon icon={faAngleRight} />
        </StButton>
        <StButton borderCr='#54EFC3' bgCr='#54EFC3' medium>
          Medium
        </StButton>
        <StButton borderCr='#54EFC3' bgCr='#54EFC3' small>
          Small
        </StButton>
      </StButtonRow>
      <StButtonRow>
        <StButton borderCr='#FAB19F' bgCr='#ffffff' Cr='#e46158' large>
          Large Negative Button
          <StIconContainer>
            <FontAwesomeIcon icon={faBell} color='#3a3939' />
            <StNotif>﹒</StNotif>
          </StIconContainer>
        </StButton>
        <StButton borderCr='#FAB19F' bgCr='#FAB19F' Cr='#e46158' medium>
          Medium
        </StButton>
        <StButton borderCr='#FAB19F' bgCr='#fab19f' Cr='#e46158' small>
          Small
        </StButton>
      </StButtonRow>
    </>
  );
}

export const StButton = styled.button`
  border-radius: 8px;
  gap: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${(props) => props.borderCr};
  background-color: ${(props) => props.bgCr};
  color: ${(props) => props.Cr};
  ${(props) =>
    props.large &&
    css`
      width: 200px;
      height: 56px;
      font-size: 14px;
      font-weight: 600;
    `};
  ${(props) =>
    props.medium &&
    css`
      width: 120px;
      height: 48px;
      font-size: 14px;
      font-weight: 500;
    `};
  ${(props) =>
    props.small &&
    css`
      width: 96px;
      height: 40px;
      font-size: 13px;
      font-weight: 500;
    `};
`;

const StButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 8px;
`;

const StIconContainer = styled.div`
  display: flex;
  position: relative;
`;

const StNotif = styled.div`
  font-size: 40px;
  background-color: '#FAB19F';
  position: absolute;
  top: -25px;
  right: -18px;
`;
