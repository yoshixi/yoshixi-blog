---
layout: ../layouts/AboutLayout.astro
title: "Resume/職務経歴書"
---

## 基本情報

| key     | value                                           |
| ------- | ----------------------------------------------- |
| Name    | 増渕 佳輝(マスブチ ヨシキ)                      |
| Blog    | [ブログ](https://yoshixi.dev)                   |
| Quiita  | [Quita](https://qiita.com/yoshixj)              |
| Twitter | [@yoshixi_dev](https://twitter.com/yoshixi_dev) |

## サマリー

ホームページ制作から、Rails/Go/Vue.js/React を用いた業務を多くやっていきました。
webフロントからバックエンドまで一気通貫して、開発することができます。
得意な領域はRails/Goを使用したバックエンドの開発です。 フロントエンドも元々ホームページ制作会社にいたこともあり、一般的なUIであればReact/Vue を使用して開発をすることができます。
現在はスタートアップや中小企業にてWebアプリケーションの開発を行っています。

# 職務経歴

| date | v1                                  | v2                                                                |
| ---- | ----------------------------------- | ----------------------------------------------------------------- |
| 2015 | 中央大学理工学部情報工学科入学      |                                                                   |
| 2016 | 株式会社フォーデジット (アルバイト) | 不動産のホームページを制作                                        |
| 2017 | 株式会社 div (インターン)           | 開発メンター                                                      |
| 2018 | 株式会社 NiCOLA (インターン)        | グルメアプリを開発 - Rails                                        |
| 2019 | 中央大学理工学部情報工学科卒業      | 楕円暗号の研究してました。                                        |
| 2019 | 株式会社 NiCOLA                     | Tech Lead として、主にEC/グルメアプリを開発 - Rails/React/AWS/GCP |
| 2020 | 株式会社 Doorkel                    | 教育機関向け Saas の開発 - Rails/Vue/GCP                          |
| 2021 | 株式会社 Seibii                     | SEO にあわせたメディアの改修 - Ruby/React                         |
| 2022 | MODE, inc                           | IoT platform の開発 - Go/AWS                                      |

## MODE, inc (2022/08 - 現在)

- 使用技術: Go/AWS/ECS/SNS/SQS/CloudWatch など

IoT の platform を開発しています。

## 株式会社 Doorkel (2020/02 - 現在)

### 教育機関向けマーケティング支援ツールの開発

- 仕様技術
  - backend: Rails (REST API + Graphql)
  - front: Nuxt (一部 typescript)
  - infra: heroku/ZoomAPI

バックエンドに Rails、フロントエンドに Nuxt を仕様して開発をおこなっています。
vue3 に伴い、一部サービスに composition API の導入も主導して行いました。
typescript, composition API, graphql-code-generator を導入することで、Front の開発体験が飛躍するので、おすすめです。
Saas プロダクトで業務をデータモデル落とし込むのが難易度が高かったです。
platuml などを使用することで、デザインの段階でメンバーの認識を揃えて開発していました。

## 株式会社 NiCOLA (2018/08 - 2022/08)

株式会社 NiCOLAでは Tech Lead として、toC 向けの飲食系アプリ、EC、他社スタートアップの支援などに携わりました。

### Shopify アプリの開発

- 使用技術: Next.js x Typescript / Firestore

### D2C 事業の支援ツールの開発

- 使用技術
  - backend: Golang x gqlgen
  - frontend: Nuxt x Typescript x graphql-codegenerator
  - infra: GAE/CloudTasks/Firestore/CloudSQL/ShopifyAPI

自社の D2C 事業を支援するツールの開発を行っていました。

- Shopify の API を利用してデータを習得し、BigQuery,Redash を使って分析できるようなシステムの構築
- 発注データをためるような Saas を想定したサービスの開発
  をおこなっていました。
  GraphQL を使用し、schema first な開発と type safe な開発がしたかったため、gqlgen を FW に選びました。
  サービスは社内公開後、更新が業務の変化に追いつかず、close してしまいました。

### テイクアウトアプリ [mecimo](https://mecimo.jp/)の開発 (2018/08-2019/08)

- 使用技術: Rails5/GAE/GCS/CloudSQL/Docker/Swagger/Stripe/Vue

Rails をつかった API の開発をしました。
認証に JWT を使用しました。
このプロジェクトとは新規で設計からぜんぶやらせてもらいました。
API のシリアライザーとして、fast_jsonapi も使いました。 [fast_json:API については、Quiita に投稿しました](https://qiita.com/yoshixj/items/6499490f6fbefea05cae)
また GAE の flexible 環境を使い、Rails を GCP 上にホスティングしてました。
決済に Stripe を使用したので、そのトランザクションを慎重に実装しました。

また少しですが、業務委託の方にも手伝ってもらい、管理画面の実装も行いました。
管理画面の実装としては、仕様変更、SEO などが必要ない点などを考慮し、Vue.js で SPA で実装しました。
データの管理として、Vuex を使用しました。

### グルメアプリ [グルポケ](https://lp.gpocket.jp/)の開発(2018/08-2019/01)

- お気に入りのお見せをストックできる、というアプリを開発してました。
- 使用技術: heroku/Rails4/postgres/PostGis/Docker/Redash/Swagger

Rails を使った API の開発をしてました。
位置情報を扱うために、PostGis をつかっていました。
インデックスを張り替えるなどして、パフォーマンスをあげたりもしました。
また、開発環境を docker-compose に載せ替えもしました。
途中で社内のエンジニアが自分ひとりになったこともあり、開発マネージャーのようなポジションになりました。業務委託でリモート勤務の iOS 開発者の方とのコミュニケーション改善も行っていきました。

失敗談としては

- 既存の postgis 用の adapter gem をうまく使いこなすことができず、model に直接クエリを書いてしまったこと
- 初期に設計していた DB の設計よくなかった。(リレーション関係がまず、status の管理など)
  などがありました。

## 株式会社 div (2017/07 - 2018/08)

職務: インターン、メンター

- RubyOnRails を教えるプログラミング講師のメンターをしていました。
- 月間で一番受講生から評価をもらったメンターにもなりました。
- 拠点責任者になり、教室の運営業務などもおこないました。
- 環境: slack/github/jobcan

株式会社 div はメンターとして、コミュニケーションの基礎を学ぶことができた環境でした。
お金を払って教室にきてくれている受講生に、気持ちよくプログラミングを学んでもらうためにはどうするのがいいか考えて接客しました。
一番の得られたものは傾聴力です。様々な人と働く上で、相手がどう思っているかを常に聞く姿勢はとても大切なものだと日々感じています。
また、成長しているベンチャー企業の会社の文化も生で感じることができた会社でした。

## 株式会社フォーデジット (2016/08 - 2017/08)

### ホームページの改修業務

職務: コーダー

- HTML/CSS/JS で作られたホームページのの改修をしてました.
- photoshop, illustrator でくられたデザインをコード反映させるようなお仕事です。
- 開発環境: subversion/mamp/chatwork

1 年ほどアルバイトという形で働かせていただきました。
サイトとしては、大手不動産会社のホームページともあり、中規模〜大規模の HP のマークアップ改修業務を行いました。
正直先端な技術とかは使ってはなく、複数箇所にまたがるような同じパターンの変更などもあり、時には数十の HTML/CSS ファイルのコードを一括で置換するなどの作業も行いました。

# 言語使用経験

- Ruby
- Go
- GAS
- マークアップ
- javascript, typescript
- plat uml
- 日本語
  - ネイティブ
- 英語
  - 開発に関する英語ドキュメントを読める程度

### フレームワーク、プラットフォーム使用経験

- Ruby
  - Ruby on Rails
  - middleman
- Go
  - [99designs/gqlgen](https://github.com/99designs/gqlgen)
  - [go-chi/chi](https://github.com/go-chi/chi)
  - [volatiletech/sqlboiler](https://github.com/volatiletech/sqlboiler)
  - dbmate
  - goa
  - gin
  - MongoDB
- typescript, javascript
  - Puppeteer
  - React / Next.js
  - Vue / Nuxt.js
- Docker
- Haroku
- AWS
  - EC2/S3/ECS/CloudWatch/SNS/SQS/SecretManager/ELB
- GCP
  - GAE/GCS/CloudSQL/CloudTasks/CloudScheduler/CloudFunction/CloudRun
- Firebase
  - Authentication/CloudFunctions/CloudStorage/Hosting/Fireastore

### その他

- github
- slack/chatwork
- Asana
- Redash

# 課外活動

### 過去の登壇資料

- [Speaker Deck](https://speakerdeck.com/yoshixj)

####
