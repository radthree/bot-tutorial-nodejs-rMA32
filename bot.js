var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  
//      botODB = /(.*\s+)(.*odb)(\s+.*)/i; 
      botRegexSh = /^\/shrug/; 
      botRegexBp = /^\/bp/;
    botRegexRules = /^\/rules/i;
  botRegexNateration = /^\/nateration/i;
  botRegexSteg = /^\/steg/i;
  botRegexbsn8 = /^\/bsn8/i;
  var bppix = [
    "https://i.groupme.com/1280x1707.jpeg.b2b40bbcf9554aabbdf3c61c2d240e66.large";
    "https://i.imgur.com/bAmp4sk.jpg";
    ];
    
 /*     botRegexSiege = /^\/siege/; 
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; 
     siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
                */
  
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }


  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  
  else if(request.text && botRegexSteg.test(request.text)) {
    this.res.writeHead(200);
    postMessage(".............\/\\\n...........\/\\..\/\\\n.......\/\\\/\\......\/\\\n.|||..^............^^o\n------__\\.\/---\\.\/--~\n.........|.|....||\n.........--*....-*");
    this.res.end();
  } 
  
   else if(request.text && botRegexBp.test(request.text)) {
    this.res.writeHead(200);
    var item = Math.floor(Math.random() * (bppix.length - 1 + 1)) + 1;
    postMessage("r/bustypetite = " + item);
    this.res.end();
  } 
  
  else if(request.text && botRegexbsn8.test(request.text)) {
    this.res.writeHead(200);
    postMessage("\/!\\ THE BOT HAS DETECTED A NATERATION. YOU HAVE 5 MINUTES TO SUBSTANTIATE YOUR CLAIM \/!\\");
    this.res.end();
  } 
  
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("150 reps every day. If you miss 150, you start the next day with negative the difference. Fail two days in a row and you're out.");
    postMessage("pushup (h) = 1 point\nsitup (t) = 1 point\nsquat jump (q) = 2 points\npullup (L) = 3 points");
    this.res.end();
  } 
  
  else if(request.text && botRegexNateration.test(request.text)) {
    var math = 100 * Math.random();
    this.res.writeHead(200);
    if(math >= 90)
      postMessage("I have never bought OTC medicine");
    else if(math >=80)
      postMessage("I eat 6000 calories daily and don't gain weight")
    else if(math >=70)
      postMessage("My AOL screenname was \"nate\"")
    else if(math >=60)
      postMessage("More than 50% of cars will be driverless by 2020")
    else if(math >=50)
      postMessage("I never use GPS at all")
    else if(math >=40)
      postMessage("I\'ve never burped")
    else if(math >=30)
      postMessage("I blew my load on her tits, definitely not on her ex's bed")
    else if(math >=20)
      postMessage("My parents only had sex two times")
    else if(math >=10)
      postMessage("The Zeotrope was beautiful")
    else
      postMessage("I got laid in a Smith lounge");
    this.res.end();
  } 
  
  /*else if(request.text && botRegexNateration.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("I never bought OTC medicine");
    else if(Math.random() >0.6)
      postMessage("I eat 6000 calories and don't gain weight")
    else
      postMessage("I got laid in a Smith lounge");
    this.res.end();
  } */
  
 /* else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  } */
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
