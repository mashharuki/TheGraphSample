# TheGraphSample

TheGraphSample

## The Graph とは何か？

The Graph は、Ethereum の情報にアクセスするための API を、GraphQL を使って誰もが簡単に構築できるサービスです。

## 今回テスト用に用意したコントラクト (Verify 済み)

[https://goerli.etherscan.io/address/0x336709CAbCB19362Bf9374aE4811FF934E9626B6#code](https://goerli.etherscan.io/address/0x336709CAbCB19362Bf9374aE4811FF934E9626B6#code)

## Subgraph プロジェクトの作り方

```bash
yarn global add @graphprotocol/graph-cli
```

- init

```bash
graph init
```

- how to work

```bash

Next steps:

  1. Run `graph auth` to authenticate with your deploy key.

  2. Type `cd subgraph` to enter the subgraph.

  3. Run `yarn deploy` to deploy the subgraph.

```

### アカウント認証方法

```bash
graph auth https://api.thegraph.com/deploy/<access-token>
```

### subgraph プロジェクトのデプロイ

```bash
cd subgraph && yarn deploy
```

### 初期設定で生成されたスキーマ

```graphql
type Approval @entity(immutable: true) {
  id: Bytes!
  owner: Bytes! # address
  spender: Bytes! # address
  value: BigInt! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type OwnershipTransferred @entity(immutable: true) {
  id: Bytes!
  previousOwner: Bytes! # address
  newOwner: Bytes! # address
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type Paused @entity(immutable: true) {
  id: Bytes!
  account: Bytes! # address
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type Transfer @entity(immutable: true) {
  id: Bytes!
  from: Bytes! # address
  to: Bytes! # address
  value: BigInt! # uint256
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type Unpaused @entity(immutable: true) {
  id: Bytes!
  account: Bytes! # address
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

- error

```bash
✖ HTTP error deploying the subgraph 404
UNCAUGHT EXCEPTION: Error: EEXIT: 1
✨  Done in 8.48s.
```

## eth-create-app を使ったフロントエンドテンプレ作成

```bash
yarn create eth-app token_tracker
```

- how to work

```bash
cd token_tracker
yarn react-app:start
```

### 参考文献

1. [TheGraph(Subgraph)を使って独自の ERC20 トークンの保有者一覧をフロント（React）に表示する](https://qiita.com/toshiaki_takase/items/761435120d7ca9c7ff6c)
2. [Graph Explorer](https://thegraph.com/explorer)
3. [The Graph Docs](https://thegraph.com/docs/en/network/explorer/)
4. [create-eth-app](https://github.com/mashharuki/create-eth-app)
5. [Nodejs のバージョンを上げたら`error:0308010C:digital envelope routines::unsupported`が出てしまう](https://qiita.com/akitkat/items/f455bbc088a408cbc3a5)
