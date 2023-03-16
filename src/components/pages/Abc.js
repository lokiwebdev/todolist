import React, { useState } from 'react'

const Abc = () => {
    const [file, setFile] = useState([1, 2, 3, 4])
    return (
        <div>

            <h1>{file}</h1>
            {/* <h1><Date>03-10-2023</Date></h1> */}
            {/* <h1><DataView></DataView></h1> */}
            <input type="date" />

            <button onClick={() => { setFile([1, 2, 3]) }}>click</button>
        </div>
    )
}

export default Abc