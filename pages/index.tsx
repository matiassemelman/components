// Icons
import { Vector } from '@/assets/icons/Vector'
import { BuildingIcon } from '../assets/icons/BuildingIcon'
import { VectorBlack } from '../assets/icons/VectorBlack'

export default function Home() {
  return (
    <div className="min-w-full min-h-screen bg-black flex justify-center items-center">
      <div className="w-[232px] h-[180px] bg-[#FFFFFF] rounded-[23px] flex">
        <div className="flex flex-start m-[10px] gap-[16px]">
          <div>
            <BuildingIcon />
          </div>
          <div className="w-[103px] flex flex-col flex-start gap-[9px]">
            <div className="flex flex-col flex-start gap-[2px]">
              <h3 className="text-[16px] font-[600] leading-[24px] order-0 grow-0">
                TSG
              </h3>
              <p className="font-[600] text-[10px] leading-[12px] tracking-[-0.03em] order-1 grow-0 ">
                Tasa Servicios Generales
              </p>
              <p className="font-[400] text-[12px] leading-[18px] text-[#999999] flex items-center order-2 grow-0 ">
                05/03/2023
              </p>
            </div>
            <div className="flex items-center">
              <h3 className="text-[16px] font-[700] leading-[24px]">$1590</h3>
            </div>
            <span className="flex flex-nowrap justify-center ">
              <button className="bg-[#EEEBEB] py-[8px] px-[20px] rounded-[13px]">
                <div className="flex items-center gap-[8px]">
                  <span>Pagar</span>
                  <span>
                    <Vector />
                  </span>
                </div>
              </button>
            </span>
          </div>
          <div className="flex order-2">
            <VectorBlack />
          </div>
        </div>
      </div>
    </div>
  )
}
