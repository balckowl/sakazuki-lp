

const Howto = () => {
  return (
    <div>
      {/* pre-heading */}
      <h4>導入方法</h4>

      <div className="max-w-screen-lg mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold">Step 1: 準備</div>
        <img src="/images/step1_image.png" alt="Step 1" className="w-32 h-auto" />
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg font-semibold">Step 2: インストール</div>
        <img src="/images/step2_image.png" alt="Step 2" className="w-32 h-auto" />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">Step 3: 設定</div>
        <img src="/images/step3_image.png" alt="Step 3" className="w-32 h-auto" />
      </div>

    </div>
    </div>
  )
}

export default Howto