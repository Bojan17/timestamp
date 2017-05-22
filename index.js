var express=require('express');
var parser=require('body-parser');
var cors=require('cors');

var app=module.exports=express();
app.use(parser.json());
app.use(cors());

app.get('/date/:dateValue',function(req,res,next){
var dateValue=req.params.dateValue;
var dateFormat={
  year:'',
  month:'',
  day:'',
};
if(isNaN(dateValue)){
  var naturalDate= new Date(dateValue);
  naturalDate=naturalDate.toLocalDateString('en-us',dateFormat);
  var unixDate = new Date(dateValue).getTime()/1000;
}else{
  var unixDate= dateValue;
  var naturalDate=new Date(dateValue * 1000);
  naturalDate=naturalDate.toLocalDateString('en-us',dateFormat);
  
}

res.json({unix: unixDate,natural: naturalDate});

});








app.listen(3000,function(){
  console.log('Its on!');
});
