# MultiCommentGenerator
マルチコメントジェネレーター(未完成)

時間があるときに作成しているので、完成するまでは時間がかかるよ....

```
[Warn] This repoligy is currently undergoing destructive changes. Until program configuration is available, pull requests and issues submitted may be ignored or rejected.
[注意] このリポリジリは、破壊的変更を現在しています。プログラム構成ができるまで、プルリクエストや問題を提出しても無視または拒否される可能性があります。
```

補足、開発中及びalpha版なので実行は自己責任でお願いします.....

## 補足事項

W3C HTML5の規格は2021年1月に廃止されています。

現在、見るべき標準規格は WHATWG HTML Living Standardです。

## 環境・使用ライブラリー
- Node.js v14.17.x ~ v14.x
- yarn v3.0.x ~ v3.x **(Zero-Installs)**
- Electron v13.x ~ v..

## プログラム作成条件
1. HTML5コメントジェネレーター、HTML5コメントジェネレーター改に、

    **「なるべく、互換性のあるものにする」**

    なるべくだから100%ではなくてもいいよ！！

    (だいたい同じGUIにしたり、（ｒｙ)



2. マイクラのMODみたいに、

    **「プラグイン機能で拡張性あるものにする。」**

    できるだけ、プラグインで補えるものにする。



3. えーと....(ry


## 開発者へ
プラグイン機能があるので、実行時に隔離や制限をしないと、セキュリティ的に問題があるのでフレームワークを作成したりSモード(Secureモード: 安全が確認されているコードのみ実行)というものを作成しています。

また、ソフトウェアにデジタル署名して、コードサイニング証明書されたソフトウェアはMicrosoft Storeに配布を予定しています。

コードサイニング証明書は、ソフトウェアにデジタル署名を行う電子署名用の証明書です。 ソフトウェアの配布元を認証し、なりすましや内容の改ざんなどがされていないことを保証し、ユーザの手元に責任をもってソフトウェアを届けることができます。

### 基本的にいじらなくても良いファイル（このファイルについて詳しく知らない人は変にいじらない方がいいよ！
 - renovate.json
 - .gitignore
 - yarn.lock
 - .yarnrc.yml
 - .yarn/*
 - CHANGELOG.md
 - CODE_OF_CONDUCT.md
 - CONTRIBUTING.md
 - LICENSE
 - SECURITY.md
 - .editorconfig
