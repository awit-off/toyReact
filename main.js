import { YYReact, Component } from "./YYReact";

class MyComponet extends Component {
  render() {
    return <div>Hello Word !
      <p>true</p>
      <p>12312</p>
    </div>;
  }
}

let a = <MyComponet name="abc"> </MyComponet>;

YYReact.render(a, document.body);
