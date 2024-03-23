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
                <div className="flex items-center bg-white w-[95%] lg:w-9/10 h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-4 mb-9">
                    <div>
                    <Image src="/images/second-section/certificate.png" width={300} height={80} alt="pc" />
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">学生のキャリアを見える化</p>
                        <p>経験や実績が一目でわかる"キャリア証明書"で、一歩先の就職活動</p>
                    </div>
                </div>
            </motion.div>
            <motion.div viewport={{once:true}} whileInView={{x: ["50vw","25vw",0], opacity:[0,0.25,1]}} transition={{delay:0.1, duration:0.5,  ease: "linear", times: [0,0.25,1]}}>
                <div className="flex items-center bg-white w-[95%] lg:w-3/4 h-[500px] rounded-tl-[10px] rounded-bl-[10px] justify-center gap-4 ml-auto mb-9">
                    <div>
                    <Image src="/images/second-section/carrier_path.png" width={500} height={120} alt="pc" />
                    <Image src="/images/second-section/campany.png" width={500} height={120} alt="campany" />
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">先輩のデータ</p>
                        <p>先輩のキャリアパスを見える化し、希望の進路へ一直線</p>
                    </div>
                </div>
            </motion.div>
            <motion.div viewport={{once:true}} whileInView={{x: ["-50vw","-25vw",0], opacity: [0,0.25,1]}} transition={{delay:0.1, duration: 0.5, ease: "linear", times: [0,0.25,1]}}>
                <div className="flex items-center bg-white w-[95%] lg:w-9/10 h-[400px] rounded-tr-[10px] rounded-br-[10px] justify-center gap-4">
                    <div>
                    <Image src="/images/second-section/dfs.png" width={400} height={70} alt="pc" />
                    </div>
                    <div>
                        <p className="font-bold text-[25px] text-[#1d4592]">授業での成果を企業に</p>
                        <p>課外活動だけでなく、授業の成果も企業へアピール</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default SecondSection