import Accordion from "./components/Accordion";

function App(){

    const items = [
        {   
            id: ';jklnml',
            label: 'Can I use React for a Project?',
            content : 'Yes, you can use it. Yes, you can use it. Yes, you can use it'
        },
        {   
            id: ';jnml',
            label: 'Can I use JavaScript for a Project?',
            content : 'Yes, you can use it. Yes, you can use it. Yes, you can use it'
        },
        {   
            id: ';jl',
            label: 'Can I use CSS for a Project?',
            content : 'Yes, you can use it. Yes, you can use it. Yes, you can use it'
        }
    ];

  return <Accordion items={items}/>;
}


export default App;