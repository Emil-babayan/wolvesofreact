import { data as source } from "../data/data"
import { createContext, useReducer } from "react"

export const DataContext = createContext(null)


const reducer = (state, {type, payload}) => {
    switch(type) {
        case "FILTERDATA":
            return state.find(elem => elem.id == payload.id)
        default:
            return source
                }
}

const DataCTX = ({children}) => {

const [data, dispatchData] = useReducer(reducer, Object.values(source).flat())

  return (
    <DataContext.Provider value={{data, dispatchData}}>        
        {children}
    </DataContext.Provider>
  )
}

export default DataCTX