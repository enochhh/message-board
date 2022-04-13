const moment = require('moment');
const date1 = moment().startOf('hour').fromNow();
const date2 = moment().startOf('minute').fromNow();

const messages = [
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
      added: date2
    }
  ];

  module.exports = messages;