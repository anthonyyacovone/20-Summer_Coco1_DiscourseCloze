
// Experiment file Coco 

// This says: "begin with the intro, then follow it with real sentences evenly
// shuffled with npi sentences, with each sentece separated by the "sep"
// item (a 1 second pause).

//document.querySelector('input').setAttribute('autofocus', 'autofocus');

var shuffleSequence = seq("consent", "demo","welcome",
                           startsWith("coco"),"debrief","exit"
                         );
var showProgressBar = false;
//var counterOverride = 2;
                  
var defaults = [
    "DashedSentence", {mode: "self-paced reading", display: "in place"},
    "Form", {continueOnReturn: false, continueMessage: "Click here to continue with the story!"},
    "AY_Form", {continueOnReturn: true, continueMessage: null}, 
    "QuestionAlt", {randomOrder: false, presentHorizontally: true},
]; 
        
var items = [
    
["consent", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, consentRequired: true, html: {include: "LTEC_consent_2020.html" }} ],
["welcome", "AY_Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to start", html: {include: "Welcome.html"}} ],
["demo", "Form", {hideProgressBar: true, countsForProgressBar: false, continueMessage: null, continueOnReturn: true, html: {include: "demographics.html" }} ],
["debrief", "Form", {hideProgressBar: true, countsForProgressBar: false, consentRequired: true, continueMessage:"Click here to continue", html: {include: "debrief_harvard.html" }} ],
["exit", "Form", {consentRequired: false, continueMessage:"Click here to continue", html: {include: "exit.html" }} ],
["setcounter", "__SetCounter__", { }],

    
// Coco Study: Norming all words from the story (word-by-word)
    
["coco-cloze",   
                     "AY_Form", {html: {include: "Discourse_Cloze_pt1.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo1.html"}},
                     "QuestionAlt",{q:"What does everyone call Tulena?", 
                                    as:[["s","Hit 's' for Tully"],["k","Hit 'k' for Lena"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt2.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo2.html"}},
                     "QuestionAlt",{q:"What is Ronald Gonzaga’s nickname?", 
                                    as:[["s","Hit 's' for Rocket"],["k","Hit 'k' for Spaceship"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt3.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo3.html"}},
                     "QuestionAlt",{q:"What color are Tully’s pants?", 
                                    as:[["s","Hit 's' for Brown"],["k","Hit 'k' for Yellow"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt4.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo4.html"}},
                     "QuestionAlt",{q:"Who is Mr. Hornswoggle?", 
                                    as:[["s","Hit 's' for The principal"],["k","Hit 'k' for The librarian"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt5.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo5.html"}},
                     "QuestionAlt",{q:"Where did Tully find the white hair on Megan?", 
                                    as:[["s","Hit 's' for 'On her sweater'"],["k","Hit 'k' for 'On her shoe'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt6.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo6.html"}},
                     "QuestionAlt",{q:"What does Coco’s shell look like?", 
                                    as:[["s","Hit 's' for 'A Map'"],["k","Hit 'k' for 'A Flower'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt7.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo7.html"}},
                     "QuestionAlt",{q:"Where did they find Javier?", 
                                    as:[["s","Hit 's' for 'On the slide'"],["k","Hit 'k' for 'On the swings'"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt8.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo8.html"}},
                     "QuestionAlt",{q:"What is one of Tully’s favorite games?", 
                                    as:[["s","Hit 's' for Tully"],["k","Hit 'k' for Lena"]],hasCorrect: 0},
                     "AY_Form", {html: {include: "Discourse_Cloze_pt9.html"}},
                     "Message", {transfer: 4100, continueOnReturn: false, html: {include: "photo9.html"}},
                     "QuestionAlt",{q:"Where did the farmer see something?", 
                                    as:[["s","Hit 's' for Tully"],["k","Hit 'k' for Lena"]],hasCorrect: 0}],
                     
    
    
];

                        




