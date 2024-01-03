import { registerForm } from "./pages/templates/user/registerForm/registerForm.js";
import { loginForm } from "./pages/templates/user/loginForm/loginForm.js";
import { header } from "./pages/templates/user/profilePage/header.js";
import { profileBody } from "./pages/templates/user/profilePage/profileBody.js";
import { editProfileForm } from "./pages/templates/user/editProfileForm/editProfileForm.js";



import { activityDetailsSection } from "./pages/templates/informative/activityDetailsSection/activityDetailsSection.js";
import { reviewCommentSection } from "./pages/templates/custom/reviewCommentSection/reviewCommentSection.js";
import { commentSection } from "./pages/templates/functional/commentSection/commentSection.js";
import { addStarReview } from "./pages/templates/functional/addStarReview/addStarReview.js";
import { addActivityModal } from "./pages/templates/functional/addActivityModal/addActivityModal.js";
import { activityFeedPage } from "./pages/templates/custom/activityFeedPage/activityFeedPage.js";
import { docPageData } from "./pages/content/custom/docPage.js"
import { docPageTemplate } from "./pages/templates/custom/docPage.js"
import { navbarTemplate } from "./pages/templates/navigational/navbar/navbar.js"
import { siteNavContent } from "./pages/content/navigational/navbar/navbar.js";
import { appNavContent } from "./pages/content/navigational/navbar/appNav.js";
import { navLink } from "./pages/templates/navigational/navLink/navLink.js";
import { registerFormTemplate } from "./pages/templates/functional/registerForm/index.js";
import { explorerTemplate } from "./pages/templates/custom/explorer/explorerTemplate.js";
import { listItemtemplate } from "./pages/templates/informative/explorerListItem.js";
import { newFileModal } from "./pages/templates/functional/newFileModal/newFileModal.js";
import { loginFormTemplate } from "./pages/templates/functional/loginForm/index.js";
import { logOutModal } from "./pages/templates/functional/logOutModal/logOutModal.js";
import { cardsTemplate } from "./pages/templates/informative/cards/cards.js";
import { heroSectionTemplate } from "./pages/templates/informative/heroSection/heroSection.js";
import { sidebarTemplate } from "./pages/templates/navigational/sidebar/sidebarTemplate.js";
import { footerTemplate } from "./pages/templates/navigational/footer/footer.js";
import { landingPageHeroData } from "./pages/content/informative/heroSection/landingPageHero.js";
import { workPageheroData } from "./pages/content/informative/heroSection/workPageheroData.js";
import { testimonials } from "./pages/templates/informative/testimonials/testimonial.js";
import { landingPageCardData } from "./pages/content/informative/cardData/landingPageCardData.js";
import { landingPageBannerData } from "./pages/content/informative/heroSection/landingPageBannerData.js";
import { landingPageBanner } from "./pages/templates/informative/landingPageBanner/landingPageBanner.js";
import { taskDataTable } from "./pages/templates/informative/taskDataTable/taskDataTable.js";
import { sampleTaskData } from "./pages/content/informative/dataTable/dataTable.js";
import { appNav } from "./pages/templates/navigational/navbar/appNav.js";
import { dataTable } from "./pages/templates/informative/dataTable/dataTable.js";
import { updateTaskModal } from "./pages/templates/functional/updateTaskModal/updateTaskModal.js";


const config = {
    name: "Chull",
    baseEndpoint: "http://localhost:3000",
    indexedDB: {
        dbName: "sample1",
        storesConfig: [
            { name: "users", keyPath: "id", autoIncrement: true },
            { name: "tasks", keyPath: "taskId", autoIncrement: true }
        ]
    },
    routes: [
        {
            path: '#/',
            components: [
                {
                    template: registerForm,

                },



            ],
        },
        {
            path: '#/profile',
            components: [
                {
                    template: header,

                },
                {
                    template: profileBody
                }



            ],


        },
        {
            path: '#/explorer',
            components: [
                {
                    template: appNav
                },
                {
                    template: {
                        "tag": "div",
                        "attributes": {
                            "id": "content",
                            "dataRouter": "#app"
                        },
                    }
                },
            ],
            // callback: [
            //     { name: "resendRequest", arg: "getAllTasks" }
            // ]
        },
        {
            path: '#/work',
            components: [
                {
                    template: navbarTemplate,
                    data: siteNavContent
                },
                {
                    template: heroSectionTemplate,
                    data: workPageheroData
                },
                {
                    template: cardsTemplate,
                    // data: siteNavContent
                },
                {
                    template: testimonials,
                    // data: siteNavContent
                },
                {
                    template: footerTemplate
                }


            ],


        },
        {
            path: '#/register',
            components: [
                {
                    template: registerFormTemplate,

                },
            ],
        },
        {
            path: '#/login',
            components: [
                {
                    template: loginForm,

                },
            ],
        },
        {
            path: '#/activity-feed',
            components: [
                {
                    template: header,
                },
                {
                    template: activityFeedPage,
                },

            ],
        },
        {
            path: '#/activity-details',
            components: [
                {
                    template: header,
                },
                {
                    template: activityDetailsSection,
                },
                {
                    template: reviewCommentSection,
                },
            ],
        },

    ],
    eventConfig: {
        global: [
            {
                Object2Listen: 'Window',
                events: ['click', 'submit'],
                callback: 'handleEvent'
            }
        ],

    },
    dataSchemas: {
        loadPage: {
            action: "get",
            entity: "page"
        },
        updatePage: {
            action: "update",
            entity: "page",
            dataSpec: {
                url: { source: 'attribute', name: 'href' },
                prop: { source: 'static', value: 'hash' }
            },
            preventDefault: true
        },
        register: {
            action: 'sendHttpRequest',
            entity: "users",
            dataSpec: {

            },
            preventDefault: true,
            endpoint: "/api/register",
            callback: [
                { name: "registerHandler", arg: "#/login" }
            ],
            method: "POST"
        },
        login: {
            action: 'sendHttpRequest',
            entity: "users",
            dataSpec: {
            },
            preventDefault: true,
            endpoint: "/api/login",
            callback: [{ name: "loginHandler", arg: "#/explorer" }],
            method: "POST"
        },
        addElement: {
            action: "insert",
            entity: "element",
            dataSpec: {
            },
        },
        removeElement: {
            action: "delete",
            entity: "element",
            dataSpec: {
            },
        },
        getUserProfile:{
            action: 'sendHttpRequest',
            entity: "users",
            dataSpec: {
            },
            preventDefault: true,
            endpoint: "/api/profile",
            method: "GET"
        },
        insertActivity: {
            action: 'sendHttpRequest',
            entity: "activities",
            dataSpec: {
            },
            preventDefault: true,
            endpoint: "/api/activity",
            method: "POST"
        },


        createTask: {
            action: "create",
            entity: "tasks",
            dataSpec: {

            },
            callback: [
                { name: "resendRequest", arg: "getAllTasks" }
            ]

        },
        getAllTasks: {
            action: "getAll",
            entity: "tasks",
            dataSpec: {},
            callback: [{
                name: "replaceDynamicElement",
                arg: "taskDataTable",

            }]

        },
        getOneTask: {
            action: "getOneById",
            entity: "tasks",
            dataSpec: {

            }
            , callback: [{
                name: "addDynamicElement",
                arg: "updateTaskModal",

            }]

        },
        updateTaskById: {
            action: "updateById",
            entity: "tasks",
            dataSpec: {

            },
            callback: [
                { name: "resendRequest", arg: "getAllTasks" }
            ]
        },
        deleteTaskById: {
            action: "deleteById",
            entity: "tasks",
            dataSpec: {

            },
            callback: [
                { name: "resendRequest", arg: "getAllTasks" }
            ]
        }
    },
    templates: [
        { name: 'navlinkTemplate', template: navLink },
        { name: 'listItemTemplate', template: listItemtemplate },
        { name: 'newTaskForm', template: newFileModal },
        { name: 'logOutModal', template: logOutModal },
        { name: "taskDataTable", template: dataTable },
        { name: "updateTaskModal", template: updateTaskModal },
        { name: "addActivityModal", template: addActivityModal },
        { name: "editProfileForm", template: editProfileForm }
    ]
}

export { config }





