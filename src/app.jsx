const myElement = React.createElement(
    'p',
    {},
    'Das ist ein React Element lol'
);

const myJSXElement = <p id='my-id'>Das ist meine erste JSX Komponente !!!!!!!!!!</p>

ReactDOM.render(
    myElement,
    document.getElementById("react-app")
);

class MyClassComponent extends React.Component{
    render(){
    return (<p>{this.props.text}</p>);
    }
   }
   