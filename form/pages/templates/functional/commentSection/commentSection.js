const commentSection = {
    "tag": "div",
    "attributes": {
      "class": "comment-section",
      "dataRouter":"#app",
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "comment-form"
        },
        "children": [
          {
            "tag": "textarea",
            "attributes": {
              "placeholder": "Add a comment...",
              "class": "comment-input"
            }
          },
          {
            "tag": "button",
            "attributes": {
              "class": "comment-button"
            },
            "content": "Post Comment"
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "comment"
        },
        "children": [
          {
            "tag": "img",
            "attributes": {
              "src": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              "alt": "User",
              "class": "commenter-avatar"
            }
          },
          {
            "tag": "div",
            "attributes": {
              "class": "comment-content"
            },
            "children": [
              {
                "tag": "h4",
                "attributes": {
                  "class": "commenter-name"
                },
                "content": "John Doe"
              },
              {
                "tag": "p",
                "attributes": {
                  "class": "comment-text"
                },
                "content": "Great insights! Looking forward to more discussions."
              }
            ]
          }
        ]
      }
      // Repeat the above structure for additional comments
    ]
  }
  

export {commentSection}