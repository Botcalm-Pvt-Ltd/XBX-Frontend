import React from 'react'

const MobileReferralsContantCard = ({num, wallet, volume, code}) => {
  return (
<div className="flex justify-center items-center py-3">
      <div
        className=" p-[1px] rounded-xl w-[310px] mx-10 "
        style={{
          clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <div
          className="w-full flex flex-col items-center justify-center gap-5 glass-effect-box p-3 rounded-xl text-white"
          style={{
            clipPath: "polygon(85% 0, 100% 20%, 100% 100%, 0% 100%, 0% 0%)",
          }}
        >
          <div className="flex flex-col gap-5 w-80 Grotesk mx-10 p-3 text-white px-8">
            <div className="flex justify-between items-start gap-5">
              <div className='rounded-xl bg-gray-600/50 p-3 px-5 ring-1 ring-white'>
                <h1>{num}</h1>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-gray-500">WALLET</h1>
                  <h1>{wallet}</h1>
                </div>
                <div>
                  <h1 className="text-gray-500">VOLUME</h1>
                  <h1>{volume}</h1>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-gray-500">CODE</h1>
                  <h1>{code}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MobileReferralsContantCard
