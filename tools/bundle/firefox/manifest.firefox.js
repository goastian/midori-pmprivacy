import { FIREFOX_APP_IDS_MAP } from '../../constants';

const appId = FIREFOX_APP_IDS_MAP[process.env.BUILD_ENV];

export const firefoxManifest = {
    'applications': {
        'gecko': {
            'id': appId,
            'strict_min_version': '78.0',
        },
    },
    'options_ui': {
        'page': 'pages/options.html',
        'open_in_tab': true,
    },
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
    'permissions': [
        'storage',
    ],
    'optional_permissions': [
        '<all_urls>',
        'webRequest',
        'webRequestBlocking',
        'webNavigation',
    ],
};
