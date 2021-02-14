import React from 'react';
import {File} from '../File';
import {Folder} from '../Folder';
import {Dots} from '../Dots';
import {data as treeData} from '../data';
import {searchTree} from '../utils';

export const FileTree = ({data: FileTreeData}) => {
  const folderCounter = {};

  const renderFileTree = ({data}) => {
    const keys = Object.keys(data);

    return keys.map((key, index) => {
      if (data[key].type === 'file') {
        return <File key={`${key}-${index}`} name={key} />;
      }

      if (data[key].type === 'folder') {
        return (
          <Folder key={`${key}-${index}`} name={key}>
            {renderFileTree({data: data[key].children})}
          </Folder>
        );
      }

      const renderSymlinkTarget = () => {
        const matchingElementArray = data[key]['symlink.target'].split('\\');

        if (!folderCounter[matchingElementArray]) {
          let element = null;

          matchingElementArray.forEach((matchingElement) => {
            element = searchTree({
              data: treeData,
              matchingElement,
            });
          });

          folderCounter[matchingElementArray] = true;

          return renderFileTree({data: element.children});
        } else {
          folderCounter[matchingElementArray] = false;

          return <Dots />;
        }
      };

      if (data[key].type === 'symlink') {
        return (
          <Folder key={`${key}-${index}`} name={key}>
            {renderSymlinkTarget()}
          </Folder>
        );
      }
    });
  };

  return renderFileTree({data: FileTreeData});
};
