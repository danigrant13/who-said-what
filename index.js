var preloadedImages = new Array();
const preloadImages = (images) => {
  for (i = 0; i < images.length; i++) {
    preloadedImages[i] = new Image();
    preloadedImages[i].src = images[i];
    preloadedImages[i].onload = () => {};
  }
};

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
  ];

  // call all statements
  var covidNeed = [
    ['Depression can be really unpredictable, and being stuck inside because of COVID-19 has been really rough. I wish I could talk to someone about it in person.', 
    'Some days I am so depressed I can’t even get out of bed. With the city stay-at-home recommendation, this morning it took me a few hours to finally get up to make breakfast.', 
    'Because of the COVID-19 epidemic, my anxiety has interfered with all aspects of my life. I’ve had insomnia and a debilitating fear of going to the grocery store.'],
   
    ['I’ve been feeling really alone since college shifted online last semester. I wish I had someone to talk to about how hard it is living in a new city shut down by Coronaivirus.', 
    'I just feel like my life is falling apart right now. I feel so down all the time, and just wish I had someone to hang out with to take my mind off Coronavirus.', 
    'I often feel really lonely and anxious since Coronavirus shut down the city, and all my close friends who I could hang out with to distract me live really far away.'],    
   
    ['I’ve been really sick with COVID-19  the last couple of days. It’s rough because I live alone, so I still have to get up and walk around even though I feel exhausted.', 
    'I’m nervous about falling asleep because there is no one around to check-in on me while I’m recovering. What if I get dehydrated and need to go to the ER?', 
    'I don’t own a car, so I know if I got ever sick enough with Coronavirus I would have to call an ambulance to get to the hospital.'],
   
    ['I’ve really missed my grandmother since she passed away from COVID-19. It’s been hard because I’m basically planning her funeral on my own.', 
    `Since my grandmother passed away, there are some nights where I just sit and cry because I miss her so much. It would be nice if I had someone there with me, 
    <br>but I don’t want to risk spreading Coronavirus.`, 
    'My family has been so stressful to talk to since my grandmother passed away. We can’t mourn in person together, and everyone is always either arguing or really sad.'],
   
    ['A few weeks ago my dad was diagnosed with Coronavirus. I asked him to move in with me so I could help him recover. Knowing he could be gone soon makes me feel hopeless.', 
    'I love my dad so much, but helping him out through Coronavirus recovery has been such a struggle. Each day he seems worse, and I feel so helpless.', 
    'I feel so much guilt sometimes taking care of my dad while he fights Coronavirus. I want to support him, but I often feel the weight of the world on my shoulders.'],
   
    ['For the last few months, it has been difficult to pay for both rent and my daughter’s daycare. Being a single parent during Coronavirus can be a struggle sometimes.', 
    'With no family nearby, I have to pay for childcare. Most of the time I can’t afford to pay for even a few extra hours to have some time to myself. Sometimes I feel so burnt out.', 
    'Money has been really tight lately because of COVID-19, and I just lost my job. I know I’ll be struggling with finances for a while, but I’m happy to be with my daughter so much.'],
   
    ['Two months ago, the cafe I worked for closed because of COVID-19, and I was laid off. I’m worried I will run out of savings to pay rent before I find another job.', 
    'Recently, I applied for unemployment, but I haven’t received a response yet. It seems like everyone is applying for it, so I’m worried I won’t even be considered.', 
    'Some businesses in my area are reopening. I’ve applied to every job position I’ve learned about, but haven’t received a single call back.'],
  ];

  var personalNeed = [
    ['Depression can be really unpredictable, and the last few days have been rough. I wish I could talk to someone about it.',
     'Some days I am so depressed I can’t even get out of bed. This morning it took me a few hours to finally get up to make breakfast.', 
     'My anxiety can interfere with all aspects of my life. I’ve had insomnia and a debilitating fear of going to the grocery store.'],

    ['I’ve been feeling really alone since I moved for college last semester. I wish I had someone to talk to about how hard it is living in a new city.', 
    'I just feel like I’m failing in all parts of my life right now. I feel so down all the time, and just wish I had someone to hang out with who is encouraging.', 
    'I often feel really lonely and anxious when I go out into the city, and all my close friends who could distract me from these feelings live really far away.'],

    ['I’ve been really ill with food poisoning the last few days. It’s rough because I live alone, so I still have to get up and walk around even though I feel exhausted.', 
    `I’m so nervous about falling asleep with food poisoning because there is no one around to check-in on me while I’m recovering. 
    <br>What if I get dehydrated and need to go to the ER?`, 
    'I don’t own a car, so I know if I ever got sick enough from food poisoning I would have to call an ambulance to get to the hospital.'],

    ['I’ve really missed my grandmother since she passed away. It’s been hard because I’m basically planning her funeral on my own.', 
    'Since my grandmother passed away there are some nights where I just sit and cry because I miss her so much. It would be nice if I had someone there with me.', 
    'My family has been so stressful since my grandmother passed away. Everyone is always either arguing or really sad.'],

    ['Last year my dad was diagnosed with cancer. I asked him to move in with me so I could help him through treatment. Knowing he could be gone soon makes me feel hopeless.', 
    'I love my dad so much, but helping him out through chemotherapy has been such a struggle. Each day he seems worse, and I feel so helpless.', 
    'I feel so much guilt sometimes taking care of my dad while he fights cancer. I want to support him, but I often feel the weight of the world on my shoulders.'],

    ['For the last few months, it has been difficult to pay rent and for my daughter’s daycare. Being a single parent can be a struggle sometimes.', 
    'With no family nearby, I have to pay for childcare. Most of the time I can’t afford to pay for even a few extra hours to have some time to myself. Sometimes I feel so burnt out.', 
    'Because money has been so tight lately, I took on a second job. I know it will help with finances, but I’m broken up about being away from my daughter so much.'],

    ['Two months ago, the cafe I worked for closed down and I was laid off. I’m so worried I will run out of savings for paying rent before I find another job.', 
    'Recently, I applied for unemployment, but I haven’t received a response yet. I’m worried I won’t even be considered.', 
    'I’ve applied to every job position I’ve learned about, but haven’t received a single call back.'],
  ];

  var abstractNeed = [
    ['I’ve had friends in the past who have struggled with mental health issues. They told me sometimes just sitting there and being with them can be a big help.', 
    'I try to remember that some people may struggle a lot with things I don’t find difficult at all. Simply motivating yourself to get out of bed can be a challenge.', 
    `I need to remember my strengths and limitations when others are struggling with their mental health. 
    <br>Sometimes I can help, but other times I need to trust that someone better equipped will help.`],
    
    ['I read an article the other day that said loneliness is one of the most common struggles for people. It can even cause a lot of health problems over time.', 
    'It makes sense then that loneliness is a big problem for new college students. They see everyone else having fun around them, but don’t feel connected yet.', 
    `I need to remember when I meet new people that while I might be comfortable living here because I’ve been here so long, 
    <br>they may be uncertain and searching for new friends.`],

    ['I think getting sick with fever and nausea would be the absolute worst, especially when you don’t have anyone to help take care of you.', 
    'Having foodborne illness would be terrible. I’ve heard you can get so dehydrated that you have to go to the ER. That would be so scary.', 
    'If I were ever that sick, I would be relly nervous about having to call an ambulance even if I thought I needed to go to the hospital.'],

    ['Sometimes I struggle with the idea that terrible things happen to people all of the time, and that there&apos;s pain everywhere in the world.', 
    'There are so many people struggling in the world with the loss of loved ones that I often get overwhelmed just thinking about it.', 
    'I can’t imagine how difficult it would be to lose a family member. I’ve never lost anyone close to me, but just the thought of it is really scary.'],

    ['I read recently that volunteering for an organization like a retirement home or for a hospital can often connect you with others in your community and be very fulfilling.', 
    'I know a few people who have time to volunteer for a local non-profit one day a week. They say they really enjoy it.    ', 
    'Helping provide for others can often bring a lot of meaning to a person’s life. Though, I bet it can also be really overwhelming too.'],

    ['I sometimes wonder what it’s like to be a single parent. It must be a real struggle to balance work and taking care of a child.', 
    'I’ve heard that single parents often struggle with feeling burnt out. If you don’t have a baby sitter or family nearby, then going non-stop all the time must be really exhausting.', 
    `Often with only one source of income, I bet being a single parent is quite a struggle. I’ve heard some parents often get a second job. 
    <br>That must be horrible being away from the kids so much.`],

    [`I noticed the other day that my grocery store put on a fundraiser by asking shoppers to buy food for a local food drive rather than just donating money. 
    <br>I thought that was a unique idea.`, 
    'There are a lot of people struggling these days trying to get back up on their feet. I’d like to learn more about the charities that help people with these problems.', 
    'Sometimes just giving a dollar to someone in need when walking down the street can make that person’s day. Who knows, it could make your day too.'],
  ];

  var aphorism = [
    ['Sometimes I think our world is overly complicated. I feel like I make thousands of decisions everyday, and after a while, it gets really exhausting.', 
    'Life is uncertain and full of many day-to-day challenges and obstacles. We never know what each day will bring.', 
    `Even though the world can feel overwhelming, I am fortunate enough to live in a place where I can think about all kinds of future possibilities, 
    <br>whether than be for my career or personal life.`],

    ['You will never know what new people will enter your life. That is why you must always keep an open mind.', 
    'I do my best not to give up even when I am so tired of working for something. In those moments I let myself take a break to rejuvenate my strength.', 
    'We find ourselves in this world, trying to figure out how we should act, and what we should do. It&#39;s hard to know the right courses of action.'],

    ['Separating raw meat, poultry, and seafood from ready-made-food is essential because it can cause food-borne illness.', 
    'Anyone can get food poisoning, but some are at a higher risk. When they do, it’s good to stay and take care of them just in case they need to go to the ER.', 
    'Often it’s not food poisoning itself that makes a person need an ambulance, it’s the body’s response causing dehydration that makes them need hospital care.'],

    ['Only people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.', 
    'While grief is fresh, every attempt to divert only irritates. You must wait until it is digested, and then amusement will dissipate the remains of it.', 
    'There is no shame in holding on to the grief, so long as you make room for other things and people you love too.'],

    ['You can be a victim of cancer or a survivor of cancer. You can let it conquer you, or you can conquer it. It’s all a mindset.', 
    'The secret of health for both mind and body is not to mourn for the past, worry about the future, or anticipate troubles, but to live in the present.', 
    'Cancer is a journey, but you walk the road alone. There are many places to stop along the way and get nourishment - you just have to be willing to take it.'],

    ['Being a single parent is twice the work, stress, and tears - but also twice the hugs, love, and pride.', 
    'A person doesn’t often set out to be a single parent, and it takes a strong person to be a single parent, taking on two roles.', 
    `The birth of a child and parenthood are not things that a person can be trained to do. Even if you have a good example in your own parents, 
    <br>nobody teaches you how to be a really great parent.`],

    ['People often say money doesn’t provide happiness, but everyone still wants to prove it to themselves.', 
    'Money is numbers, and numbers never end. If it takes money to be happy, your search for happiness will never end.', 
    'Time is always more valuable than money. You can always make more money after spending it, but you can never regain the time that you lost.'],
  ];


  // condition pairs
  const conditions = [
    [aphorism, covidNeed],
    [personalNeed, abstractNeed],
    [personalNeed, aphorism],
    [abstractNeed, aphorism]
  ];

  const statementGroups = random.sampleWithoutReplacement(conditions, 1)[0];
  const statementSelections = random.shuffle(statementGroups.map(group => random.sampleWithoutReplacement(group, 4)));
  const femaleSample = random.sampleWithoutReplacement(females, 4);
  const maleSample = random.sampleWithoutReplacement(males, 4);

  preloadImages(femaleSample.concat(maleSample));

  console.log(preloadedImages)
  const femalesWithStatements = [
    femaleSample.slice(0, 2).map((face, i ) => ({ face, statements: statementSelections[0][i] })),
    femaleSample.slice(2, 4).map((face, i) => ({ face, statements: statementSelections[1][i] })),
  ].flat();

  const malesWithStatements = [
    maleSample.slice(0, 2).map((face, i) => ({ face, statements: statementSelections[0][i + 2] })),
    maleSample.slice(2, 4).map((face, i) => ({ face, statements: statementSelections[1][i + 2] })),
  ].flat();

  const facesWithStatements = random.shuffle(malesWithStatements.concat(femalesWithStatements));

  const trialData = [0, 1, 2].map(i =>
    random.shuffle(facesWithStatements).map(({ face, statements }) => ({ face, statement: statements[i] }))
  ).flat();

  const participantNumber = crypto.randomUUID();

  // declare the block
  var consent = {
    type:'custom-external-html',
    data: { experiment_section: 'consent', participantNumber },
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
    data: { experiment_section: 'instructions' },
    pages: [
      'Welcome to the study!<br><br>',
      'In this study you will observe an interaction among eight individiduals discussing a topic of interest.<br><br>',
      'The discussion is presented as a series of slides, each of which contains a photo of a single speaker, along with the text of a statement made by that speaker.<br><br>',
      'Please attend carefully to the discussion and form impressions of the speakers.<br><br>',
      'The study will begin on the next page. <br><br> Press &#39;Next&#39; to begin the study.<br><br>'
    ],
    show_clickable_nav: true
  };

  // stimulus presentation
  var faceStimulusProcedure = {
    timeline: [
        {
            type: 'html-keyboard-response',
            data: { experiment_section: 'face_stimulus_procedure_blank_page' },
            stimulus: ' ',
            choices: jsPsych.NO_KEYS,
            trial_duration: 500
        },
        {
            type: 'image-keyboard-response',
            data: {
              experiment_section: 'face_stimulus_procedure',
              message: jsPsych.timelineVariable('statement'),
            },
            stimulus: jsPsych.timelineVariable('face'),
            stimulus_width: 600,
            maintain_aspect_ration: true,
            choices: jsPsych.NO_KEYS,
            trial_duration: 15000,
            prompt: () => `<p>${jsPsych.timelineVariable('statement', true)}</p>`
        }
    ],
    timeline_variables: trialData,
  };

  // transition page from experimental task to distractor task
  var transition1 = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in the impression formation task! Now you will move on to the next task.
      <br><br> When you are ready to move on, click &#39;Next&#39;.<br><br>`,

      `For the next task, you will have 60 seconds to list as many US state capitals as you can recall. 
      <br><br> When you are ready to begin, click &#39;Next&#39;.<br><br>`
    ],
    show_clickable_nav: true
  };

  //   distractor task   
  var distractorTask = {
    type: 'survey-html-javascript-form',
    data: { experiment_section: 'distractor_task' },
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
      }, 60000)
    `
  };

  // transition page from distractor task to recall task
  var transition2 = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in that task. There is one last task for you to do. On the next page we will describe this task to you.
      <br><br> Click &#39;Next&#39; when you are ready to read the instructions.<br><br>`,

      `Next, you will take part in a recall task. You will see a screen with all the faces that were presented to you in the first task.<br>
      The statements each person said will appear sequentially. Please reread each statement and try to recall which person said it.<br>
      To choose the person you think said the presented statement, simply click their picture.<br><br> 
      When you are ready to begin, click &#39;Next&#39;.<br><br>`
    ],
    show_clickable_nav: true
  };

 // transition page from recall task to moderator surveys
  const selectionFaces = random.shuffle(maleSample.concat(femaleSample));
  const recallTasks = random.shuffle(statementSelections.flat()).map(statement => ({
    type: 'multi-image-selection',
    data: { experiment_section: 'recall_tasks' },
    image_paths: selectionFaces,
    prompt: statement,
  }));

 // transition page from recall task to moderator surveys
  var redirectWarningPage = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in those two tasks. Next, you will answer some survey questions.
       <br><br> Click &#39;Next&#39; when you are ready to be redirected.<br><br>`
    ],
    show_clickable_nav: true
  };

  const timeline = [
    consent,
    instructions,
    faceStimulusProcedure,
    transition1,
    distractorTask,
    transition2,
    ...recallTasks,
    redirectWarningPage,
  ];

  window.jatos.onLoad(() => {
    const sonaCode = window.jatos.urlQueryParameters.sonaCode;
    window.jatos.studySessionData.sonaCode = sonaCode ? sonaCode : 'none';

    jsPsych.init({
      timeline: timeline,
      on_finish: data => {
        const redirectUrl = `https://ucsas.qualtrics.com/jfe/form/SV_7akX7f1MBgXCqcm?participantNumber=${participantNumber}&sonaCode=${sonaCode}`;
        window.jatos.endStudyAndRedirect(
          redirectUrl,
          data.json(),
        );
      }
    });
  });
});
