function myFunction() {
	
	
	$('#submit').click(function ()
	{
		
		$('#container').show();
		
		$('#category').hide();
	
	});


};		
(function() 
 {
  var allQuestions = [{
    question: "Which tag should be used to represent the header of a document?",
    options: ["head tag", "header tag", "heading tag", "headshot tag"],
    answer: 1
  }, {
    question: "Which of the following is returned by function strcmp if the strings that are compared are identical?",
    options: ["0", "1", "2", "True"],
    answer: 0
  }, {
    question: "A labeled statement consists of an identifier followed by a?",
    options: [":", ";", ".","none of these"],
    answer: 0
  },{
    question: "The body tag usually used after?",
    options: ["Title tag", "Head tag", "EM tag", "Form tag"],
    answer: 1
  }, {
    question: "Symbol used at the beginning of the HREF text is?",
    options: ["#", "&", "$", "!"],
    answer: 0
  },{
    question: "Markup tags tell the web browser?",
    options: ["How to organise the page", " How to display the page", "How to display message box on page", "none of these"],
    answer: 1
  },{
    question: "To create HTML page you need what?",
    options: ["Text editor" , "Web browser" , "Both of these" , "None of these"],
    answer: 2
  },{
    question: "In HTML tags that include both on and off tags are known as?",
    options: ["Comment tag", "Document tag", "Container tag", "none of these"],
    answer: 2
  },{
    question: "Gif and jpg are two main types of what?",
    options: ["Images", "Videoes", "Animated effects", "none of these"],
    answer: 0
  },{
    question: "To change size of an image in HTML use?",
    options: ["Pliers", "Bigger and Smaller", "Top and Bottom", "Height and Width"],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
  // showing question being attempted
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
	// showing question being attempted
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
		// Radio buttons
		
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   	// Going to next question
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
	// Result showing after calculating score
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();
   //Set timer
	var total_seconds=60*5;
		var c_minutes = parseInt(total_seconds/60);
		var c_seconds = parseInt(total_seconds%60);
		function CheckTime(){
		document.getElementById("quiz-time-left").innerHTML
		='Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ' ;
		if(total_seconds<=0){
			
		 $('#next').hide();
         $('#prev').hide();
		  $('#question').remove();
		  $('#score').show();		
		
		alert('You are out of time');
		
		}else{
		total_seconds = total_seconds -1;
		 c_minutes = parseInt(total_seconds/60);
		 c_seconds = parseInt(total_seconds%60);
		 setTimeout("CheckTime()",1000);
		}
		
		}
		
		 setTimeout("CheckTime()",1000);
		 
		