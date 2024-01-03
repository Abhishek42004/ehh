const explorerTemplate = {
    "tag": "div",
    "attributes": {
        "id": "container",
        "dataRouter": "#app"
    },
    "children": [
        {
            "tag": "aside",
            "attributes": {
                "id": "sidebar"
            },
            "children": [
                // {
                //     "tag": "button",
                //     "attributes": {
                //         "id": "sidebar-toggle"
                //     },
                //     "content": "☰"
                // },
                {
                    "tag": "nav",
                    "children": [
                        {
                            "tag": "ul",
                            "children": [
                                {
                                    "tag": "li",
                                    "attributes": {
                                        "class": "active"
                                    },
                                    "children": [
                                        {
                                            "tag": "a",
                                            "attributes": {
                                                "href": "#"
                                            },
                                            "content": "My Drive"
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
                                            "content": "Shared with Me"
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
                                            "content": "Recent"
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
                                            "content": "Starred"
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
                                            "content": "Trash"
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
            "tag": "main",
            "attributes": {
                "id": "main-content"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "id": "toolbar"
                    },
                    "children": [
                        {
                            "tag": "button",
                            "attributes": {
                                "id": "new-button",
                                "click":"addElement",
                                "data-element":"newFileModal"
                            },
                            "content": "+ New"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "search",
                                "placeholder": "Search in Drive"
                            }
                        },
                        {
                            "tag": "button",
                            "attributes": {
                                "id": "logOutBtn",
                                "click":"addElement",
                                "data-element":"logOutModal",
                                "class":"danger"
                            },
                            "content": "Log Out"
                        },
                    ]
                },
                {
                    "tag": "div",
                    "attributes": {
                        "id": "file-list"
                    },
                    "children": [
                        // File items will be populated by JavaScript
                    ]
                }
            ]
        }
    ]
}


export { explorerTemplate }