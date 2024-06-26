import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';

export default defineUserConfig({
  title: 'Winds Blog',
  description: '愿你所追寻的风，都能如期而至',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/favicon.png',
    author: 'SeekWind',
    authorAvatar: '/avatar.webp',
    docsRepo: 'https://github.com/seekwindJH/seekwindjh.github.io',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    primaryColor: '#e56e23',
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme'],
        },
        {
          text: 'module two',
          children: ['api', 'plugin'],
        },
      ],
    },
    navbar: [
      { text: '主页', link: '/' },
      { text: '分类', link: '/categories/reco/1/' },
      { text: '标签', link: '/tags/tag1/1/' },
      {
        text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' },
        ],
      },
    ],
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'seekwindJH/seekwindjh.github.io',
        repoId: 'R_kgDOLpoBQg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOLpoBQs4CedFE',
        mapping: 'title',
        strict: '1',
        reactionsEnabled: '1',
        emitMetadata: '1',
        inputPosition: 'top',
        theme: 'dark',
        lang: 'zh-CN',
        hideComments: false,
      },
    },
    // bulletin: {
    //   body: [
    //     {
    //       type: 'text',
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'QQ 群',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'title',
    //       content: 'GitHub',
    //     },
    //     {
    //       type: 'text',
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: 'font-size: 12px;',
    //     },
    //     {
    //       type: 'hr',
    //     },
    //     {
    //       type: 'buttongroup',
    //       children: [
    //         {
    //           text: '打赏',
    //           link: '/docs/others/donate.html',
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
