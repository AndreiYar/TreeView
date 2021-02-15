import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import SvgUri from 'react-native-svg-uri';
const folder = require('../../assets/folder.svg');
const openFolder = require('../../assets/folder-open.svg');
import {StyledFolder, FolderLabel, FolderText} from './style';
import {FileTree} from '../FileTree';
import {getSymlinkTarget} from '../utils';

export const Folder = ({data, name}) => {
  const [isOpen, setIsOpen] = useState(false);
  const type = data[name].type;
  const folderIcon = isOpen ? openFolder : folder;

  const handleToggle = (e) => {
    e.preventDefault();

    setIsOpen(!isOpen);
  };

  const getChildren = () => {
    return type === 'symlink'
      ? getSymlinkTarget({
          symlinkTarget: data[name]['symlink.target'],
        })
      : data[name].children;
  };

  return (
    <StyledFolder>
      <TouchableWithoutFeedback onPress={handleToggle}>
        <FolderLabel>
          <SvgUri width={16} height={16} fill="#000" source={folderIcon} />
          <FolderText>{name}</FolderText>
        </FolderLabel>
      </TouchableWithoutFeedback>
      {isOpen && <FileTree data={getChildren()} />}
    </StyledFolder>
  );
};
