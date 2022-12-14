const { createApp } = Vue;

createApp({
    data()  {
        return {
            todo : [
                {
                    text: 'Fare la lavatrice' ,
                    done: false,
                },
                {
                    text: 'Fare la lavastoviglie' ,
                    done: false,
                },
                {
                    text: 'Fare la doccia' ,
                    done: false,
                },
                {
                    text: 'Fare i compiti' ,
                    done: false,
                },
                {
                    text: 'Andare a giocare a tennis' ,
                    done: false,
                },
            ],
            newElementText : '',
        }
    },
    methods: {
        changeDone: function(index){
            this.todo[index].done = !this.todo[index].done;
        },
        addNewToDo: function(){
            if (this.newElementText == '' || this.newElementText.length <=2){
                alert('Per favore inserisci qualcosa di sensato');
            } else {
                const newAddedElement = {};
                newAddedElement.text = this.newElementText;
                newAddedElement.done = false;
                this.todo.push(newAddedElement);
                this.newElementText = '';
            }
        }
    }
}).mount('#app')