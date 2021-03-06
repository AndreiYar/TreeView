export const data = {
  'C:': {
    type: 'folder',
    children: {
      Users: {
        type: 'folder',
        children: {
          admin: {
            type: 'folder',
            children: {
              AppData: {
                type: 'folder',
                children: {
                  'file1.txt': {
                    type: 'file',
                  },
                },
              },
            },
          },
          'john.smith': {
            type: 'folder',
            children: {
              'DriveC:': {
                type: 'symlink',
                'symlink.target': 'C:',
              },
            },
          },
        },
      },
      'Documents and Settings': {
        type: 'symlink',
        'symlink.target': 'C:\\Users',
      },
      'Program Files': {
        type: 'folder',
        children: {
          'Microsoft Office': {
            type: 'folder',
            children: {
              'excel.exe': {
                type: 'file',
              },
              'word.exe': {
                type: 'file',
              },
              'powerpoint.exe': {
                type: 'file',
              },
            },
          },
        },
      },
    },
  },
};
