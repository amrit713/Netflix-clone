

const initailState ={
    user:null

}

export const reducer = (state= initailState, action) =>{
    switch(action.type){
        case "LOGIN":
            
            return {
                
                user : action.payload
            }
            
        
        case "LOGOUT":
            return {
                user: action.payload,
            }
        
        default :
         return state
    }

}