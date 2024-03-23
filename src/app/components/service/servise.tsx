import Howto from "./howto"
import Compare from "./compare"

const Service = () => {
  return (
    <div className="pb-[100px]">
      {/* heading */}
      <div className="container">
        <div className="flex mb-6">
          <div className="inline-block w-2 bg-[#69c2ec] pr-2"></div>
          <div>
            <p className="pl-2 text-xs">・servise</p>
            <h4 className="px-2 font-bold text-2xl">キャリア証明書とは</h4>
          </div>
        </div>
      </div>

      <Howto />
      <Compare />

    </div>
  )
}

export default Service