export default function(p) {
  p.ball = {
    x: 50,
    y: 200
  };

  const reset = () => {
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if (props.p5Props) {
        p.ButtonClicked = props.p5Props.start;
        p.ButtonClickedR = props.p5Props.reset;
        p.ball.radius = Number(props.p5Props.radius); // also input
        p.ball.xspeed = Number(props.p5Props.xspeed);
        p.ball.yspeed = -Number(props.p5Props.yspeed);
        p.Sticky = props.p5Props.Sticky;
        p.ball.x = Number(props.p5Props.xPos);
        p.ball.y = Number(props.p5Props.YPos);
      }
    };
  };
  p.preload = () => {
    reset();
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
    if (p.Sticky) p.background(0);

  };

  p.draw = () => {
    if(p.ButtonClickedR) p.background(0);
    if (!p.Sticky) p.background(0);
    display1();
    if (p.ButtonClicked) {
      condi_bounce();
      move();
    } else if (!p.ButtonClicked && p.ButtonClickedR) {
      reset();
    }
  };

  function display1() {
    p.stroke("white");
    p.strokeWeight(4);
    p.fill(p.random(255), p.random(255), p.random(255));
    p.ellipse(p.ball.x, p.ball.y, p.ball.radius * 2);
  }

  function condi_bounce() {
    if (p.ball.x < p.ball.radius || p.ball.x > p.width - p.ball.radius) {
      p.ball.xspeed *= -1;
    }
    if (p.ball.y < p.ball.radius || p.ball.y > p.height - p.ball.radius) {
      p.ball.yspeed *= -1;
    }
  }

  function move() {
    p.ball.x += p.ball.xspeed;
    p.ball.y += p.ball.yspeed;
  }
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
    p.background(0);
  };
}
