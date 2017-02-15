var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-One' :{
      title: 'Article-One: Suresh Seetharaman',
      heading: 'Article-One',
      date: 'Feb 10, 2017',
      content:`
          <p> 
                  Conversely, people who know what they want in life see the world differently.
                  Conversely, people who know what they want in life see the world differently.
                  Conversely, people who know what they want in life see the world differently.
          </p>
          <p> 
                  Conversely, people who know what they want in life see the world differently.
                  Conversely, people who know what they want in life see the world differently.
                  Conversely, people who know what they want in life see the world differently.
          </p>`          
      },  
    'article- Two' :{
      title: 'Article-Two: Suresh Seetharaman',
      heading: 'Article-Two',
      date: 'Feb 13, 2017',
      content:`
          <p> 
                  This is content for my second article
          </p>`
        
    },
    'article-Three' :{
      title: 'Article-Three: Suresh Seetharaman',
      heading: 'Article-Three',
      date: 'Feb 15, 2017',
      content:`
          <p> 
                  This is content for my third article
          </p>
    }
};

function createTemplate(data){
    var title = data.title;
    var heading = dataq.heading;
    var date = data.date;
    var content = data.content;
    
    
    var htmlTemplate =
    <html> 
        <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
         </head>
            <body>
              <div class="container">
                  <div>
                    <a href="/">Home</a>
                   </div>
                  <h3> 
                    ${heading}
                    </h3>
                  <hr/>
                  <div>
                    ${date}
                  </div>
                  <div>
                    ${content}  
                  </div>
              </div>
            </body>
      
    </html>
    
    return htmlTemplate;
};


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res){
 
      var articleName = req.params.articleName;
      res.send(createTemplate(articles[articleName));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
