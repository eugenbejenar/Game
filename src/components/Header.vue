
<template>
    <div>
        <section class="row">
            <div class="small-5 columns">
                <div class="text-center">
                    <h1>{{player1Name}} </h1>
                </div>
                 <div class="healthbar">
                     <div class="healthbar coverHealthBar text-center" 
                     :style="{width: player1H + '%'}"
                     >
                         {{player1H}}
                     </div>   
                 </div>
            </div>

            <div class="small-5 columns">
                <div class="text-center">
                    <h1>{{player2Name}}</h1>
                </div>
                 <div class="healthbar">
                     <div class="healthbar coverHealthBar text-center"
                     :style="{width: player2H + '%'}" >
                         {{player2H}}
                     </div>  
                 </div>
            </div>
         
        </section>
    </div>
</template>
<script>

export default {

    props: 
        [
            'isRunning',
            'player1H',
            'player2H',
            'player1Name',
            'player2Name'
        ],
    
    data: () => {
        return {
            p1: '',
            p2: '',
            playerOne: 'Player 1',
            playerTwo: 'Player 2',
        }
    },
  
    methods: {
        assignName () {
            if(this.p1.trim().length <= 0 ) {
                this.player1Name = "Player 1";
            }
            else {
            this.playerOne = this.p1;
            }

             if(this.p2.trim().length <= 0 ) {
                this.player2Name = "Player 2";
            }
            else {
            this.playerTwo = this.p2;
            }
        }    
    }
}
</script>
