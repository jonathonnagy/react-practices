import Button from './Button';

const buttonListWithMap = _ => {
    // const tenButton = [];

    // for (let i = 0; i < 10; i++) {
    //     tenButton.push(<Button key={i} />)
        
    // }
    // return <div>{tenButton}</div>;

    const users = ['Rihard', 'Flora', 'Aron', 'Betti', 'Johnny'];
    
    return <div>{users.map((userName,i)=> <Button key={i} userName={userName} />)}</div>
}

export default buttonListWithMap;