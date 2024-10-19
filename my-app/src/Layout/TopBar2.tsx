import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: red;
`;

export const TopBar: FC = () => {
  return (
    <Wrapper>
      <div>
        <img src={`${process.env.PUBLIC_URL}/Assets/Img/logo.JPG`} alt="logo" />
      </div>
      <ul>
        <li> link 1 </li>
        <li> link 2 </li>
        <li> link 3 </li>
      </ul>
    </Wrapper>
  );
};
