function Index(state, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                show_city_list : !state.show_city_list,
            }
        case 'CHANGE_CITY':
            return {
                ...state,
                city_active_bgc : action.active_bgc,
                city_name : action.city_name,
                show_city_list : false
            }
        case 'SHOW_EVALUATE':
            return {
                ...state,
                show_evaluate_text : action.show,
                show_evaluate_active : action.active
            }
        default:
            return state  // 没有匹配的action type，返回原来的state
    }
}
function Waiter(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function App(state,action){
    switch (action.type){
        case 'CHANGE_TAB':
            return{
                ...state,
                selectedTab : action.selectedTab
            }
        case 'MORE_WAITER':
            return {
                ...state,
                selectedTab : action.selectedTab
            }
        default:
            return state
    }
}
function Youfu(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function My(state,action){
    switch (action.type){
        case 'CHANGE_PHONE':
            return{
                ...state,
                phone_value:action.phone
            }
        case 'CHANGE_VERIFICATION':
            return{
                ...state,
                verification:action.verification
            }
        case 'CLEAN_VALUE':
            return{
                ...state,
                phone_value:'',
                verification:''
            }
        default:
            return state
    }
}
function WaiterService(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function ServiceBaozhang(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function Service(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function Fuchong(state,action){
    switch (action.type){
        case 'HELLO':
            return{

            }
        default:
            return state
    }
}
function reducer(state, action) {
    return {
        app: App(state.app, action),
        index: Index(state.index, action),
        waiter: Waiter(state.waiter,action),
        youfu: Youfu(state.youfu, action),
        my: My(state.my, action),
        waiterService: WaiterService(state.WaiterService, action),
        ServiceBaozhang: ServiceBaozhang(state.ServiceBaozhang, action),
        service: Service(state.service, action),
        Fuchong: Fuchong(state.Fuchong, action)
    }
}

export default reducer
