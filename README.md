# TheGraphSample

TheGraphSample

## The Graph とは何か？

The Graph は、Ethereum の情報にアクセスするための API を、GraphQL を使って誰もが簡単に構築できるサービスです。

## 今回テスト用に用意したコントラクト 

[0x0a730733Ee85466278Cd31F452165A30971Ecdbd](https://snowtrace.io/address/0x0a730733Ee85466278Cd31F452165A30971Ecdbd)

## Initialize your Subgraph (新しいサブグラフプロジェクトを作成する。)

```bash
graph init --studio subgraph
```

## Write your Subgraph

- マニフェスト (subgraph.yaml) - マニフェストは、サブグラフがインデックスするデータソースを定義します。
- スキーマ (schema.graphql) - GraphQLスキーマは、サブグラフからどのようなデータを取得したいかを定義しています。
- AssemblyScript Mappings (mapping.ts) - データソースからスキーマで定義されたエンティティにデータを変換するコードです。

## Deploy to the Subgraph Studio

1. go to [https://thegraph.com/studio/](https://thegraph.com/studio/)
2. connect wallet
3. run `graph auth --studio API_KEY`
4. run `cd subgraph`
5. run `graph codegen && graph build`
6. run `graph deploy --studio subgraph`

うまくいけば、下記のような出力が出る。

```bash
Deployed to https://thegraph.com/studio/subgraph/subgraph

Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/44992/subgraph/v0.0.1
```

## フロントエンドからクエリを実行して結果を取得するサンプルコード

```js
import logo from './logo.svg';
import './App.css';
import { gql, Client, Provider, cacheExchange, fetchExchange, useQuery} from 'urql';
import { useEffect, useState } from 'react';

// API エンドポイント
const API_URL = "https://api.studio.thegraph.com/query/44992/subgraph/v0.0.1";
// query
const query = gql`
  query {
    approvals(first: 5) {
      id
      owner
      spender
      value
    }
    _meta {
      deployment
      hasIndexingErrors
    }
  }
`;

// create client
const client = new Client({
  url: API_URL,
  exchanges: [cacheExchange, fetchExchange],
});

/**
 * App コンポーネント
 */
function App() {

  // execute query
  const [result] = useQuery({ query });
  const { data, fetching, error } = result;

  console.log(`respose:${JSON.stringify(data)}`);

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>respose: {JSON.stringify(data)}</p>
        </header>
      </div>
  );
}

function Root() {
  return (
    <Provider value={client}>
      <App />
    </Provider>
  );
}

export default Root;
```

### 参考文献

1. [TheGraph(Subgraph)を使って独自の ERC20 トークンの保有者一覧をフロント（React）に表示する](https://qiita.com/toshiaki_takase/items/761435120d7ca9c7ff6c)
2. [Graph Explorer](https://thegraph.com/explorer)
3. [The Graph Docs](https://thegraph.com/docs/en/network/explorer/)
4. [create-eth-app](https://github.com/mashharuki/create-eth-app)
5. [Nodejs のバージョンを上げたら`error:0308010C:digital envelope routines::unsupported`が出てしまう](https://qiita.com/akitkat/items/f455bbc088a408cbc3a5)
6. [QuickStart](https://thegraph.com/docs/en/cookbook/quick-start/)
7. [The Graph prize](https://ethglobal.com/events/tokyo/prizes)
8. [Hacker Resource Pack](https://thegraphfoundation.notion.site/Hacker-Resource-Pack-8dcb2946fa7f49f4803aaf550c939264)
9. [【SubGraph作成からフロント表示まで】TheGraphの始め方](https://zenn.dev/nemofilm/articles/605572d3cc9274)