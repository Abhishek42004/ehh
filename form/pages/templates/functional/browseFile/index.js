const browseFileTemplate = {
    "tag": "div",
    "attributes": {
        "class": "container",
        "dataRouter":"#app"
    },
    "children": [
        {
            "tag": "h1",
            "content": "Markdown File Upload"
        },
        {
            "tag": "form",
            "attributes": {
                "id": "uploadForm",
                "submit":"uploadMarkdownFile"
            },
            "children": [
                {
                    "tag": "input",
                    "attributes": {
                        "type": "file",
                        "id": "fileInput",
                        "name": "file",
                        "accept":".md",
                        "required":'true'
                    }
                },
                {
                    "tag": "button",
                    "attributes": {
                        "type": "submit"
                    },
                    "content": "Upload"
                }
            ]
        },
        {
            "tag": "div",
            "attributes": {
                "class": "progress-container"
            },
            "children": [
                {
                    "tag": "div",
                    "attributes": {
                        "class": "progress-bar",
                        "id": "progressBar"
                    }
                }
            ]
        },
        {
            "tag": "p",
            "attributes": {
                "id": "statusMessage"
            }
        }
    ]
}
export { browseFileTemplate }  