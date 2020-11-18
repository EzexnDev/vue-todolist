const sliderApp = new Vue({
    el: "#root",
    data: {
        inputUser: '',
        toDostuff: [],
    },
    methods: {
        addToDo: function() {
            this.toDostuff.push(this.inputUser);
            console.log(this.toDostuff);
            this.inputUser = '';
        },

        removeToDo: function(delIndex) {
            this.toDostuff.splice(delIndex, 1);
        }
    }
})