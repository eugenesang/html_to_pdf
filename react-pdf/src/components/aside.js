import React from 'react';
import Resume from '../pages/resume';
import SamplePage from '../pages/SamplePage';

const Aside = ({setDocument}) => {
    
    return ( <aside className='doc-selector'>
        <button onClick={()=>{
            setDocument(<SamplePage/>);
        }}>
            <i className="fas fa-file-code"></i>
            <span>SAMPLE</span>
        </button>

        <button onClick={()=>{
            setDocument(<Resume/>);
        }}>
            <i className="fas fa-id-card"></i>
            <span>RESUME</span>
        </button>

    </aside> );
}
 
export default Aside;