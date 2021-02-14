import styled from 'styled-components';

export const StyledFolder = styled.View`
  padding-left: 20px;
`;

export const FolderLabel = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FolderText = styled.Text`
  margin-left: 5px;
`;

export const Collapsible = styled.View`
  height: ${(p) => (p.isOpen ? 'auto' : '0')};
  overflow: hidden;
`;
