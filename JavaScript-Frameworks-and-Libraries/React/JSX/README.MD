# JavaScrip XML (JSX)
* __JSX__: an extension of JavaScript which allow us to write HTML code in JavaScript file. E.g., consider the below variable declaration. It's neither JS nor HTML. This is the mixture of JavaScript + XML = JSX. It is not necessary to work with JSX, but is recommended as it makes the code easier to understand.
```js
    cons element = <h1>Hello, World!</h1>
```
_Why use JSX?_
* As it basically helps us write HTML tags inside JS, which ultimately makes __React__ faster.
* JSX makes the code easier to understand and visually attractive.
```js
    class Hey extends React.Component {
        render(){
            return <div> Hello {this.props.iDontKnow}</div>;
        }
    }
    ReactDOM.render{
        <Hey iDontKnow="World"/>,
        document.getElementById('root')
    };
```