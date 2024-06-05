'use client'
const Button = (props) => {

    return (
        <button  onClick={props.handleClick} class="border border-black hover:border-yellow-300 hover:text-yellow-300 rounded px-2 py-1 shadow">{props.text}</button>
    );
};

export default Button;