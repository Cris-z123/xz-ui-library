module.exports = {
    title: 'XZ UI',
    description: '一个基于Vue2.x简单好用的UI框架',
    themeConfig: {
      logo: 'logo.png',
      head: [
        ['link', { rel: 'icon', href: 'favicon.ico' }]
      ],
      nav: [
        { text: '主页', link: '/' },
        { text: '文档', link: '/install/' },
        { text: '仓库', link: 'https://github.com/rookie996-object/xz-ui-library' }
      ],
      sidebar: [
        {
          title: '入门',
          children: [
            '/install/',
            '/get-started/',
          ]
        },
        {
          title: '组件',
          children: [
            '/components/button',
            '/components/collapse',
            '/components/popover',
            '/components/tabs',
            '/components/layout',
            '/components/toast',
            '/components/grid',
            '/components/input'
          ]
        }
      ]
    }
  }