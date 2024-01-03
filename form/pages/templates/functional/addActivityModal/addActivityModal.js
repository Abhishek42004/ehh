const addActivityModal = {
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
                "class": "modal-content",
                "style":"background:gainsboro",
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
                        "submit":"insertActivity",
                        
                        
                    },
                    "children": [
                        {
                            "tag": "h2",
                            "content": "Add New Activity"
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "taskName"
                            },
                            "content": "Activity Title:"
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
                                "for": "content",
                            },
                            "content": "Description:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "class": "modal-activity-description",
                                "type": "text",
                                "id": "content",
                                "name": "content",
                                
                            }
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "content"
                            },
                            "content": "File Upload:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "file",
                                "id": "content",
                                "name": "content"
                            }
                        },
                        {
                            "tag": "label",
                            "attributes": {
                                "for": "assignTo"
                            },
                            "content": "Activity Type:"
                        },
                        {
                            "tag": "input",
                            "attributes": {
                                "type": "text",
                                "id": "activityType",
                                "name": "activityType",
                                
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
export { addActivityModal }  