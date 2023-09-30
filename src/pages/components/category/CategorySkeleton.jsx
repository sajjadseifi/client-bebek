import React from 'react'

export const CategorySkeleton = () => {
  return (
      <div role="status" class="max-w-md p-4 space-y-4   divide-y  rounded shadow animate-pulse  md:p-6 bg-gray-600">
         <div class="flex flex-col items-center justify-between">
                  <div class="h-16 flex items-center justify-center  bg-gray-500 rounded-full dark:bg-gray-700">
                        <svg class="w-16 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                           <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                           <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        </svg>
                  </div>
                  <div class="flex justify-center items-center w-full mt-3">
                        <div class="h-1.5 bg-gray-500 rounded-full  w-24 "></div>
                    </div>
         </div>
    </div>
  )
}