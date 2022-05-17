import Image from '../Image'

const Showcase = ({ imageSrc }) => {
  return (
    <div className="z-0">
      <Image src={imageSrc} className="w-136 z-0" alt="Showcase item" />
    </div>
  )
}

export default Showcase