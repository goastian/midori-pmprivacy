export const chromeManifest = {
    'chrome_settings_overrides': {
        'search_provider': {
            'name': 'AstianGO',
            'keyword': 'https://astiango.co',
            'search_url': 'https://astiango.co/search?engine=1&q={searchTerms}&client=ext-chrome-sb',
            'favicon_url': 'https://astiango.co/favicon.ico',
            'suggest_url': 'https://api.qwant.com/api/suggest/?q={searchTerms}&client=opensearch',
            'encoding': 'UTF-8',
            'is_default': true,
        },
    },
    'options_page': 'pages/options.html',
    'permissions': [
        'webRequest',
        'webRequestBlocking',
        'unlimitedStorage',
        'storage',
    ],
    'optional_permissions': [
        '<all_urls>',
        'webNavigation',
    ],
};
