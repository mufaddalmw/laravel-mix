import $ from 'jquery';
// import celebrity from './celebrity.jpg';

export default function(name='john'){
  // let name = "I'm from box.js";
  console.log(`I'm ${name}`);
}
// export {box};

import {Animal, Dog} from "../classes/classes.js";
var d = new Dog('Mitzie');
d.hear(); // Mitzie barks.
