import Layout from "../components/Layout";

export default props => (
  <Layout>
    {/* {console.log(props.url)} */}
    <h1>{props.url.query.id}</h1>
    <p>This is the post page.</p>
  </Layout>
);
