const moment = require('moment');
const date1 = moment().startOf('hour').fromNow();
const date2 = moment().startOf('minute').fromNow();
const date3 = moment().startOf('hour').fromNow();

const messages = [
    {
      text: "Data structures and algos grind",
      user: "Josie",
      description: "I'm having a hard time with algorithms :( Leetcode's got me stumped",
      added: date2
    },
    {
      text: "I hate frontend stuff", 
      user: "Adam",
      description: "I frickin hate CSS",
      added: date1
    },
    {
      text: "I love doing frontend stuff!", 
      user: "Charles",
      description: "I started learning HTML, CSS, and JS a couple months ago and it's been fun! Just picked up React two weeks ago and that's been great! I love seeing the work I do get rendered on the page; it's super rewarding.",
      added: date3
    }
  ];

  module.exports = messages;