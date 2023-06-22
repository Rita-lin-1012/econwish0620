
import PostalStamp from "../PostalStamp"
import Stamp from "../Stamp4"
import "./index.css"
import ntpu_stone from "./ntpu-stone.svg"
import "./wish.css"

export default function Card({ user, style }) {
  const { name, grade, imgSrc, wish } = user
  return (

    <div className="card" style={style}>
      <div className="card-content">
         <Sender name={name} grade={grade}/>
         <StampHolder imgSrc={imgSrc}/>
         <Wish wish={wish}/>
      </div>
    </div>

  )
}

function Sender({name, grade}){
  return(
   <div className="sender">
  <div className="label text-shadow">Sender:</div>
  <div className="sender-info">
    <div className="sender-name">
      <div className="sender-name-text text-shadow">{'{'}name{'}'}</div>
    </div>
    <div className="sender-grade">
      <div className="sender-grade-text text-shadow">{'{'}grade{'}'}</div>
    </div>
  </div>
</div>

  )
}
function StampHolder({imgSrc}){
  return(
    <div className="stamp-holder">
          <Stamp imgSrc={imgSrc} />
          <PostalStamp/>
          {/* <div className="seal">

            <div className="seal-icon"><img class="seal-color" src={ntpu_stone} /></div>
          </div> */}
        </div>
  )
}
function Wish({wish}){
  return(
    <div className="wish">
          <div className="right-quotation">”</div>
          <div className="left-quotation">“</div>
          <div className="wish-text">{wish}</div>
        </div>
  )
}