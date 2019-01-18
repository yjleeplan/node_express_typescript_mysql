# TypeORM 사용하기

- 'TypeScript 사용하기'를 하고나서 진행
- 데이터베이스와 사용자가 존재하고 있어야 함

## 1. 패키지 설치

```
$ npm install typeorm --save
$ npm install reflect-metadata --save
$ npm install mysql --save
```

## 2. ormconfig.json 생성

[ormconfig.json]

```
{
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "tsuser",
  "password": "1111",
  "database": "ts_local",
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/entity/*.ts"
  ],
  "migrations": [
    "src/migration/*.ts"
  ],
  "cli": {
    "entitiesDir": "src/entity",
    "migrationsDir": "src/migration"
  }
}
```

## 3. tsconfig.json 수정

[tsconfig.json]

```
{
  "compilerOptions": {
    ...
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
  },
  ...
}
```

## 4. package.json 수정

[package.json]

```
{
  "name": "test_typeorm_typescript_express",
  "version": "1.0.0",
  "scripts": {
    ...
    "migration:generate": "ts-node ./node_modules/typeorm/cli.js migration:generate -n filename",
    "migration:run": "ts-node ./node_modules/typeorm/cli.js migration:run",
    "migration:revert": "ts-node ./node_modules/typeorm/cli.js migration:revert"
  },
  "devDependencies": {
    "@types/express": "^4.16.0",
    "nodemon": "^1.18.9",
    "ts-node": "^7.0.1",
    "tslint": "^5.12.1",
    "typescript": "^3.2.2"
  },
  "dependencies": {
    "express": "^4.16.4",
    "mysql": "^2.16.0",
    "reflect-metadata": "^0.1.13",
    "typeorm": "^0.2.11"
  }
}
```

## 5. entity 파일 생성

src/entity/user.entity.ts 파일 생성

[user.entity.ts]

```
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 40,
  })
  'id': string;

  @Column({
    name: 'password',
    type: 'int',
    width: 20,
  })
  'password': number;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 20,
  })
  'name': string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 40,
    nullable: true,
  })
  'email': string;

}

export default User;
```

## 6. migration 파일 생성 및 실행

1. `$ npm run migration:generate`          // migration 파일 생성됨
2. `$ npm run migration:run`          // migration 파일 실행됨
3. DB 확인
