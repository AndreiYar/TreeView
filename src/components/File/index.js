import React from 'react';
import SvgUri from 'react-native-svg-uri';
const file = require('../../assets/file.svg');
import {StyledFile, FileText} from './style';

export const File = ({name}) => {
  return (
    <StyledFile>
      <SvgUri width={16} height={16} fill="#000" source={file} />
      <FileText>{name}</FileText>
    </StyledFile>
  );
};
