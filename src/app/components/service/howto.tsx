

const Howto = () => {
  return (
    <div>
      <div className="container">
        {/* pre-heading */}
        <div className="w-max">
          <h3 className="mb-[2px] text-xl">導入方法</h3>
          <div className="flex items-center w-full mb-12">
            <div className="h-[4px] bg-[#1e4593] w-[18px]"></div>
            <div className="h-[4px] bg-[#69c2ec] flex-grow"></div>
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-12 w-full sm:space-y-0 rtl:space-x-reverse mb-12">

          <div className="w-max">
            <div className="flex items-center dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                1
              </span>
              <span>
                <h5 className="font-medium leading-tight">フォームを送る</h5>
                <p className="text-xs text-gray-400">お申し込みする</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] mx-auto mt-8">
              <img src="/images/service/send.jpg" alt="step1" />
            </div>
          </div>

          <div>
            <div className="flex items-center dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              <span>
                <h5 className="font-medium leading-tight">キャリア証明書を作る</h5>
                <p className="text-xs text-gray-400">簡単に証明書が作成できる</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] mx-auto mt-8">
              <img src="/images/service/career.png" alt="step2"/>
            </div>
          </div>

          <div>
            <div className="flex items-center dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
              <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
              </span>
              <span>
                <h5 className="font-medium leading-tight">企業からスカウトが届く</h5>
                <p className="text-xs text-gray-400">証明書がステータスになる</p>
              </span>
            </div>
            <div className="w-[100px] h-[100px] mx-auto mt-8">
              <img src="/images/service/scout.webp" alt="step3"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howto