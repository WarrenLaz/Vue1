const {createApp, reactive, computed} = Vue;

const Default_State = {
    state: true,
    input:'',
    names:[],
    error:'',
    showError: false,
    result:''
}

createApp({
    setup(){
        const data = reactive(Default_State)

        return{
            data
        }
    }
}).mount('#app')