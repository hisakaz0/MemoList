title: vimium-around
==========
date: 2015-11-02 01:34
tags: []
categories: []
- - -

## vimiumのscrollingが動かなくなったとき

> [Scrolling isn't working for me at all (Chrome 36.0.1985.125 – not Canary) · Issue #1117 · philc/vimium](https://github.com/philc/vimium/issues/1117#issuecomment-73847649)

[Chromeのflagのセッティング](chrome://flags)にアクセスして以下の設定をオフにする.
どうも小奴らがvimiumとソリが合わないらしい.

- [chrome://flags/#enable-experimental-web-platform-features](chrome://flags/#enable-experimental-web-platform-features)
- [chrome://flags/#enable-scroll-prediction](chrome://flags/#enable-scroll-prediction)
- [chrome://flags/#enable-webgl-draft-extensions](chrome://flags/#enable-webgl-draft-extensions)
- [chrome://flags/#enable-surface-worker](chrome://flags/#enable-surface-worker)
- [chrome://flags/#enable-zero-copy](chrome://flags/#enable-zero-copy)
- [chrome://flags/#enable-service-worker-sync](chrome://flags/#enable-service-worker-sync)
- [chrome://flags/#enable-website-settings-manager](chrome://flags/#enable-website-settings-manager)


今まで動いてなかったけど,動いた☆
