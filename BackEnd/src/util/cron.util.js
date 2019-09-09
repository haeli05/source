const CronJob = require('cron').CronJob;

import Repo from '../models/repo';
const Ideas =require('../models/ideas.js').Ideas;
import User from '../models/user';

const job = new CronJob('*/10 * * * *', function() {
  const names = ['Projects', 'Ideas', 'Issues', 'Users']
  let promise;
  let c = Math.floor(Math.random() * (3));
  switch(c) {
    case 0:
      promise = Repo.aggregateTrending();
    case 1:
      promise = Ideas.aggregateTrending();
    case 2:
      promise = User.aggregateTrending();
  }

  promise
  .then(agg => {
    console.log(`Updated ${names[c]} stats`);
  })
  .catch(err => {
    console.log('Cron failed to update stats', err)
  });

});
export default job;
