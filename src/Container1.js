export default function Container1(props){
    return (
        <div className="app">
            <img src="./Images/image_1.png" alt="ZapRecall"/>
            <h1>ZapRecall</h1>
            <button onClick={props.init}>Iniciar Recall!</button>
        </div>
    )
}