const registerForm = {
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
                "submit":"register"
                
            },
            "children": [
                {
                    "tag": "h2",
                    "content": "Register"
                },
                {
                    "tag": "label",
                    "attributes": {
                        "for": "fullName"
                    },
                    "content": "Full Name"
                },
                {
                    "tag": "input",
                    "attributes": {
                        "type": "text",
                        "id": "fullName",
                        "name": "fullName",
                        "required": "true"
                    }
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
                    "content": "Register"
                },
                {
                    "tag": "p",
                    "attributes": {
                        "class": "auth-switch"
                    },
                    "children": [
                        {
                            "tag": "span",

                            "content": "Already have an account ?  "
                        }
                        ,
                        {
                            "tag": "br"
                        },
                        {
                            "tag": "a",
                            "attributes": {
                                "href": "#/login",
                                "click": "updatePage"
                            },
                            "content": "Login"
                        }
                    ]
                }


            ]
        }
    ]
}
export { registerForm }  