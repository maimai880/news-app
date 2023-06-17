# NEWS-APP📰

![GitHub](https://img.shields.io/github/license/maimai880/news-app)  

reactで作成されたシンプルなニュースサイトです  
ChatGPTを利用した開発の練習として作成しました  
vite, ts, mui, jotai, などの技術を使用しています  
  
[デプロイ用のAPI](https://github.com/maimai880/news-app-api)

## LIVE DEMO

**⚠️ 広告ブロックがONになっていると一部UIが正しく表示されないので、OFFにして頂けると有難いです**  

https://news-app-one-silk.vercel.app/  

## セットアップ&起動

1. [GNews](https://gnews.io)でアカウントを作成しAPIキーを取得

2. プロジェクトルート直下に`.env.local`ファイルを作成しAPIキーを入力
```.env.local
VITE_API_KEY = "your api key here"
```

3. 実行
```
npm i && npm run dev
```

## クレジット

アーキテクチャ・一部のコード: [bulletproof-react](https://github.com/alan2207/bulletproof-react)  
開発支援: [ChatGPT](https://chat.openai.com/)  
ニュースの取得API: [GNews](https://gnews.io/)  
ロゴの取得API: [clearbit](https://clearbit.com/logo)  
