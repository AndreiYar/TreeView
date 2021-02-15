import {data as treeData} from './data';

export const searchTree = ({data, matchingElement}) => {
  let resElement = null;

  const searchElement = ({searchElementData, element}) => {
    const keys = Object.keys(searchElementData);

    keys.forEach((key) => {
      if (key === element) {
        resElement = searchElementData[key];

        return;
      }

      if (searchElementData[key].type === 'file') {
        return;
      }

      if (searchElementData[key].children) {
        return searchElement({
          searchElementData: searchElementData[key].children,
          element,
        });
      }
    });
  };

  searchElement({searchElementData: data, element: matchingElement});

  return resElement;
};

export const getSymlinkTarget = ({symlinkTarget}) => {
  const matchingElementArray = symlinkTarget.split('\\');

  let element = null;

  matchingElementArray.forEach((matchingElement) => {
    element = searchTree({
      data: treeData,
      matchingElement,
    });
  });

  return element.children;
};
