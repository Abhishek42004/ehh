const profileBody = {
    "tag": "div",
    "attributes": {
        "class": "profile-container",
        "dataRouter": "#app"
    },
    "children": [
        {
            "tag": "div",
            "attributes": {
                "class": "profile-header"
            },
            "children": [
                {
                    "tag": "img",
                    "attributes": {
                        "src": "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
                        "alt": "John Doe",
                        "class": "profile-picture"
                    }
                },
                {
                    "tag": "h1",
                    "content": "John Doe"
                },
                {
                    "tag": "p",
                    "content": "Software Engineer at Shunya.ek"
                },
                {
                    "tag": "button",
                    "attributes": {
                        "class": "button",
                        "click": "addElement",
                        "data-element": "editProfileForm"
                    },
                    "content": "Edit Profile"
                }
            ]
        },
        {
            "tag": "div",
            "attributes": {
                "class": "profile-content"
            },
            "children": [
                {
                    "tag": "section",
                    "attributes": {
                        "class": "personal-info"
                    },
                    "children": [
                        {
                            "tag": "h3",
                            "content": "Personal Information"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Email:</b> john.doe@example.com"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Contact:</b> +1234567890"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Bio:</b> Passionate software engineer with a love for developing innovative solutions."
                        }
                    ]
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "skills"
                    },
                    "children": [
                        {
                            "tag": "h3",
                            "content": "Skills"
                        },
                        {
                            "tag": "p",
                            "content": "JavaScript, Python, React, Node.js"
                        }
                    ]
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "experience"
                    },
                    "children": [
                        {
                            "tag": "h3",
                            "content": "Experience"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Software Engineer</b> at Shunya.ek - Jan 2021 to Present"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Junior Developer</b> at TechCorp - Jan 2019 to Dec 2020"
                        }
                    ]
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "education"
                    },
                    "children": [
                        {
                            "tag": "h3",
                            "content": "Education"
                        },
                        {
                            "tag": "p",
                            "content": "<b>Bachelor of Science in Computer Science</b> - Tech University, 2015-2019"
                        }
                    ]
                },
                {
                    "tag": "section",
                    "attributes": {
                        "class": "activity-feed"
                    },
                    "children": [
                        {
                            "tag": "h3",
                            "content": "Recent Activities"
                        },
                        {
                            "tag": "p",
                            "content": "Participated in the project \"AI Development\" - Jan 2022"
                        },
                        {
                            "tag": "p",
                            "content": "Attended \"Machine Learning Workshop\" - Dec 2021"
                        }
                    ]
                }
            ]
        },
        {
            "tag": "aside",
            "attributes": {
                "class": "sidebar"
            },
            "children": [
                {
                    "tag": "h3",
                    "content": "Quick Links"
                },
                {
                    "tag": "a",
                    "attributes": {
                        "href": "settings.html"
                    },
                    "content": "Settings"
                },
                {
                    "tag": "a",
                    "attributes": {
                        "href": "privacy.html"
                    },
                    "content": "Privacy"
                },
                {
                    "tag": "a",
                    "attributes": {
                        "href": "help.html"
                    },
                    "content": "Help"
                },
                {
                    "tag": "h3",
                    "content": "Team Overview"
                },
                {
                    "tag": "a",
                    "attributes": {
                        "href": "profile.html?user=alice"
                    },
                    "content": "Alice Johnson"
                },
                {
                    "tag": "a",
                    "attributes": {
                        "href": "profile.html?user=bob"
                    },
                    "content": "Bob Smith"
                }
            ]
        }
    ]
}
export { profileBody }  