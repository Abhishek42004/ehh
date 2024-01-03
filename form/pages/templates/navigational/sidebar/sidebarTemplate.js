const sidebarTemplate = {
    "tag": "div",
    "attributes": {
      "class": "sidebar",
      "id": "sidebar",
      "dataRouter":"#app"
    },
    "children": [
      {
        "tag": "button",
        "attributes": {
          "class": "sidebar-toggle",
          "id": "sidebar-toggle"
        },
        "content": "&#9776;"
      },
      {
        "tag": "ul",
        "attributes": {
          "class": "sidebar-menu"
        },
        "children": [
          {
            "tag": "li",
            "attributes": {
              "class": "menu-item"
            },
            "children": [
              {
                "tag": "a",
                "attributes": {
                  "href": "#"
                },
                "children": [
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-arrow-right-s-fill"
                    }
                  },
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-dashboard-line"
                    }
                  },
                  {
                    "tag": "span",
                    "content": "Dashboard"
                  }
                ]
              },
              {
                "tag": "ul",
                "attributes": {
                  "class": "submenu"
                },
                "children": [
                  {
                    "tag": "li",
                    "children": [
                      {
                        "tag": "a",
                        "attributes": {
                          "href": "#"
                        },
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-bar-chart-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Analytics"
                          }
                        ]
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
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-settings-5-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Settings"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "li",
            "attributes": {
              "class": "menu-item"
            },
            "children": [
              {
                "tag": "a",
                "attributes": {
                  "href": "#"
                },
                "children": [
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-arrow-right-s-fill"
                    }
                  },
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-mail-line"
                    }
                  },
                  {
                    "tag": "span",
                    "content": "Messages"
                  }
                ]
              },
              {
                "tag": "ul",
                "attributes": {
                  "class": "submenu"
                },
                "children": [
                  {
                    "tag": "li",
                    "children": [
                      {
                        "tag": "a",
                        "attributes": {
                          "href": "#"
                        },
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-inbox-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Inbox"
                          }
                        ]
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
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-send-plane-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Sent"
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "tag": "li",
            "attributes": {
              "class": "menu-item"
            },
            "children": [
              {
                "tag": "a",
                "attributes": {
                  "href": "#"
                },
                "children": [
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-arrow-right-s-fill"
                    }
                  },
                  {
                    "tag": "i",
                    "attributes": {
                      "class": "ri-group-line"
                    }
                  },
                  {
                    "tag": "span",
                    "content": "Users"
                  }
                ]
              },
              {
                "tag": "ul",
                "attributes": {
                  "class": "submenu"
                },
                "children": [
                  {
                    "tag": "li",
                    "children": [
                      {
                        "tag": "a",
                        "attributes": {
                          "href": "#"
                        },
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-user-add-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Add User"
                          }
                        ]
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
                        "children": [
                          {
                            "tag": "i",
                            "attributes": {
                              "class": "ri-profile-line"
                            }
                          },
                          {
                            "tag": "span",
                            "content": "Profile"
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
    ]
  }
  
  
  

  export {sidebarTemplate}
  