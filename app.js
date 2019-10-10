new Vue({
    el: '#app',
    data: {
        playerHealth: 10,
        monsterHealth: 10,
        gamerunning: false
    },
    methods: {
        startGame: function () {
            this.gamerunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {

        },
        specialAttack: function () {

        },
        heal: function () {

        },
        giveUp: function () {

        }
    },
});