const docPageData = {
    title: "Task Management - chull - Product Doc",
    sections: [
        {
            title: "Modules and Features",
            modules: [
                {
                    name: "User Management Module",
                    features: [
                        {
                            title: "Registration",
                            details: [
                                { detail: "Sign up with email and password" },
                                { detail: "Confirm password functionality" },
                                { detail: "Optional profile picture upload" }
                            ]
                        },
                        {
                            title: "Login",
                            details: [
                                { detail: "Email and password input" },
                                { detail: "\"Remember me\" option" },
                                { detail: "\"Forgot password\" recovery link" }
                            ]
                        },
                        {
                            title: "Profile Management",
                            details: [
                                { detail: "View user profile" },
                                { detail: "Edit user details (name, email, profile picture)" },
                                { detail: "Change password" },
                                { detail: "Delete account option" }
                            ]
                        },
                        {
                            title: "Account Security",
                            details: [
                                { detail: "Two-factor authentication (if expanded in the future)" },
                                { detail: "Logout from all devices" }
                            ]
                        }
                    ]
                }
                ,
                {
                    name: "Project Management Module",
                    features: [
                        {
                            title: "Project Creation",
                            details: [
                                { detail: "Define project name" },
                                { detail: "Add project description" },
                                { detail: "Set start and end dates (optional)" }
                            ]
                        },
                        {
                            title: "Project Overview",
                            details: [
                                { detail: "List of all projects with status (Ongoing, Completed, Upcoming)" },
                                { detail: "Display number of tasks under each project" }
                            ]
                        },
                        {
                            title: "Project Editing",
                            details: [
                                { detail: "Edit project name, description, and dates" },
                                { detail: "Archive completed projects" }
                            ]
                        },
                        {
                            title: "Member Management",
                            details: [
                                { detail: "Invite users to a project (via email or username)" },
                                { detail: "Set member roles (Admin, Member, Viewer)" },
                                { detail: "Remove members from projects" }
                            ]
                        }
                    ]
                }
                ,
                {
                    name: "Task Management Module",
                    features: [
                        {
                            title: "Task Creation",
                            details: [
                                { detail: "Define task name" },
                                { detail: "Add task description" },
                                { detail: "Set task priority (High, Medium, Low)" },
                                { detail: "Assign task to project members" },
                                { detail: "Define task deadline" }
                            ]
                        },
                        {
                            title: "Task Overview",
                            details: [
                                { detail: "View tasks in a list or board view" },
                                { detail: "Filter tasks by status (Ongoing, Completed, Pending)" },
                                { detail: "Search tasks" }
                            ]
                        },
                        {
                            title: "Task Editing",
                            details: [
                                { detail: "Edit task name, description, and priority" },
                                { detail: "Reassign tasks" },
                                { detail: "Update task status (e.g., mark as complete)" },
                                { detail: "Set or update deadlines" }
                            ]
                        },
                        {
                            title: "Task Notifications",
                            details: [
                                { detail: "Deadline reminders" },
                                { detail: "Notifications for task assignment and changes" }
                            ]
                        }
                    ]
                }
                ,
                {
                    name: "Documentation Module",
                    features: [
                        {
                            title: "Document Creation (in Editor Page)",
                            details: [
                                { detail: "Rich text editor for detailed documentation" },
                                { detail: "Option to add tables, images, and links" },
                                { detail: "Associate document with specific tasks or projects" }
                            ]
                        },
                        {
                            title: "Document Library (in Doc Page)",
                            details: [
                                { detail: "List of all saved documents" },
                                { detail: "Categorized by associated task or project" },
                                { detail: "Search functionality for quick access" }
                            ]
                        },
                        {
                            title: "Document Viewing",
                            details: [
                                { detail: "Display document in a readable format" },
                                { detail: "Navigation links to go to the associated task or project" },
                                { detail: "Option to print or export as PDF" }
                            ]
                        },
                        {
                            title: "Document Editing",
                            details: [
                                { detail: "Reopen in editor for changes" },
                                { detail: "Update document associations (if a doc needs to be linked to another task)" }
                            ]
                        }
                    ]
                }

            ]
        },
        {
            title: "Component Wise Mappings",
            modules:[
                {
                    name:"Landing Page Component Mapping",
                    headers: [
                        { head: "Component" },
                        { head: "Action" },
                        { head: "UI Elements" },
                        { head: "Event" },
                        { head: "Parent Entity" },
                        { head: "Flow Executed" }
                    ],
                    rows: [
                        {
                            Component: "Page Container",
                            Action: "Load Landing Page",
                            UIElements: "Entire page layout",
                            Event: "Page Load",
                            ParentEntity: "N/A",
                            FlowExecuted: "Display the landing page"
                        },
                        {
                            Component: "Logo/Brand",
                            Action: "Display Brand",
                            UIElements: "App name/logo graphic",
                            Event: "Page Load",
                            ParentEntity: "Page Container",
                            FlowExecuted: "Showcase the brand identity"
                        },
                        {
                            Component: "Description",
                            Action: "Show Overview",
                            UIElements: "Brief app overview text",
                            Event: "Page Load",
                            ParentEntity: "Page Container",
                            FlowExecuted: "Inform the user about the app"
                        },
                        {
                            Component: "Login Button",
                            Action: "Navigate to Login",
                            UIElements: "Button with \"Login\" label",
                            Event: "Click",
                            ParentEntity: "Page Container",
                            FlowExecuted: "Redirect user to the Login page"
                        },
                        {
                            Component: "Register Button",
                            Action: "Navigate to Register",
                            UIElements: "Button with \"Register\" label",
                            Event: "Click",
                            ParentEntity: "Page Container",
                            FlowExecuted: "Redirect user to the Register page"
                        }
                        // ... add more rows in a similar fashion if needed
                    ]
                },
                
            ]
           
          
        }

    ]
};

export { docPageData }
