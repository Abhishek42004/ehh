const registerFormTemplate = {
    "tag": "form",
    "attributes": {
      "class": "form",
      "dataRouter":"#app",
      "method": "post",
      
      "callBack" :"register"
    },
    "children": [
      {
        "tag": "div",
        "attributes": {
          "class": "form-group"
        },
        "children": [
          {
            "tag": "label",
            "attributes": {
              "for": "userName"
            },
            "content": "Username"
          },
          {
            "tag": "input",
            "attributes": {
              "type": "text",
              "id": "userName",
              "name": "userName",
              "placeholder": "Enter username",
              "required": "true"
            }
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "form-group"
        },
        "children": [
          {
            "tag": "label",
            "attributes": {
              "for": "email"
            },
            "content": "Email"
          },
          {
            "tag": "input",
            "attributes": {
              "type": "email",
              "id": "email",
              "name": "email",
              "placeholder": "Enter email",
              "required": "true"
            }
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "form-group"
        },
        "children": [
          {
            "tag": "label",
            "attributes": {
              "for": "password"
            },
            "content": "Password"
          },
          {
            "tag": "input",
            "attributes": {
              "type": "password",
              "id": "password",
              "name": "password",
              "placeholder": "Enter password",
              "required": "true"
            }
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "form-group"
        },
        "children": [
          {
            "tag": "label",
            "attributes": {
              "for": "mobile"
            },
            "content": "Phone Number"
          },
          {
            "tag": "input",
            "attributes": {
              "type": "text",
              "id": "mobile",
              "name": "mobile",
              "placeholder": "Enter Phone Number",
              "required": "true"
            }
          }
        ]
      },
      {
        "tag": "div",
        "attributes": {
          "class": "form-group",
          "style":" margin: auto;text-align: center;"
        },
        "children": [
          {
            "tag": "input",
            "attributes": {
              "type": "submit",
              "value": "Register",
              "class": "submit-btn"
            }
          }
        ]
      }
    ]
  };
  
 export {registerFormTemplate}  