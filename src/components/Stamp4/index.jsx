
import Image from "mui-image"
import "./index.css"

export default function Stamp({ imgSrc }) {
  return (
    <div className="stamp">
      <Image
        duration={0}
        src={imgSrc}
      />
    </div>

  )
}