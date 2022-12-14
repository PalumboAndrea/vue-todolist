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

            ]
        }
    },
    methods: {
        changeDone: function(index){
            this.todo[index].done = !this.todo[index].done;
        },
        deleteElement: function(){
            this.todo[index].done = !this.todo[index].done;
        }

    }






}).mount('#app')