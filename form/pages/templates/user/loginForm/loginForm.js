const loginForm = {
    "tag": "div",
    "attributes": {
        "class": "container",
        "dataRouter": "#app"
    },
    "children": [
        {
            "tag": "form",
            "attributes": {
                "class": "auth-form",
                "submit": "login"
            },
            "children": [
                {
                    "tag": "h2",
                    "content": "Login"
                },
                {
                    "tag": "label",
                    "attributes": {
                        "for": "userName"
                    },
                    "content": "User Name"
                },
                {
                    "tag": "input",
                    "attributes": {
                        "type": "text",
                        "id": "userName",
                        "name": "userName",
                        "required": "true"
                    }
                },
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
                        "required": "true"
                    }
                },
                {
                    "tag": "button",
                    "attributes": {
                        "type": "submit",
                        "class": "button"
                    },
                    "content": "Login"
                },
                {
                    "tag": "p",
                    "attributes": {
                        "class": "auth-switch"
                    },
                    "children": [
                        {
                            "tag": "span",

                            "content": "Don't have an Account ? "
                        }
                        ,
                        {
                            "tag": "br"
                        },
                        {
                            "tag": "a",
                            "attributes": {
                                "href": "#/",
                                "click": "updatePage"
                            },
                            "content": "Register"
                        }
                    ]
                }
            ]
        }
    ]
}
export { loginForm }  