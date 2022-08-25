
import ItemListContainer from "./componentes/ItemListContainer";
import NavReact from "./componentes/NavReact";
import "bootstrap/dist/css/bootstrap.css"



function App() {
    const saludo = " Hola Buenas Tardes";

    return (
        <>
        <NavReact/>
            <ItemListContainer saludo={saludo} greeting= 'saludo'/>
            <p>  </p>
        </>
    );
};



export default App;
