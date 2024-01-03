const listItemtemplate = {
    "tag": "div",
    "attributes": {
      "class": "file-item"
    },
    "children": [
      {
        "tag": "span",
        "attributes": {
          "class": "file-name"
        },
        "content": "{{fileName}}"
      },
      {
        "tag": "button",
        "attributes": {
          "click": "updateFileForm"
        },
        "content": "Update"
      },
      {
        "tag": "button",
        "attributes": {
          "click": "deleteFile"
        },
        "content": "Delete"
      }
    ]
  }

  export {listItemtemplate}
  