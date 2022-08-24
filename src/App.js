
import ItemListContainer from './componentes/ItemListContainer';
import 'bootstrap/dist/css/bootstrap/css'
import NavBoostrap from './componentes./NavBoostrap'


function App() {
    const saludo = " Hola Buenas Tardes";

    return (
        <>
            <NavBoostrap/>
            <ItemListContainer saludo={saludo} greeting= 'saludo'/>
            <p>  </p>
        </>
    );
};



export default App;
