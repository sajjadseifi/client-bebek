import React, {  useRef, useState } from 'react'
import { IconButton } from '../components/UI/Button/IconButton'
import { FcDownload} from 'react-icons/fc'
import QRCode from 'react-qr-code'
import html2canvas from 'html2canvas'
import { MdSaveAs } from 'react-icons/md'

export const QrCodePage = () => {
  const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
    cropPositionTop: 0,
    cropPositionLeft: 0,
    cropWidth: 1400,
    cropHeigth: 1800
  };  
  const baseUrl = window.location.origin
  
   const coffeMenuLink = `${baseUrl}/menu`  
   const ref = useRef()


   const saveCapture = () => {
      html2canvas(ref.current).then(function(canvas) {
          const  croppedCanvas = document.createElement("canvas");
          const  croppedCanvasContext = croppedCanvas.getContext("2d");
            const {width,height} = ref.current.getBoundingClientRect()

            croppedCanvas.width = width;
            croppedCanvas.height = height;
            croppedCanvasContext.drawImage(canvas,0,0);
            
            const a = document.createElement("a");
            a.href = croppedCanvas.toDataURL();
            const fileName = 'bebek-coffe-qr-code.png';
            a.download = fileName;
            a.click();
      }
    );
   }

  return (
    <div className=' flex-1'  style={{margin:'5px auto', height: "auto", maxWidth: 360, width: "60%" }}>
         <div  className='flex justify-center' >
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
                      {/* {coffeMenuLink} */}
                      Coffe Bebek
                    </h1>
                </div>
          </div>
         <div>
          <div className='w-full' >
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
    </div>
  )
}
