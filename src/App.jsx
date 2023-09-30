import { Routers } from "./routes/routers";
import { QueryClient, QueryClientProvider } from 'react-query'
 
 export const queryClient = new QueryClient()

const  App = () =>(
   <QueryClientProvider client={queryClient}>
      <Routers/>
   </QueryClientProvider>
)

export default App;
