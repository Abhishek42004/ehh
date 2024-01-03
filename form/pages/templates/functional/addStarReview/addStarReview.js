const addStarReview = {
    "tag": "div",
    "attributes": {
      "class": "star-review",
      "dataRouter":"#app",
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
          "class": "stars"
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
          "class": "review-button"
        },
        "content": "Submit"
      }
    ]
  }
  

export { addStarReview }