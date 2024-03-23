

const Compare = () => {
  const companyInfoList = [
    ["項目A","×","〇","◎"],
    ["項目B","×","〇","◎"],
    ["項目C","×","〇","◎"],
    ["項目D","×","〇","◎"],
    ["項目E","×","〇","◎"],
  ]

  return (
    <div className="">
      <div className="container">
        {/* pre-heading */}
        <h4>他社比較</h4>

        <div className="mx-auto w-[80%]">
          <table className="w-full border-collapse border border-blue-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="w-[20%] p-3 font-bold border border-blue-300"></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300"><p>A社</p></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300"><p>B社</p></th>
                <th className="w-[20%] p-3 font-bold border border-blue-300 bg-yellow-400"><p>sakazuki</p></th>
              </tr>
            </thead>
            <tbody>
              {companyInfoList.map((companyInfo, index) => (
                <tr key={index}>
                  <td className="w-[20%] p-3 font-bold border border-blue-300"><p className="text-center">{companyInfo[0]}</p></td>
                  <td className="w-[20%] p-3 font-bold border border-blue-300"><p className="text-center">{companyInfo[1]}</p></td>
                  <td className="w-[20%] p-3 font-bold border border-blue-300"><p className="text-center">{companyInfo[2]}</p></td>
                  <td className="w-[20%] p-3 font-bold border border-blue-300 bg-yellow-200"><p className="text-center">{companyInfo[3]}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Compare