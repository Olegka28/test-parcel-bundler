import * as React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <Header />
        <h1>Hello {name}</h1>
        <Footer />
      </>
    );
  }
}

export default App;
