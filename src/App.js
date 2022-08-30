import NavReact from "./componentes/NavReact";
import "bootstrap/dist/css/bootstrap.css"
import ItemListContainer from "./componentes/ItemListContainer";
import ItemCount from "./ItemCount";




function App() {

    return (
        <>
        <NavReact />
        <ItemListContainer greeting={"hola a todos"}/>
        <ItemCount/>
        </>
    );
};



export default App;
