const sliderApp = new Vue({
    el: "#root",
    data: {
        inputUser: '',
        toDostuff: [],
        defaultColor: '#F5F7F7'
    },
    methods: {
        addToDo: function() {
            this.toDostuff.push({
                text: this.inputUser,
                color: this.defaultColor
            });
            console.log(this.toDostuff);
            this.inputUser = '';
        },

        removeToDo: function(delIndex) {
            this.toDostuff.splice(delIndex, 1);
        },

        changeBackgroundColor: function(delIndex) {
            console.log("entro")
            if (this.toDostuff[delIndex].color == this.defaultColor) {
                this.toDostuff[delIndex].color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            } else {
                this.toDostuff[delIndex].color = this.defaultColor;
            }
            console.log(this.toDostuff[delIndex].color);
        }

    }
})