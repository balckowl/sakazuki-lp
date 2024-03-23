"use client"

import Image from "next/image"
import { motion } from "framer-motion"


const SecondSection = () => {
    return (
        <div className="py-[100px]">
            <div className="text-center">
                <h3 className="font-bold text-[30px] mb-5">sakazukiのメリット</h3>
                <hr className="h-[5px] bg-[#1d4592] w-[150px] ml-auto mr-auto mb-20" />
            </div>
            <div className="bg-[#69c2ee] py-20">
                <motion.div viewport={{ once: true }} whileInView={{ x: ["-50vw", "-25vw", 0], opacity: [0, 0.25, 1] }} transition={{ delay: 0.1, duration: 0.5, ease: "linear", times: [0, 0.25, 1] }}>
                    <div className="flex items-center flex-col md:flex-row bg-white w-[95%] lg:w-3/4 h-full md:h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-[50px] mb-9 px-[30px] py-[25px]">
                        <div>
                            <Image src="/images/second-section/certificate.png" width={250} height={50} alt="cer" />
                        </div>
                        <div>
                            <p className="font-bold md:text-[25px] text-[24px] text-[#1d4592] mb-3">経験や実績が一目でわかる"キャリア証明書"</p>
                            <p className="text-[12px] md:text-[15px]">第三者証明のあるキャリア証明書で、インターンやイベント参加での経験や実績を。</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} whileInView={{ x: ["50vw", "25vw", 0], opacity: [0, 0.25, 1] }} transition={{ delay: 0.1, duration: 0.5, ease: "linear", times: [0, 0.25, 1] }}>
                    <div className="flex items-center flex-col md:flex-row  bg-white w-[95%] lg:w-3/4 xl:h-[500px] rounded-tl-[10px] rounded-bl-[10px] xl:justify-center gap-[50px] ml-auto mb-9 px-[30px] py-[25px]">
                        <div>
                            <Image src="/images/second-section/carrier_path.png" width={500} height={120} alt="data" className="mb-2" />
                            <Image src="/images/second-section/campany.png" width={500} height={120} alt="data"  />
                        </div>
                        <div>
                            <p className="font-bold text-[25px] text-[#1d4592] mb-3">先輩のデータでよりリアルな進路設計</p>
                            <p className="text-[12px] md:text-[15px]">独自のダッシュボードで先輩のキャリアパスを可視化。<br />「所属大学」「インターン先」「就職先」までの一連のデータでよりリアルな進路設計が可能。</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div viewport={{ once: true }} whileInView={{ x: ["-50vw", "-25vw", 0], opacity: [0, 0.25, 1] }} transition={{ delay: 0.1, duration: 0.5, ease: "linear", times: [0, 0.25, 1] }}>
                    <div className="flex items-center flex-col md:flex-row bg-white w-[95%] lg:w-3/4 h-full md:h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-[50px] px-[30px] py-[25px]">
                        <div>
                            <Image src="/images/second-section/dfs.png" width={500} height={70} alt="pc" className="w-[350px] md:w-[500px]" />
                        </div>
                        <div>
                            <p className="font-bold md:text-[25px] text-[24px] text-[#1d4592] mb-3">授業での成果を企業にアピール</p>
                            <p className="text-[12px] md:text-[15px]">課外活動だけでなく、授業の成果も証明書で管理。自分の強みを余すことなく企業にアピールできる。</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default SecondSection