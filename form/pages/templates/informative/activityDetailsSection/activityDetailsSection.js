const activityDetailsSection = {
    "tag": "div",
    "attributes": {
      "class": "activity-details-container",
      "dataRouter": "#app"
    },
    "children": [
      {
        "tag": "header",
        "attributes": {
          "class": "activity-heading"
        },
        "children": [
          {
            "tag": "h1",
            "content": "Team Activity Manager"
          }
          // Add navigation links and logout button if needed
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "activity-details-section"
        },
        "children": [
          {
            "tag": "h2",
            "content": "Project Discussion about AI Development"
          },
          {
            "tag": "p",
            "attributes": {
              "class": "date-time"
            },
            "content": "March 1, 2024, 10:30 AM"
          },
          {
            "tag": "div",
            "attributes": {
              "class": "description"
            },
            "children": [
              {
                "tag": "p",
                "content": "Participated in the project discussion about AI development. Shared insights on machine learning algorithms. lorem50 Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms.Participated in the project discussion about AI development. Shared insights on machine learning algorithms."
              }
            ]
          },
          {
            "tag": "div",
            "attributes": {
              "class": "attachments"
            },
            "children": [
              {
                "tag": "h4",
                "content": "Attachments:"
              },
              {
                "tag": "ul",
                "children": [
                  {
                    "tag": "li",
                    "children": [
                      {
                        "tag": "a",
                        "attributes": {
                          "href": "#"
                        },
                        "content": "Attached File 1"
                      }
                    ]
                  },
                  {
                    "tag": "li",
                    "children": [
                      {
                        "tag": "a",
                        "attributes": {
                          "href": "#"
                        },
                        "content": "Attached File 2"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  


export {activityDetailsSection}


