import React, {  useRef } from 'react'
import { IconButton } from '../components/UI/Button/IconButton'
import { FcDownload} from 'react-icons/fc'
import QRCode from 'react-qr-code'

export const QrCodePage = () => {

   const ref = useRef()

   const saveCapture = () => {
        const a = document.createElement("a");
        a.href = '/assets/qr-code.png';
        a.download = 'qr-code.png';
        a.click();
   }

   const coffeMenuLink = `https://coffe-bebek.iran.liara.run/menu`  

  return (
    <div  className='h-full' >
         <div  className='flex flex-col justify-center'  style={{margin:'5px auto',  maxWidth: 360, width: "60%" }}>
              <div className='mx-auto rounded border p-3 bg-white  box-border' ref={ref} id='qr-cde-box'>
                  <QRCode
                    size='100%'
                    className='rounded-lg  cursor-pointer shadow-md shadow-white-500/60'
                    value={coffeMenuLink}
                    style={{ height: "auto" }}
                    viewBox={`0 0 256 256`}
                    />
                    <h1 className='my-2 text-center'>آدرس منو</h1>
                    <h1 className='uppercase text-center text-orange-100 bg-orange-600  rounded p-2  text-xs sm:text-sm md:text-lg'>
                      Coffe Bebek
                    </h1>
                </div>
                <IconButton 
                  onClick={saveCapture} 
                  style={{width:'100%' ,textAlign :'center' }}
                  title='دانلود عکس'  
                  bgColor='bg-sky-100' 
                  text='text-sky-700' 
                  icon={<FcDownload/>} 
               />
          </div>
    </div>
  )
}

export default QrCodePage