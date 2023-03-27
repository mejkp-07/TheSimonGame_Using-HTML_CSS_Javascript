var startFlag = 1;
$(document).keydown(function(event){
    if(event.key === "a"){
        function pressAnimation(color){
            $("."+color).addClass("pressed");
            setTimeout(function(){
                $("."+color).removeClass("pressed");
            }, 25)
            return(color);
        }
        function start(level, learningArray){
            $("#level-title").text("Level "+level);
            var randomNumber = Math.floor(Math.random()*4+1);
            switch(randomNumber){
                case 1:
                    var green = new Audio("sounds/green.mp3");
                    green.play();
                    $(".green").animate({opacity:0.1});
                    setTimeout(function(){
                        $(".green").animate({opacity:1});
                    }, 25);
                    break;
                case 2:
                    var red = new Audio("sounds/red.mp3");
                    red.play();
                    $(".red").animate({opacity:0.1});
                    setTimeout(function(){
                        $(".red").animate({opacity:1});
                    }, 25);
                    break;
                case 3:
                    var yellow = new Audio("sounds/yellow.mp3");
                    yellow.play();
                    $(".yellow").animate({opacity:0.1});
                    setTimeout(function(){
                        $(".yellow").animate({opacity:1});
                    }, 25);
                    break;
                case 4:
                    var blue = new Audio("sounds/blue.mp3");
                    blue.play();
                    $(".blue").animate({opacity:0.1});
                    setTimeout(function(){
                        $(".blue").animate({opacity:1});
                    }, 25);
                    break;
                default:
                    console.log(randomNumber);
            }
            
            learningArray.push(randomNumber);
            return learningArray;
        }

        var level = 1;
        var learningArray = [];

        if(startFlag===1){
            learningArray = start(level, learningArray);
        }
        startFlag=0;
        var i = 0;
        var clickedColor = null;
        $(".green").click(function(){
            var green = new Audio("sounds/green.mp3");
            green.play();
            clickedColor = pressAnimation("green");
            var clickedColorNumber = 1;
            if(clickedColorNumber === learningArray[i]){
                if(i === learningArray.length - 1){
                    i = 0;
                    level++;
                    learningArray = start(level, learningArray);
                }
                else{
                    i++;
                }    
            }
            else{
                var wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over")
                setTimeout(function(){
                    $("body").removeClass("game-over")
                },25)
                $("#level-title").text("Game Over, Press Any Key to Restart");
                i = 0;
                level = 1;
                learningArray = [];
                startFlag = 1;
                $(document).keydown(function(){
                    if(startFlag === 1){
                        learningArray =  start(level, learningArray)
                    }
                    startFlag = 0;
                })
            }
        })
        $(".red").click(function(){
            var red = new Audio("sounds/red.mp3");
            red.play();
            clickedColor = pressAnimation("red");
            var clickedColorNumber = 2;
            if(clickedColorNumber === learningArray[i]){
                if(i === learningArray.length - 1){
                    i = 0;
                    level++;
                    learningArray = start(level, learningArray);
                }
                else{
                    i++;
                } 
            }
            else{
                var wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over")
                setTimeout(function(){
                    $("body").removeClass("game-over")
                },25)
                $("#level-title").text("Game Over, Press Any Key to Restart");
                i = 0;
                level = 1;
                learningArray = [];
                startFlag = 1;
                $(document).keydown(function(){
                    if(startFlag === 1){
                        learningArray = start(level, learningArray)
                    }
                    startFlag = 0;
                })
            }
        })
        $(".yellow").click(function(){
            var yellow = new Audio("sounds/yellow.mp3");
            yellow.play();
            clickedColor = pressAnimation("yellow");
            var clickedColorNumber = 3;
            if(clickedColorNumber === learningArray[i]){
                if(i === learningArray.length - 1){
                    i = 0;
                    level++;
                    learningArray = start(level, learningArray);
                }
                else{
                    i++;
                } 
            }
            else{
                var wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over")
                setTimeout(function(){
                    $("body").removeClass("game-over")
                },25)
                $("#level-title").text("Game Over, Press Any Key to Restart");
                i = 0;
                level = 1;
                learningArray = [];
                startFlag = 1;
                $(document).keydown(function(){
                    if(startFlag === 1){
                        learningArray = start(level, learningArray)
                    }
                    startFlag = 0;
                })
            }
        })

        $(".blue").click(function(){
            var blue = new Audio("sounds/blue.mp3");
            blue.play();
            clickedColor = pressAnimation("blue");
            var clickedColorNumber = 4;
            if(clickedColorNumber === learningArray[i]){
                if(i === learningArray.length - 1){
                    i = 0;
                    level++;
                    learningArray = start(level, learningArray);
                }
                else{
                    i++;
                } 
            }
            else{
                var wrong = new Audio("sounds/wrong.mp3");
                wrong.play();
                $("body").addClass("game-over")
                setTimeout(function(){
                    $("body").removeClass("game-over")
                },25)
                $("#level-title").text("Game Over, Press Any Key to Restart");
                i = 0;
                level = 1;
                learningArray = [];
                startFlag = 1;
                $(document).keydown(function(){
                    if(startFlag === 1){
                        learningArray = start(level, learningArray)
                    }
                    startFlag = 0;
                })
            }
        })        
    }  
})