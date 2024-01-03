const taskDataTable = {
    "tag": "div",
    "attributes": {
        "class": "table-container",
        "dataRouter":"#app"
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
                                    "content": "Name",
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
                                    "content": "Owner",
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
                                    "content": "Last Modified",
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
                                    "content": "File Size",
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
                                    "content": "{{name}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{owner}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{lastModified}}"
                                },
                                {
                                    "tag": "td",
                                    "content": "{{fileSize}}"
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
                                                        "data-id":"{{_id}}",
                                                        "callBack" :"addElement",
                                                        "data-element":"updateTaskForm"
                                                    },
                                                    "content": "Update"
                                                },
                                                {
                                                    "tag": "a",
                                                    "attributes": {
                                                        "data-id":"{{_id}}"
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


export { taskDataTable }