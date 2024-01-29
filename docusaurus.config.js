// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'minipad-wiki',
    tagline: 'A Wooting-like keypad with rapid trigger functionality, specifically made for osu!.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://minipad.minii.moe',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/minipad-wiki/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'minipadkb', // Usually your GitHub org/user name.
    projectName: 'minipad-wiki', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/minipadKB/minipad-wiki/tree/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/minipadKB/minipad-wiki/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'minipad-wiki',
                logo: {
                    alt: '',
                    src: 'img/badge.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'minipad/introduction',
                        position: 'left',
                        label: 'Wiki',
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://discord.gg/minipad',
                        label: 'Discord',
                        position: 'left',
                    },
                    {
                        href: 'https://github.com/minipadkb/minipad-wiki/',
                        label: 'GitHub',
                        position: 'right',
                    }
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: "Introduction",
                                href: "/docs/minipad/introduction"
                            },
                            {
                                label: "Purchase / Pricing",
                                href: "/docs/minipad/purchase"
                            },
                            {
                                label: "Technial Specifications",
                                href: "/docs/minipad/technical-specifications"
                            },
                            {
                                label: "Getting Started with minitility",
                                href: "/docs/minitility/get-started"
                            }
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/minipad',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/minisbett',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/minipadkb/minipad-wiki/',
                            },
                            {
                                label: "What is Rapid Trigger?",
                                href: 'https://next.wooting.io/post/what-is-wootings-rapid-trigger-for-analog-keyboards'
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Project Minipad. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
