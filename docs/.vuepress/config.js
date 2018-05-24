module.exports = {
    title: "Fumi`s Blog",
    description: "个人博客，文档分享",
    base: "/",
    dest: "./out",
    head: [
        ['link', { rel: 'icon', href: `/blog.png` }],
    ],
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "文档", link: "/file/" },
        ]
    }
}

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'customize',
            'advanced',
        ]
    }]
}
