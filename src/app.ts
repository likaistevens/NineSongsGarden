import "./app.less";

// class App extends Component {

//   componentDidMount () {}

//   componentDidShow () {}

//   componentDidHide () {}

//   componentDidCatchError () {}

//   // this.props.children 是将要会渲染的页面
//   render () {
//     return this.props.children
//   }
// }
const App: React.FC<{ children: React.ReactElement<any, any> | null }> = ({
  children,
}) => {
  return children;
};

export default App;
