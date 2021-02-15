import React from 'react';
import {File} from '../File';
import {Folder} from '../Folder';

export const FileTree = ({data}) => {
  const keys = Object.keys(data);

  return keys.map((key, index) => {
    const type = data[key].type;

    if (type === 'file') {
      return <File key={`${key}-${index}`} name={key} />;
    }

    if (type === 'folder' || type === 'symlink') {
      return <Folder data={data} key={`${key}-${index}`} name={key} />;
    }
  });
};
