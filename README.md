# MoyaLog

> 「モヤモヤした気持ちを AI がやさしく整理してくれる」セルフケアアプリ
> A self-care app that gently helps you organize your tangled thoughts with AI.

---

## Features

- 感情や出来事を自由に入力
- **匿名ログインは 1 日 1 回まで使用可能**（アカウント作成で回数拡張予定）
- AI（OpenAI API）が「要約・ポジティブ視点・深呼吸アドバイス」を返答
- Firebase で匿名ログイン＆履歴保存
- Tailwind CSS によるレスポンシブ UI
- Vercel により簡単デプロイ

- Freely input your emotions and thoughts
- **Anonymous login users are limited to 1 use per day** (more uses available with future account upgrade)
- AI (OpenAI API) provides summaries, positive perspectives, and breathing advice
- Anonymous login & history saved via Firebase
- Responsive UI with Tailwind CSS
- Easy deployment with Vercel

---

## Tech Stack

| 技術項目 / Category        | 使用技術 / Tech Used                  |
| -------------------------- | ------------------------------------- |
| フレームワーク / Framework | Next.js 14 (App Router)               |
| 言語 / Language            | TypeScript                            |
| スタイリング / Styling     | Tailwind CSS                          |
| 状態管理 / State Mgmt      | Zustand / useState                    |
| 認証 & データ / Auth & DB  | Firebase Auth (Anonymous) + Firestore |
| AI 連携 / AI Integration   | OpenAI API (gpt-3.5-turbo)            |
| デプロイ / Deployment      | Vercel                                |

---

## Setup

```bash
git clone https://github.com/yuki-o-tech/moyalog-ai.git
cd moyalog-ai
npm install
npm run dev
```
