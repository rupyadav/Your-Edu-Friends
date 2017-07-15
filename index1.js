 
 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-93472868-1', 'auto');
  ga('send', 'pageview');
 
 
 
 
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWl1WB6pkEGFMqPMUFf4-kYx6snc-qjro",
    authDomain: "youredufriends.firebaseapp.com",
    databaseURL: "https://youredufriends.firebaseio.com",
    projectId: "youredufriends",
    storageBucket: "youredufriends.appspot.com",
    messagingSenderId: "556433155358"
  };
  firebase.initializeApp(config);


var fref=firebase.database().ref();
  
  fref.on('child_added', snap =>
  {
  var name=snap.key;
 alert(name);
  
  $("#111").append("<option>"+name+"</option>");
  });
  
 // content loading
  var path;
  var p1;
  var p2;
  var p3;
  var p4;
  var p5;
  var p6;
	   function f1()
	   {
	   
	   var a=document.getElementById("111");
	   var b=a.options[a.selectedIndex].text;
	   //alert(b);
	  // p1=b;
	   }
	   
	  function f2()
	   {
	    var a=document.getElementById("111");
	   var b=a.options[a.selectedIndex].text;
	  // alert(b);
	   p1=b;
	      var rootRef1=firebase.database().ref().child(p1);
        // alert(p1);
            rootRef1.on("child_added", snap =>
           {
		   
		   var name=snap.key;
		 
		   $("#112").append("<option>" + name + "</option>");
		   });
		  
		 
		   }
	    function f3()
	   {    
	    var a=document.getElementById("112");
		  var b=a.options[a.selectedIndex].text;
		   p2="/"+b;
		   
		   
	         
		   
	         var rootRef3=firebase.database().ref().child(p1+p2);
			 alert(rootRef3);
        
             rootRef3.on("child_added", snap =>
               {
		   
		         var name=snap.key;
		 
		         $("#113").append("<option>" + name + "</option>");
		        });
				
	   }
	   
	   
	    function f4()
	   {     
            var a=document.getElementById("113");
		        var b=a.options[a.selectedIndex].text;
				 p3="/"+b;
         	   //alert(path);
	         var rootRef3=firebase.database().ref().child(p1+p2+p3);
        
             rootRef3.on("child_added", snap =>
               {
		   
		         var name=snap.key;
		 
		         $("#114").append("<option>" + name + "</option>");
		        });
				
	   }
	   
	   
	   
	    function f5()
	   {   
             var a=document.getElementById("114");
		        var b=a.options[a.selectedIndex].text;
				 p4="/"+b;	   
	   
	    // alert(path);
	         var rootRef3=firebase.database().ref().child(p1+p2+p3+p4);
        
             rootRef3.on("child_added", snap =>
               {
		   
		         var name=snap.key;
		 
		         $("#115").append("<option>" + name + "</option>");
		        });
				
	   }
	   
	   
	   
	    function f6()
	   {       
	          
			  var a=document.getElementById("115");
		        var b=a.options[a.selectedIndex].text;
				 p5="/"+b;
	   
	         //alert(path);
	         var rootRef3=firebase.database().ref().child(p1+p2+p3+p4+p5);
        
             rootRef3.on("child_added", snap =>
               {
		   
		         var name=snap.val();
		 
		         $("#116").append("<option>" + name + "</option>");
		        });
				
				 
	   }
	   function f7()
	   {
	   var a=document.getElementById("116");
		        var b=a.options[a.selectedIndex].text;
				 p6="/"+b+".pdf";
				path=p1+p2+p3+p4+p5+p6;
				  var storageRef=firebase.storage().ref();
				 //alert(storageRef);
				 //var abc=storageRef.child(path).getDownloadURL();
				 //alert(abc);
				 storageRef.child(path).getDownloadURL().then(function(url) {
				 alert(url);
				 
                 var data1 = document.getElementById('dd1');
                data1.src = url;
				alert(data1.src);
                }).catch(function(error) {
  
               });
				 
				 
				 
	  
	  
	  // alert(data.src);
	   }