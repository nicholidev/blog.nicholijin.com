const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


const config = {
    title: 'Nicholi Blogs',
    tagline: 'Nicholi Jin is a senior software engineer',
    url: 'https://blog.nicholijin.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook',
    projectName: 'docusaurus',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
        ({
            navbar: {
                title: 'Nicholi Blogs',
                logo: {
                    alt: 'Nicholi Blogs Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {
                        href: 'https://nicholijin.com',
                        label: 'Personal',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/nicholidev',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
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
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Nicholi Jin.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
