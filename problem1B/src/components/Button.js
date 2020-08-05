import React, {useContext} from 'react'
import Context from '../context/Context'

const Button = props => {
    const context = useContext(Context);
    return (
        <div className='container'>
            <button className={context.className} onClick={context.handleClick}>Click Me</button>
            <div>
                {context.pastColors.length ? (
                        context.pastColors.map(pastColor => {
                            const id = Math.random()*100;
                            return (
                                        <span className={`${pastColor}-text`} key={id}>{pastColor},</span>
                                    )
                        })
                        ):(
                            <p></p>
                        )
                }
            </div>
        </div>   
    )
}

export default Button
