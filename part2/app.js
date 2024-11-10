const app = Vue.createApp(
    {
        // data: function() {}  posso escrever assim ou
        data() {

            // precisa sempre retornar um objeto
            // tudo no retorno consigo acessar no html7
            // posso passar inteiros, booleanos  e etc tb
            return {
                courseGoal: 'Finish the course',
                courseGoalA: '<h1>Second Finish the course</h1',
                courseGoalB: '<h3>First Finish the course<h3>',
                vueLink: 'google.com.br',
                counter: 0,
                name: "",
                confirmedName: "",
                fullNameWatcher: "",
                boxASelected: false,
                boxBSelected: false,
                boxCSelected: false,
                boxDSelected: false,
            };
        },
        // methods is always as object with functions
        methods: {
            selectBox(box){
                if (box==='A'){
                    this.boxASelected = !this.boxASelected;
                } else if (box==='B'){
                    this.boxBSelected = !this.boxBSelected;
                } else if (box==='C'){
                    this.boxCSelected = !this.boxCSelected;
                }else if (box==='D'){
                    this.boxDSelected = !this.boxDSelected;
                }
            },
            outputGoal(){
                const randonNumbuer = Math.random();
                if (randonNumbuer > 0.5){
                    return this.courseGoalA;
                } else {
                    return this.courseGoalB;
                }
            },
            addCounter(number){
                this.counter = this.counter + number;
            },
            setName(event, surname){
                // event variable always come with events methods
                // event target equals to vanilla javascript
                this.name = event.target.value +' '+ surname;
            },
            submitForm(){
                // event variable always come with events methods
                // event target equals to vanilla javascript
                // this.name = event.target.value +' '+ surname;
            },
            confirmInput(){
                this.confirmedName = this.name;
            }
        },
        watch: {
            // when name property changes it will call this function, similar to computed
            //  but its worse when need to check multiple properties, like if i use name and surname properties
            // but watcher are better for example counter()  if counter <0 this.counter = 0
            // better for use some logic in the propertie that are being listened or others
            name(value){
                this.fullNameWatcher = value + "sobrenome";
            }
        },
        // like methods but will be executed diferently, with better performance, only when property changes
        computed: {
            fullName(){
                if (this.name === "" || this.name === ""){
                    return 'ab'
                }else{
                    return `${this.name} sobrenome`;
                }
            },
            boxDClasses(){
                return {'clickable-box':true, active: this.boxDSelected}
            }

        }
    }
);

app.mount("#user-goal");