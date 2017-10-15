const request = require('request');
const express = require('express');

const app = express();

app.use(express.static('public'));

//RealTimeManager
// 6724 B line redmond
// 6725 B line bellevue
const getListOfLines = {"version":"1.1","method":"GetListOfLines"};
const getTravelPoints = {"version":"1.1","method":"GetTravelPoints","params":{"travelPointsReqs":[{"lineDirId":"6724","callingApp":"RMD"},{"lineDirId":"6725","callingApp":"RMD"}],"interval":1}}
const getLineTrace = {"version":"1.1","method":"GetLineTraceAndStops","params":{"LineDirId":6724}};

//InfoWeb
const getBusTimes = {"version":"1.1","method":"GetBusTimes","params":{"LinesRequest":{"FromTime":3720,"StopId":73342,"Radius":0,"NumTimesPerLine":5,"NumStopTimes":20},"Appid":"Desktop","Client":"RMD"}};

app.get('/api', (req, res) => {
  request('https://tripplanner.kingcounty.gov/RealTimeManager', { method: 'POST', json: getTravelPoints}, (err, resp, body) => {
    res.json(body);
  });
});

app.listen(7000);

/*
request('https://tripplanner.kingcounty.gov/InfoWeb', { method: 'POST', json: getBusTimes }, (err, resp, body) => {
  console.log(JSON.stringify(body));
});
*/