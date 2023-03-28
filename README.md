# 介绍

trpc and turborepo demo.

frontend: react、ts、tailwindcss

backend: express、ts

## 使用
```sh
pnpm run start
```
## 一些坑
```js
// 需指定origin，按照官方直接 use(cors()) 通配所有跨域无效
express.use(cors({origin: 'xxx'}))
```

```js
// 不能加空格{js, jsx, ts, tsx};
content: ["./src/**/*.{js,jsx,ts,tsx}"],
```