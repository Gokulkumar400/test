function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    // kill
    

    // Simple responses
    if (input == "hello" || input=="hi" || input=="hey") {
        return "Hi!👋";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }
    else if (input == "good morning") {
        return "Good morning have a nice day!";
    }
    else if (input == "good night") {
        return "Good night have a nice day!🌃";
    }
    else if (input == "") {
        return "Good night have a nice day!🌃";
    }
    else if (input == "which college is a best college in madurai") {
        return  "vaigai collage of enginreering (V.C.E)";
    }
    else if (input == "who are you"||input=="who is that") {
        return "Hi! i'm gokul's assistant 🤖 How can I help you!";
    }
    else if (input == "how are you") {
        return "well and good😁";
    }
    else if (input == "suggest me a best tourist place in tamilnadu") {
        return "Madurai,tanjore,kodaikanal,ooty,ercadu, mahabalipuram These place are famous tourist place in tamilnadu";
    }
    else if (input == "who is gokul") {
        return "Mr.Gokul kumar is a frontend developer he is keep learning to become a fullstack developer for further details contact his official website";
    }
    else if (input == "i am so sad"||input == "i am so sad") {
        return "don't worry all is well💝";
    }
    // else if (input == "can i kill you") {
    //     return "yes to kill me";
    // }if (input =="yes"){
    //      return "i'm dead";
    // }else{
    //     return "thanks for not killing me";
    // }   
    
    else if (input == "tell me a joke") {
        return "joke!";
    }
    else if (input == "how was the day") {
        return "the day is going smoothly!";
    }
    else if (input == "are you single"||input == "will you marry me"||input == "i love you") {
        return "I am always forever single!";
    }
    else if (input == "where are you from") {
        return "from html";
    }
    else if (input == "what are you doing now") {
        return " i am communicate with you ";
    }
    else if (input == "had you dinner"||input == "had you lunch"||input == "had you breakfast") {
        return "yes, i had it";
    }
    else if (input == "whose your role modal") {
        return "it's you";
    }
    else if (input == "") {
        return "Hi! i'm gokul assistant How can I help you!";
    }
    else  {
        return "Try asking something else!";
    }
}
// Runner.prototype.gameOver=function(){}
