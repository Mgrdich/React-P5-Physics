import Collison from '../Pictures/Collison.png';
import InclinePlane from '../Pictures/InclinePlane.png';
import ProjectileMotion from '../Pictures/ProjectileMotion.png'
import Vectors from '../Pictures/Bouncing.png'
import Electric from '../Pictures/electricFields.png'
export default function() {
return [
    {
      title:"A Simulation",
      description:"Here will go the description of the simulation that will explain how the simulation work or how you can use it.",
      id:0,
        position:"Notyet",
        Catagory:"Scientist",
        Explanation:""
    },
    {
        title:"1D Collison",
        description:"The most simple case of a collision is a one-dimensional, or head-on collision. Because of the conservation of energy and momentum we are able to predict a great deal about these collisions, and to calculate relevant quantities after the collision occurs. Let us consider various types of two-object collisions. These collisions are the easiest to analyze, and they illustrate many of the physical principles involved in collisions. The conservation of momentum principle is very useful here, and it can be used whenever the net external force on a system is zero.\n" +
            "\n" +
            "We start with the elastic collision of two objects moving along the same line—a one-dimensional problem. An elastic collision is one that also conserves internal kinetic energy. Internal kinetic energy is the sum of the kinetic energies of the objects in the system. Figure 1 illustrates an elastic collision in which internal kinetic energy and momentum are conserved.\n" +
            "\n" +
            "Truly elastic collisions can only be achieved with subatomic particles, such as electrons striking nuclei. Macroscopic collisions can be very nearly, but not quite, elastic—some kinetic energy is always converted into other forms of energy such as heat transfer due to friction and sound. One macroscopic collision that is nearly elastic is that of two steel blocks on ice. Another nearly elastic collision is that between two carts with spring bumpers on an air track. Icy surfaces and air tracks are nearly frictionless, more readily allowing nearly elastic collisions on them. \n" +
            "Elastic Collision\n" +
            "\n" +
            "An elastic collision is one that conserves internal kinetic energy.\n Now, to solve problems involving one-dimensional elastic collisions between two objects we can use the equations for conservation of momentum and conservation of internal kinetic energy. First, the equation for conservation of momentum for two objects in a one-dimensional collision is\n" +
            "\n" +
            " p1 + p2 = p′1 + p′2 (Fnet = 0)\n" +
            "\n" ,
        id:1,
        position:"Simulations/Sim1",
        Catagory:"Physcis",
        src:Collison,
        Explanation:"This small program will give you access to modify your two bodies height width their masses and velocities just by putting the numbers then the code will execute and will give you the result of the collision you can also choose whether the collision is elastic or Inelastic. ",
        Wiki:"https://en.wikipedia.org/wiki/Elastic_collision"
    },
    {
        title:"Projectile Motion",
        description:"Projectile motion is a form of motion experienced by an object or particle (a projectile) that is thrown near the Earth's surface and moves along a curved path under the action of gravity only (in particular, the effects of air resistance are assumed to be negligible). This curved path was shown by Galileo to be a parabola. The study of such motions is called ballistics, and such a trajectory is a ballistic trajectory.",
        id:2,
        position:"Simulations/Sim2",
        Catagory:"Physics",
        src:ProjectileMotion,
        Explanation:"This small program will give you access to modify your body which in this case  is a ball where you can choose the size of the ball the Gravitational constant the velocity vector magnitude and also the degree of the throw  and it will calculate the range in other words the distance traveled in the X axis direction .",
        Wiki:"https://en.wikipedia.org/wiki/Projectile_motion"
    },
    {
        title:"Incline Plane",
        description:"An inclined plane, also known as a ramp, is a flat supporting surface tilted at an angle, with one end higher than the other, used as an aid for raising or lowering a load.The inclined plane is one of the six classical simple machines defined by Renaissance scientists. Inclined planes are widely used to move heavy loads over vertical obstacles; examples vary from a ramp used to load goods into a truck, to a person walking up a pedestrian ramp, to an automobile or railroad train climbing a grade.",
        id:3,
        position:"Simulations/Sim3",
        Catagory:"Physcis",
        src:InclinePlane,
        Explanation:"This small program will give you access to grasp the idea of the forces acting of the body which i situated on the incline Plane you can decide the radius of the ball the gravitational attraction also incline plane degree and it will calculate the Result for you",
        Wiki:"https://en.wikipedia.org/wiki/Inclined_plane"
    },
    {
        title:"Bouncing Ball",
        description:" Velocity is a vector which shows the direction and rate of motion. The standard units of velocity are meters per second.\n" +
            "Speed and velocity are not the same thing: speed is a scalar, whereas velocity is a vector. One must use different rules when combining speeds and combining velocities.\n" +
            "The average velocity of an object is the total displacement during some extended period of time, divided by that period of time.\n" +
            "Instantaneous velocity, on the other hand, describes the motion of a body at one particular moment in time.\n" +
            "Acceleration is a vector which shows the direction and magnitude of changes in velocity. Its standard units are meters per second per second, or meters per second squared.\n" +
            "Average acceleration is the total change in velocity (magnitude and direction) over some extended period of time, divided by the duration of that period.\n" +
            "Instantaneous acceleration is the rate and direction at which the velocity of an object is changing at one particular moment.\n" +
            "In everyday English, we use the term decelerate to describe the slowing of a body, but physicists use the word accelerate to denote both positive and negative changes in speed. ",
        id:4,
        position:"Simulations/Sim4",
        Catagory:"Physcis",
        src:Vectors,
        Explanation:"This small program will give you access to explore the idea of bouncing ball in some space here there is no friction it also lets you explore the idea of chaos theory and complex dynamical system where a small change can have very big difference on the output you can put the ball radius position and its velocity and set it free you can also put sticky where you can track your object traveled path .",
        Wiki:"https://en.wikipedia.org/wiki/Bouncing_ball"
    },
    {
        title:"Electric Fields",
        description:"This is an introduction to electric fields which was developed by Faraday and Maxawell which it's improvements led to the developments of the industrial revolution",
        id:5,
        position:"Notyet",
        Catagory:"Physcis",
        src:Electric,
        Wiki:"https://en.wikipedia.org/wiki/Electric_field"
    }
];
}
