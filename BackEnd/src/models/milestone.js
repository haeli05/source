const mongoose = require('mongoose');

/**
Milestones:
 -Description of milestone
 -Due-date
 -completion %
 -# of open, closed & pull requests
 -open, closed & pull requests

*milestones:{
 description: [text blob],
 completion %: [Number %],
 total_issues: [Number],
 list of issues: [Number],
 project:{
   Name: [string],
   id:[string]
 },
 Title: [name],
 Created: [time]
 }
**/
