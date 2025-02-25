---
language: ja
title: 開発環境の進化がもたらすUX
author: "Yoshiki"
pubDatetime: 2022-02-28T15:00:00Z
featured: false
draft: false
tags:
  - tech
description: ""
---

## Notion はドキュメントアプリに新しい概念を導入した

機能が同じようで、ドキュメントアプリの概念を変えたのが notion であると思う。

Notion はデータの持ち方に Block という概念を導入した。

その Block という概念の導入が、様々な機能の開発を可能にした、Notion の画期的なところであったと思う。

![](/assets/images/contents/2022-12-03-block-by-block.webp)from Notion

Block という概念は Notion のある種の発明だ。

もともと Notion は Nocode 系のサービスを立ち上げようとしていたらしい。そこからピポッドして、Notion になった。Nocode 系のサービスを開発する為には、持つデータとそのデータを表示するロジックに一定の規則性をもたせる必要がある。 いわゆる、宣言的 UI)

Ntion はその開発過程において、Block という概念をとりいれるに至ったのだと思う。

## 開発環境の進化 と Block

技術者として Block という概念を考えた時に、技術的に難しいと思う事も多い。

そこで、自分はその難しい事を突破できた一要因として、開発環境の進化があるのではと考えている。

(ここでいう開発環境の進化とは、OS Layer に近い技術は新しくなっておらず、Application Layer の技術が発達したという意味合いでこの言葉を使用している。)

Block を実現しようと考えたときに技術者として大変だと考えるのは以下の点である。backend とフロントエンドに対して、1 点ずつ記述している。

- Database の設計を所謂ポリモーフィックにしないといけない。
  1. 複雑な Query を吐く可能性が大きい
  2. Gitlab は非推奨としている 1.

1. フロントエンドの表示ロジックの複雑化
   - 同じ API を叩いたとししても、返ってくるデータによって大きく表示を変更しないといけない。(List, Database, Page など)

これらの問題を解決したのが、自分は以下だと考えている。

1. AWS などの Cloud の発展、DB 事態の発展したことで、DB のスペックのスケールの容易さ、スケールのアップサイドの増加により、複雑なクエリに対してもマシンスペックでカバーできるようになった。
2. React など宣言的 UI を持ち込めるフロントエンドフレームワークによって、フロントエンドに複雑なビジネスロジックを持たせられるようになった。

開発者が身近に体験できるような開発環境の進化で、新しい概念を作り UX を変えられることができるのはないかと思った。

そのため、表面的な機能だけを書き上げると、同じようなことしかできないプロダクトであっても、notion と evernote の関係のように新規サービスが既存サービスの市場をより優れた UX を武器に侵食していける可能性があるとも思った。

逆に既存サービス側の視点に立つと、使用している技術を更新していくことは、開発者のモチベーションのような観点だけでなく、サービスが獲得しているユーザを維持していくためにも重要なのではないかと考えた。

## メモ

Evernote がリリースされたのは AWS のリリースと同時期。

そのため、開発当初はクラウドではなく、オンプレミス想定で開発が進んでいたはず。

[https://techcrunch.com/2016/07/02/andy-jassys-brief-history-of-the-genesis-of-aws/#:\~:text=AWS](https://techcrunch.com/2016/07/02/andy-jassys-brief-history-of-the-genesis-of-aws/#:~:text=AWS "https://techcrunch.com/2016/07/02/andy-jassys-brief-history-of-the-genesis-of-aws/#:~:text=AWS") was first to market,Compute Cloud in August%2C 2006.
