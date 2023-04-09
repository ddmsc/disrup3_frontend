import { shortenAddress } from '@/utils/address';
import React, { FC } from 'react'

interface Props {
    defaultAccount: string;
    connectWalletHandler: () => Promise<void>;
}

const Navbar: FC<Props> = ({
    connectWalletHandler,
    defaultAccount
}) => {
  return (
    <nav className=' flex justify-between items-center p-3'>
          
          <div className=''>
            <img src="3-disrup.jpg" alt="disrup3 logo" className='w-20'/>
          </div>

          {/**CONNECT BUTTON */}
          {defaultAccount?.length > 0  
            ? <p className='text-black'>{shortenAddress(defaultAccount)}</p> 
          
            : (
              <div>
                <button onClick={connectWalletHandler} className='bg-white rounded-sm text-black p-2'>Connect wallet</button>
              </div>
            )
          }       
               
    </nav>
  )
}

export default Navbar