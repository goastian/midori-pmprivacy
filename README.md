<h3 align="center">Midori Protect My Privacy: protected browsing, enhanced privacy</h3>
<p align="center">
  Midori goes beyond being a lightweight web browser, Midori is a set of tools that help you protect your privacy on the web.
  <br/>
  Any of our Midori products will fulfill their mission, taking care of and protecting your privacy on the web. Midori PMPrivacy has more than 3 products in one.
</p>
<p align="center">
    <a href="https://astiango.co/">Astiango.co</a> |
    <a href="https://astian.org/">Astian.org</a> |
    <a href="https://twitter.com/grupoastian">Twitter</a> |
    <a href="https://t.me/midoriweb">Telegram</a>
</p>

- [Installation](#installation)
  - [Chrome and Chromium-based browsers](#installation-chrome)
  - [Firefox](#installation-firefox)
  - [Microsoft Edge](#installation-edge)
- [Reporting issues](#contribution-reporting)
- [Development](#dev)
  - [Requirements](#dev-requirements)
  - [How to build](#dev-build)
  - [Linter](#dev-linter)
  - [Localizations](#dev-localizations)
- [Minimum supported browser versions](#minimum-supported-browser-versions)
- [Fork](#fork)
- [Privacy](#privacy)
- [Protection Level](#protection-level)
- [License](#license)

## Reporting issues

GitHub can be used to report a bug or to submit a feature request. To do so, go to [this page](https://github.com/goastian/midori-pmprivacy/issues) and click the _New issue_ button.

> **Note:** For filter-related issues (missed ads, false positives, broken pages etc.) open an issue in the [dedicated repository](https://github.com/AdguardTeam/AdguardFilters).

## Development

### Requirements

- [Node.js LTS](https://nodejs.org/en/download/)
- [Yarn v1.22](https://yarnpkg.com/en/docs/install/)

Install local dependencies by running:

```
yarn install
```

<a id="dev-build"></a>

### How to build

**Building the dev version**

Run the following command:

```
yarn dev
```

or

```
yarn dev:watch
```

This will create a build directory with unpacked extensions for all browsers:

```
  build/dev/edge
  build/dev/chrome
  build/dev/firefox-amo
  build/dev/firefox-standalone
```

**Dev with Firefox**

- Start by running `yarn dev:watch:ff` in a separate terminal.
- In another terminal, execute `yarn start:firefox`.

**Building the beta and release versions**

Before building the release version, you should manually download necessary resources: filters and public suffix list.

```
yarn resources
```

You will need to put `mozilla_credentials.json` file in the `./private` directory. This build will create unpacked extensions and then pack them (xpi for Firefox).

**How to run tests**

```
yarn test
```

<a id="dev-linter"></a>

### Linter

Setup `eslint` in your editor to follow up with `.eslintrc`. Linting runs on every commit.

Or you can validate linting rules manually:

```
yarn lint
```

<a id="dev-localizations"></a>

### Localizations

To validate translations run:

```
yarn locales:validate
```

To show locales info run:

```
yarn locales:info
```

<a id="minimum-supported-browser-versions"></a>

## Minimum supported browser versions

| Browser                 | Version |
| ----------------------- | :-----: |
| Chromium Based Browsers |   79    |
| Firefox                 |   78    |
| Edge                    |   79    |

<a id="fork"></a>

## History of the codebase

Midori PMPrivacy is based on the excellent [Adguard Browser Extension](https://github.com/AdguardTeam/AdguardBrowserExtension). We chose to fork Adguard because it provides a solid basis for blocking trackers. We felt that it is a good starting point. It allows us to focus on providing a clean user-interface and curated defaults.

Thank you to Adguard for providing a fantastic foundation for this project.

<a id="privacy"></a>

## Privacy

Midori PMPrivacy uses APM ([Application Performance Monitoring](https://www.elastic.co/guide/en/apm/guide/current/apm-overview.html)) to report bugs, catch errors and perform basic stats. Midori PMPrivacy does not collect any PII (Personally Identifiable Information).

**TL;DR** This is the dashboard we use to observe general, anonymous trends and help keep an eye on the health of the extension.

<details><summary>Screenshot</summary>

</details>

APM is optional and can be completely turned off during the onboarding or at any time. Enabling APM allows Midori to resolve technical issues and bugs faster and provide a better user experience.

The basic information that goes through APM:

- Browser Type (Firefox, Chrome, Edge, etc...)
- Extension version (v1, v2, etc...)
- Basic stats (Do people prefer the "standard" or "strict" level of protection, etc..)
- Technical error reports (Did we make a mistake and how can we fix it)

<a id="protection-level"></a>

## Protection level

Midori PMPrivacy relies on a number of well-known and community-trusted lists.

These lists include rules used to detect and block trackers. Changing protection-levels essentially changes which lists are used.

We hand-picked the lists in `Standard Mode` to offer the best tracking protection with the least impact on the browsing experience. On the other hand, `Strict Mode` offers a more advanced tracking protection, however some pages may not display properly (social-media login, certain cookie banners, etc).


# Midori Browser

Midori PMPrivacy coming soon is available on [Midori Browser](https://astian.org/midori-browser) & coming soon [Midori Android application](https://play.google.com/store/apps/details?id=org.midorinext.android).

Since [midori-android](https://github.com/goastian/midori-android) coming soon is based on the Firefox browser, we maintain a dedicated [production-android](https://github.com/goastian/midori-pmprivacy) branch for it.


<a id="license"></a>

## License

GNU General Public License v3.0
