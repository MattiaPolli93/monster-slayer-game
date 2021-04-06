"use strict";

// Vue.js
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null
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
        },
        healPlayer() {
            this.currentRound++;

            const healValue = randomValue(8, 20);
            // Checking that player's health doesn't exceed 100
            if (this.playerHealth + healValue > 100) {
                this. playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            // New attack by monster
            this.attackPlayer;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // Draw
                this.winner = "draw";
            } else if (value <= 0) {
                // Monster wins
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // Draw
                this.winner = "draw";
            } else if (value <= 0) {
                // Player wins
                this.winner = "player";
            }
        }
    }
});

app.mount("#game");