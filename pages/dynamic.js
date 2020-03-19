import dynamic from "next/dynamic";

const HelloBundle = dynamic({
  modules: () => {
    const components = {
      Layout: import("../components/Layout")
    };

    return components;
  },
  render: (props, { Layout }) => (
    <div>
      <Layout />
      <h1>{props.title}</h1>
    </div>
  )
});

export default () => <HelloBundle title="Dynamic Bundle" />;


