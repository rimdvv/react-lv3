import { useState } from 'react';
import styled from 'styled-components';
import { StButton } from './Button';

export default function Modal() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal1Handler = () => {
    setIsOpen1(!isOpen1);
  };
  const openModal2Handler = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <StButtonRow>
        <StButton
          onClick={openModal1Handler}
          borderCr='#54EFC3'
          bgCr='#54EFC3'
          small
        >
          open modal
        </StButton>
        <StButton
          onClick={openModal2Handler}
          borderCr='#FAB19F'
          bgCr='#ffffff'
          Cr='#e46158'
          large
        >
          open modal
        </StButton>
      </StButtonRow>
      {isOpen1 ? (
        <StModalBackdrop>
          <StModalView1 onClick={(e) => e.stopPropagation()}>
            <StModalMessage1>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </StModalMessage1>
            <StModal1ButtonRow>
              <StButton
                onClick={openModal1Handler}
                borderCr='#FAB19F'
                bgCr='#fab19f'
                Cr='#e46158'
                small
              >
                닫기
              </StButton>
              <StButton borderCr='#54EFC3' bgCr='#54EFC3' small>
                확인
              </StButton>
            </StModal1ButtonRow>
          </StModalView1>
        </StModalBackdrop>
      ) : null}

      {isOpen2 ? (
        <StModalBackdrop onClick={openModal2Handler}>
          <StModalView2 onClick={(e) => e.stopPropagation()}>
            <StModalMessage2>
              닫기 버튼 1개가 있고, <br />
              외부 영역을 누르면 모달이 닫혀요.
            </StModalMessage2>
            <StButtonClose onClick={openModal2Handler}>X</StButtonClose>
          </StModalView2>
        </StModalBackdrop>
      ) : null}
    </>
  );
}

const StModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StModalView1 = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 24px;
  width: 440px;
  height: 240px;
  background-color: #ffffff;
`;

const StModalView2 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  border-radius: 20px;
  padding: 24px;
  width: 320px;
  height: 160px;
  background-color: #ffffff;
`;

const StModalMessage1 = styled.div`
  width: 420px;
  font-size: 15px;
  font-weight: 500;
`;

const StModalMessage2 = styled.div`
  width: 240px;
  font-size: 17px;
  font-weight: 500;
`;

const StButtonClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  color: black;
  width: 36px;
  height: 36px;
  border-radius: 40px;
  border: 1px solid #cecece;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 500;
`;

const StButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px;
  gap: 12px;
`;

const StModal1ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  gap: 8px;
  bottom: 16px;
  right: 16px;
`;
