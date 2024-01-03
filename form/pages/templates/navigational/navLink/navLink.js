const navLink = {
    "tag": "li",
    "attributes": {
      "class": "dropdown nav-link",
      "dataRouter":".dropdown-content"
      
    },
    "repeat": "this",
    "children": [
      {
        "tag": "span",
        "attributes": {
            "class":"nav-link",
          "id": "{{_id}}",
          "click":"fetchDocById"
        //   "href": "{{url}}"
        },
        "content": "{{fileName}}"
      },
      {
        "tag": "ul",
        "attributes": {
          "class": "dropdown-content"
        },
        "children": [
          {
            "tag": "li",
            "repeat": "subItems",
            "children": [
              {
                "tag": "a",
                "attributes": {
                  "href": "#"
                },
                "content": "{{subItemTitle}}"
              }
            ]
          }
        ]
      }
    ]
  }

export {navLink}