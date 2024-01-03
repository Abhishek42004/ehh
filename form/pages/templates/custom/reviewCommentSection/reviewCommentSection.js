const reviewCommentSection = {
    "tag": "div",
    "attributes": {
      "class": "review-comment-sections",
      "dataRouter":"#app",
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "comment-section"
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
      },
      {
        "tag": "div",
        "attributes": {
          "class": "star-review"
        },
        "children": [
          {
            "tag": "h3",
            "attributes": {
              "class": "review-heading"
            },
            "content": "Add Review"
          },
          {
            "tag": "div",
            "attributes": {
              "class": "stars",
              "onclick": "handleStarClick(event)"
            },
            "children": [
              {
                "tag": "input",
                "attributes": {
                  "type": "radio",
                  "name": "star",
                  "id": "star5",
                  "class": "star-input",
                  "value": "5"
                }
              },
              {
                "tag": "label",
                "attributes": {
                  "for": "star5",
                  "class": "star"
                },
                "content": "&#9733;"
              },
              {
                "tag": "input",
                "attributes": {
                  "type": "radio",
                  "name": "star",
                  "id": "star4",
                  "class": "star-input",
                  "value": "4"
                }
              },
              {
                "tag": "label",
                "attributes": {
                  "for": "star4",
                  "class": "star"
                },
                "content": "&#9733;"
              },
              {
                "tag": "input",
                "attributes": {
                  "type": "radio",
                  "name": "star",
                  "id": "star3",
                  "class": "star-input",
                  "value": "3"
                }
              },
              {
                "tag": "label",
                "attributes": {
                  "for": "star3",
                  "class": "star"
                },
                "content": "&#9733;"
              },
              {
                "tag": "input",
                "attributes": {
                  "type": "radio",
                  "name": "star",
                  "id": "star2",
                  "class": "star-input",
                  "value": "2"
                }
              },
              {
                "tag": "label",
                "attributes": {
                  "for": "star2",
                  "class": "star"
                },
                "content": "&#9733;"
              },
              {
                "tag": "input",
                "attributes": {
                  "type": "radio",
                  "name": "star",
                  "id": "star1",
                  "class": "star-input",
                  "value": "1"
                }
              },
              {
                "tag": "label",
                "attributes": {
                  "for": "star1",
                  "class": "star"
                },
                "content": "&#9733;"
              }
            ]
          },
          {
            "tag": "button",
            "attributes": {
              "class": "review-button",
              "onclick": "submitReview()"
            },
            "content": "Submit Review"
          }
        ]
      }
    ]
  }
  


export {reviewCommentSection}