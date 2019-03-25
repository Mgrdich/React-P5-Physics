export default function(p) {
  // p.Range = (p.TotalVelocity * p.TotalVelocity * Math.sin(2 * p.theta)) / p.g;
  const reset = () => {
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if (props.p5Props) {
        p.ButtonClicked = props.p5Props.start;
        p.ButtonClickedR = props.p5Props.reset;
        p.radius = Number(props.p5Props.radius); // also input
        p.degree = Number(props.p5Props.degree);
        p.theta = (p.degree * Math.PI) / 180;
        p.x1 = p.radius;
        p.y1 = p.windowHeight / 1.5 - p.radius;
        p.TotalVelocity = Number(props.p5Props.velocity); //this is tha canvas limit
        p.Vx = p.TotalVelocity * Math.cos(p.theta);
        p.Vy = p.TotalVelocity * Math.sin(p.theta);
        p.g = Number(props.p5Props.Gravitational); // we will let put the variable g as stronger gravity planets
        //input
        //console.log(props.p5Props);
      }
    };
  };

  p.preload = () => {
    reset();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };

  p.draw = () => {
    p.background(0);
    p.noStroke();
    p.ellipseMode(p.CENTER);
    p.ellipse(p.x1, p.y1, p.radius * 2, p.radius * 2);

    if (p.ButtonClicked) {
      ProjectileVector();
    } else if (!p.ButtonClicked && p.ButtonClickedR) {
      reset();
    }
  };

  const ProjectileVector = () => {
    if (p.x1 > p.width - p.radius || p.y1 > p.height - p.radius) {
      p.background("blue");
      p.Vy = 0;
      p.Vx = 0;
    } else {
      p.x1 += p.Vx;
      p.Vy = p.Vy - p.g / 60;
      p.y1 -= p.Vy;
    } //beacuse our coordinates works in opposite direction

    //console.log(p.x1,p.y1);
  };
}
