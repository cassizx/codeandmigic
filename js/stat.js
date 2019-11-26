'use strict';
 // лекция 2 1:42:00

let CLOUD_WIDTH = 400;
let CLOUD_HEIGHT = 200;
let CLOUD_X = 100;
let CLOUD_Y = 50;
let GAP = 10;
let FONT_GAP = 15;
let TEXT_WIDTH = 50;
let BAR_HEIGTH = 50;
let barWidth = CLOUD_HEIGHT - GAP - TEXT_WIDTH - GAP;



let renderCloud = function(ctx, x, y, color){
    
     
    ctx.fillStyle = color;

    ctx.fillRect(x , y, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.font = '16px  PT Mono '; //как в css
   //ctx.textBaseLine = 'hanging' // точка начала координат для текста
    ctx.strokeText(/*Text */ 'Ура вы победили!', CLOUD_X + GAP,CLOUD_Y + FONT_GAP /* координты */ );
    ctx.strokeText(/*Text */ 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + FONT_GAP +  FONT_GAP/* координты */ );

   // ctx.rotate(inRad(90)); не работает
    
    
}





let getMaxElement = function (arr) {
    let maxElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]; 
        }        
    }
    return maxElement;
}

window.renderStatistics = function (ctx, players, times) {
   
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X , CLOUD_Y , '#fff');
   //ctx.rotate(-0.5); // лучше тут
    /* renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff'); */
    


    ctx.fillStyle =  '#000';
    

let maxTime = getMaxElement(times);

    for (let i = 0; i < players.length; i++) {
        // MAX_BAR          BAR[i]
        //------------- = ----------  // X = (BAR_WIDTH  * BAR[i]) / MAX_BAR
        // BAR_WIDTH           X 
        if (players[i] == 'Вы') {
            ctx.fillStyle =  'rgba(255, 0, 0, 1)';
        } else {
            
            ctx.fillStyle =  `rgba(8, 0, 242, ${Math.random()})`;
        }
        

        ctx.strokeText(players[i], CLOUD_X + TEXT_WIDTH + ((GAP + BAR_HEIGTH) * i) , CLOUD_HEIGHT + CLOUD_Y - GAP );

        // выводит результат в цифрах

        ctx.strokeText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + ((GAP + BAR_HEIGTH) * i) ,  CLOUD_Y * 2);
        
        ctx.fillRect( CLOUD_X + TEXT_WIDTH + ((GAP + BAR_HEIGTH) * i)   , CLOUD_HEIGHT - CLOUD_Y  + GAP, (barWidth * times[i]) / maxTime  , BAR_HEIGTH );
       
        
        
        /* ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGTH) * i);
        ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGTH) * i, (barWidth * times[i]) / maxTime , BAR_HEIGTH);   */  
       
    }
    
}



