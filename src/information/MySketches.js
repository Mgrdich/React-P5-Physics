import Collison from '../Pictures/Collison.jpg';
import InclinePlane from '../Pictures/InclinePlane.jpg';
import ProjectileMotion from '../Pictures/ProjectileMotion.png'
import Vectors from '../Pictures/Bouncing.png'
import Electric from '../Pictures/ElectricFields.gif'
export default function() {
return [
    {
        title:"1D Collison",
        description:"The most simple case of a collision is a one-dimensional, or head-on collision. Because of the conservation of energy and momentum we are able to predict a great deal about these collisions, and to calculate relevant quantities after the collision occurs.",
        id:1,
        position:"Simulations/Sim1",
        Catagory:"Physcis",
        src:Collison
    },
    {
        title:"Projectile Motion",
        description:"Projectile motion is a form of motion experienced by an object or particle (a projectile) that is thrown near the Earth's surface and moves along a curved path under the action of gravity only (in particular, the effects of air resistance are assumed to be negligible). This curved path was shown by Galileo to be a parabola. The study of such motions is called ballistics, and such a trajectory is a ballistic trajectory.",
        id:2,
        position:"Simulations/Sim2",
        Catagory:"Physics",
        src:ProjectileMotion
    },
    {
        title:"Incline Plane",
        description:"An inclined plane, also known as a ramp, is a flat supporting surface tilted at an angle, with one end higher than the other, used as an aid for raising or lowering a load.The inclined plane is one of the six classical simple machines defined by Renaissance scientists. Inclined planes are widely used to move heavy loads over vertical obstacles; examples vary from a ramp used to load goods into a truck, to a person walking up a pedestrian ramp, to an automobile or railroad train climbing a grade.",
        id:3,
        position:"Simulations/Sim3",
        Catagory:"Physcis",
        src:InclinePlane
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
        src:Vectors
    },
    {
        title:"Electric Fields",
        description:"This is an introduction to electric fields which was developed by Faraday and Maxawell which it's improvements led to the developments of the industrial revolution",
        id:5,
        position:"Notyet",
        Catagory:"Physcis",
        src:Electric
    }
];
}