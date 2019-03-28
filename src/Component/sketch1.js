export default function(p) {
  p.height1 = 100;
  p.height2 = 100;
  p.width1 = 150;
  p.width2 = 100;
  p.x1 = p.width1 / 2;
  p.x2 = p.windowWidth / 1.5 - p.width2 / 2;
  p.DetectCollison = false;
  const reset1 = () => {
    p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
      if (props.p5Props) {
        //  console.log(props.p5Props);

        p.velocity1Intial = Number(props.p5Props.velocity1);
        p.velocity2Intial = -Number(props.p5Props.velocity2);
        p.mass1 = Number(props.p5Props.mass1);
        p.mass2 = Number(props.p5Props.mass2);
        p.TMass = p.mass1 + p.mass2;
        p.height1 = Number(props.p5Props.height1);
        p.height2 = Number(props.p5Props.height2);
        p.width1 = Number(props.p5Props.width1);
        p.width2 = Number(props.p5Props.width2);
        p.ButtonClicked = props.p5Props.start;
        p.ButtonClickedR = props.p5Props.reset;
        p.Inelastic = props.p5Props.Inelastic;
        p.x1 = p.width1 / 2;
        p.remainder =
          (p.windowWidth / 1.5 - p.width2 / 2 - p.width1 / 2) %
          (p.velocity1Intial + -p.velocity2Intial);
        p.x2 = p.windowWidth / 1.5 - p.width2 / 2;
        //  console.log(p.x1, p.x2);
      }
    };
  };
  p.preload = () => {
    reset1();
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };

  p.draw = () => {
    p.background(0);
    p.rectMode(p.CENTER);
    p.fill("green");
    p.rect(p.x1, p.height / 2, p.width1, p.height1, 20);
    p.fill(255, 204, 0);
    p.rect(p.x2, p.height / 2, p.width2, p.height2, 20);

    if (p.ButtonClicked) {
      if (!p.Inelastic) CollisionDetectElastic();
      else {
        CollisonInelastic();
      }
    } else if (!p.ButtonClicked && p.ButtonClickedR) {
      reset1();
      p.DetectCollison = false;
    }
  };

  const CollisionDetectElastic = () => {
    let velocity2Final =
      (2 * p.mass1 * p.velocity1Intial +
        p.velocity2Intial * (p.mass2 - p.mass1)) /
      p.TMass;
    let velocity1Final =
      (2 * p.mass2 * p.velocity2Intial +
        p.velocity1Intial * (p.mass1 - p.mass2)) /
      p.TMass;

    /*   console.log("Vf2=", velocity2Final);
          console.log("V1f=", velocity1Final);*/

    let distance = p.dist(p.x1, 200, p.x2, 200);

    // console.log(distance);

    if (
      distance - (p.width1 + p.width2) / 2 < Number.EPSILON ||
      p.DetectCollison
    ) {
      p.DetectCollison = true;
      p.x1 += velocity1Final;
      p.x2 += velocity2Final;
    } else if (!p.DetectCollison) {
      p.x1 += p.velocity1Intial;
      p.x2 += p.velocity2Intial;
    }
  };

  const CollisonInelastic = () => {
    let TVelocity =
      (p.mass1 * p.velocity1Intial + p.mass2 * p.velocity2Intial) / p.TMass;
    let distance = p.dist(p.x1, 200, p.x2, 200);
    if (
      distance - (p.width1 + p.width2) / 2 < Number.EPSILON ||
      p.DetectCollison
    ) {
      p.DetectCollison = true;
      p.x1 += TVelocity;
      p.x2 += TVelocity;
    }
    if (!p.DetectCollison) {
      p.x1 += p.velocity1Intial;
      p.x2 += p.velocity2Intial;
    }
  };
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth / 1.5, p.windowHeight / 1.5);
  };
}
