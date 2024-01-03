const updateFileModal = {
    "tag": "div",
    "attributes": {
        "id": "new-file-modal",
        "class": "modal",
        "dataRouter":"#app"
    },
    "children": [
        {
            "tag": "div",
            "attributes": {
                "class": "modal-content"
            },
            "children": [
                {
                    "tag": "span",
                    "attributes": {
                        "class": "close-button",
                        "data-element":"#new-file-modal",
                        "click": "removeElement"
                    },
                    "content": "&times;"
                },
                {
                    "tag": "form",
                    "attributes": {
                        "id": "new-file-form",
                        "submit":"createRecord",
                        "data-element":"#new-file-modal",
                        "data-endpoint":"/api/createRecord",
                        "data-id":"{{id}}"
                    },
                    "children": [
                        {
                            "tag": "h2",
                            "content": "Create New File"
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "file-name"
                            },
                            "content": "File Name:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "text",
                                "id": "file-name",
                                "name": "file-name",
                                "required": true
                            }
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "file-type"
                            },
                            "content": "File Type:"
                        },
                        {
                            "tag": "select",
                            "attributes": {
                                "id": "file-type",
                                "name": "file-type"
                            },
                            "children": [
                                {
                                    "tag": "option",
                                    "attributes": {
                                        "value": "doc"
                                    },
                                    "content": "Document"
                                },
                                {
                                    "tag": "option",
                                    "attributes": {
                                        "value": "sheet"
                                    },
                                    "content": "Spreadsheet"
                                },
                                {
                                    "tag": "option",
                                    "attributes": {
                                        "value": "slide"
                                    },
                                    "content": "Presentation"
                                }
                                // Note: Add more file types in the same format as needed
                            ]
                        },
                        {
                            "tag": "button",
                            "attributes": {
                                "type": "submit",
                                "class": "btn-submit"
                            },
                            "content": "Create"
                        }
                    ]
                }
            ]
        }
    ]
}
export { updateFileModal }  