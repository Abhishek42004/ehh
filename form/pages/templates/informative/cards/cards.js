const cardsTemplate = {
    "tag": "div",
    "attributes": {
      "class": "card-container",
      "dataRouter":"#app"
    },
    
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "card"
        },
        "repeat":'this',
        "children": [
          {
            "tag": "img",
            "attributes": {
              "src": "{{cardImg}}",
              "alt": "Image 1",
              "class": "card-img-top"
            }
          },
          {
            "tag": "div",
            "attributes": {
              "class": "card-body"
            },
            "children": [
              {
                "tag": "h5",
                "attributes": {
                  "class": "card-title"
                },
                "content": "{{cardTitle}}"
              },
              {
                "tag": "p",
                "attributes": {
                  "class": "card-text"
                },
                "content": "{{cardText}}"
              },
              {
                "tag": "a",
                "attributes": {
                  "class": "card-link"
                },
                "content": "{{cardLink}}"
              }
            ]
          }
        ]
      },
     
     
    ]
  }

  export {cardsTemplate}
  