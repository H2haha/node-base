var http = require('http')
var querystring =require('querystring')
var postData =querystring.stringify({
       'content':'一起期待下一期的课程',
       'cid':348
	})
var options ={
     hiostname:'www.imooc.com',
     port:80,
     path:'/course/document',
     method:'POST',
     headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate', 
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Cache-Control':'no-cache',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'UM_distinctid=15f62038136dc-03df708b12a6d6-3e64430f-1fa400-15f6203813759; imooc_uuid=3f814b92-db55-417e-843b-4c52c01dbe0b; imooc_isnew_ct=1520925563; loginstate=1; apsid=MzOGMwNWRmOTY0Y2FlOGMxYzE1YTYzN2IwMmM4NTYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTIyMDkxNQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGUyZTExYjkzZTVmN2E1Njk5ZjczYzMzZTc1M2Q2NDdmAnynWgJ8p1o%3DMW; mc_channel=bdphprmjt; mc_marking=b9ba55d23756de458dfd1a7077e85755; CNZZDATA1261110065=755397239-1509177929-https%253A%252F%252Fwww.so.com%252F%7C1522134077; PHPSESSID=amfflo3u8l8t7mvmk7747odqf0; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1522201483,1522215414,1522217681,1522286662; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1522288916; imooc_isnew=2; cvde=5abc404a02cf7-32',
        'Host':'www.imooc.com',
        'Origin':'https://www.imooc.com',
        'Pragma':'no-cache',
        'Referer':'https://www.imooc.com/comment/348',
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'        
         }
}
var req =http.request(options,function(res){
        console.log('Status:', res.statusCode);
        console.log('headers:'+JSON.stringify(res.headers));
        res.on('data',function(chunk){
            console.log(Buffer.isBuffer(chunk));
            console.log(typeof chunk);
        	})
         res.on('end',function(){
            console.log('评论完毕！');
         	});
         req.on('error',function(e){
             console.log('Error:'+e.message);});
         req.write(postData);
         req.end()
         
	})