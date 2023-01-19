const lightCodeTheme = require('prism-react-renderer/themes/oceanicNext');
const darkCodeTheme = require('prism-react-renderer/themes/oceanicNext');


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
    markdown: {
        mermaid: true,
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', "fr"],
    },
    presets: [
        [
            'classic',
            ({
                docs: {
                },
                blog: {
                    showReadingTime: false,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig: ({
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
                        label: 'NJ',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/nicholidev',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: "localeDropdown",
                        position: 'right',
                    }
                ],
            },
            footer: {
                // links: [
                //     {
                //         title: 'Docs',
                //         items: [
                //             {
                //                 label: 'Tutorial',
                //                 to: '/docs/intro',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'Community',
                //         items: [
                //             {
                //                 label: 'Stack Overflow',
                //                 href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                //             },
                //         ],
                //     },
                //     {
                //         title: 'More',
                //         items: [
                //             {
                //                 label: 'Blog',
                //                 to: '/blog',
                //             },
                //         ],
                //     },
                // ],
                copyright: `Copyright © ${new Date().getFullYear()} Nicholi Jin.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
    themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],
};

module.exports = config;
