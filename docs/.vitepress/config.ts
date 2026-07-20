import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'FastTest 平台文档',
  description: 'FastTest 质量管理 & 自动化测试平台说明文档',
  lang: 'zh-CN',
  base: '/FastTestDoc/',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/what-is-fasttest' },
      { text: '开发参考', link: '/guide/dev/api-reference' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: 'FastTest 是什么', link: '/guide/what-is-fasttest' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '系统架构', link: '/guide/architecture' },
            { text: '核心概念', link: '/guide/concepts' }
          ]
        },
        {
          text: '团队与项目',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/team-project/' },
            { text: '团队管理', link: '/guide/team-project/team' },
            { text: '项目管理', link: '/guide/team-project/project' },
            { text: '成员与角色', link: '/guide/team-project/member' },
            { text: '权限模型', link: '/guide/team-project/permission' }
          ]
        },
        {
          text: '质量管理',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/qa/' },
            { text: '需求池', link: '/guide/qa/requirement' },
            { text: 'BUG 池', link: '/guide/qa/bug' },
            { text: '用例与测试集', link: '/guide/qa/test-case' },
            { text: '测试计划', link: '/guide/qa/test-plan' },
            { text: '血缘追踪', link: '/guide/qa/traceability' }
          ]
        },
        {
          text: '接口测试',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/api-test/' },
            { text: 'API测试', link: '/guide/api-test/API测试使用文档' },
            { text: 'API场景', link: '/guide/api-test/API场景使用文档' },
            { text: '数据模板使用文档', link: '/guide/api-test/数据模板使用文档' },
            { text: '环境管理使用文档', link: '/guide/api-test/环境管理使用文档' },
          ]
        },
        {
          text: 'UI 自动化',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/ui-automation/' },
            { text: 'UI场景使用文档', link: '/guide/ui-automation/UI场景使用文档' },
            { text: '元素库使用文档', link: '/guide/ui-automation/元素库使用文档' },

          ]
        },
        {
          text: '测试运行',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/test-run/' },
            { text: '任务计划', link: '/guide/test-run/plan' },
            { text: 'Webhook 通知', link: '/guide/test-run/webhook' },
            { text: '测试报告', link: '/guide/test-run/report' }
          ]
        },
        {
          text: '开发参考',
          collapsed: false,
          items: [
            { text: 'API 接口速查', link: '/guide/dev/api-reference' },
            { text: '权限码清单', link: '/guide/dev/permission-codes' },
            { text: '逻辑删除与级联', link: '/guide/dev/logical-delete' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '基于 MIT 协议发布',
      copyright: 'Copyright © 2026 FastTest Team'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    }
  }
})
