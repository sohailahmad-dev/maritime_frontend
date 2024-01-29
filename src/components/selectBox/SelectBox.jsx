import React, { useEffect, useState } from 'react';
import './SelectBox.css'

export default function SelectBox({ label, options, onSelect }) {

    let [val, setVal] = useState('');


    const onChange = (e) => {
        setVal(e.target.value)
        if (onSelect) {
            onSelect(e.target.value);
        }
    }

    return (
        <div className='selectBox' >
            <div className="selectLabel">{(val === '') ? label : ''}</div>
            <select id="select" value={val} onChange={onChange} style={{ width: (val === '') ? '50%' : '100%' }}>
                <option key='' value=''> </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

