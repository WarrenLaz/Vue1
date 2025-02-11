const {createApp, reactive, computed} = Vue;

var Default_State = {
    state: true,
    input:'',
    names:[],
    showError: false,
    result:''
}

createApp({
    setup(){
        const data = reactive(Default_State)

        const isReady = computed(()=>{
            return data.names.length > 1;
        })
        const randName = () =>{
            return data.names[Math.floor(Math.random()*data.names.length)];
        }
        const showResults = () => {
            data.state = false;
            data.result = randName();
        }
        const insertName = () => {
            const user = data.inputName;

            valid_(user) ? 
            data.showError = true : 
            (()=>{
            data.names.push(user);
            data.inputName = '';
            data.showError = false;
            })();
        }
        const Start_Over = () =>{
            data.state = true;
            data.input = '';
            data.names = [];
            data.showError = false ;
            data.result =  '';
        }
        const New_Name = () =>{
            while((name = randName()) == data.result){
            }
            data.result = name;
        }
        const valid_ = (val) => {
            return val==='' || data.names.includes(val);
        }

        const removeName = (index) => {
            data.names.splice(index,1)
        }
        return{
            data,
            insertName,
            removeName,
            isReady,
            showResults,
            Start_Over,
            New_Name
        }
    }
}).mount('#app')