const editProfileForm = {
    "tag": "div",
    "attributes": {
        "id": "edit-profile-modal",
        "class": "modal",
        "dataRouter": "#app",

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
                        "data-element": "#edit-profile-modal",
                        "click": "removeElement"
                    },
                    "content": "&times;"
                },
                {
                    "tag": "div",
                    "attributes": {
                        "class": "container"
                    },
                    "children": [
                        {
                            "tag": "form",
                            "attributes": {
                                "class": "edit-profile-form"
                            },
                            "children": [
                                {
                                    "tag": "h2",
                                    "content": "Edit Profile"
                                },
                                {
                                    "tag": "fieldset",
                                    "children": [
                                        {
                                            "tag": "legend",
                                            "content": "Personal Information"
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "fullName"
                                            },
                                            "content": "Full Name:"
                                        },
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "text",
                                                "id": "fullName",
                                                "name": "fullName"
                                            }
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "email"
                                            },
                                            "content": "Email:"
                                        },
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "email",
                                                "id": "email",
                                                "name": "email"
                                            }
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "phone"
                                            },
                                            "content": "Phone:"
                                        },
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "tel",
                                                "id": "phone",
                                                "name": "phone"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "fieldset",
                                    "children": [
                                        {
                                            "tag": "legend",
                                            "content": "Professional Information"
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "jobTitle"
                                            },
                                            "content": "Job Title:"
                                        },
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "text",
                                                "id": "jobTitle",
                                                "name": "jobTitle"
                                            }
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "company"
                                            },
                                            "content": "Company:"
                                        },
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "text",
                                                "id": "company",
                                                "name": "company"
                                            }
                                        },
                                        {
                                            "tag": "label",
                                            "attributes": {
                                                "for": "bio"
                                            },
                                            "content": "Bio:"
                                        },
                                        {
                                            "tag": "textarea",
                                            "attributes": {
                                                "id": "bio",
                                                "name": "bio"
                                            }
                                        }
                                    ]
                                },
                                {
                                    "tag": "fieldset",
                                    "children": [
                                        {
                                            "tag": "legend",
                                            "content": "Skills"
                                        },
                                        // Add skills input fields or selectors here as needed
                                        {
                                            "tag": "input",
                                            "attributes": {
                                                "type": "text",
                                                "name": "skill1"
                                            }
                                        },
                                       
                                    ]
                                },
                                {
                                    "tag": "button",
                                    "attributes": {
                                        "type": "submit",
                                        "class": "button"
                                    },
                                    "content": "Save Changes"
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
}
export { editProfileForm }  