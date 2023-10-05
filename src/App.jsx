import { BottomNavigation } from "./layouts/BottomNavigation";
import { Routers } from "./routes/routers";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ModalProvider } from "./components/ModalPage/ModalPage";
import { Suspense } from "react";
import { AppLoading } from "./components/AppLoading/AppLoading";

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
