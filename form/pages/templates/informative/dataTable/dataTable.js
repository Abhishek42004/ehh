const dataTable = {
    "tag": "div",
    "attributes": {
        "class": "table-container",
        "dataRouter": "#content"
    },
    "children": [
        {
            "tag": "input",
            "attributes": {
                "type": "text",
                "id": "filterInput",
                "placeholder": "Filter by name..."
            }
        },
        {
            "tag": "table",
            "attributes": {
                "class": "data-table",
                "id": "dataTable"
            },
            "children": [
                {
                    "tag": "thead",
                    "children": [
                        {
                            "tag": "tr",
                            "children": [
                                {
                                    "tag": "th",
                                    "attributes": {
                                        "onclick": "sortTable(0)"
                                    },
                                    "content": "Task Name",
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-down-line"
                                            }
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-up-line"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "th",
                                    "attributes": {
                                        "onclick": "sortTable(1)"
                                    },
                                    "content": "Content",
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-down-line"
                                            }
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-up-line"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "th",
                                    "attributes": {
                                        "onclick": "sortTable(2)"
                                    },
                                    "content": "Created",
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-down-line"
                                            }
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-up-line"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "th",
                                    "attributes": {
                                        "onclick": "sortTable(3)"
                                    },
                                    "content": "Assign To",
                                    "children": [
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-down-line"
                                            }
                                        },
                                        {
                                            "tag": "i",
                                            "attributes": {
                                                "class": "ri-arrow-up-line"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "th",
                                    "content": "Actions"
                                }
                            ]
                        }
                    ]
                },
                {
                    "tag": "tbody",
                    "attributes": {
                        "id": "tableBody"
                    },
                    "repeat": "tasks",
                    "children": [
                        {
                            "tag": "tr",
                            "children": [
                                {
                                    "tag": "td",
                                    "content": "{{taskName}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{content}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{created}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{assignTo}}"
                                },
                                {
                                    "tag": "td",
                                    "attributes": {
                                        "class": "menu-trigger-cell"
                                    },
                                    "children": [
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "doc-icon"
                                            },
                                            "content": "&#8942;"
                                        },
                                        {
                                            "tag": "div",
                                            "attributes": {
                                                "class": "row-hover-menu"
                                            },
                                            "children": [
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "data-id": "{{taskId}}",
                                                        "callBack": "getOneTask"
                                                    },
                                                    "content": "Update"
                                                },
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "data-id": "{{taskId}}",
                                                        "callBack": "deleteTaskById"
                                                    },
                                                    "content": "Delete"
                                                },
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "href": "#"
                                                    },
                                                    "content": "Download"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
export { dataTable }