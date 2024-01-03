const footerTemplate = {
    "tag": "footer",
    "attributes": {
      "class": "footer",
      "dataRouter":"#app"
    },
    "children": [
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "a",
            "attributes": {
              "href": "#",
              "class": "footer__logo"
            },
            "children": [
              {
                "tag": "img",
                "attributes": {
                  "src": "https://via.placeholder.com/150x50?text=Logo",
                  "alt": "Company Logo"
                }
              }
            ]
          }
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "ul",
            "attributes": {
              "class": "footer__navigation"
            },
            "children": [
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/home"}, "content": "Home"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/about"}, "content": "About Us"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/services"}, "content": "Services"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/products"}, "content": "Products"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/faq"}, "content": "FAQ"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/blog"}, "content": "Blog"}]}
            ]
          }
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "ul",
            "attributes": {
              "class": "footer__social-media"
            },
            "children": [
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "https://facebook.com", "target": "_blank", "aria-label": "Facebook"}, "children": [{"tag": "i", "attributes": {"class": "ri-facebook-circle-fill"}}]}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "https://twitter.com", "target": "_blank", "aria-label": "Twitter"}, "children": [{"tag": "i", "attributes": {"class": "ri-twitter-fill"}}]}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "https://linkedin.com", "target": "_blank", "aria-label": "LinkedIn"}, "children": [{"tag": "i", "attributes": {"class": "ri-linkedin-fill"}}]}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "https://instagram.com", "target": "_blank", "aria-label": "Instagram"}, "children": [{"tag": "i", "attributes": {"class": "ri-instagram-fill"}}]}]}
            ]
          }
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "ul",
            "attributes": {
              "class": "footer__contact-info"
            },
            "children": [
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "tel:+1234567890"}, "content": "+1 (234) 567-890"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "mailto:contact@example.com"}, "content": "contact@example.com"}]},
              {"tag": "li", "content": "1234 Street Name, City, Country"}
            ]
          }
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "ul",
            "attributes": {
              "class": "footer__legal"
            },
            "children": [
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/privacy-policy"}, "content": "Privacy Policy"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/terms-of-use"}, "content": "Terms of Use"}]},
              {"tag": "li", "children": [{"tag": "a", "attributes": {"href": "/cookie-policy"}, "content": "Cookie Policy"}]}
            ]
          }
        ]
      },
      {
        "tag": "section",
        "attributes": {
          "class": "footer__section"
        },
        "children": [
          {
            "tag": "div",
            "attributes": {
              "class": "footer__copyright"
            },
            "content": "© Your Company 2023. All rights reserved."
          },
          {
            "tag": "div",
            "attributes": {
              "class": "footer__credits"
            },
            "content": "Designed by Your Name."
          }
        ]
      }
    ]
  }
  

  export {footerTemplate}