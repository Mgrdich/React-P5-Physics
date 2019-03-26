export default function(p) {
  const reset1 = () => {
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if (props.p5Props) {
        p.ButtonClicked = props.p5Props.start;
        p.ButtonClickedR = props.p5Props.reset;
        p.degree = props.p5Props.degree; //this should be entered by the user check
        p.theta = (p.degree * Math.PI) / 180;
        p.xPosition = 500 / Math.tan(p.theta);
        p.radius = props.p5Props.radius; //input
        p.ellipseX = Math.sin(p.theta) * p.radius;
        p.ellipseY = 100 - Math.cos(p.theta) * p.radius;
        p.njteh = 100 - p.radius / Math.cos(p.theta);
        p.slope = Math.tan(p.theta);
        p.g = props.p5Props.Gravitational; //input
        p.Myu = props.p5Props.coefficient; //input
        p.v = 5;
        p.acc = p.g * Math.cos(p.theta) - p.Myu * Math.sin(p.theta); //formula with njteh
        p.vx = 0;
      }
    };
  };
  p.preload = () => {
   reset1();
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };

  p.draw = function() {
    p.background(200, 250, 100);

    p.fill("blue");
    p.triangle(0, 100, 0, 600, p.xPosition, 600); //for the most part
    p.fill("red");
    p.ellipse(p.ellipseX, p.ellipseY, p.radius * 2);
    if (p.ButtonClicked) {
    p.Calculate();}else if(!p.ButtonClicked && p.ButtonClickedR ){
      reset1();
    }
  };

  p.Calculate = () => {
    p.vx = p.vx + p.acc * Math.cos(p.theta) ;
    p.vy= p.acc * Math.sin(p.theta);
    p.ellipseX += p.vx / 60 ;                        //the physics is incorrect here the y direction acceleretion is not added
    p.ellipseY = p.slope * p.ellipseX  + p.njteh;

  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };
}
