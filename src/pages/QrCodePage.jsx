import React from 'react'
import { IconButton } from '../components/UI/Button/IconButton'
import { FcDownload} from 'react-icons/fc'
import QRCode from 'react-qr-code'
export const QrCodePage = () => {
   const baseUrl = window.location.origin
   const coffeMenuLink = `${baseUrl}/menu`

  return (
    <div className='py-5 flex-1'
      style={{margin:'5px auto', height: "auto", maxWidth: 360, width: "60%" }}
    >
         <div 
            className='flex justify-center' 
         
         >
          <div className='mx-auto rounded border p-3 bg-white  box-border'>
              <QRCode
                size={256}
                className='rounded-lg  cursor-pointer shadow-md shadow-white-500/60'
                value={coffeMenuLink}
                style={{ height: "auto" }}
                viewBox={`0 0 256 256`}
                />
                <h1 className='text-center text-orange-100 bg-orange-600  rounded p-2 mt-2'>{coffeMenuLink}</h1>
                </div>
         </div>
         <div>
          <div className='' >
              <IconButton 
                style={{width:'100%' ,textAlign :'center' }}
                title='دانلود عکس'  
                bgColor='bg-sky-100' 
                text='text-sky-700' 
                icon={<FcDownload/>} 
              />
          </div>
         </div>
    </div>
  )
}
