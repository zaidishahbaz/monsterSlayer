new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gamerunning: false,
        turns: [],
    },
    methods: {
        startGame: function () {
            this.gamerunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: ' Player hits monster ' + damage,
            });
            if (this.checkWin()) {
                return;
            }


            this.monsterAttack();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: ' Player hits monster hard ' + damage,
            });
            if (this.checkWin()) {
                return;
            }

            this.monsterAttack();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.monsterAttack();
            }
            else {
                return;
            }
            this.turns.unshift({
                isPlayer: true,
                text: ' Player heals by 10 ',
            });

        },
        giveUp: function () {
            this.gamerunning = false;
        },
        calculateDamage: function (min, max) {
            return Math.max((Math.floor(Math.random() * max) + 1), min);
        },
        monsterAttack: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: ' Monster hits player ' + damage,
            });
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You won ! New Game ?')) {
                    this.startGame();
                }
                else {
                    this.gamerunning = false;
                }
                return true;
            }
            else if (this.playerHealth <= 0) {
                if (confirm('You lost ! New Game ?')) {
                    this.startGame();
                }
                else {
                    this.gamerunning = false;
                }
                return true;
            }
            return false;
        }
    },
});