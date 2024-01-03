const landingPageBanner = {
    "tag": "section",
    "attributes": {
        "class": "hero",
        "dataRouter": "#app",
        "style":"background-color:#4FB77A"
    },
    "children": [
        {
            "tag": "h1",
            "attributes": {
                "class": "hero__title",
                "style":"color:white"
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
export { landingPageBanner }
