const navbarTemplate = {
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
          "tag": "ul",
          "attributes": {
            "class": "navbar-nav"
          },
          "children": [
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item active"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#/work"
                  },
                  "content": "Work"
                }
              ]
            },
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#"
                  },
                  "content": "Tempalte"
                }
              ]
            },
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item dropdown"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#"
                  },
                  "content": "Pricing"
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "dropdown-menu"
                  },
                  "children": [
                    {
                      "tag": "a",
                      "attributes": {
                        "href": "#"
                      },
                      "content": "Product"
                    },
                    {
                      "tag": "a",
                      "attributes": {
                        "href": "#"
                      },
                      "content": "Template"
                    },
                    {
                      "tag": "a",
                      "attributes": {
                        "href": "#"
                      },
                      "content": "Pricing"
                    },
                    {
                      "tag": "a",
                      "attributes": {

                        "href": "#/docs",
                        "click": "updatePage"
                      },
                      "content": "Docs"
                    },
                    {
                      "tag": "a",
                      "attributes": {
                        "href": "#"
                      },
                      "content": "About Us"
                    },
                    {
                      "tag": "a",
                      "attributes": {
                        "href": "#"
                      },
                      "content": "Request a demo"
                    }

                  ]
                }
              ]
            },
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#/docs",
                    "callBack": "updatePage"
                  },
                  "content": "Docs"
                }
              ]
            },
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#/explorer",
                    "callBack": "updatePage"
                  },
                  "content": "Explorer"
                }
              ]
            },
            {
              "tag": "li",
              "attributes": {
                "class": "nav-item"
              },
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "#/register",
                    "callBack": "updatePage"
                  },
                  "content": "Join"
                }
              ]
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
                "class": "btn btn-primary"
              },
              "content": "Login"
            },
            {
              "tag": "button",
              "attributes": {
                "class": "btn btn-secondary"
              },
              "content": "Sign Up"
            }
          ]
        }
      ]
    }
  ]
}


export { navbarTemplate }