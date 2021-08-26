function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(24, 163, 214);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(227, 81, 36);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    fill(24, 163, 214);
    stroke(255, 0, 0);
    circle(588, 50, 80);

    fill(227, 81, 36);
    stroke(0, 128, 0);
    rect (40, 90, 20, 320);

    fill(24, 163, 214);
    stroke(255, 0, 0);
    circle(50, 430, 80);

    fill(227, 81, 36);
    stroke(0, 128, 0);
    rect(88, 425, 462, 20);

    fill(24, 163, 214);
    stroke(255, 0, 0);
    circle(588, 430, 80);

    fill(227, 81, 36);
    stroke(0, 128, 0);
    rect (579, 90, 20, 302);
}
function take_snapshot(){
    save('student_name.png')
}