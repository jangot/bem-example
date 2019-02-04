module.exports = {
    block: 'page',
    title: 'НАЗВАНИЕ СТРАНИЦЫ',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'jangot.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'jangot.min.js' }],
    content: [
        {
            block: 'my-component'
        },
        {
            block: 'text',
            mods: { size: 'xxxxl', view: 'primary', weight: 'normal', align: 'center' },
            content: 'Buenas dias'
        },
        {
            block: 'decorator',
            mods: { 'indent-b': 'l' },
            content: [
                {
                    block: 'icon',
                    mods: { name: 'allert-2', size: 's', view: 'primary' },
                    html: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill-rule="evenodd" d="M9 14h6v-1l-2-2V7a5.002 5.002 0 0 0-4-4.9V2c0-.556-.448-1-1-1-.556 0-1 .448-1 1v.1A5.002 5.002 0 0 0 3 7v3.997L1 13v1h6a1 1 0 0 0 2 0z"/></svg>'
                }
            ]
        }
    ]
};
