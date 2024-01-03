const heroSectionTemplate = {
    "tag": "section",
    "attributes": {
        "class": "hero",
        "dataRouter": "#app"
    },
    "children": [
        {
            "tag":"img",
            "attributes": {
                "src": "./form/assets/banner.png"
            },
        },
        {
            "tag": "h1",
            "attributes": {
                "class": "hero__title"
            },
            "content": "{{heroTitle}}"
        },
        {
            "tag": "p",
            "attributes": {
                "class": "hero__subtitle"
            },
            "content": "{{heroSubtitle}}"
        },
        {
            "tag": "button",
            "attributes": {
                "class": "hero__cta-button"
            },
            "content": "{{buttonText}}"
        },
       
    ]
}
export { heroSectionTemplate }
