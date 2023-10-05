import { QueryClient, QueryClientProvider } from 'react-query'
import { lazy } from "react";
import { ToastContainer } from "react-toastify";
import { ApploadingApp } from './components/AppLoading/ApploadingApp';
import { SuspenseTimeout } from './components/Suspense/SuspenseTimeout';

const ModalProvider = lazy(() => import('./components/ModalPage/ModalPage'));
const BottomNavigation = lazy(() => import('./layouts/BottomNavigation'));
const Routers = lazy(() => import('./routes/routers'));

export const queryClient = new QueryClient()

const  App = () => {

return (
   <SuspenseTimeout   minDuration={3500} fallback={<ApploadingApp />}>
      <div className='bg-teal-200  text-teal-600'></div>
      <ModalProvider>
      <QueryClientProvider client={queryClient}>
         <Routers/>
         <BottomNavigation height={60}/>
         <ToastContainer 
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className='max-w-[300px] mx-auto' 
         />
      </QueryClientProvider>
   </ModalProvider>
   </SuspenseTimeout>
)
}
export default App;
