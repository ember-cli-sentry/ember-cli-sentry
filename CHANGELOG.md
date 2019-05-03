# Changelog

## 4.1.0 (2019-05-03)

#### :rocket: Enhancement
* [#186](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/186) Use native getter instead of volatile cp ([@mydea](https://github.com/mydea))

#### :memo: Documentation
* [#87](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/87) Add documentation around environment passing ([@ghedamat](https://github.com/ghedamat))

#### :house: Internal
* [#181](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/181) Update github repository name accross the new repository ([@dashdashzako](https://github.com/dashdashzako))
* [#180](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/180) TravisCI: Remove deprecated `sudo: false` option ([@Turbo87](https://github.com/Turbo87))

#### Committers: 4
- Francesco Novy ([@mydea](https://github.com/mydea))
- Mattia Gheda ([@ghedamat](https://github.com/ghedamat))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@dashdashzako](https://github.com/dashdashzako)


## 4.0.0 (2018-10-25)

#### :boom: Breaking Change

For most users this release should work just the same as before, as long as you
use Node 6 or above and Ember CLI 2.13 or above.

* [#153](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/153) Update `ember-cli-babel` to v7.1.2 ([@Turbo87](https://github.com/Turbo87))
* [#97](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/97) Do not throw error/message when raven disabled ([@RobinDaugherty](https://github.com/RobinDaugherty))
* [#142](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/142) Drop node v4 support ([@dashdashzako](https://github.com/dashdashzako))

#### :rocket: Enhancement
* [#140](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/140) Mark raven-shim as an ES module ([@ef4](https://github.com/ef4))
* [#149](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/149) Update `raven-js` to v3.27.0 ([@Turbo87](https://github.com/Turbo87))
* [#97](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/97) Do not throw error/message when raven disabled ([@RobinDaugherty](https://github.com/RobinDaugherty))
* [#141](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/141) Use console rather than Ember.Logger ([@dashdashzako](https://github.com/dashdashzako))

#### :memo: Documentation
* [#179](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/179) Update README ([@Turbo87](https://github.com/Turbo87))
* [#147](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/147) README: Add `Compatibility` section ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#151](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/151) Update `ember-cli` to v3.4.3 ([@Turbo87](https://github.com/Turbo87))
* [#152](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/152) Remove unused `ember-cli-release` dev dependency ([@Turbo87](https://github.com/Turbo87))
* [#150](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/150) Remove unused `ember-cli-app-version` dev dependency ([@Turbo87](https://github.com/Turbo87))
* [#148](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/148) Update `broccoli-merge-trees` to v3.0.1 ([@Turbo87](https://github.com/Turbo87))
* [#145](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/145) Update `lerna-changelog` to v0.8.0 ([@Turbo87](https://github.com/Turbo87))
* [#146](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/146) yarn: Add `integrity` hashes ([@Turbo87](https://github.com/Turbo87))
* [#143](https://github.com/ember-cli-sentry/ember-cli-sentry/pull/143) Fix CI builds ([@Turbo87](https://github.com/Turbo87))

#### Committers: 4
- Edward Faulkner ([@ef4](https://github.com/ef4))
- Robin Daugherty ([@RobinDaugherty](https://github.com/RobinDaugherty))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@dashdashzako](https://github.com/dashdashzako)


## 3.0.0 (2018-03-11)

#### :boom: Breaking Change
* [#81](https://github.com/damiencaselli/ember-cli-sentry/pull/81) use `raven-js` from npm. ([@tchak](https://github.com/tchak))
* [#95](https://github.com/damiencaselli/ember-cli-sentry/pull/95) Replace `serviceName` property with fixed `raven` service. ([@Turbo87](https://github.com/Turbo87))
* [#96](https://github.com/damiencaselli/ember-cli-sentry/pull/96) Remove deprecated `ignoreErrors` support from config. ([@Turbo87](https://github.com/Turbo87))
* [#110](https://github.com/damiencaselli/ember-cli-sentry/pull/110) Remove implicit `raven` service injection. ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#124](https://github.com/damiencaselli/ember-cli-sentry/pull/124) Remove `ember-cli-node-assets` dependency. ([@Turbo87](https://github.com/Turbo87))
* [#93](https://github.com/damiencaselli/ember-cli-sentry/pull/93) add RavenService#captureBreadcrumb. ([@marcoow](https://github.com/marcoow))
* [#94](https://github.com/damiencaselli/ember-cli-sentry/pull/94) Check for Fastboot in isRavenUsable. ([@mazondo](https://github.com/mazondo))

#### :memo: Documentation
* [#123](https://github.com/damiencaselli/ember-cli-sentry/pull/123) Remove `cdn.ravenjs.com` from CSP suggestion. ([@Turbo87](https://github.com/Turbo87))
* [#111](https://github.com/damiencaselli/ember-cli-sentry/pull/111) README: Remove broken link. ([@Turbo87](https://github.com/Turbo87))
* [#108](https://github.com/damiencaselli/ember-cli-sentry/pull/108) Generate CHANGELOG using `lerna-changelog`. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#127](https://github.com/damiencaselli/ember-cli-sentry/pull/127) CI: Adjust `skip_cleanup` behavior to fix `auto-dist-tag`. ([@Turbo87](https://github.com/Turbo87))
* [#126](https://github.com/damiencaselli/ember-cli-sentry/pull/126) Update Ember CLI to v2.18. ([@Turbo87](https://github.com/Turbo87))
* [#125](https://github.com/damiencaselli/ember-cli-sentry/pull/125) Use "RFC 176 Imports". ([@Turbo87](https://github.com/Turbo87))
* [#121](https://github.com/damiencaselli/ember-cli-sentry/pull/121) CI: Use Node.js 4.x. ([@Turbo87](https://github.com/Turbo87))
* [#119](https://github.com/damiencaselli/ember-cli-sentry/pull/119) Upgrade `ember-cli-babel` to ^6.6.0. ([@buschtoens](https://github.com/buschtoens))
* [#118](https://github.com/damiencaselli/ember-cli-sentry/pull/118) testem: Use headless Chrome to run tests. ([@Turbo87](https://github.com/Turbo87))
* [#109](https://github.com/damiencaselli/ember-cli-sentry/pull/109) Revert "Add jsdoc dependencies for doc generation". ([@Turbo87](https://github.com/Turbo87))
* [#99](https://github.com/damiencaselli/ember-cli-sentry/pull/99) Remove obsolete `logger` blueprint. ([@Turbo87](https://github.com/Turbo87))
* [#91](https://github.com/damiencaselli/ember-cli-sentry/pull/91) Update ember-cli-node-assets and use correct `.import` ([@RuslanZavacky](https://github.com/RuslanZavacky))
* [#88](https://github.com/damiencaselli/ember-cli-sentry/pull/88) CI: Publish tags automatically to npm. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Jan Buschtöns ([buschtoens](https://github.com/buschtoens))
- Ruslan Zavacky ([RuslanZavacky](https://github.com/RuslanZavacky))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Ryan ([mazondo](https://github.com/mazondo))
- Paul Chavard ([tchak](https://github.com/tchak))


## 3.0.0-beta.3 (2018-02-06)

#### :boom: Breaking Change
* [#110](https://github.com/damiencaselli/ember-cli-sentry/pull/110) Remove implicit `raven` service injection. ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#124](https://github.com/damiencaselli/ember-cli-sentry/pull/124) Remove `ember-cli-node-assets` dependency. ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#123](https://github.com/damiencaselli/ember-cli-sentry/pull/123) Remove `cdn.ravenjs.com` from CSP suggestion. ([@Turbo87](https://github.com/Turbo87))
* [#111](https://github.com/damiencaselli/ember-cli-sentry/pull/111) README: Remove broken link. ([@Turbo87](https://github.com/Turbo87))
* [#108](https://github.com/damiencaselli/ember-cli-sentry/pull/108) Generate CHANGELOG using `lerna-changelog`. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#127](https://github.com/damiencaselli/ember-cli-sentry/pull/127) CI: Adjust `skip_cleanup` behavior to fix `auto-dist-tag`. ([@Turbo87](https://github.com/Turbo87))
* [#126](https://github.com/damiencaselli/ember-cli-sentry/pull/126) Update Ember CLI to v2.18. ([@Turbo87](https://github.com/Turbo87))
* [#125](https://github.com/damiencaselli/ember-cli-sentry/pull/125) Use "RFC 176 Imports". ([@Turbo87](https://github.com/Turbo87))
* [#121](https://github.com/damiencaselli/ember-cli-sentry/pull/121) CI: Use Node.js 4.x. ([@Turbo87](https://github.com/Turbo87))
* [#119](https://github.com/damiencaselli/ember-cli-sentry/pull/119) Upgrade `ember-cli-babel` to ^6.6.0. ([@buschtoens](https://github.com/buschtoens))
* [#118](https://github.com/damiencaselli/ember-cli-sentry/pull/118) testem: Use headless Chrome to run tests. ([@Turbo87](https://github.com/Turbo87))
* [#109](https://github.com/damiencaselli/ember-cli-sentry/pull/109) Revert "Add jsdoc dependencies for doc generation". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Jan Buschtöns ([buschtoens](https://github.com/buschtoens))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 3.0.0-beta.2 (2017-11-06)

#### :house: Internal
* [#99](https://github.com/damiencaselli/ember-cli-sentry/pull/99) Remove obsolete `logger` blueprint. ([@Turbo87](https://github.com/Turbo87))
* [#91](https://github.com/damiencaselli/ember-cli-sentry/pull/91) Update ember-cli-node-assets and use correct `.import` ([@RuslanZavacky](https://github.com/RuslanZavacky))

#### Committers: 2
- Ruslan Zavacky ([RuslanZavacky](https://github.com/RuslanZavacky))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 3.0.0-beta.1 (2017-10-03)

#### :boom: Breaking Change
* [#96](https://github.com/damiencaselli/ember-cli-sentry/pull/96) Remove deprecated `ignoreErrors` support from config. ([@Turbo87](https://github.com/Turbo87))
* [#95](https://github.com/damiencaselli/ember-cli-sentry/pull/95) Replace `serviceName` property with fixed `raven` service. ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#93](https://github.com/damiencaselli/ember-cli-sentry/pull/93) add RavenService#captureBreadcrumb. ([@marcoow](https://github.com/marcoow))
* [#94](https://github.com/damiencaselli/ember-cli-sentry/pull/94) Check for Fastboot in isRavenUsable. ([@mazondo](https://github.com/mazondo))

#### :house: Internal
* [#88](https://github.com/damiencaselli/ember-cli-sentry/pull/88) CI: Publish tags automatically to npm. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Ryan ([mazondo](https://github.com/mazondo))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 3.0.0-beta (2017-11-06)

#### :boom: Breaking Change
* [#81](https://github.com/damiencaselli/ember-cli-sentry/pull/81) use `raven-js` from npm. ([@tchak](https://github.com/tchak))

#### Committers: 5
- Paul Chavard ([tchak](https://github.com/tchak))


## 2.4.4 (2017-06-06)

#### :rocket: Enhancement
* [#85](https://github.com/damiencaselli/ember-cli-sentry/pull/85) Move setup code into the service and add "ignoreUrls" support. ([@Turbo87](https://github.com/Turbo87))
* [#75](https://github.com/damiencaselli/ember-cli-sentry/pull/75) In index.js, use ui.writeLine instead of console.log to respect --silent. ([@mattmcmanus](https://github.com/mattmcmanus))

#### :memo: Documentation
* [#74](https://github.com/damiencaselli/ember-cli-sentry/pull/74) Fix API docs typo. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#80](https://github.com/damiencaselli/ember-cli-sentry/pull/80) Upgrade to ember-cli 2.13.1. ([@mattmcmanus](https://github.com/mattmcmanus))

#### Committers: 2
- Matt McManus ([mattmcmanus](https://github.com/mattmcmanus))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 2.4.3 (2017-03-01)

#### :rocket: Enhancement
* [#65](https://github.com/damiencaselli/ember-cli-sentry/pull/65) Support RSVP labels. ([@seriousben](https://github.com/seriousben))

#### :house: Internal
* [#68](https://github.com/damiencaselli/ember-cli-sentry/pull/68) upgrade to ember-cli 2.10 and add yarn. ([@tchak](https://github.com/tchak))

#### Committers: 2
- Benjamin Boudreau ([seriousben](https://github.com/seriousben))
- Paul Chavard ([tchak](https://github.com/tchak))


## 2.4.2 (2016-09-09)

#### :rocket: Enhancement
* [#57](https://github.com/damiencaselli/ember-cli-sentry/pull/57) Better message for rejected promises. ([@xcambar](https://github.com/xcambar))

#### Committers: 1
- Xavier Cambar ([xcambar](https://github.com/xcambar))


## 2.4.0 (2016-08-30)

#### :rocket: Enhancement
* [#51](https://github.com/damiencaselli/ember-cli-sentry/pull/51) Parse RegExp in ignoreErrors. ([@gabz75](https://github.com/gabz75))

#### Committers: 1
- Gab ([gabz75](https://github.com/gabz75))


## 2.3.4 (2016-08-08)

#### :rocket: Enhancement
* [#54](https://github.com/damiencaselli/ember-cli-sentry/pull/54) Updates to raven.js 3.3. ([@xcambar](https://github.com/xcambar))

#### Committers: 1
- Xavier Cambar ([xcambar](https://github.com/xcambar))


## 2.3.3 (2016-05-17)

#### :rocket: Enhancement
* [#47](https://github.com/damiencaselli/ember-cli-sentry/pull/47) Stay quiet unless debugging enabled.. ([@kkumler](https://github.com/kkumler))

#### Committers: 1
- Kris Kumler ([kkumler](https://github.com/kkumler))


## 2.3.2 (2016-04-27)

#### :rocket: Enhancement
* [#43](https://github.com/damiencaselli/ember-cli-sentry/pull/43) Update raven.js to 2.2.0. ([@floqqi](https://github.com/floqqi))

#### :house: Internal
* [#44](https://github.com/damiencaselli/ember-cli-sentry/pull/44) switch to Ember.assign (Ember.merge deprecated). ([@jakehow](https://github.com/jakehow))

#### Committers: 2
- Florian ([floqqi](https://github.com/floqqi))
- Jake Howerton ([jakehow](https://github.com/jakehow))


## 2.2.0 (2016-02-29)

#### :house: Internal
* [#42](https://github.com/damiencaselli/ember-cli-sentry/pull/42) Using Ember.merge to avoid compatibility issues.. ([@kkumler](https://github.com/kkumler))

#### Committers: 1
- Kris Kumler ([kkumler](https://github.com/kkumler))


## 2.2.0-beta.2 (2016-02-26)

#### :house: Internal
* [#42](https://github.com/damiencaselli/ember-cli-sentry/pull/42) Using Ember.merge to avoid compatibility issues.. ([@kkumler](https://github.com/kkumler))

#### Committers: 1
- Kris Kumler ([kkumler](https://github.com/kkumler))


## 2.1.2 (2016-01-20)

#### :rocket: Enhancement
* [#38](https://github.com/damiencaselli/ember-cli-sentry/pull/38) Import the non-minified version of raven-js. ([@oquis](https://github.com/oquis))

#### Committers: 1
- Juan Miguel Rubio ([oquis](https://github.com/oquis))


## 2.1.0 (2016-01-18)

#### :rocket: Enhancement
* [#36](https://github.com/damiencaselli/ember-cli-sentry/pull/36) Install and import raven-js dependency. ([@achambers](https://github.com/achambers))

#### Committers: 1
- Aaron Chambers ([achambers](https://github.com/achambers))


## 2.0.0 (2015-11-26)

#### :rocket: Enhancement
* [#32](https://github.com/damiencaselli/ember-cli-sentry/pull/32) Allow passing of arbitrary options to raven.js. ([@kkumler](https://github.com/kkumler))
* [#33](https://github.com/damiencaselli/ember-cli-sentry/pull/33) Emit warning on exception during sentry initialization. ([@kkumler](https://github.com/kkumler))
* [#23](https://github.com/damiencaselli/ember-cli-sentry/pull/23) Allow specifying sentry release on the service. ([@dschmidt](https://github.com/dschmidt))

#### :bug: Bug Fix
* [#24](https://github.com/damiencaselli/ember-cli-sentry/pull/24) Initializer fixup for Ember 2.1. ([@dschmidt](https://github.com/dschmidt))

#### Committers: 2
- Dominik Schmidt ([dschmidt](https://github.com/dschmidt))
- Kris Kumler ([kkumler](https://github.com/kkumler))


## 2.0.0-beta.3 (2015-10-15)

#### :rocket: Enhancement
* [#23](https://github.com/damiencaselli/ember-cli-sentry/pull/23) Allow specifying sentry release on the service. ([@dschmidt](https://github.com/dschmidt))

#### :bug: Bug Fix
* [#24](https://github.com/damiencaselli/ember-cli-sentry/pull/24) Initializer fixup for Ember 2.1. ([@dschmidt](https://github.com/dschmidt))

#### Committers: 1
- Dominik Schmidt ([dschmidt](https://github.com/dschmidt))


## 1.13.1 (2015-07-23)

#### :rocket: Enhancement
* [#10](https://github.com/damiencaselli/ember-cli-sentry/pull/10) Use the Ember plugin for Raven.. ([@rwjblue](https://github.com/rwjblue))

#### Committers: 1
- Robert Jackson ([rwjblue](https://github.com/rwjblue))


## 1.0.4 (2015-06-01)

#### :rocket: Enhancement
* [#9](https://github.com/damiencaselli/ember-cli-sentry/pull/9) added release to raven config. ([@duhruh](https://github.com/duhruh))
* [#8](https://github.com/damiencaselli/ember-cli-sentry/pull/8) Update deprecated RSVP.onerror to RSVP.on . ([@grantcupps](https://github.com/grantcupps))

#### :memo: Documentation
* [#5](https://github.com/damiencaselli/ember-cli-sentry/pull/5) Use gender neutral language in README. ([@tim-evans](https://github.com/tim-evans))

#### Committers: 3
- David Rivera ([duhruh](https://github.com/duhruh))
- Grant Cupps ([grantcupps](https://github.com/grantcupps))
- Tim Evans ([tim-evans](https://github.com/tim-evans))


## v1.0.3 (2015-02-25)

#### :rocket: Enhancement
* [#3](https://github.com/damiencaselli/ember-cli-sentry/pull/3) Add bool to config so that you can disable sentry. ([@hussfelt](https://github.com/hussfelt))
* [#4](https://github.com/damiencaselli/ember-cli-sentry/pull/4) Add option to skip CDN loading. ([@hussfelt](https://github.com/hussfelt))

#### Committers: 1
- Henrik Hussfelt ([hussfelt](https://github.com/hussfelt))
