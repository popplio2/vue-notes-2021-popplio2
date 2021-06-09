new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        ended: false,
    },
    methods: {
        fight: function () {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
                alert("Pikachu fainted!");
            }
            console.log(this.health);
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
            console.log(this.health);
        },
    },
    computed: {
       
    },
});  

