const docPageTemplate = {
    tag: "div",
    attributes: {
        class: "doc-page",
        dataRouter:"#app"
    },
    children: [
        {
            tag: "header",
            children: [
                {
                    tag: "h1",
                    content: "{{title}}"
                }
            ]
        },
        {
            tag: "section",
            children: [
                {
                    tag: "section",
                    repeat: "sections",
                    children: [
                        {
                            tag: "h2",
                            content: "{{title}}"
                        },
                        {
                            tag: "ol",
                            children: [
                                {
                                    tag: "li",
                                    repeat: "modules",
                                    children: [
                                        {
                                            tag: "h3",
                                            content: "{{name}}"
                                        },
                                        {
                                            tag: "ul",
                                            repeat: "features",
                                            children: [
                                                {
                                                    tag: "li",
                                                    content: "{{title}}",
                                                    children: [
                                                        {
                                                            tag: "ul",
                                                            repeat: "details",
                                                            children: [
                                                                {
                                                                    tag: "li",
                                                                    content: "{{detail}}"
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
                        },
                        {
                            tag: "table",
                            repeat: "modules",
                            attributes: {
                                border: "1"
                            },
                            children: [
                                {
                                    tag: "thead",
                                    children: [
                                        {
                                            tag: "th",
                                            repeat: "headers",

                                            content: "{{head}}"
                                        }
                                    ]
                                },
                                {
                                    tag: "tbody",
                                    repeat: "rows",
                                    children: [
                                        {
                                            tag: "tr",

                                            children: [
                                                {
                                                    tag: "td",
                                                    content: "{{Component}}"
                                                },
                                                {
                                                    tag: "td",
                                                    content: "{{Action}}"
                                                },
                                                {
                                                    tag: "td",
                                                    content: "{{UIElements}}"
                                                },
                                                {
                                                    tag: "td",
                                                    content: "{{Event}}"
                                                },
                                                {
                                                    tag: "td",
                                                    content: "{{ParentEntity}}"
                                                },
                                                {
                                                    tag: "td",
                                                    children: [
                                                        { tag: "a", attributes: { href: "#/flowchart" }, content: "{{FlowExecuted}}" }
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
    ]
};

export {docPageTemplate}