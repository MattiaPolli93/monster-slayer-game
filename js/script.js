"use strict";

// Vue.js
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0
        }
    },
    computed: {
        // Colored bars
        monsterBar() {
            return {width: this.monsterHealth + '%'}
        },
        playerBar() {
            return {width: this.playerHealth + '%'}
        },
        // Special attack
        specialAttackEnabled() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        // Attack
        attackMonster() {
            // Incrementing round number
            this.currentRound++;

            const attackValue = randomValue(5, 12);
            this.monsterHealth -= attackValue;
            // Accessing following Method
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randomValue(8, 15);
            this.playerHealth -= attackValue;
        },
        // Special attack
        specialAttackMonster() {
            // Incrementing round number
            this.currentRound++;

            const attackValue = randomValue(10, 25);
            this.monsterHealth -= attackValue;
            
            this.attackPlayer();
        }
    }
});

app.mount("#game");