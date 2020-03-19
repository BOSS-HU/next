import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";
import "./index.less";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
const List = props => (
  <div>
    <Link as={`/list/${props.id}`} href={`list?id=${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </div>
);

export default () => (
  <div>
    <Head>
      <title>My page title1112</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <Layout>
      <h1 className="example">hello list</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="hello2-nextjs" />
        <PostLink id="hello3-nextjs" />
      </ul>
      <List id="1" />
      <img src="/static/1.png" alt="my image" style={{ width: "100%" }} />
      <Link href="/dynamic">
        <a>dynamic</a>
      </Link>
    </Layout>
  </div>
);
