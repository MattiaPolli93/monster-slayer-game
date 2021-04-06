"use strict";

// Vue.js
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        }
    },
    computed: {
        // Colored bars
        monsterBar() {
            return {width: this.monsterHealth + '%'}
        },
        playerBar() {
            return {width: this.playerHealth + '%'}
        }
    },
    methods: {
        // Attack
        attackMonster() {
            const attackValue = randomValue(5, 12);
            this.monsterHealth -= attackValue;
            // Accessing following Method
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = randomValue(8, 15);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount("#game");