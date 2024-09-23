
import {Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/createProduct'
import UploadImage from './pages/UploadImage'
import AddCounter from './pages/AddCounter'

const App = () => {
  return (
    <><Routes>
      <Route path = "/createProduct" element= {<CreateProduct/>}></Route>
      <Route path='/' element= {<UploadImage/>}></Route>
      <Route path='/counter' element={<AddCounter/>}></Route>
      </Routes></>
  )
}

export default App