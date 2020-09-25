<template>
    <div>
        <app-header
         :isRunning="gameIsRunning"
         :player1H="p1H"
         :player2H="p2H"
         :player1Name="pOneName"
         :player2Name="pTwoName"

        ></app-header>

        <section class="controls-section ">
            <div class="row" v-if="!gameIsRunning">
                 <div class="small-4 columns text-center">
                     <input type="text" v-model="p1Name" placeholder="Enter 1th player name:">
                </div>
                 <div class="small-4 columns text-center">
                       <button class="btn-name" @click="assignName">Assign Name</button>
                </div>
                 <div class="small-4 columns text-center">
                      <input type="text" v-model="p2Name" placeholder="Enter 2th player name:">
                </div>
            </div>
            <div class="row">
                <div class="small-12 columns controls">
                    <div v-if="!gameIsRunning">
                    <button id="start-game" @click="startGame">Start Game</button>
                    </div>
                   <div class="btn-section" v-else>
                       <button class="btn" id="attack" @click="attack">Attack</button>
                       <button class="btn" id="special-attack" @click="specialAttack">Special Attack</button>
                       <button class="btn" id="heal" @click="heal">Heal</button>
                       <button class="btn" id="give-up" @click="restart">Restart</button>
                   </div>
                </div>
            </div>
        </section>

        <app-logs 
        :turns="logMessage"
        
        ></app-logs>

    </div>
</template>

<script>
import Header from './Header'
import Logs from './Logs'

export default {
    components: {
        'app-header': Header,
        'app-logs': Logs
    },
    data: () => {
        return {
           gameIsRunning: false,
           p1H: 0,
           p2H: 0,
           logMessage: [],
           p1Name: '',
           p2Name: '',
           pOneName: 'Enter your name:',
           pTwoName: 'Enter your name:',
        }
    },

    methods: {
        assignName () {

            if (this.p1Name.trim().length <= 0  ) {
                this.pOneName = 'Player 1';
            } else {
                 this.pOneName = this.p1Name;
            }
            
            if (this.p2Name.trim().length <= 0) {
                this.pTwoName = 'Player 2';
            }
            else {
             
             this.pTwoName = this.p2Name;
            }
         
           
        },

        startGame () {
            this.gameIsRunning = true;
            this.p1H = 100;
            this.p2H = 100;
            this.assignName();
        },

        calculateAttack (min, max) {
        return Math.max( Math.floor(Math.random() * max), min);   
        },

        attack () {
            this.playerOneAttack();

            this.playerTwoAttack();   
        },

        playerOneAttack () {
             var damageP2 = this.calculateAttack(3, 10);
            
            this.p1H -= damageP2;

            this.logMessage.unshift(  {
                text: this.pTwoName +  ' damaged ' + this.pOneName +' with ' + damageP2,
                isStyle: false
            } );
        },

        playerTwoAttack () {
          
             var damageP1 = this.calculateAttack(3, 10);
            this.p2H -= damageP1;

            this.logMessage.unshift(  {
                text: this.pOneName + ' damaged ' + this.pTwoName + ' with ' + damageP1,
                isStyle: true
            } );

            this.checkWin();
        },

        checkWin () {
            if (this.p1H <= 0 || this.p2H <= 0 ) {
                alert('Game Over');
                this.gameIsRunning = false;
                this.p1H = 0;
                this.p2H = 0;
                this.logMessage = []
                return true;
            } else {
               return false;
            }
        },

        specialAttack() {
             this.playerOneAttack();

             var damageP1 = this.calculateAttack(6, 17);
             this.p2H -= damageP1;

             this.logMessage.unshift(  {
                text: this.pOneName + '  damaged '  + this.pTwoName + ' with ' + damageP1,
                isStyle: true
            } );

            this.checkWin();
        },

        heal() {
             this.playerOneAttack();

             if (this.p1H >= 90){
                 this.p1h = 100;
             } 
             else {
                  this.p1H += 10;
             }
            
             this.logMessage.unshift(  {
                text: this.pOneName + ' heal himself with ' + 10,
                isStyle: true
                });

            this.checkWin();
        },

        restart () {
            this.gameIsRunning = false;
            this.logMessage = [];
        }
    }
}
</script>

<style scoped>
.controls-section{
    margin-top: 30px;
}
.btn-start {
    margin: auto;
}
.btn {
    margin-right: 5px;
}
.btn-name {
    background-color: aquamarine;
    padding: 10px;
    margin-bottom: 30px;
}
</style>