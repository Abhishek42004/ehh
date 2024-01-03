const appNav = {
    "tag": "nav",
    "attributes": {
      "class": "navbar",
      "dataRouter": "#app"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "navbar-brand"
        },
        "children": [
          {
            "tag": "a",
            "attributes": {
              "href": "#"
            },
            "content": "Pari"
          }
        ]
      },
      {
        "tag": "button",
        "attributes": {
          "class": "navbar-toggler",
          "type": "button"
        },
        "content": "☰"
      },
      {
        "tag": "div",
        "attributes": {
          "class": "navbar-collapse"
        },
        "children": [
          {
            "tag": "form",
            "attributes": {
              "class": "navbar-search"
            },
            "children": [
              {
                "tag": "input",
                "attributes": {
                  "type": "search",
                  "placeholder": "Search..."
                }
              }
            ]
          },
         
          {
            "tag": "div",
            "attributes": {
              "class": "navbar-cta"
            },
            "children": [
           
              {
                "tag": "button",
                "attributes": {
                  "class": "btn btn-secondary",
                  "callBack" :"addElement",
                  "data-element":"newTaskForm"
                },
                "content": "Add Task"
              }
            ]
          }
        ]
      }
    ]
  }
  
  
  export { appNav }