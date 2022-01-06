let button = (props) => {
    const {text} = props;
    return <button onClick={clickButton}>{text}</button>
}

const clickButton = () => {
    for (let i = 0; i < 10; i++) {
        document.body.insertAdjacentHTML('beforeend','<div><button>hello</button></div>')
    }
}

export default button
