var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  
//      botODB = /(.*\s+)(.*odb)(\s+.*)/i; 
      botRegexSh = /^\/shrug/i; 
      botRegexBp = /^\/bp/i;
    botRegexRules = /^\/rules/i;
  botRegexNateration = /^\/nateration/i;
  botRegexSteg = /^\/steg/i;
  botRegexbsn8 = /^\/bsn8/i;
  botRegexAbout = /^\/about/i;
  botRegexrps = /^\/rps/i;
  botRegex500 = /^\/500/i;
  var bppix = [
    'https://i.groupme.com/1280x1707.jpeg.b2b40bbcf9554aabbdf3c61c2d240e66.large',
    'https://i.imgur.com/bAmp4sk.jpg',
    'https://i.groupme.com/1125x1500.jpeg.57578df2fe3f4d4b945b3fec1dcdd7db.large',
    'https://i.groupme.com/1125x1500.jpeg.673556a419984bdeb46d5c1db5b909f6.large',
    'https://i.groupme.com/374x838.jpeg.71e5d52baa9647d2ae19b1a515273ba2.large',
    'https://i.groupme.com/864x1080.jpeg.bdd2de814d5141ce9c4640e2d435db6b.large',
    'https://i.imgur.com/rffG8qM.jpg',
    'https://i.redd.it/ouvr5augdvn01.jpg',
    'https://scontent.cdninstagram.com/vp/69a9460a1fef963b1bf5297ecb569faa/5B6FA078/t51.2885-15/s640x640/sh0.08/e35/13557016_1028316843919536_1452646181_n.jpg',
    'https://i.pinimg.com/736x/25/48/6c/25486c1bfeb1d9642ff9273c568186a8--sexy-nice.jpg',
    'https://i.groupme.com/600x1008.jpeg.4addb0f7c20e4a0b9880c9f3f0b8c14c.large',
    'https://i.groupme.com/533x967.jpeg.510303cdc5784cceb2e26885041970dc.large',
    'https://i.groupme.com/692x952.jpeg.47846583da6547efae728bfcdfdef483.large',
    'https://i.groupme.com/812x1080.jpeg.3b2fafbfbc4141c1bc10aab293793507.large',
    'https://i.groupme.com/1241x1500.jpeg.df8687a6a1b146e6ba762585ed86843b.large',
    'https://i.groupme.com/844x1500.jpeg.b8233a8e7436458fa662cf2718cdfdab.large',
    'https://i.groupme.com/475x844.jpeg.63cb1dd788d74923b25fd8bc2ba09445.large',
    'https://i.groupme.com/812x938.jpeg.62984ded18824a73b0ef000ae6d48d88.large',
    'https://i.groupme.com/1024x685.jpeg.f486a77d7bbe4867a5e4a8e790e97344.large',
    'https://i.groupme.com/750x1000.jpeg.5724a98ac9114e1fac4d1658c677edf1.large',
    'https://i.groupme.com/620x457.jpeg.ff33b8589b174f9e98a607ef58635c70.large',
    'https://i.groupme.com/810x1440.jpeg.c4ba089e26b34d98833571f30a35a3c8.large',
    'https://i.groupme.com/240x364.jpeg.181ab72da28944f3a4f242d78373a5d0.large',
    'https://i.imgur.com/ReYpvxH.jpg',
    'https://i.groupme.com/546x842.jpeg.9c7b7e7d617246b6b98bdba20b782724.large',
    'https://i.imgur.com/zkGBeyL.jpg',
    'https://i.imgur.com/8QRLFMW.jpg',
    'https://i.redd.it/h4zqoeuz95q01.jpg',
    'https://i.redd.it/bz7lc6bmf2q01.jpg',
    'https://i.imgur.com/9TdHaHN.jpg',
    'https://i.imgur.com/dqT3JBD.png',
    'https://i.imgur.com/fRD7njS.png',
    'https://i.imgur.com/uEbL51l.jpg',
    'https://i.imgur.com/ztfCfyf.jpg',
    'https://i.imgur.com/McOaeSD.jpg',
    'https://i.imgur.com/X26K30E.jpg',
    'https://i.imgur.com/Ni8HUcg.jpg',
    'https://i.imgur.com/sAfYSlf.jpg',
    'https://i.imgur.com/egjTOZi.jpg',
    'https://i.imgur.com/Xn6cUIE.jpg',
    'https://i.imgur.com/cBgAXZY.jpg',
    'https://i.imgur.com/wtHhNsT.jpg',
    'https://i.imgur.com/4moZyn1.jpg',
    'https://i.imgur.com/cSfgagi.jpg',
    'https://i.imgur.com/l3O6CL6.jpg',
    'https://i.imgur.com/NIhUJIY.jpg',
    'https://i.imgur.com/OFtBquT.jpg',
    'https://i.imgur.com/OFtBquT.jpg',
    'https://i.imgur.com/VOFmdBR.jpg',
    'https://i.imgur.com/K30Co3n.jpg',
    'https://i.imgur.com/PD7m2q1.jpg',
    'https://i.imgur.com/GsHvXcd.jpg',
    'https://i.imgur.com/hlJxaFt.jpg',
    'https://i.imgur.com/KBIcoCF.jpg',
    'https://i.imgur.com/lcUf7ga.jpg',
    'https://i.imgur.com/P79fZUS.jpg',
    'https://i.imgur.com/vnhsUXe.jpg',
    'https://i.imgur.com/kpSAYYT.png',
    'https://i.imgur.com/sHup8b4.jpg',
    'https://i.imgur.com/OIEczHn.jpg',
    'https://i.imgur.com/D93vlOa.jpg'
    ];
  var claims = [
    'I have never bought OTC medicine',
    'I eat 6000 calories daily and don\'t gain weight',
    'My AOL screenname was \"nate\"',
    'More than 50% of cars will be driverless by 2020',
    'I never use GPS at all',
    'Using GPS while driving is more dangerous than having a txt conversation',
    'I\'ve never burped',
    'I blew my load on her tits, definitely not on her ex\'s bed',
    'My parents only had sex two times',
    'The Zeotrope was beautiful',
    'I got laid in a Smith lounge',
    'My parents have the tallest pine tree east of the Mississippi in their backyard',
    'I\'ll one day go to the grave knowing I banged 2 chicks in Gecko\'s childhood bed',
    'I am busy'
    ];
  var rps = [
    'rock',
    'paper',
    'scissors'
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

else if(request.text && botRegex500.test(request.text)) {
    this.res.writeHead(200);
    var one_day=1000*60*60*24;
    e = new Date();
    d=Math.floor((1597941020000-e)/one_day);
    postMessage(""+d+" days left");
    this.res.end();
  } 
  
  else if(request.text && botRegexAbout.test(request.text)) {
    this.res.writeHead(200);
    postMessage("WDBbot v4.20.braao");
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
     item = item - 1;
  //   postMessage("" + item + "\n");
    postMessage(bppix[item]);
    this.res.end();
  } 
  
  else if(request.text && botRegexbsn8.test(request.text)) {
    this.res.writeHead(200);
    postMessage("\/!\\ THE BOT HAS DETECTED A NATERATION. YOU HAVE 5 MINUTES TO SUBSTANTIATE YOUR CLAIM \/!\\");
    this.res.end();
  } 
  
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("150 points every day. If you miss 150, you start the next day with negative the difference. Fail two days in a row and you're out.");
    postMessage("pushup (h) = 1 point\nsitup (t) = 1 point\nsquat jump (q) = 2 points\npullup (L) = 3 points");
    this.res.end();
  } 
  
  else if(request.text && botRegexNateration.test(request.text)) {
    this.res.writeHead(200);
    var item = Math.floor(Math.random() * (claims.length - 1 + 1)) + 1;
     item = item - 1;
    postMessage(claims[item]);
    this.res.end();
  } 
  
  else if(request.text && botRegexrps.test(request.text)) {
    this.res.writeHead(200);
    var item = Math.floor(Math.random() * (rps.length));
     // item = item - 1;
    postMessage(" "+ item + " " + rps[item] + " " + rps.length + " " + rps[0] + " " + rps[1] + " " + rps[2]);
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
