const myElement = React.createElement('p', {}, 'Das ist ein React Element lol');
const myJSXElement = /*#__PURE__*/React.createElement("p", {
  id: "my-id"
}, "Das ist meine erste JSX Komponente lol");
ReactDOM.render(myElement, document.getElementById("react-app"));