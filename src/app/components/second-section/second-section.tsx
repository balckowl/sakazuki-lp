"use client"

import Image from "next/image"
import { motion } from "framer-motion" 
  

const SecondSection = () => {
  return (
    <div>
        <div className="text-center">
            <h3 className="font-bold text-[30px] mb-5">sakazukiのメリット</h3>
            <hr className="h-[5px] bg-[#1d4592] w-[150px] ml-auto mr-auto mb-20"/>
        </div>
        <div className="bg-[#69c2ee] py-20">
            <motion.div viewport={{once:true}} whileInView={{x: ["-50vw","-25vw",0], opacity: [0,0.25,1]}} transition={{delay:0.1, duration: 0.5, ease: "linear", times: [0,0.25,1]}}>
                <div className="flex items-center bg-white w-[95%] lg:w-3/4 h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-4 mb-9">
                    <div>
                    <Image src="/images/second-section/certificate.png" width={300} height={80} alt="cer" />
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">経験や実績が一目でわかる"キャリア証明書"</p>
                        <p>第三者証明のあるキャリア証明書で、インターンやイベント参加での経験や実績を。
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div viewport={{once:true}} whileInView={{x: ["50vw","25vw",0], opacity:[0,0.25,1]}} transition={{delay:0.1, duration:0.5,  ease: "linear", times: [0,0.25,1]}}>
                <div className="xl:flex items-center bg-white w-[95%] lg:w-3/4 h-[450px] xl:h-[500px] rounded-tl-[10px] rounded-bl-[10px] xl:justify-center gap-4 ml-auto mb-9">
                    <div>
                    <Image src="/images/second-section/carrier_path.png" width={500} height={120} alt="data" className="mb-8" />
                    <Image src="/images/second-section/campany.png" width={500} height={120} alt="campany" className="hidden xl:block"/>
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">先輩のデータでよりリアルな進路設計</p>
                        <p>独自のダッシュボードで先輩のキャリアパスを可視化。<br/>「所属大学」「インターン先」「就職先」までの一連のデータでよりリアルな進路設計が可能。</p>
                    </div>
                </div>
            </motion.div>
            <motion.div viewport={{once:true}} whileInView={{x: ["-50vw","-25vw",0], opacity: [0,0.25,1]}} transition={{delay:0.1, duration: 0.5, ease: "linear", times: [0,0.25,1]}}>
                <div className="flex items-center bg-white w-[95%] lg:w-3/4 h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-4">
                    <div>
                    <Image src="/images/second-section/dfs.png" width={600} height={70} alt="pc" />
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">授業での成果を企業にアピール</p>
                        <p>課外活動だけでなく、授業の成果も証明書で管理。自分の強みを余すことなく企業にアピールできる。</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default SecondSection