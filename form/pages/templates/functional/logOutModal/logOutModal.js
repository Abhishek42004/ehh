const logOutModal = {
    "tag": "div",
    "attributes": {
      "id": "logout-modal",
      "class": "modal",
      "dataRouter":"#app"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "modal-content"
        },
        "children": [
          {
            "tag": "span",
            "attributes": {
              "class": "close-button",
              
              "data-element":"#logout-modal",
                        "click": "removeElement"
            },
            "content": "&times;"
          },
          {
            "tag": "div",
            "attributes": {
              "class": "modal-header"
            },
            "children": [
              {
                "tag": "h2",
                "content": "Confirm Logout"
              }
            ]
          },
          {
            "tag": "div",
            "attributes": {
              "class": "modal-body"
            },
            "children": [
              {
                "tag": "p",
                "content": "Are you sure you want to log out?"
              }
            ]
          },
          {
            "tag": "div",
            "attributes": {
              "class": "modal-footer"
            },
            "children": [
              {
                "tag": "button",
                "attributes": {
                  "type": "button",
                  "data-element":"#logout-modal",
                  "click": "removeElement",
                  "class": "btn-cancel"
                },
                "content": "Cancel"
              },
              {
                "tag": "button",
                "attributes": {

                  "type": "button",
                  "onclick": "logout()",
                  "class": "btn-danger"
                },
                "content": "Logout"
              }
            ]
          }
        ]
      }
    ]
  }

  export {logOutModal}
  