import './App.css';
import Aside from './components/aside';
import PdfGenerator from './components/PdfGenerator';
import { useState } from 'react';
import Resume from './pages/resume';

function App() {
  const [page, setPage] = useState(<Resume/>)
  return (
    <div className="App">
     <Aside setDocument={setPage} />
     <div className='pdf-container'><PdfGenerator content={page} /></div>
    </div>
  );
}

export default App;
