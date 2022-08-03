import React from "react";
import styled from "styled-components";

import { Exit, Magnifier, KeyboardVoice } from "../../../assets/icons";
import BaseInput from "../../Form/Input/Base";

const Container = styled.div`
  display: flex;
  gap: 32px;
`;
const Input = styled(BaseInput)`
  height: 48px;
  padding: 0px 16px;
  gap: 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray[50]};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray[150]};
  background-color: ${({ theme }) => theme.colors.white.white};
  box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
`;
const VoiceSearch = styled.button`
  appearance: none;
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.gray[200]};
`;

const SearchInput = () => (
  <Container>
    <Input type="text" before={<Magnifier />} after={<Exit />} />
    <VoiceSearch>
      <KeyboardVoice />
    </VoiceSearch>
  </Container>
);

export default SearchInput;
