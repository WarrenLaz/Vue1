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

        const insertName = () => {
            const user = data.inputName;
            data.names.push(user);
            data.inputName = '';
        }

        const removeName = (index) => {
            data.names.splice(index,1)
        }
        return{
            data,
            insertName,
            removeName
        }
    }
}).mount('#app')