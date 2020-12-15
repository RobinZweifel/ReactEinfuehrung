const myElement = React.createElement('p', {}, 'Das ist ein React Element lol');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, "Das ist meine erste JSX Komponente !!!!!!!!!!");
ReactDOM.render(myJSXElement, document.getElementById("react-app"));