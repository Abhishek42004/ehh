const header = {
  tag: "header",
  attributes: {
    class: "header",
    dataRouter: "#app",
  },
  children: [
    {
      tag: "a",
      attributes: {
        href: "homepage.html",
      },
      children: [
        {
          tag: "img",
          attributes: {
            src: "https://cdn-icons-png.flaticon.com/128/13559/13559311.png",
            alt: "Logo",
          },
        },
      ],
    },
    {
      tag: "nav",
      children: [
        {
          tag: "a",
          attributes: {
            href: "#/activity-feed",
            click:"updatePage"
          },
          content: "Activities",
        },

        {
          tag: "a",
          attributes: {
           
            click: "addElement",
            "data-element": "addActivityModal",
          },
          content: "Add Activity",
        },

        {
          tag: "a",
          attributes: {
            href: "#/profile",
            "click":"updatePage"
          },
          content: "Profile",
        },
        {
          tag: "a",
          attributes: {
            href: "logout.html",
          },
          content: "Logout",
        },
      ],
    },
  ],
};
export { header };
