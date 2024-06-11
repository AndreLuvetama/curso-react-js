

const MyButton = () => {

    const handleTest = () =>{
        console.log("teste")
    }
    
    return(
        <>
            <button onClick={handleTest}>Teste</button>
            <br />
            <button onClick={handleTest}>Teste</button>
        </>

        
    )
}
export default MyButton;