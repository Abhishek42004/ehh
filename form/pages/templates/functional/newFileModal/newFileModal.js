const newFileModal = {
    "tag": "div",
    "attributes": {
        "id": "new-file-modal",
        "class": "modal",
        "dataRouter":"#app",
      
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
                        "callBack": "removeElement"
                    },
                    "content": "&times;"
                },
                {
                    "tag": "form",
                    "attributes": {
                        "id": "new-file-form",
                        "submit":"createRecord",
                        "data-element":"#new-file-modal",
                        "callBack" :"createTask"
                    },
                    "children": [
                        {
                            "tag": "h2",
                            "content": "Create New Task"
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "taskName"
                            },
                            "content": "Task Name:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "text",
                                "id": "taskName",
                                "name": "taskName",
                                
                            }
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "content"
                            },
                            "content": "Content:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "text",
                                "id": "content",
                                "name": "content",
                                
                            }
                        },{
                            "tag": "label",
                            "attributes": {
                                "for": "created"
                            },
                            "content": "Created At:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "date",
                                "id": "created",
                                "name": "created",
                                
                            }
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "assignTo"
                            },
                            "content": "Assign To:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "text",
                                "id": "assignTo",
                                "name": "assignTo",
                                
                            }
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
export { newFileModal }  