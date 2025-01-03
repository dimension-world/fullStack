import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'fall-stack-note',
  description: '全栈学习笔记',
  markdown: {
    lineNumbers: true,
  },
  base: '/fullStack/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/public/lu.png' }],
  ],
  themeConfig: {
    logo: '/lu.png',
    siteTitle: false,
    // markdown:{
    //   toc:{
    //     level:[1,2,3]
    //   }
    // },
    sidebarDepth: 5,
    nav: [
      {
        text: 'Markdown语法',
        items: [{ text: '基础&拓展语法', link: '/src/Markdown/' }],
      },
      {
        text: '前端',
        items: [
          { text: 'JavaScript', link: '/src/origin/RegExp' },
          { text: 'Vue2', link: '/' },
          { text: 'VueRouter', link: '/' },
          { text: 'VueX', link: '/' },
          { text: 'Vue3', link: '/src/vue3/' },
          { text: 'TypeScript', link: '/src/ts/' },
          { text: 'Pinia', link: '/src/pinia/' },
          { text: 'Vue3项目', link: '/src/project/' },
          { text: 'app项目', link: '/src/uniapp/' },
          { text: 'Koa', link: '/src/koa/' },
          { text: 'NoSQL', link: '/src/NoSQL/' },
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'Java基础', link: '/src/Java' },
          { text: '待定', link: '/' },
          { text: '待定', link: '/' },
          { text: '待定', link: '/' },
          { text: '待定', link: '/' },
          { text: '待定', link: '/' },
          { text: '待定', link: '/' },
        ],
      },
    ],
    sidebar: {
      '/src/Markdown': [
        {
          items: [{ text: 'Markdown', link: '/src/Markdown/' }],
        },
      ],
      '/src/origin': [
        {
          items: [{ text: '正则表达式', link: '/src/origin/RegExp' }],
        },
      ],
      '/src/vue3': [
        {
          text: 'Vue3核心',
          items: [
            { text: '快速开始', link: '/src/vue3/' },
            { text: '组合式API', link: '/src/vue3/composition' },
            { text: '综合案例', link: '/src/vue3/case' },
          ],
        },
      ],
      '/src/ts/': [
        {
          text: 'TypeScript',
          items: [
            { text: 'TypeScript起步', link: '/src/ts/' },
            { text: 'TypeScript核心', link: '/src/ts/core' },
            { text: 'TypeScript应用', link: '/src/ts/pro' },
            { text: 'TypeScript补充', link: '/src/ts/backup' },
            { text: 'TS黑马头条案例', link: '/src/ts/case' },
          ],
        },
      ],
      '/src/pinia/': [
        {
          text: 'Pinia',
          items: [{ text: 'Pinia 核心', link: '/src/pinia/' }],
        },
      ],
      '/src/project/': [
        {
          text: 'H5项目',
          items: [
            { text: '1. 项目起步', link: '/src/project/' },
            { text: '2. 登录模块', link: '/src/project/login' },
            { text: '3. 用户模块', link: '/src/project/user' },
            { text: '4. 首页模块', link: '/src/project/home' },
            { text: '5. 极速问诊', link: '/src/project/consult' },
            { text: '6. 医生问诊室', link: '/src/project/room' },
            { text: '7. 问诊订单模块', link: '/src/project/consult-order' },
            { text: '8. 药品订单模块', link: '/src/project/order' },
            { text: '9. 其他扩展', link: '/src/project/end' },
            { text: '辅助-超级医生', link: '/src/project/super-doctor' },
            { text: '二次开发-开药问诊', link: '/src/project/drug' },
            { text: '二次开发-问医生', link: '/src/project/doctor' },
          ],
        },
      ],
      '/src/app':[
        {
          text:'uniapp项目',
          items:[
            {text:'app基础',link: '/src/uniapp/' }
          ]
        }
      ],
      '/src/Java': [
        {
          text: 'Java基础',
          items: [{ text: 'java', link: '/src/Java/' }],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: '#' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024',
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },
  },
  // build: {
  //   chunkSizeWarningLimit: 1500, // 调整包的大小
  //   rollupOptions: {
  //     output: {
  //       // 最小化拆分包
  //       manualChunks(id) {
  //         if (id.includes('node_modules')) {
  //           return id
  //             .toString()
  //             .split('node_modules/')[1]
  //             .split('/')[0]
  //             .toString()
  //         }
  //       }
  //     },
  //   },
  // },
})
