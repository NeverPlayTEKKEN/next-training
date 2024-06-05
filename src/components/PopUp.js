import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@/components/Button'), {
    ssr: false
  });

const PopUp = (props) => {
    const styles = {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"        
    }

    return (
      <div style={styles}>
        <h2>{props.tittle}</h2>
        {props.contents}
        <Button text="閉じる" handleClick={props.handleClick}/>
      </div>
    )
  }

  export default PopUp