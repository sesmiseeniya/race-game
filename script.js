$(function () {
    var anim_id;

    var container = $('#container');
    var car_1 = $('#car_1');
    var car_2 = $('#car_2');
    var car_3 = $('#car_3');

    var line_1 = $('#line_1');
    var line_2 = $('#line_2');
    var line_3 = $('#line_3');

    var restart_div = $('#restart_div');
    var restart_btn = $('#restart');
    var score = $('#score');

    var container_left = parseInt(container.css('left'));
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var car_width = parseInt(car.width());
    var car_height = parseInt(car.height());

    var game_over = false;

    var score_counter = 1;

    var speed = 2;
    var line_speed = 5;

    var move_right = false;
    var move_left = false;
    var move_up = false;
    var move_down = false;

    $(document).on('keydown',function (e) {
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37 && move_left === false){
                move_left = requestAnimationFrame(left);
            }else if (key === 39 && move_right === false) {
                move_right = requestAnimationFrame(right);
            }else if (key === 38 && move_up ===false){
                move_up = requestAnimationFrame(up);
            }else if (key === 40 && move_down ===false){
                move_down = requestAnimationFrame(down);
            }

        }

    });

    $(document).on('keyup', function (e) {
        if(game_over === false){
            var key = e.keyCode;
            if(key === 37){
                cancelAnimationFrame(move_left);
                move_left = false;
            }else if(key === 39){
                cancelAnimationFrame(move_right);
                move_right = false;
            }else if(key === 38){
                cancelAnimationFrame(move_up);
                move_up = false;
            }else if(key === 40){
                cancelAnimationFrame(move_down);
                move_down = false;
            }

        }

    });

    function left() {
        if (game_over === false && parseInt(car.css('left'))>0){
            car.css('left',parseInt(car.css('left')) -5);
            move_left = requestAnimationFrame(left);
        }
    }

    function right() {
        if (game_over === false && parseInt(car.css('left'))< container_width - car_width){
            car.css('left',parseInt(car.css('left')) +5);
            move_right = requestAnimationFrame(right);
        } 
    }
    
    function up() {
        if (game_over === false && parseInt(car.css('top')) > 0){
            car.css('top',parseInt(car.css('top')) -3);
            move_up = requestAnimationFrame(up);
        }
    }
    
    function down() {
        if(game_over){

        }
        
    }























}