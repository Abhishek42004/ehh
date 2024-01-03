const activityFeedPage = {
    "tag": "div",
    "attributes": {
      "href": "#",
      "class": "feed-container",
      "dataRouter": "#app"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "activity-feed"
        },
        "children": [
          {
            "tag": "a",
            "attributes": {
              "href": "#activity-details"
            },
            "children": [
              {
                "tag": "div",
                "attributes": {
                  "class": "activity-post"
                },
                "children": [
                  {
                    "tag": "div",
                    "attributes": {
                      "class": "post-header"
                    },
                    "children": [
                      {
                        "tag": "img",
                        "attributes": {
                          "src": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                          "alt": "Alice Smith",
                          "class": "profile-picture"
                        }
                      },
                      {
                        "tag": "div",
                        "children": [
                          {
                            "tag": "h3",
                            "content": "Alice Smith"
                          },
                          {
                            "tag": "p",
                            "attributes": {
                              "class": "date-time"
                            },
                            "content": "March 1, 2024, 10:30 AM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "p",
                    "attributes": {
                      "class": "activity-description"
                    },
                    "content": "Participated in the project discussion about AI development. Shared insights on machine learning algorithms."
                  }
                ]
              }
            ]
          },
          {
            "tag": "a",
            "attributes": {
              "href": "#activity-details"
            },
            "children": [
              {
                "tag": "div",
                "attributes": {
                  "class": "activity-post"
                },
                "children": [
                  {
                    "tag": "div",
                    "attributes": {
                      "class": "post-header"
                    },
                    "children": [
                      {
                        "tag": "img",
                        "attributes": {
                          "src": "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                          "alt": "John Doe",
                          "class": "profile-picture"
                        }
                      },
                      {
                        "tag": "div",
                        "children": [
                          {
                            "tag": "h3",
                            "content": "John Doe"
                          },
                          {
                            "tag": "p",
                            "attributes": {
                              "class": "date-time"
                            },
                            "content": "February 28, 2024, 3:45 PM"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "tag": "p",
                    "attributes": {
                      "class": "activity-description"
                    },
                    "content": "Completed the front-end design for the new application feature. Check out the designs attached."
                  }
                ]
              }
            ]
          },
          {
            "tag": "div",
            "attributes": {
              "class": "pagination"
            },
            "children": [
              {
                "tag": "button",
                "attributes": {
                  "class": "pagination-button"
                },
                "content": "Load More Activities"
              }
            ]
          },
          {
            "tag": "div",
            "attributes": {
              "class": "activity-posts"
            },
            "children": [
              {
                "tag": "p",
                "attributes": {
                  "class": "empty-state-message"
                },
                "content": "No activities to display."
              }
            ]
          }
        ]
      }
    ]
  }
  
;
export { activityFeedPage }