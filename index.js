document.addEventListener("DOMContentLoaded", function() {

  var random = jsPsych.randomization;

  //call all images
  var females = [
    'assets/female/w1.jpg', 'assets/female/w2.jpg', 'assets/female/w3.jpg', 'assets/female/w4.jpg', 'assets/female/w5.jpg',
    'assets/female/w6.jpg', 'assets/female/w7.jpg', 'assets/female/w8.jpg', 'assets/female/w9.jpg', 'assets/female/w10.jpg',
    'assets/female/w11.jpg', 'assets/female/w12.jpg', 'assets/female/w13.jpg', 'assets/female/w14.jpg', 'assets/female/w15.jpg', 
    'assets/female/w16.jpg', 'assets/female/w17.jpg', 'assets/female/w18.jpg', 'assets/female/w19.jpg', 'assets/female/w20.jpg', 
    'assets/female/w21.jpg', 'assets/female/w22.jpg', 'assets/female/w23.jpg', 'assets/female/w24.jpg', 'assets/female/w25.jpg',
    'assets/female/w26.jpg', 'assets/female/w27.jpg', 'assets/female/w28.jpg', 'assets/female/w29.jpg', 'assets/female/w30.jpg',
    'assets/female/w31.jpg', 'assets/female/w32.jpg', 'assets/female/w33.jpg', 'assets/female/w34.jpg', 'assets/female/w35.jpg', 
    'assets/female/w36.jpg', 'assets/female/w37.jpg', 'assets/female/w38.jpg', 'assets/female/w29.jpg', 'assets/female/w40.jpg',
    'assets/female/w41.jpg', 'assets/female/w42.jpg', 'assets/female/w43.jpg', 'assets/female/w44.jpg', 'assets/female/w45.jpg',
    'assets/female/w46.jpg', 'assets/female/w47.jpg', 'assets/female/w48.jpg', 'assets/female/w49.jpg', 'assets/female/w50.jpg',
    'assets/female/w51.jpg', 'assets/female/w52.jpg', 'assets/female/w53.jpg', 'assets/female/w54.jpg', 'assets/female/w55.jpg',
    'assets/female/w56.jpg', 'assets/female/w57.jpg', 'assets/female/w58.jpg', 'assets/female/w59.jpg', 'assets/female/w60.jpg',
    'assets/female/w61.jpg', 'assets/female/w62.jpg', 'assets/female/w63.jpg', 'assets/female/w64.jpg', 'assets/female/w65.jpg',
    'assets/female/w66.jpg', 'assets/female/w67.jpg', 'assets/female/w68.jpg', 'assets/female/w69.jpg', 'assets/female/w70.jpg',
    'assets/female/w71.jpg', 'assets/female/w72.jpg', 'assets/female/w73.jpg', 'assets/female/w74.jpg', 'assets/female/w75.jpg',
    'assets/female/w76.jpg', 'assets/female/w77.jpg', 'assets/female/w78.jpg', 'assets/female/w79.jpg', 'assets/female/w80.jpg',
    'assets/female/w81.jpg', 'assets/female/w82.jpg', 'assets/female/w83.jpg', 'assets/female/w84.jpg', 'assets/female/w85.jpg',
    'assets/female/w86.jpg', 'assets/female/w87.jpg', 'assets/female/w88.jpg', 'assets/female/w89.jpg'
  ]

  var males = [
    'assets/male/m1.jpg', 'assets/male/m2.jpg', 'assets/male/m3.jpg', 'assets/male/m4.jpg', 'assets/male/m5.jpg',
    'assets/male/m6.jpg', 'assets/male/m7.jpg', 'assets/male/m8.jpg', 'assets/male/m9.jpg', 'assets/male/m10.jpg',
    'assets/male/m11.jpg', 'assets/male/m12.jpg', 'assets/male/m13.jpg', 'assets/male/m14.jpg', 'assets/male/m15.jpg',
    'assets/male/m16.jpg', 'assets/male/m17.jpg', 'assets/male/m18.jpg', 'assets/male/m19.jpg', 'assets/male/m10.jpg',
    'assets/male/m21.jpg', 'assets/male/m22.jpg', 'assets/male/m23.jpg', 'assets/male/m24.jpg', 'assets/male/m25.jpg',
    'assets/male/m26.jpg', 'assets/male/m27.jpg', 'assets/male/m28.jpg', 'assets/male/m29.jpg', 'assets/male/m20.jpg',
    'assets/male/m31.jpg', 'assets/male/m32.jpg', 'assets/male/m33.jpg', 'assets/male/m34.jpg', 'assets/male/m35.jpg',
    'assets/male/m36.jpg', 'assets/male/m37.jpg', 'assets/male/m38.jpg', 'assets/male/m39.jpg', 'assets/male/m40.jpg',
    'assets/male/m41.jpg', 'assets/male/m42.jpg', 'assets/male/m43.jpg', 'assets/male/m44.jpg', 'assets/male/m45.jpg',
    'assets/male/m46.jpg', 'assets/male/m47.jpg', 'assets/male/m48.jpg', 'assets/male/m49.jpg', 'assets/male/m50.jpg',
    'assets/male/m51.jpg', 'assets/male/m52.jpg', 'assets/male/m53.jpg', 'assets/male/m54.jpg', 'assets/male/m55.jpg',
    'assets/male/m56.jpg', 'assets/male/m57.jpg', 'assets/male/m58.jpg', 'assets/male/m59.jpg', 'assets/male/m60.jpg',
    'assets/male/m61.jpg', 'assets/male/m62.jpg', 'assets/male/m63.jpg', 'assets/male/m64.jpg', 'assets/male/m65.jpg',
    'assets/male/m66.jpg', 'assets/male/m67.jpg', 'assets/male/m68.jpg', 'assets/male/m69.jpg', 'assets/male/m70.jpg',
    'assets/male/m71.jpg', 'assets/male/m72.jpg', 'assets/male/m73.jpg', 'assets/male/m74.jpg', 'assets/male/m75.jpg',
    'assets/male/m76.jpg', 'assets/male/m77.jpg', 'assets/male/m78.jpg', 'assets/male/m79.jpg', 'assets/male/m80.jpg',
    'assets/male/m81.jpg', 'assets/male/m82.jpg', 'assets/male/m83.jpg', 'assets/male/m84.jpg', 'assets/male/m85.jpg',
    'assets/male/m86.jpg', 'assets/male/m87.jpg', 'assets/male/m88.jpg', 'assets/male/m89.jpg'
  ]

  // call all statements
  var covid_need = [
    ['covid single parent 1', 'covid single parent 2', 'covid single parent 3'],
    ['covid loneliness 1', 'covid loneliness 2', 'covid loneliness 3'],
    ['covid chronic depression 1', 'covid chronic depression 2', 'covid chronic depression 3'],
    ['covid illness 1', 'covid illness 2', 'covid illness 3'],
    ['covid lost grandma 1', 'covid lost grandma 2', 'covid lost grandma 3'],
    ['covid caring for father 1', 'covid caring for father 2', 'covid caring for father 3'],
    ['covid lost job 1', 'covid lost job 2', 'covid lost job 3'],
    ['covid pay tuition 1', 'covid pay tuition 2', 'covid pay tuition 3']
  ]

  var personal_need = [
    ['single parent statement 1', 'single parent statement 2', 'single parent statement 3'],
    ['loneliness 1', 'loneliness 2', 'loneliness 3'],
    ['chronic depression 1', 'chronic depression 2', 'chronic depression 3'],
    ['illness 1', 'illness 2', 'illness 3'],
    ['lost grandma 1', 'lost grandma 2', 'lost grandma 3'],
    ['caring for father 1', 'caring for father 2', 'caring for father 3'],
    ['lost job 1', 'lost job 2', 'lost job 3'],
    ['pay tuition 1', 'pay tuition 2', 'pay tuition 3']
  ]

  var abstract_need = [
    ['abstract need 1a', 'abstract need 1b', 'abstract need 1c'],
    ['abstract need 2a', 'abstract need 2b', 'abstract need 2c'],
    ['abstract need 3a', 'abstract need 3b', 'abstract need 3c'],
    ['abstract need 4a', 'abstract need 4b', 'abstract need 4c'],
    ['abstract need 5a', 'abstract need 5b', 'abstract need 5c'],
    ['abstract need 6a', 'abstract need 6b', 'abstract need 6c'],
    ['abstract need 7a', 'abstract need 7b', 'abstract need 7c'],
    ['abstract need 8a', 'abstract need 8b', 'abstract need 8c']
  ]

  var aphorism = [
    ['aphorism 1a', 'aphorism 1b', 'aphorism 1c'],
    ['aphorism 2a', 'aphorism 2b', 'aphorism 2c'],
    ['aphorism 3a', 'aphorism 3b', 'aphorism 3c'],
    ['aphorism 4a', 'aphorism 4b', 'aphorism 4c'],
    ['aphorism 5a', 'aphorism 5b', 'aphorism 5c'],
    ['aphorism 6a', 'aphorism 6b', 'aphorism 6c'],
    ['aphorism 7a', 'aphorism 7b', 'aphorism 7c'],
    ['aphorism 8a', 'aphorism 8b', 'aphorism 8c']
  ]

  // condition pairs
  var conditions = [
    [aphorism, covid_need],
    [personal_need, abstract_need],
    [personal_need, aphorism],
    [abstract_need, aphorism]
  ]

  // randomly select statement clusters from list
  var statementGroups = random.sampleWithoutReplacement(conditions, 1)[0];
  // assign selected statement clusters to single array
  var statementSelections = statementGroups.map(group => random.sampleWithoutReplacement(group, 4)).flat();
  // shuffle statement order
  statementSelections = random.shuffle(statementSelections);
  // randomly sample from female faces 
  var femaleSample = random.sampleWithoutReplacement(females, 4);
  // randomly sample from male faces
  var maleSample = random.sampleWithoutReplacement(males, 4);
  // place male and female faces in single array and randomize order
  var faces = random.shuffle(maleSample.concat(femaleSample));
  // pair faces with statement clusters
  var facesWithStatements = faces.map((face, i) => ({ face, statements: statementSelections[i] }));
  // call statements when paired face displays

 var trialData = [0, 1, 2].map(i =>
    random.shuffle(facesWithStatements).map(({ face, statements }) => ({ face, statement: statements[i] })))
    .flat();

  // declare the block
  var consent = {
    type:'custom-external-html',
    url: "consent.html",
    cont_btn: "start",
    end_btn: "end",
    end_fn: () => {
      if (window.jatos) {
        window.jatos.startNextComponent();
      } else {
        window.location.reload();
      }
    }
  };

  // instructions 
  var instructions = {
    type: 'instructions',
    pages: [
      'Welcome to the study!',
      'In this study you will observe an interaction among eight individiduals discussing a topic of interest.',
      'The discussion is presented as a series of slides, each of which contains a photo of a single speaker, along with the text of a statement made by that speaker.',
      'Please attend carefully to the discussion and form impressions of the speakers.',
      'The study will begin on the next page. <br><br> Press &#39;Next&#39; to begin the study.'
    ],
    show_clickable_nav: true
  };

// stimulus presentation
  var face_stimulus_procedure = {
    timeline: [
        {
            type: 'html-keyboard-response',
            stimulus: ' ',
            choices: jsPsych.NO_KEYS,
            trial_duration: 500
        },
        {
            type: 'image-keyboard-response',
            stimulus: jsPsych.timelineVariable('face'),
            stimulus_width: 600,                                                                            
            maintain_aspect_ration: true,
            choices: jsPsych.NO_KEYS,
            trial_duration: 1000,                                                                           // need to change this to 1500
            prompt: () => `<p>${jsPsych.timelineVariable('statement', true)}</p>`
        }
    ],
    timeline_variables: trialData,
};                                           

// transition page from experimental task to distractor task
var transition_1 = {
  type: 'instructions',
  pages: [
    `Thank you for taking part in the impression formation task! Now you will move on to the next task.
    <br><br> When you are ready to move on, click &#39;Next&#39;.`,

    `For the next task, you will have 60 seconds to list as many US state capitals as you can recall. 
    <br><br> When you are ready to begin, click &#39;Next&#39;.`
  ],
  show_clickable_nav: true
};                                     

//   distractor task   
var distractor_task = {
  type: 'survey-html-javascript-form',
  preamble: '<img width="600" height="400" src="USA2.jpg"></img>',
  html: `
  <style>
    #jspsych-survey-html-form-next {
      display: none;
    }
  </style>
  <p> For the next 60 seconds, type as many state capitals as you can. </p>
   <p><input name="state1" type="text"/> <input name="state2" type="text"/> <input name="state3" type="text"/> <input name="state4" type="text"/> <input name="state5" type="text"/></p>
   <p><input name="state6" type="text"/> <input name="state7" type="text"/> <input name="state8" type="text"/> <input name="state9" type="text"/> <input name="state10" type="text"/></p>
   <p><input name="state11" type="text"/> <input name="state12" type="text"/> <input name="state13" type="text"/> <input name="state14" type="text"/> <input name="state15" type="text"/></p>
   <p><input name="state16" type="text"/> <input name="state17" type="text"/> <input name="state18" type="text"/> <input name="state19" type="text"/> <input name="state20" type="text"/></p>
   <p><input name="state21" type="text"/> <input name="state22" type="text"/> <input name="state23" type="text"/> <input name="state24" type="text"/> <input name="state25" type="text"/></p>
   <p><input name="state26" type="text"/> <input name="state27" type="text"/> <input name="state28" type="text"/> <input name="state29" type="text"/> <input name="state30" type="text"/></p>
   <p><input name="state31" type="text"/> <input name="state32" type="text"/> <input name="state33" type="text"/> <input name="state34" type="text"/> <input name="state35" type="text"/></p>
   <p><input name="state36" type="text"/> <input name="state37" type="text"/> <input name="state38" type="text"/> <input name="state39" type="text"/> <input name="state40" type="text"/></p>
   <p><input name="state41" type="text"/> <input name="state42" type="text"/> <input name="state43" type="text"/> <input name="state44" type="text"/> <input name="state45" type="text"/></p>
   <p><input name="state46" type="text"/> <input name="state47" type="text"/> <input name="state48" type="text"/> <input name="state49" type="text"/> <input name="state50" type="text"/><p>
   `,
  javascript: `
    const nextButton = document.getElementById('jspsych-survey-html-form-next');
    setTimeout(() => {
      nextButton.click();
    }, 10000)                                                                                              // change to 1 minute (60000)
  `
};

// transition page from distractor task to recall task
  var transition_2 = {
    type: 'instructions',
    pages: [
      `Thank you for taking part in that task. There is one last task for you to do. On the next page we will describe this task to you.
      <br><br> Click &#39;Next&#39; when you are ready to read the instructions.`,
      
      `Next, you will take part in a recall task. You will see a screen with all the faces that were presented to you in the first task. 
      The statements each person said will appear sequentially. Please reread each statement and try to recall which person said it. 
      To choose the person you think said the presented statement, simply click their picture.<br><br> 
      When you are ready to begin, click &#39;Next&#39;.`
    ],
    show_clickable_nav: true
  };

 // transition page from recall task to moderator surveys
  var transition_3 = {
    type: 'instructions',
    pages: [
      `Thank you for taking part in that task. Next, you will answer some survey questions.
       <br><br> Click &#39;Next&#39; when you are ready to begin.`
    ],
    show_clickable_nav: true
  };


  // moderator surveys
  var scale_1 = [
    "Strongly Disagree", 
    "Disagree", 
    "Moderately Disagree",
    "Neither Agree Nor Disagree", 
    "Moderately Agree",
    "Agree", 
    "Strongly Agree"
  ]

  var scale_2 = [
    "Strongly Disagree", 
    "Disagree", 
    "Neutral", 
    "Agree", 
    "Strongly Agree"
  ]

  var scale_3 = [
    "There was no one like this",
    "There was someone a little bit like this",
    "There was someone somewhat like this",
    "There was someone very much like this",
    "There was someone exactly like this"
  ]

  var scale_4 = [
    "None",
    "One",
    "A few",
    "Many"
  ]

  var scale_5 = [
    "Not at all",
    "A little bit",
    "Somewhat",
    "A lot",
    "All of the time"
  ]

  var yes_no = [
    "Yes",
    "No"
  ]

  var children = [
    "I don't know",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "More than 10"
  ]

  var birth_order = [
    "I don't know",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "More than 10th"
  ]

  var paternal_care = [  
    "He left my mother taking care of us",
    "He took care of us, but less than my mother",
    "He took care of us as much as my mother",
    "He took more care of us than my mother",
    "This question does not apply to me"
  ]

  var religion = [
    "Christianity", 
    "Hinduism",
    "Shintoism",
    "Taoism", 
    "Judaism",
    "Buddhism", 
    "Jainism",
    "Islam", 
    "Sikhism",
    "Wicca/Paganism",
    "Atheism",
    "Nothing in particular",
    "Other"
  ]

  var scale_6 = [
    "Not at all",
    "Not really",
    "Not sure",
    "Mostly",
    "Completely"
  ]

  var prayer = [
    "Never",
    "Occasionally",
    "Once a week",
    "Several times a week",
    "Every day"
  ]

  var attendance = [
    "Never",
    "A few times a year",
    "Once a month",
    "Once a week",
    "More than once a week"
  ]


  /////////////////////////////// oxford utilitarian scale //////////////////
  var oxford_utilitarian = {
    type: 'survey-likert',
    preamble: "Please indicate below the degree to which you agree with the following statements.",
    questions: [
      {prompt: "If the only way to save another person&#39;s life during an emergency is to sacrifice one&#39;s own leg, then one is morally required to make this sacrifice.", name: 'oxford_1', labels: scale_1},
      {prompt: "From a moral point of view, we should feel obliged to give one of our kidneys to a person with kidney failure since we do not need two kidneys to survive, but really only one to be healthy.", name: 'oxford_2', labels: scale_1},
      {prompt: "From a moral perspective, people should care about the well-being of all human beings on the planet equally; they should not favor the well-being of people who are especially close to them either physically or emotionally.", name: 'oxford_3', labels: scale_1},
      {prompt: "It is just as wrong to fail to help someone as it is to actively harm them yourself.", name: 'oxford_4', labels: scale_1},
      {prompt: "It is morally wrong to keep money that one doesn&#39;t really need if one can donate it to causes that provide effective help to those who will benefit a great deal.", name: 'oxford_5', labels: scale_1},
      {prompt: "It is morally right to harm an innocent person if harming them is a necessary means to helping several other innocent people.", name: 'oxford_6', labels: scale_1},
      {prompt: "If the only way to ensure the overall well-being and happiness of the people is through the use of political oppression for a short, limited period, then political oppression should be used.", name: 'oxford_7', labels: scale_1},
      {prompt: "It is permissible to torture an innocent person if this would be necessary to provide information to prevent a bomb going off that would kill hundreds of people.", name: 'oxford_8', labels: scale_1},
      {prompt: "Sometimes it is morally necessary for innocent people to die as collateral damage &#45; if more people are saved overall.", name: 'oxford_9', labels: scale_1}
    ],
    randomize_question_order: true
  };

  ////////////// principle of care scale ////////////////////////

  var principle_of_care = {
    type: 'survey-likert',
    questions: [
      {prompt: "People should be willing to help others who are less fortunate.", name: 'care_1', labels: scale_2},
      {prompt: "Everybody in this world has a responsibility to help others when they need assistance. ", name: 'care_2', labels: scale_2},
      {prompt: "These days people need to look after themselves and not overly worry about others. ", name: 'care_3', labels: scale_2},
      {prompt: "When people are less fortunate, it is important to help them even if they are very different from us. ", name: 'care_4', labels: scale_2},
      {prompt: "It is important to help one another so that the community in general is a better place. ", name: 'care_5', labels: scale_2},
      {prompt: "Personally assisting people in trouble is very important to me. ", name: 'care_6', labels: scale_2},
      {prompt: "When thinking about helping people in trouble, it is important to consider whether the people are like us or not. ", name: 'care_7', labels: scale_2},
      {prompt: "We should not care too much about the needs of people in other parts of the world.", name: 'care_8', labels: scale_2}
  ],
  randomize_question_order: true
  };
  

///////////////////// empathy index scale /////////////////

var empathy_index = {
  type: 'survey-likert',
  questions: [
    {prompt: "If I see someone who is excited, I will feel excited myself.", name: 'empathy_1', labels: scale_1},
    {prompt: "I sometimes find myself feeling the emotions of the people around me, even if I don&#39;t try to feel what they&#39;re feeling. ", name: 'empathy_2', labels: scale_1},
    {prompt: "If I&#39;m watching a movie and a character injures their leg, I will feel pain in my leg. ", name: 'empathy_3', labels: scale_1},
    {prompt: "If I hear a story in which someone is scared, I will imagine how scared I would be in that situation and begin to feel scared myself. ", name: 'empathy_4', labels: scale_1},
    {prompt: "If I hear an awkward story about someone else, I might feel a little embarrassed. ", name: 'empathy_5', labels: scale_1},
    {prompt: "I can&#39;t watch shows in which an animal is being hunted, because I feel nervous as if I am being hunted. ", name: 'empathy_6', labels: scale_1},
    {prompt: "If I see someone else yawn, I am also likely to yawn.", name: 'empathy_7', labels: scale_1},
    {prompt: "If I see someone fidgeting, I&#39;ll start feeling anxious too.", name: 'empathy_8', labels: scale_1},
    {prompt: "If I see someone vomit, I will gag.", name: 'empathy_9', labels: scale_1},
    {prompt: "I catch myself crossing my arms or legs just like the person I&#39;m talking to.", name: 'empathy_10', labels: scale_1},
    {prompt: "If I see a video of a baby smiling, I find myself smiling.", name: 'empathy_11', labels: scale_1},
    {prompt: "If I see someone suddenly looking away, I&#39;ll automatically look in the direction they are looking.", name: 'empathy_12', labels: scale_1},
    {prompt: "If I&#39;m watching someone walking on a balance beam, I will lean when they lean.", name: 'empathy_13', labels: scale_1},
    {prompt: "If I&#39;m having a conversation with someone and they scratch their nose, I will also scratch my nose", name: 'empathy_14', labels: scale_1}
    ],
    randomize_question_order: true
  };

    ////////////////////////////  moral identity scale /////////////////
  
var moral_identity = {
  type: 'survey-likert',
  preamble: "Listed below are some characteristics that may describe a person: <b>Caring, compassionate, fair, friendly, generous, helpful, hardworking, honesty, and kind.</b> The person with these characteristics could be you or it could be someone else. For a moment, visualize in your mind the kind of person who has these characteristics. Imagine how that person would think, feel, and act. When you have a clear image of what this person would be like, answer the following questions.",
  questions: [
    {prompt: "It would make me feel good to be a person who has these characteristics.", name: 'moral_1', labels: scale_2},
    {prompt: "Being someone who has these characteristics is an important part of who I am.", name: 'moral_2', labels: scale_2},
    {prompt: "I often wear clothes that identify me as having these characteristics.", name: 'moral_3', labels: scale_2},
    {prompt: "I would be ashamed to be a person who had these characteristics.", name: 'moral_4', labels: scale_2},
    {prompt: "The types of things I do in my spare time (e.g., hobbies) clearly identify me as having these characteristics.", name: 'moral_5', labels: scale_2},
    {prompt: "The kinds of books and magazines that I read identify me as having these characteristics.", name: 'moral_6', labels: scale_2},
    {prompt: "Having these characteristics is not really important to me.", name: 'moral_7', labels: scale_2},
    {prompt: "The fact that I have these characteristics is communicated to others by my membership in certain organizations.", name: 'moral_8', labels: scale_2},
    {prompt: "I am actively involved in activities that communicate to others that I have these characteristics.", name: 'moral_9', labels: scale_2},
    {prompt: "I strongly desire to have these characteristics.", name: 'moral_10', labels: scale_2}
  ],
  randomize_question_order: true
  };

    ////////////////////////////  HEXACO  scale /////////////////

var hexaco = {
  type: 'survey-likert',
  preamble: "On the following pages, you will find a series of statements about you. Please read each statement and decide how much you agree or disagree with that statement.",
  questions: [
    {prompt: "I would be quite bored by a visit to an art gallery.", name: 'hexaco_1', labels: scale_2},
    {prompt: "I clean my office or home quite frequently.", name: 'hexaco_2', labels: scale_2},
    {prompt: "I rarely hold a grudge, even against people who have badly wronged me.", name: 'hexaco_3', labels: scale_2},
    {prompt: "I feel reasonably satisfied with myself overall.", name: 'hexaco_4', labels: scale_2},
    {prompt: "I would feel afraid if I had to travel in bad weather conditions.", name: 'hexaco_5', labels: scale_2},
    {prompt: "If I want something from a person I dislike, I will act very nicely toward that person in order to get it.", name: 'hexaco_6', labels: scale_2},
    {prompt: "I&#39;m interested in learning about the history and politics of other countries.", name: 'hexaco_7', labels: scale_2},
    {prompt: "When working, I often set ambitious goals for myself.", name: 'hexaco_8', labels: scale_2},
    {prompt: "People sometimes tell me that I am too critical of others.", name: 'hexaco_9', labels: scale_2},
    {prompt: "I rarely express my opinions in group meetings.", name: 'hexaco_10', labels: scale_2},
    {prompt: "I sometimes can&#39;t help worrying about little things.", name: 'hexaco_11', labels: scale_2},
    {prompt: "If I knew that I could never get caught, I would be willing to steal a million dollars.", name: 'hexaco_12', labels: scale_2},
    {prompt: "I would like a job that requires following a routine rather than being creative.", name: 'hexaco_13', labels: scale_2},
    {prompt: "I often check my work over repeatedly to find any mistakes.", name: 'hexaco_14', labels: scale_2},
    {prompt: "People sometimes tell me that I&#39;m too stubborn.", name: 'hexaco_15', labels: scale_2},
    {prompt: "I avoid making  &#39;small talk &#39; with people.", name: 'hexaco_16', labels: scale_2},
    {prompt: "When I suffer from a painful experience, I need someone to make me feel comfortable.", name: 'hexaco_17', labels: scale_2},
    {prompt: "Having a lot of money is not especially important to me.", name: 'hexaco_18', labels: scale_2},
    {prompt: "I think that paying attention to radical ideas is a waste of time.", name: 'hexaco_19', labels: scale_2},
    {prompt: "I make decisions based on the feeling of the moment rather than on careful thought.", name: 'hexaco_20', labels: scale_2},
    {prompt: "People think of me as someone who has a quick temper.", name: 'hexaco_21', labels: scale_2},
    {prompt: "I am energetic nearly all the time.", name: 'hexaco_22', labels: scale_2},
    {prompt: "I feel like crying when I see other people crying.", name: 'hexaco_23', labels: scale_2},
    {prompt: "I am an ordinary person who is no better than others.", name: 'hexaco_24', labels: scale_2},
    {prompt: "I wouldn&#39;t spend my time reading a book of poetry.", name: 'hexaco_25', labels: scale_2},
    {prompt: "I plan ahead and organize things, to avoid scrambling at the last minute.", name: 'hexaco_26', labels: scale_2},
    {prompt: "My attitude toward people who have treated me badly is &#39;forgive and forget&#39;.", name: 'hexaco_27', labels: scale_2},
    {prompt: "I think that most people like some aspects of my personality.", name: 'hexaco_28', labels: scale_2},
    {prompt: "I don&#39;t mind doing jobs that involve dangerous work.", name: 'hexaco_29', labels: scale_2},
    {prompt: "I wouldn&#39;t use flattery to get a raise or promotion at work, even if I thought it would succeed.", name: 'hexaco_30', labels: scale_2},
    {prompt: "I enjoy looking at maps of different places.", name: 'hexaco_31', labels: scale_2},
    {prompt: "I often push myself very hard when trying to achieve a goal.", name: 'hexaco_32', labels: scale_2},
    {prompt: "I generally accept people&#39;s faults without complaining about them.", name: 'hexaco_33', labels: scale_2},
    {prompt: "In social situations, I'm usually the one who makes the first move.", name: 'hexaco_34', labels: scale_2},
    {prompt: "I worry a lot less than most people do.", name: 'hexaco_35', labels: scale_2},
    {prompt: "I would be tempted to buy stolen property if I were financially tight.", name: 'hexaco_36', labels: scale_2},
    {prompt: "I would enjoy creating a work of art, such as a novel, a song, or a painting.", name: 'hexaco_37', labels: scale_2},
    {prompt: "When working on something, I don&#39;t pay much attention to small details.", name: 'hexaco_38', labels: scale_2},
    {prompt: "I am usually quite flexible in my opinions when people disagree with me.", name: 'hexaco_39', labels: scale_2},
    {prompt: "I enjoy having lots of people around to talk with.", name: 'hexaco_40', labels: scale_2},
    {prompt: "I can handle difficult situations without needing emotional support from anyone else.", name: 'hexaco_41', labels: scale_2},
    {prompt: "I would like to live in a very expensive, high-class neighborhood.", name: 'hexaco_42', labels: scale_2},
    {prompt: "I like people who have unconventional views.", name: 'hexaco_43', labels: scale_2},
    {prompt: "I make a lot of mistakes because I don&#39;t think before I act.", name: 'hexaco_44', labels: scale_2},
    {prompt: "I rarely feel anger, even when people treat me quite badly.", name: 'hexaco_45', labels: scale_2},
    {prompt: "On most days, I feel cheerful and optimistic.", name: 'hexaco_46', labels: scale_2},
    {prompt: "When someone I know well is unhappy, I can almost feel that person&#39;s pain myself.", name: 'hexaco_47', labels: scale_2},
    {prompt: "I wouldn&#39;t want people to treat me as though I were superior to them.", name: 'hexaco_48', labels: scale_2},
    {prompt: "If I had the opportunity, I would like to attend a classical music concert.", name: 'hexaco_49', labels: scale_2},
    {prompt: "People often joke with me about the messiness of my room or desk.", name: 'hexaco_50', labels: scale_2},
    {prompt: "If someone has cheated me once, I will always feel suspicious of that person.", name: 'hexaco_51', labels: scale_2},
    {prompt: "I feel that I am an unpopular person.", name: 'hexaco_52', labels: scale_2},
    {prompt: "When it comes to physical danger, I am very fearful.", name: 'hexaco_53', labels: scale_2},
    {prompt: "If I want something from someone, I will laugh at that person&#39;s worst jokes.", name: 'hexaco_54', labels: scale_2},
    {prompt: "I would be very bored by a book about the history of science and technology.", name: 'hexaco_55', labels: scale_2},
    {prompt: "Often when I set a goal, I end up quitting without having reached it.", name: 'hexaco_56', labels: scale_2},
    {prompt: "I tend to be lenient in judging other people.", name: 'hexaco_57', labels: scale_2},
    {prompt: "When I&#39;m in a group of people, I&#39;m often the one who speaks on behalf of the group.", name: 'hexaco_58', labels: scale_2},
    {prompt: "I rarely, if ever, have trouble sleeping due to stress or anxiety.", name: 'hexaco_59', labels: scale_2},
    {prompt: "I would never accept a bribe, even if it were very large.", name: 'hexaco_60', labels: scale_2},
    {prompt: "People have often told me that I have a good imagination.", name: 'hexaco_61', labels: scale_2},
    {prompt: "I always try to be accurate in my work, even at the expense of time.", name: 'hexaco_62', labels: scale_2},
    {prompt: "When people tell me that I&#39;m wrong, my first reaction is to argue with them.", name: 'hexaco_63', labels: scale_2},
    {prompt: "I prefer jobs that involve active social interaction to those that involve working alone.", name: 'hexaco_64', labels: scale_2},
    {prompt: "Whenever I feel worried about something, I want to share my concern with another person.", name: 'hexaco_65', labels: scale_2},
    {prompt: "I would like to be seen driving around in a very expensive car.", name: 'hexaco_66', labels: scale_2},
    {prompt: "I think of myself as a somewhat eccentric person.", name: 'hexaco_67', labels: scale_2},
    {prompt: "I don&#39;t allow my impulses to govern my behavior.", name: 'hexaco_68', labels: scale_2},
    {prompt: "Most people tend to get angry more quickly than I do.", name: 'hexaco_69', labels: scale_2},
    {prompt: "People often tell me that I should try to cheer up.", name: 'hexaco_70', labels: scale_2},
    {prompt: "I feel strong emotions when someone close to me is going away for a long time.", name: 'hexaco_71', labels: scale_2},
    {prompt: "I think that I am entitled to more respect than the average person is.", name: 'hexaco_72', labels: scale_2},
    {prompt: "Sometimes I like to just watch the wind as it blows through the trees.", name: 'hexaco_73', labels: scale_2},
    {prompt: "When working, I sometimes have difficulties due to being disorganized.", name: 'hexaco_74', labels: scale_2},
    {prompt: "I find it hard to fully forgive someone who has done something mean to me.", name: 'hexaco_75', labels: scale_2},
    {prompt: "I sometimes feel that I am a worthless person.", name: 'hexaco_76', labels: scale_2},
    {prompt: "Even in an emergency I wouldn't feel like panicking.", name: 'hexaco_77', labels: scale_2},
    {prompt: "I wouldn&#39;t pretend to like someone just to get that person to do favors for me.", name: 'hexaco_78', labels: scale_2},
    {prompt: "I’ve never really enjoyed looking through an encyclopedia.", name: 'hexaco_79', labels: scale_2},
    {prompt: "I do only the minimum amount of work needed to get by.", name: 'hexaco_80', labels: scale_2},
    {prompt: "Even when people make a lot of mistakes, I rarely say anything negative.", name: 'hexaco_81', labels: scale_2},
    {prompt: "I tend to feel quite self-conscious when speaking in front of a group of people.", name: 'hexaco_82', labels: scale_2},
    {prompt: "I get very anxious when waiting to hear about an important decision.", name: 'hexaco_83', labels: scale_2},
    {prompt: "I&#39;d be tempted to use counterfeit money, if I were sure I could get away with it.", name: 'hexaco_84', labels: scale_2},
    {prompt: "I don&#39;t think of myself as the artistic or creative type.", name: 'hexaco_85', labels: scale_2},
    {prompt: "People often call me a perfectionist.", name: 'hexaco_86', labels: scale_2},
    {prompt: "I find it hard to compromise with people when I really think I’m right.", name: 'hexaco_87', labels: scale_2},
    {prompt: "The first thing that I always do in a new place is to make friends.", name: 'hexaco_88', labels: scale_2},
    {prompt: "I rarely discuss my problems with other people.", name: 'hexaco_89', labels: scale_2},
    {prompt: "I would get a lot of pleasure from owning expensive luxury goods.", name: 'hexaco_90', labels: scale_2},
    {prompt: "I find it boring to discuss philosophy.", name: 'hexaco_91', labels: scale_2},
    {prompt: "I prefer to do whatever comes to mind, rather than stick to a plan.", name: 'hexaco_92', labels: scale_2},
    {prompt: "I find it hard to keep my temper when people insult me.", name: 'hexaco_93', labels: scale_2},
    {prompt: "Most people are more upbeat and dynamic than I generally am.", name: 'hexaco_94', labels: scale_2},
    {prompt: "I remain unemotional even in situations where most people get very sentimental.", name: 'hexaco_95', labels: scale_2},
    {prompt: "I want people to know that I am an important person of high status.", name: 'hexaco_96', labels: scale_2},
    {prompt: "I have sympathy for people who are less fortunate than I am.", name: 'hexaco_97', labels: scale_2},
    {prompt: "I try to give generously to those in need.", name: 'hexaco_98', labels: scale_2},
    {prompt: "It wouldn&#39;t bother me to harm someone I didn’t like.", name: 'hexaco_99', labels: scale_2},
    {prompt: "People see me as a hard-hearted person.", name: 'hexaco_100', labels: scale_2},
],
  randomize_question_order: true
  };

////////////////////////////  life history measures /////////////////

// life history scale section #1
  
var life_history_1 = {
  type: 'survey-likert',
  preamble: `Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).`,
  questions: [
    {preamble: 
      `Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).`},
    {prompt: "People in my family helped me study and/or complete my school assignments.", name: 'life_hist_1', labels: scale_1},
    {prompt: "People in my family acted lovingly towards me.", name: 'life_hist_2', labels: scale_1},
    {prompt: "People in my family cared about me.", name: 'life_hist_3', labels: scale_1},
    {prompt: "Adults in my community that weren’t part of my family cared about me.", name: 'life_hist_4', labels: scale_1},
    {prompt: "My parents were involved with events at my school.", name: 'life_hist_5', labels: scale_1},
    {prompt: "I volunteered to make my community a better place.", name: 'life_hist_6', labels: scale_1},
    {prompt: "I wasn’t afraid of getting hurt at my school.", name: 'life_hist_7', labels: scale_1},
    {prompt: "I felt comfortable walking around my neighborhood.", name: 'life_hist_8', labels: scale_1},
    {prompt: "I could make an impact on my community.", name: 'life_hist_9', labels: scale_1},
    {prompt: "If you broke the rules at my school, you got in trouble.", name: 'life_hist_10', labels: scale_1},
    {prompt: "My parents knew who my friends were and what they were like.", name: 'life_hist_11', labels: scale_1},
    {prompt: "My parents would often ask about where I went and who I was with.        ", name: 'life_hist_12', labels: scale_1},
    {prompt: "Adults encouraged me to “aim high” and achieve.", name: 'life_hist_13', labels: scale_1},
    {prompt: "My close friends got good grades in school.", name: 'life_hist_14', labels: scale_1},
    {prompt: "My close friends didn’t get in trouble with the school or the police.", name: 'life_hist_15', labels: scale_1},
    {prompt: "I spent a lot of time practicing, taking lessons, or working on art (dance, music, painting, etc).", name: 'life_hist_16', labels: scale_1},
    {prompt: "I was involved with sports teams.", name: 'life_hist_17', labels: scale_1},
    {prompt: "I was a member of youth clubs (for example, the Boy Scouts or Girl Scouts).", name: 'life_hist_18', labels: scale_1},
    {prompt: "I was heavily involved with my spiritual or religious organization.", name: 'life_hist_19', labels: scale_1},``  
],
  randomize_question_order: true
  };

// life history scale section #2
var life_history_2 = {
  type: 'survey-likert',
  questions: [
    {preamble: 
      `For the next questions, please think of your life while you were growing up (ages 5-15).`},      
    {prompt: 
      `When you were growing up, was there an important adult who was NOT your parent or guardian that did a lot of good things for you, 
      someone you thought was a special person in your life? This could be a teacher, a neighbor, someone in your community, or anyone that did a 
      lot of good things for you.`, name: 'life_hist_20', labels: scale_1},
],
  randomize_question_order: true
  };

// life history scale section #3
var life_history_3 = {
  type: 'survey-likert',
  questions: [
    {prompt: `How many adults like this did you have in your life?`, name: 'life_hist_21', labels: scale_4},
],
  randomize_question_order: true
  };

// life history scale section #4
var life_history_4 = {
  type: 'survey-likert',
  questions: [
    {preamble: 
      `Thinking about the adult from the last question, please indicate how much you agree with each statement describing how you felt about that adult while growing up. 
      If there was more than one adult like that in your life, please think of the adult that was most important to you. 
      If you didn’t have any important adults in your life, please respond “Not at all”.`},
    {prompt: ` `, name: 'life_hist_22', labels: scale_5},
    {prompt: ` `, name: 'life_hist_23', labels: scale_5},
    {prompt: ` `, name: 'life_hist_24', labels: scale_5},
    {prompt: ` `, name: 'life_hist_25', labels: scale_5},
    {prompt: ` `, name: 'life_hist_26', labels: scale_5},
    {prompt: ` `, name: 'life_hist_27', labels: scale_5},
],
  randomize_question_order: true
  };

  // life history section #5
var parent_birth = {
  type: 'survey-text',
  questions: [
    {preamble: 
      `You will now fill out the last questionnaire. 
      Some of the questions are personal. 
      You are asked these questions so that participants’ responses can be analyzed according to their individual profile and history. 
      We wish to remind you that all of the responses we collect will be analysed completely anonymously - NO INFORMATION FROM THIS SECTION WILL BE LINKED TO YOU IN ANY WAY. 
      If you would prefer to not respond to some of the questions, you will simply have to type in the box 'I don’t want to answer'.`},
    {prompt: `What is the birth year of your mother?`, name: 'mom_birth', rows: 5, columns: 10}, 
    {prompt: `What is the birth year of your father?`, name: 'dad_birth', rows: 5, columns: 10}
],
  };

var alive_mom = {
  type: 'survey-likert',
  questions: [
    {prompt: `Is your mother still alive?`, name: 'mom_alive', labels: yes_no}, 
],
  };

var no_death_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your mother die?`, name: 'mom_death', rows: 5, columns: 10}, 
],
  };

 var dad_alive = {
  type: 'survey-likert',
  questions: [
    {prompt: `Is you father still alive?`, name: 'dad_alive', labels: yes_no}
],
  };

var no_death_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your father die?`, name: 'dad_death', rows: 5, columns: 10}
],
  };  

var siblings = {
  type: 'survey-likert',
  questions: [
    {prompt: `How many children did your mother have?`, name: 'mom_siblings', labels: children},
    {prompt: `Among your mother's children you are the:`, name: 'mom_birth_order', labels: birth_order},
    {prompt: `How many children did your father have?`, name: 'dad_siblings', labels: children},
    {prompt: `Among your father's children you are the:`, name: 'dad_birth_order', labels: birth_order}
],
  };

var parent_divorce = {
  type: 'survey-likert',
  questions: [
    {prompt: `Did you parent get divorved of separate?`, name: 'divorce', labels: yes_no}
],
  };

var age_divorce = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents did get divorced or separated, how old her you when they got divorced?`, name: 'age_divorce', rows: 5, columns: 10}
],
  }; 

var live_with_step_dad = {
  type: 'survey-likert',
  questions: [
    {prompt: `If your parents get divorced or separated, have you ever lived with a step-father?`, name: 'step_dad', labels: yes_no}
],
  };

var age_divorce_step_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents get divorced or separated, have you ever lived with a step-father, from what age on did you live with your step-father?`, name: 'age_step_dad', rows: 5, columns: 10}
],
  };  

var live_with_step_mom = {
  type: 'survey-likert',
  questions: [
    {prompt: `If your parents get divorced or separated, have you ever lived with a step-mother?`, name: 'step_mom', labels: yes_no}
],
  };


var age_divorce_step_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents get divorced or separated, have you ever lived with a step-mother, from what age on did you live with your step-mother?`, name: 'age_step_mom', rows: 5, columns: 10}
],
  };  

var foster_care = {
  type: 'survey-likert',
  questions: [
    {prompt: `Were you ever placed in an institution or in a foster family?`, name: 'foster_care', labels: yes_no}
],
  };

var abuse = {
  type: 'survey-multi-select',
  questions: [
    {prompt: `During my childhood, I was a victim of (please select all apropriate answers):`, 
      options: ["Physical abuse", "Sexual abuse", "Psychological abuse", "No form of abuse", "I don’t want to answer"],
      name: 'childhood_abuse_yn'}
],
  };

var abuse = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: `Answer this question only if you answered 'Physical abuse' or 'Psychological abuse ' or 'Sexual abuse' to the previous question. 
              These episodes were caused by (please select all appropriate answers):`, 
      options: ["One or several people in my family", "One or several people outside my family"],
      name: 'childhood_abuse'
    }
],
  };

var stability = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: `During your childhood, did you live with one or several people who were (Please select all appropriate answers):`, 
              
      options: [
        "alcoholic",
        "violent",
        "depressed", 
        "who suffered from a mental disorder", 
        "who regularly took street drugs", 
        "who sometimes had issues with the judicial system", 
        "who had spent time in prison", 
        "none of the above", 
        "I don’t want to answer"],
      name: 'home_stability'
    }
],
  };

var disease = {
  type: 'survey-likert',
  questions: [
    {prompt: `From your birth until you were 7 years old, did you suffer from a long disease that required a hospitalisation?`, name: 'disease', labels: yes_no}
],
  };

var change_schools = {
  type: 'survey-likert',
  questions: [
    {prompt: `From your birth until you were 7 years old, how many times did you change schools?`, name: 'change_schools', labels: children}
],
  };

var care = {
  type: 'survey-likert',
  questions: [
    {prompt: `From your birth until you were 7 years old, how much did your father take care of you?`, name: 'paternal_care', labels: paternal_care}
],
  };

//////////////////////////// cognitive reflection test /////////////////

var cog_ref = {
  type: 'survey-text',
  questions: [
    {prompt: "A bat and a ball cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost?", name: 'cog_ref_1', rows: 5, columns: 40}, 
    {prompt: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", name: 'cog_ref_2', rows: 5, columns: 40},
    {prompt: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?", name: 'cog_ref_3', rows: 5, columns: 40}
],
  randomize_question_order: true
  };

//////////////////////////// religious beliefs /////////////////

var religious_internalization = {
  type: 'survey-likert',
  preamble:"Why do you engage in this activity?",
  questions: [
    {prompt: `Because it connects well with what I want in life.`, name: 'relig_act_1', labels: scale_1},
    {prompt: `Because it is in harmony with my way of life.`, name: 'relig_act_2', labels: scale_1},
    {prompt: `Because it corresponds well with how I approach other things in life.`, name: 'relig_act_3', labels: scale_1},
    {prompt: `Because it is in accordance with my vision of life.`, name: 'relig_act_4', labels: scale_1},
    {prompt: `Because it is a meaningful activity to me.`, name: 'relig_act_5', labels: scale_1},
    {prompt: `Because I find it a personally valuable attitude.`, name: 'relig_act_6', labels: scale_1},
    {prompt: `Because I fully endorse it.`, name: 'relig_act_7', labels: scale_1},
    {prompt: `Because I would feel bad if I don’t.`, name: 'relig_act_8', labels: scale_1},
    {prompt: `Because I would feel guilty if I don’t.`, name: 'relig_act_9', labels: scale_1},
    {prompt: `Because I want others to see me as a worthy person.`, name: 'relig_act_10', labels: scale_1},
    {prompt: `Because I would feel ashamed if I didn’t do it.`, name: 'relig_act_11', labels: scale_1},
    {prompt: `Because I feel I’m expected to do so.`, name: 'relig_act_12', labels: scale_1},
    {prompt: `Because I feel pushed by others.`, name: 'relig_act_13', labels: scale_1},
    {prompt: `Because others put me under pressure to do so.`, name: 'relig_act_14', labels: scale_1}
],
  };

    //////////////////////////// religious internalization /////////////////
  
var relig_act = {
  type: 'survey-text',
  preamble: `Please list an activity that you think is the most important religious activity in which you express your religious beliefs.`,
  questions:[
    {prompt: "The most important activity that you engage in is:", name: 'relig_act', columns: 5, rows: 40},
  ],
  };

var religious_internalization = {
  type: 'survey-likert',
  preamble:"Why do you engage in this activity?",
  questions: [
    {prompt: `Because it connects well with what I want in life.`, name: 'relig_act_1', labels: scale_1},
    {prompt: `Because it is in harmony with my way of life.`, name: 'relig_act_2', labels: scale_1},
    {prompt: `Because it corresponds well with how I approach other things in life.`, name: 'relig_act_3', labels: scale_1},
    {prompt: `Because it is in accordance with my vision of life.`, name: 'relig_act_4', labels: scale_1},
    {prompt: `Because it is a meaningful activity to me.`, name: 'relig_act_5', labels: scale_1},
    {prompt: `Because I find it a personally valuable attitude.`, name: 'relig_act_6', labels: scale_1},
    {prompt: `Because I fully endorse it.`, name: 'relig_act_7', labels: scale_1},
    {prompt: `Because I would feel bad if I don’t.`, name: 'relig_act_8', labels: scale_1},
    {prompt: `Because I would feel guilty if I don&#39;t.`, name: 'relig_act_9', labels: scale_1}, 
    {prompt: `Because I want others to see me as a worthy person.`, name: 'relig_act_10', labels: scale_1},
    {prompt: `Because I would feel ashamed if I didn’t do it.`, name: 'relig_act_11', labels: scale_1},
    {prompt: `Because I feel I’m expected to do so.`, name: 'relig_act_12', labels: scale_1},
    {prompt: `Because I feel pushed by others.`, name: 'relig_act_13', labels: scale_1},
    {prompt: `Because others put me under pressure to do so.`, name: 'relig_act_14', labels: scale_1}
  ],
  randomize_question_order: true
  };

 // transition page from moderator surveys to demographic survey
 var transition = {
  type: 'instructions',
  pages: [
    `Next, you will answer some demographic quesions. <br><br> 
    
    Click &#39;Next&#39; when you are ready to begin.`
  ],
  show_clickable_nav: true
}

 //////////// demographic survey items ///////////////////

// age
var age = {
  type: 'survey-text',
  questions: [
    {prompt: "How old are you? (leave blank if prefer not to say)", name: 'age'}
  ]};

// gender
var gender = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "What is your gender identity?", 
      options: ["Female", "Male", "Other", "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'gender'
    }
  ]};

// ethnicity
var ethnicity = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Please select which of the following best describes you.", 
      options: [
        "American Indian/ Alaskan Native", 
        "Asian/ Asian American", 
        "Native Hawaiian/ Pacific Islander", 
        "Black/ African American", 
        "White/ Caucasian", 
        "Hispanic/ Latin American", 
        "More than one race", 
        "Other",
        "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'ethnicity'
    }
  ]};

// language
var language = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Which is your primary language?", 
      options: [
        "English", 
        "Spanish", 
        "Mandarin", 
        "Hindi", 
        "Arabic", 
        "Portuguese", 
        "Bengali", 
        "Russian", 
        "Japanese", 
        "Other",
        "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'language'
    }
  ]};

// sexuality
var sexuality = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Which of the following best describes your sexual orientation?", 
      options: [
        "Exclusively heterosexual", 
        "Predominantly heterosexual/ Infrequently heterosexual", 
        "Predominantly heterosexual but frequently homosexual", 
        "Equally heterosexual and homosexual", 
        "Predominantly homosexual but frequently heterosexual", 
        "Predominntly homosexual/ Infrequently heterosexual", 
        "Exlusively homosexual",
        "Other",
        "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'sexual_orientation'
    }
  ]};

// education
var education = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Please indicate your highest level of education.", 
      options: [
        "Elemantary/ Grammar School", 
        "Middle School",
        "High School or Equivalent",
        "Vocational/ Technical School (2 years)",
        "Some College",
        "College or University (4 years)",
        "Master\'s Degree (MS, MA, MBA, etc.)",
        "Doctoral Degree (PhD)",
        "Professional Degree (MD, JD, etc.)", 
        "Other",
        "Prefer not to say"],
      horizontal: false,
      required: true,
      name: 'education'
    }
  ]};

// living area
var area = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "Which of the following best describes the area you live in?", 
      options: ["Urban", "Suburban", "Rural", "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'area'
    }
  ]};

//marital status
var status = {
  type: 'survey-multi-choice',
  questions: [    
    {
      prompt: "Which of the following best describes your marital status?", 
      options: ["Never Married", "Married", "Widowed", "Divorced", "Prefer not to say"], 
      horizontal: false,
      required: true,
      name: 'status'
    }
  ]};
  
// number of children
var children = {
  type: 'survey-multi-choice',
  questions: [   
    {
      prompt: "How many children do you have?", 
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "more than 10", "Prefer not to say"], 
      horizontal: true,
      required: true,
      name: 'children'
    }
  ]};

//debrief questions
var debrief_1 = {
  type: 'survey-text',
  questions: [
    {prompt: "Do you have any general comments about the study? Continue when finished, or if you have no comments.", name: 'debrief_1', rows: 5, columns: 40}, 
],
  };

var debrief_2 = {
  type: 'survey-text',
  questions: [
    {prompt: "Did anything about today's study strike you as odd or strange?", name: 'debrief_2', rows: 5, columns: 40}, 
],
  };

var debrief_3 = {
  type: 'survey-text',
  questions: [
    {prompt: 
      `Sometimes people think that psychology experiments are all about tricks and behind the scenes stuff; 
      did you have any thoughts that maybe there were some things going on that we didn't tell you about? If so, what and when?`, name: 'debrief_3', rows: 5, columns: 40}, 
],
  };

  // debrief  
  var debrief = {
    type: 'instructions',
    pages: [
      `Dear Participant, <br><br> 

      During this study, you were asked to read statements made by a variety of different people, complete a memory task, and answer several 
      questionnaires. However, we withheld some information about the actual purpose of the study, which was to understand the attentional 
      processes and cognitive capacities underlying altruistic behavior.<br><br>

      We were interested in some problems that we couldn&#39;t discuss with you in advance.<br><br>
      Our major concern in this study is with understanding peoples&#39; memory and motivational processes when presented information about needy 
      others. While we told you that the study was about understanding how people interpret the statements made by social actors, 
      in reality we were interested in your performance on the memory task. Our main hypothesis was that people who possess motivations to 
      help others would have better recall on the memory task for those who are in need.<br><br>
       
      We couldn&#39;t tell you the true purpose of the study because if we did, then the cause of your altruistic behavior would be unknown—that is, 
      we would not know whether your performance on the memory task was based on your knowledge of the true purpose of the study. Now that you see 
      how elaborate the study was and the nature of the ideas we are investigating, I hope you can understand that we couldn&#39;t have tested what we 
      wanted to test without keeping you in the dark about some of the elements of the study. <br><br>
      
      You are reminded that your original consent document included the following information: Participation is voluntary. You may feel free to say 
      no to any activity that makes you feel uncomfortable. Participants who withdraw from the study will not be penalized in any way. 
      Your answers will be kept confidential. They will only be seen by the research team or by auditing or compliance officials who are bound to 
      the same confidentiality provisions. If you have any concerns about your participation or the data you provided in light of this disclosure, 
      please discuss this with us. We will be happy to provide any information we can to help answer questions you have about this study. <br><br>
      
      We ask that you please not reveal anything about this experiment to your friends or anyone else you know who might also participate in the 
      study down the road. It may be tempting to tell other people, but anyone who knows about the experiment ahead of time won&#39;t give us valid 
      data.<br><br>
      
      If your concerns are such that you would now like to have your data withdrawn, and the data is identifiable, we will do so.<br><br>
      
      If you have questions about your participation in the study, please contact Dr. Eric Pedersen, at eric.j.pedersen@colorado.edu.<br><br>
     
      If you have questions about your rights as a research participant, you may contact the University of Colorado, Boulder Human Research and 
      IRB Office at 303-735-3702.<br><br>

      Please again accept our appreciation for your participation in this study.<br><br> `
    ],
    show_clickable_nav: true
  }

  const selectionFaces = random.shuffle(faces);
  const recall_tasks = random.shuffle(statementSelections.flat()).map(statement => ({
    type: 'multi-image-selection',
    image_paths: selectionFaces,
    prompt: statement,
  }));

  const surveys = [
    oxford_utilitarian,
    principle_of_care,
    empathy_index,
    moral_identity,
    hexaco,
    life_history_1,
    life_history_2,
    life_history_3,
    life_history_4,
    parent_birth,
    alive_mom,
    no_death_mom,
    dad_alive,
    no_death_mom,
    siblings,
    parent_divorce,
    age_divorce,
    live_with_step_dad,
    age_divorce_step_mom,
    live_with_step_mom,
    age_divorce_step_mom,
    foster_care,
    abuse,
    abuse,
    stability,
    disease,
    change_schools,
    care,
    cog_ref,
    religious_internalization,
    relig_act,
    religious_internalization
  ];

  const demographicQuestions = [
    age,
    gender,
    ethnicity,
    language,
    sexuality,
    education,
    area,
    status,
    children
  ];

  const debriefs = [
    debrief_1,
    debrief_2,
    debrief_3,
    debrief,
  ];

  const timeline = [
    consent,
    instructions,
    face_stimulus_procedure,
    transition_1,  
    distractor_task,
    transition_2,
    ...recall_tasks,
    transition_3,
    transition,
    ...surveys,
    ...demographicQuestions,
    ...debriefs,
  ];

  window.jatos.onLoad(() => {
    const sonaCode = window.jatos.urlQueryParameters.sonaCode;
    window.jatos.studySessionData.sonaCode = sonaCode ? sonaCode : 'none';

    jsPsych.init({
      timeline: timeline,
      on_finish: data => {
        window.jatos.submitResultData(data.json(), window.jatos.startNextComponent);
      }
    });
  });
});
