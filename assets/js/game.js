var total_point = 500;
var pool_size = 1000;
var point_can_take = 1000;
var point_per_tap = 5;
var fill_per_second = 5;
var user_level = 1;



document.getElementById('point_per_tap').innerText = point_per_tap;
var fill_pool = setInterval(function () {
    if(point_can_take < pool_size){
        point_can_take += fill_per_second;
        display_points(total_point,pool_size,point_can_take);
    }
},1000);

document.getElementById('click_to_coin').addEventListener('mousedown', function () {
    total_point += point_per_tap;
    point_can_take -= point_per_tap;
    display_points(total_point,pool_size,point_can_take);
    this.classList.add('shake');
    setTimeout(() => this.classList.remove('shake'), 200);

})

function display_points(total_point,pool_size,point_can_take) {
    document.getElementById('point').innerText = total_point;
    document.getElementById('pool_size').innerText = pool_size;
    document.getElementById('point_can_take').innerText = point_can_take;
    set_size_of_bar(pool_size, point_can_take);
}

function set_size_of_bar(pool_size, point_can_take) {

    var percent_of_bar = (point_can_take/pool_size)*100;

    console.log(pool_size)
    document.getElementsByClassName('progress-bar')[1].style.width = percent_of_bar+'%';
}

display_points(total_point,pool_size,point_can_take);
