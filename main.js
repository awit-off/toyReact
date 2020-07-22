import { YYReact, Component } from "./YYReact";

class Square extends Component {
  constructor(props) {
    super(props)
    this.state ={
      value:null
    }
  }
  componentWillMount() {
    console.log('willMount');
  }
  componentDidMount() {
    console.log('didMount')
  }
  componentWillUpdate() {
    console.log('willUpdate')
  }
  componentDidUpdate() {
    console.log('didUpdate')
  }
  render() {
    return (
      <button onClick={() => {
        if (this.state.value === 'X') {
          this.setState({
            value:'O'
          })
        } else {
          this.setState({
            value:'X'
          })
        }
       
      }} className="square">
        {this.state.value ? this.state.value:''}
      </button>
    );
  }
}

class Board extends Component {
  
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    return ( <div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>);
  }
}

let a = <Board name="abc"> </Board>;

YYReact.render(a, document.body);
