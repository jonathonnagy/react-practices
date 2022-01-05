let button = (props) => {
    const {text} = props;
    return <button onClick={clickButton}>{text}</button>
}

const clickButton = () => {
    document.body.insertAdjacentHTML('beforeend','<div>hello</div>')
}

export default button
