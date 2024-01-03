const loginFormTemplate = {
    "tag": "form",
    "attributes": {
        "id": "login-form",
        "dataRouter": "#app",
        "class": "login-form",
        "method": "post",
      "submit":"loginUser"
    },
    "children": [
        {
            "tag": "h2",
            "content": "Login to Your Account"
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
                        "for": "userName"
                    },
                    "content": "Username:"
                },
                {
                    "tag": "input",
                    "attributes": {
                        "type": "text",
                        "id": "userName",
                        "name": "userName",
                        "required": "true",
                        "placeholder": "Enter your username"
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
                    "content": "Password:"
                },
                {
                    "tag": "input",
                    "attributes": {
                        "type": "password",
                        "id": "password",
                        "name": "password",
                        "required": "true",
                        "placeholder": "Enter your password"
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
                    "tag": "button",
                    "attributes": {
                        "type": "submit",
                        "class": "btn-login"
                    },
                    "content": "Login"
                }
            ]
        }
    ]
}



export { loginFormTemplate }