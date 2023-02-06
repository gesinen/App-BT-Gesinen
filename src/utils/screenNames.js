const auth = {
    auth: "auth",
    registerEmail: "RegisterEmail",
    loginEmail: "loginEmail",
};
const shopStacks ={
    tab: "ShopTab",
    title: "Shop",
    stackName: "ShopStack",
    screenStacks: {
        addProduct: {
            title: "AddProduct",
            tab: "AddProductTab"
        },
        individualProduct: {
            title: "IndividualProduct",
            tab: "IndividualProductTab",
        },
        shopIndividual:{
            title:"IndividualShop",
            tab: "IndividualShopTab",
        }
    }
};
const blogStacks = {
    tab: "BlogTab",
    title: "Blogs",
    stackName: "BlogStack",
    screenStacks: {
        addBlog: {
            title: "AddBlog",
            tab: "AddBlogTab"
        },
        individualBlog: {
            title: "IndividualBlog",
            tab: "IndividualBlogTab"
        },
        addPost: {
            title: "AddPost",
            tab: "AddPostTab"
        },
        individualPost: {
            title: "IndividualPost",
            tab: "IndividualPostTab"
        },
    }
};
const app = {
    tab: "NavTab"
}
const homeStacks = {
    tab: "HomeTab",
    title: "Home",
    stackName: "HomeStack",
    screenStacks: {
        // addBlog: {
        //     title: "Add Blog",
        //     tab: "AddBlogTab"
        // },
    }
};
const userStacks = {
    tab: "UserTab",
    title: "User",
    stackName: "UserStack",
    screenStacks: {
        // addBlog: {
        //     title: "Add Blog",
        //     tab: "AddBlogTab"
        // },
    },

};
const investStacks = {
    tab: "InvestTab",
    title: "Invest",
    stackName: "InvestStack",
    screenStacks: {
        individualInvest: {
            title: "IndividualInvest",
            tab: "IndividualInvestTab"
        },
    },
};



export const screen = {
    blog: blogStacks,
    home: homeStacks,
    user: userStacks,
    invest: investStacks,
    auth: auth,
    app: app,
    shop:shopStacks,
}