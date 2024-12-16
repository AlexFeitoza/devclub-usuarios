import { createElement, useState } from "react"

const More = () => {

    const [ler,setLer] = useState(true)

    const lerMais = () => {
        setLer(false)
    }

    return (
        <>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut ducimus sit velit. Cum repellendus, delectus dolore odio id, facere quasi sunt cumque pariatur nisi a ex repudiandae. Eligendi, inventore voluptates?</p>
            <button onClick={lerMais}>{ler}</button>
            
            {ler && (
                <button onClick={lerMais}> Ler Menos</button>
            )}

            {!ler && <p>popo</p>}
        </>
    )
}

export default More