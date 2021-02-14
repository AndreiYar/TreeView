import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import SvgUri from 'react-native-svg-uri';
const folder = require('../../assets/folder.svg');
const openFolder = require('../../assets/folder-open.svg');
import {StyledFolder, FolderLabel, FolderText, Collapsible} from './style';

export const Folder = ({name, children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const folderIcon = isOpen ? openFolder : folder;

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <TouchableWithoutFeedback onPress={handleToggle}>
        <FolderLabel>
          <SvgUri width={16} height={16} source={folderIcon} />
          <FolderText>{name}</FolderText>
        </FolderLabel>
      </TouchableWithoutFeedback>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};
