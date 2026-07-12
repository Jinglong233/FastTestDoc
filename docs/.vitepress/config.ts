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
      { text: '部署', link: '/guide/deploy' },
      { text: '更新日志', link: '/changelog' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: 'FastTest 是什么', link: '/guide/what-is-fasttest' },
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '生产部署', link: '/guide/deploy' },
            { text: '系统架构', link: '/guide/architecture' },
            { text: '核心概念', link: '/guide/concepts' }
          ]
        },
        {
          text: '自动化测试',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/automation/' }
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
            { text: '接口管理', link: '/guide/api-test/api-manager' },
            { text: '接口调试', link: '/guide/api-test/debug' },
            { text: 'Mock 响应', link: '/guide/api-test/mock' },
            { text: '环境与全局变量', link: '/guide/api-test/env-global' },
            { text: '数据模板', link: '/guide/api-test/data-template' },
            { text: 'Mock 与数据模板', link: '/guide/mock-template/' }
          ]
        },
        {
          text: 'UI 自动化',
          collapsed: false,
          items: [
            { text: '概览', link: '/guide/ui-automation/' },
            { text: '元素库', link: '/guide/ui-automation/element' },
            { text: 'UI 场景编排', link: '/guide/ui-automation/scene' },
            { text: '场景调试', link: '/guide/ui-automation/scene-debug' }
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
