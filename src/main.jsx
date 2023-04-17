import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './index.css'
import { HashRouter } from 'react-router-dom';
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import Loading from './utils/Loading'

// react transition group for transition between routes 

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={<Loading/>} persistor={persistor}>
            <HashRouter>
               <App/>
            </HashRouter>
         </PersistGate>
      </Provider>
   </React.StrictMode>,
)
