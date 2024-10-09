import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > input {
    height: 30px;
    width: 210px;
    background: #000;
    border-radius: 7px;
    color: #fff;
    padding: 10px;
    font-size: 15px;
    opacity: 0.8;
    margin-bottom: 6px;

    ::placeholder {
      font-size: 10px;
    }

    ::-webkit-input-placeholder {
      font-size: 1px;
    }
  }
`;
