let getDictionary = function (lang)
{
    let englishDictionary = function (number)
    {
       switch(number){
            case 1:
                return "one";
                break;
            case 2:
                return "two";
                break;
            case 3:
                return "three";
                break;
            
       }        
    }

    
    let frenchDictionary = function (number)
    {
        switch(number){
            case 1:
                return "un";
                break;
            case 2:
                return "deux";
                break;
            case 3:
                return "trois";
                break;
                
        }
             
    }

    if(lang == 'E'){
        return englishDictionary;
    } else if (lang == 'F'){
        return frenchDictionary;
    }

}

// Call the getDictionay function in a way that allows us to use the binding names below as the corresponding dictionary function
let english = getDictionary('E'); 
let french = getDictionary('F');


// DO NOT change the lines below
console.log(english(1));
console.log(french(1));
console.log(english(2));
console.log(french(2));
console.log(english(3));
console.log(french(3));