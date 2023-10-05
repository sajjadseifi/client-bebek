import { QueryClient, QueryClientProvider } from 'react-query'
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { AppLoading } from "./components/AppLoading/AppLoading";

const ModalProvider = lazy(() => import('./components/ModalPage/ModalPage'));
const BottomNavigation = lazy(() => import('./layouts/BottomNavigation'));
const Routers = lazy(() => import('./routes/routers'));

export const queryClient = new QueryClient()

const  App = () => {

return (
   <Suspense fallback={<AppLoading />}>
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
   </Suspense>
)
}
export default App;
