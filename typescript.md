# TypeScript 사용하기

- npm과 Node.js가 설치되어 있어야 함.

## 1. 패키지 설치

```
$ npm install -D typescript
$ npm install -D ts-node
$ npm install -D tslint
$ npm install -D nodemon
$ npm install -D @types/express

$ npm install express
```

## 2. tsconfig.json 생성

```
$ npx tsc --init           // tsconfig.json 파일 생성됨
```

[tsconfig.json]

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "lib": [
      "es2015"
    ],
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "moduleResolution": "node",
    "baseUrl": ".",
    "paths": {
      "*": [
        "node_modules/*",
        "src/types/*"
      ]
    },
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": [
    "src/**/*"
  ]
}
```

## 3. tslint.json 생성

```
$ ./node_modules/.bin/tslint --init          // tslint.json 파일 생성됨
```

[tslint.json]

```
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "jsRules": {},
  "rules": {
    "interface-name": [false],
    "no-console": [false],
    "quotemark": [true, "single"]
  },
  "rulesDirectory": []
}
```

## 4. package.json 수정

[package.json]

```
{
  "name": "test_typescript",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "npm run serve",
    "serve": "ts-node src/app.ts",
    "watch-node": "nodemon --watch src --delay 1 --exec ts-node src/app.ts",
    "watch-ts": "tsc -w"
  },
  "devDependencies": {
    "@types/express": "^4.16.0",
    "nodemon": "^1.18.9",
    "ts-node": "^7.0.1",
    "tslint": "^5.12.1",
    "typescript": "^3.2.2"
  },
  "dependencies": {
    "express": "^4.16.4"
  }
}
```

### Script 설명
- `npm run build`: 소스 컴파일
- `npm run watch-ts`: 소스 변경시 재 컴파일
- `npm run start`: 프로그램 실행
- `npm run watch-node`: 재 컴파일 시 프로그램 재시작

## 5. 실행 파일 생성

src/app.ts 파일 생성

[app.ts]
  
```
import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('This is typescript test!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

## 6. 실행

```
$ npm run start
```