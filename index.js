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
  var covid_need = [
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

  var personal_need = [
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

  var abstract_need = [
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
    [aphorism, covid_need],
    [personal_need, abstract_need],
    [personal_need, aphorism],
    [abstract_need, aphorism]
  ];

  const statementGroups = random.sampleWithoutReplacement(conditions, 1)[0];
  const statementSelections = random.shuffle(statementGroups.map(group => random.sampleWithoutReplacement(group, 4)));
  const femaleSample = random.sampleWithoutReplacement(females, 4);
  const maleSample = random.sampleWithoutReplacement(males, 4);

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

  // declare the block
  var consent = {
    type:'custom-external-html',
    data: { experiment_section: 'consent' },
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
  var face_stimulus_procedure = {
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
  var transition_1 = {
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
  var distractor_task = {
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
  var transition_2 = {
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
  var transition_3 = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in that task. Next, you will answer some survey questions.
       <br><br> Click &#39;Next&#39; when you are ready to begin.<br><br>`
    ],
    show_clickable_nav: true
  };


  ////////////////////////////// Generative Behavior Check-list /////////////////////////////////////

  var freq_behavior = [
    "I have not performed the behavior during the past two months",
    "I have performed the behavior one time during the past two months",
    "I have performed the behavior more than once during the past two months"
  ]

  var GB_checklist = {
    type: 'survey-likert',
    data: { experiment_section: 'gb_checklist' },
    preamble: `<br><br> Below is a list of specific behaviors or acts. Over the past two months, it is likely that you may have performed some of these behaviors. 
    <br> It is also likely that you have not performed many of them as well during this time. Please consider each behavior to determine whether or not you have performed the behavior during the past two months. 
    <br> If you have performed the behavior, please try to determine how many times you have performed it during the past two months. For each behavior, provide one of the following ratings.
   `,
    questions:[
      {prompt: "Taught somebody a skill.", name: 'gen_behavior_1', required: true, labels: freq_behavior},
      {prompt: "Served as a role model for a young person.", name: 'gen_behavior_2', required: true, labels: freq_behavior},
      {prompt: "Told somebody about my own childhood.", name: 'gen_behavior_3', required: true, labels: freq_behavior},
      {prompt: "Made a decision that influenced many people.", name: 'gen_behavior_4', required: true, labels: freq_behavior},
      {prompt: "Produced a plan for an organization or group outside my own family.", name: 'gen_behavior_5', required: true, labels: freq_behavior},
      {prompt: "Drew upon my past experiences to help a person adjust to a situation.", name: 'gen_behavior_6', required: true, labels: freq_behavior},
      {prompt: "Did something that other people considered to be unique and important.", name: 'gen_behavior_7', required: true, labels: freq_behavior},
      {prompt: "Sewed or mended a garment or other object.", name: 'gen_behavior_8', required: true, labels: freq_behavior},
      {prompt: "Restored or rehabbed a house, part of a house, a piece of furniture, etc.", name: 'gen_behavior_9', required: true, labels: freq_behavior},
      {prompt: "Provided constructive criticism about somebody&#39;s performance.", name: 'gen_behavior_10', required: true, labels: freq_behavior},
      {prompt: "Performed a community service.", name: 'gen_behavior_11', required: true, labels: freq_behavior},
    ],
    randomize_question_order: true,
    };


  //////////////////////////////////////////////// principle of care scale /////////////////////////////////////

  var scale_2 = [
    "Strongly disagree", 
    "Disagree", 
    "Neither agree nor disagree", 
    "Agree", 
    "Strongly agree"
  ]
  
  var principle_of_care = {
    type: 'survey-likert',
    data: { experiment_section: 'principle_of_care' },
    preamble: "<br><br>Please indicate below the degree to which you agree with the following statements.",
    questions: [
      {prompt: "People should be willing to help others who are less fortunate.", name: 'care_1', required: true, labels: scale_2},
      {prompt: "Everybody in this world has a responsibility to help others when they need assistance. ", name: 'care_2', required: true, labels: scale_2},
      {prompt: "These days, people need to look after themselves and not overly worry about others. ", name: 'care_3R', required: true, labels: scale_2},
      {prompt: "When people are less fortunate, it is important to help them even if they are very different from us. ", name: 'care_4', required: true, labels: scale_2},
      {prompt: "It is important to help one another so that the community in general is a better place. ", name: 'care_5', required: true, labels: scale_2},
      {prompt: "Personally assisting people in trouble is very important to me. ", name: 'care_6', required: true, labels: scale_2},
      {prompt: "When thinking about helping people in trouble, it is important to consider whether the people are like us or not. ", name: 'care_7', required: true, labels: scale_2},
      {prompt: "We should not care too much about the needs of people in other parts of the world.", name: 'care_8R', required: true, labels: scale_2}
  ],
  randomize_question_order: true,
  };

  //////////////////////////////////////////  moral identity scale ////////////////////////////////////////////

/*   var scale_2 = [
    "Strongly disagree", 
    "Disagree", 
    "Neither agree nor disagree", 
    "Agree", 
    "Strongly agree"
  ] */
  
  var moral_identity = {
    type: 'survey-likert',
    data: { experiment_section: 'moral_identity' },
    preamble: `<br><br>Listed below are some characteristics that may describe a person: <br>
    <b>Caring, compassionate, fair, friendly, generous, helpful, hardworking, honest, and kind.</b><br>
    The person with these characteristics could be you or it could be someone else. <br>
    For a moment, visualize in your mind the kind of person who has these characteristics. <br>
    Imagine how that person would think, feel, and act. When you have a clear image of what this person would be like, answer the following questions.`,
    questions: [
      {prompt: "It would make me feel good to be a person who has these characteristics.", name: 'moral_1', required: true, labels: scale_2},
      {prompt: "Being someone who has these characteristics is an important part of who I am.", name: 'moral_2', required: true, labels: scale_2},
      {prompt: "I often wear clothes that identify me as having these characteristics.", name: 'moral_3', required: true, labels: scale_2},
      {prompt: "I would be ashamed to be a person who had these characteristics.", name: 'moral_4R', required: true, labels: scale_2},
      {prompt: "The types of things I do in my spare time (e.g., hobbies) clearly identify me as having these characteristics.", name: 'moral_5',required: true, labels: scale_2},
      {prompt: "The kinds of books and magazines that I read identify me as having these characteristics.", name: 'moral_6', required: true, labels: scale_2},
      {prompt: "Having these characteristics is not really important to me.", name: 'moral_7R', required: true, labels: scale_2},
      {prompt: "The fact that I have these characteristics is communicated to others by my membership in certain organizations.", name: 'moral_8', required: true, labels: scale_2},
      {prompt: "I am actively involved in activities that communicate to others that I have these characteristics.", name: 'moral_9', required: true, labels: scale_2},
      {prompt: "Having these characteristics is not really important to me.", name: 'moral_11R', required: true, labels: scale_2},
      {prompt: "I often buy products that communicate the fact that I have these characteristics.", name: 'moral_12', required: true, labels: scale_2},
      {prompt: "The kinds of books and magazines that I read identify me as having these characteristics.", name: 'moral_13', required: true, labels: scale_2}
    ],
    randomize_question_order: true,
    };

    ////////////////////////////////////////////////////////// Life Orientation Scale  /////////////////////////////////////////////////////////

    var scale_8 = [
      "I agree a lot",
      "I agree a little",
      "I neither agree nor disagree",
      "I disagree a little",
      "I disagree a lot"
    ]

    var life_orientation = {
      type: 'survey-likert',
      data: { experiment_section: 'life_orientation' },
      preamble: `<br><br>Please be as honest and accurate as you can throughout.  
      <br> Try not to let your response to one statement influence your responses to other statements.  
      <br> There are no &#39;correct&#39; or &#39;incorrect&#39; answers.  Answer according to your own feelings, rather than how you think &#39;most people&#39; would answer`,
      questions: [
        {prompt: "In uncertain times, I usually expect the best.", name: 'life_orient_1', required: true, labels: scale_8},
        {prompt: "If something can go wrong for me, it will.", name: 'life_orient_2R', required: true, labels: scale_8},
        {prompt: "I&#39;m always optimistic about my future.", name: 'life_orient_3', required: true, labels: scale_8},
        {prompt: "I hardly ever expect things to go my way.", name: 'life_orient_4R', required: true, labels: scale_8},
        {prompt: "I rarely count on good things happening to me.", name: 'life_orient_5R', required: true, labels: scale_8},
        {prompt: "Overall, I expect more good things to happen to me than bad.", name: 'life_orient_6', required: true, labels: scale_8},
      ],
      randomize_question_order: true,
    };


 ///////////////////////////////////////////////////////////////  HEXACO  scale ///////////////////////////////////////////////////////////////////

/* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */


  var hexaco_1 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: `<br><br>On the following pages, you will find a series of statements about you. 
    <br>Please read each statement and decide how much you agree or disagree with that statement.`,
    questions: [
      {prompt: "I would be quite bored by a visit to an art gallery.", name: 'hexaco_1R', required: true, labels: scale_2},
      {prompt: "I plan ahead and organize things, to avoid scrambling at the last minute.", name: 'hexaco_2', required: true, labels: scale_2},
      {prompt: "I rarely hold a grudge, even against people who have badly wronged me.", name: 'hexaco_3', required: true, labels: scale_2},
      {prompt: "I feel reasonably satisfied with myself overall.", name: 'hexaco_4', required: true, labels: scale_2},
      {prompt: "I would feel afraid if I had to travel in bad weather conditions.", name: 'hexaco_5', required: true, labels: scale_2},
      {prompt: "I wouldn&#39;t use flattery to get a raise or promotion at work, even if I thought it would succeed.", name: 'hexaco_6', required: true, labels: scale_2},
      {prompt: "I&#39;m interested in learning about the history and politics of other countries.", name: 'hexaco_7', required: true, labels: scale_2},
      {prompt: "I often push myself very hard when trying to achieve a goal.", name: 'hexaco_8', required: true, labels: scale_2},
      {prompt: "People sometimes tell me that I am too critical of others.", name: 'hexaco_9R', required: true, labels: scale_2},
      {prompt: "I rarely express my opinions in group meetings.", name: 'hexaco_10R', required: true, labels: scale_2},
    ],
    randomize_question_order: true,
  };

  /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_2 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "I sometimes can&#39;t help worrying about little things.", name: 'hexaco_11', required: true, labels: scale_2},
    {prompt: "If I knew that I could never get caught, I would be willing to steal a million dollars.", name: 'hexaco_12R', required: true, labels: scale_2},
    {prompt: "I would enjoy creating a work of art, such as a novel, a song, or a painting.", name: 'hexaco_13', required: true, labels: scale_2},
    {prompt: "When working on something, I don&#39;t pay much attention to small details.", name: 'hexaco_14R', required: true, labels: scale_2},
    {prompt: "People sometimes tell me that I&#39;m too stubborn.", name: 'hexaco_15R', required: true, labels: scale_2},
    {prompt: "I prefer jobs that involve active social interaction to those that involve working alone.", name: 'hexaco_16', required: true, labels: scale_2},
    {prompt: "When I suffer from a painful experience, I need someone to make me feel comfortable.", name: 'hexaco_17', required: true, labels: scale_2},
    {prompt: "Having a lot of money is not especially important to me.", name: 'hexaco_18', required: true, labels: scale_2},
    {prompt: "I think that paying attention to radical ideas is a waste of time.", name: 'hexaco_19R', required: true, labels: scale_2},
    {prompt: "I make decisions based on the feeling of the moment rather than on careful thought.", name: 'hexaco_20R', required: true, labels: scale_2},
  ],
  randomize_question_order: true,
  };

  /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_3 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "People think of me as someone who has a quick temper.", name: 'hexaco_21R', required: true, labels: scale_2},
    {prompt: "On most days, I feel cheerful and optimistic.", name: 'hexaco_22', required: true, labels: scale_2},
    {prompt: "I feel like crying when I see other people crying.", name: 'hexaco_23', required: true, labels: scale_2},
    {prompt: "I think that I am entitled to more respect than the average person is.", name: 'hexaco_24R', required: true, labels: scale_2},
    {prompt: "If I had the opportunity, I would like to attend a classical music concert.", name: 'hexaco_25', required: true, labels: scale_2},
    {prompt: "When working, I sometimes have difficulties due to being disorganized.", name: 'hexaco_26R', required: true, labels: scale_2},
    {prompt: "My attitude toward people who have treated me badly is &#39;forgive and forget&#39;.", name: 'hexaco_27', required: true, labels: scale_2},
    {prompt: "I feel that I am an unpopular person.", name: 'hexaco_28R', required: true, labels: scale_2},
    {prompt: "When it comes to physical danger, I am very fearful.", name: 'hexaco_29', required: true, labels: scale_2},
    {prompt: "If I want something from someone, I will laugh at that person&#39;s worst jokes.", name: 'hexaco_30R', required: true, labels: scale_2},
],
  randomize_question_order: true,
  };

  /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_4 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "I’ve never really enjoyed looking through an encyclopedia.", name: 'hexaco_31R', required: true, labels: scale_2},
    {prompt: "I do only the minimum amount of work needed to get by.", name: 'hexaco_32R', required: true, labels: scale_2},
    {prompt: "I tend to be lenient in judging other people.", name: 'hexaco_33', required: true, labels: scale_2},
    {prompt: "In social situations, I'm usually the one who makes the first move.", name: 'hexaco_34', required: true, labels: scale_2},
    {prompt: "I worry a lot less than most people do.", name: 'hexaco_35R', required: true, labels: scale_2},
    {prompt: "I would never accept a bribe, even if it were very large.", name: 'hexaco_36', required: true,labels: scale_2},
    {prompt: "People have often told me that I have a good imagination.", name: 'hexaco_37', required: true, labels: scale_2},
    {prompt: "I always try to be accurate in my work, even at the expense of time.", name: 'hexaco_38', required: true, labels: scale_2},
    {prompt: "I am usually quite flexible in my opinions when people disagree with me.", name: 'hexaco_39', required: true, labels: scale_2},
    {prompt: "The first thing that I always do in a new place is make friends.", name: 'hexaco_40', required: true, labels: scale_2},
  ],
  randomize_question_order: true,
  };

  /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_5 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "I can handle difficult situations without needing emotional support from anyone else.", name: 'hexaco_41R', required: true, labels: scale_2},
    {prompt: "I would get a lot of pleasure from owning expensive luxury goods.", name: 'hexaco_42R', required: true, labels: scale_2},
    {prompt: "I like people who have unconventional views.", name: 'hexaco_43', required: true, labels: scale_2},
    {prompt: "I make a lot of mistakes because I don&#39;t think before I act.", name: 'hexaco_44R', required: true, labels: scale_2},
    {prompt: "Most people tend to get angry more quickly than I do.", name: 'hexaco_45', required: true, labels: scale_2},
    {prompt: "Most people are more upbeat and dynamic than I generally am.", name: 'hexaco_46R', required: true, labels: scale_2},
    {prompt: "I feel strong emotions when someone close to me is going away for a long time.", name: 'hexaco_47', required: true, labels: scale_2},
    {prompt: "I want people to know that I am an important person of high status.", name: 'hexaco_48R', required: true, labels: scale_2},
    {prompt: "I don’t think of myself as the artistic or creative type.", name: 'hexaco_49R', required: true, labels: scale_2},
    {prompt: "People often call me a perfectionist.", name: 'hexaco_50', required: true, labels: scale_2},
  ],
  randomize_question_order: true,
  };

  /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_6 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "Even when people make a lot of mistakes, I rarely say anything negative.", name: 'hexaco_51', required: true, labels: scale_2},
    {prompt: "I sometimes feel that I am a worthless person.", name: 'hexaco_52R', required: true, labels: scale_2},
    {prompt: "Even in an emergency I wouldn’t feel like panicking.", name: 'hexaco_53R', required: true, labels: scale_2},
    {prompt: "I wouldn&#39;t pretend to like someone just to get that person to do favors for me.", name: 'hexaco_54', required: true, labels: scale_2},
    {prompt: "I would be very bored by a book about the history of science and technology.", name: 'hexaco_55R', required: true, labels: scale_2},
    {prompt: "I find it boring to discuss philosophy.", name: 'hexaco_56R', required: true, labels: scale_2},
    {prompt: "I prefer to do whatever comes to mind, rather than stick to a plan.", name: 'hexaco_57R', required: true, labels: scale_2},
    {prompt: "When I&#39;m in a group of people, I&#39;m often the one who speaks on behalf of the group.", name: 'hexaco_58', required: true, labels: scale_2},
    {prompt: "I remain unemotional even in situations where most people get very sentimental.", name: 'hexaco_59R', required: true, labels: scale_2},
    {prompt: "I&#39;d be tempted to use counterfeit money, if I were sure I could get away with it.", name: 'hexaco_60R', required: true, labels: scale_2},
],  
  randomize_question_order: true,
  };

    /* var scale_2 = [
  "Strongly disagree", 
  "Disagree", 
  "Neither agree nor disagree", 
  "Agree", 
  "Strongly agree"
] */

  var hexaco_7 = {
    type: 'survey-likert',
    data: { experiment_section: 'hexaco' },
    preamble: "<br><br>Please read each statement and decide how much you agree or disagree with that statement.",
    questions: [
    {prompt: "I have sympathy for people who are less fortunate than I am.", name: 'hexaco_61', required: true, labels: scale_2},
    {prompt: "I try to give generously to those in need.", name: 'hexaco_62', required: true, labels: scale_2},
    {prompt: "It wouldn&#39;t bother me to harm someone I didn’t like.", name: 'hexaco_63R', required: true, labels: scale_2},
    {prompt: "People see me as a hard-hearted person.", name: 'hexaco_64R', required: true, labels: scale_2},
], 
  randomize_question_order: true,
  };


/////////////////////////////////////////////////////////////  life history questionairre ///////////////////////////////////////////////////



///////////////////////////// life history - parent relationship

var scale_life = [
  "Not at all <br>like my life",
  "A little bit <br>like my life",
  "Somewhat like <br>my life",
  "Very much <br>like my life",
  "Exactly <br>like my life"
]

var life_history_1 = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  preamble: "<br><br>Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).",
  questions: [ 
    {prompt: "My father changed jobs very often.", name: 'life_hist_1', required: true, labels: scale_life},
    {prompt: "My mother changed jobs very often.", name: 'life_hist_2', required: true, labels: scale_life},
    {prompt: "There were many other people (family and non-family) living in my house.", name: 'life_hist_3', required: true, labels: scale_life},
    {prompt: "My family usually had enough money for things when I was growing up.", name: 'life_hist_4', required: true, labels: scale_life},
    {prompt: "I grew up in a relatively wealthy neighborhood.", name: 'life_hist_5', required: true, labels: scale_life},
    {prompt: "I felt relatively wealthy compared to the other kids in my school.", name: 'life_hist_6', required: true, labels: scale_life},
    {prompt: "I had an excellent relationship with my mother.", name: 'life_hist_7', required: true, labels: scale_life},
    {prompt: "I could confide in my mother about things that were bothering me.", name: 'life_hist_8', required: true, labels: scale_life},
    {prompt: "My mother gave me love and affection.", name: 'life_hist_9', required: true, labels: scale_life},
    {prompt: "My mother gave me time and attention when I needed it.", name: 'life_hist_10', required: true, labels: scale_life},
  ],
  randomize_question_order: true,
  };

/////////////////////////////// life history - parent relationship ctd.

/* 
var scale_life = [
  "Not at all <br>like my life",
  "A little bit <br>like my life",
  "Somewhat like <br>my life",
  "Very much <br>like my life",
  "Exactly <br>like my life"
]
 */

var life_history_2 = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  preamble: "<br><br>Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).",
  questions: [ 
    {prompt: "My mother put a lot of effort into watching over me and making sure I had a good upbringing.", name: 'life_hist_11', required: true, labels: scale_life},
    {prompt: "My mother tried to teach me about life.", name: 'life_hist_12', required: true, labels: scale_life},
    {prompt: "My mother was strict in her rules for me.", name: 'life_hist_13', required: true, labels: scale_life},
    {prompt: "My mother was consistent about her rules for me.", name: 'life_hist_14', required: true, labels: scale_life},
    {prompt: "My mother was harsh when she punished me.", name: 'life_hist_15', required: true, labels: scale_life},
    {prompt: "My mother stopped me from doing things that other kids your age were allowed to do.", name: 'life_hist_16', required: true, labels: scale_life},
    {prompt: "My mother was generous and helpful to people outside the family.", name: 'life_hist_17', required: true, labels: scale_life},
    {prompt: "My mother was sociable and friendly to people outside the family.", name: 'life_hist_18', required: true, labels: scale_life},
    {prompt: "I had an excellent relationship with my father.", name: 'life_hist_19', required: true, labels: scale_life}, 
    {prompt: "I could confide in my father about things that were bothering me.", name: 'life_hist_20', required: true, labels: scale_life}, 
  ],
  randomize_question_order: true,
  };

  ///////////////////////////////////////////////////// life history - parent relationship ctd.
  
/*
var scale_life = [
  "Not at all <br>like my life",
  "A little bit <br>like my life",
  "Somewhat like <br>my life",
  "Very much <br>like my life",
  "Exactly <br>like my life"
]
*/

var life_history_3 = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  preamble: "<br><br>Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).",
  questions: [ 
    {prompt: "My father gave me love and affection.", name: 'life_hist_21', required: true, labels: scale_life}, 
    {prompt: "My father gave me time and attention when I needed it.", name: 'life_hist_22', required: true, labels: scale_life}, 
    {prompt: "My father put a lot of effort into watching over me and making sure I had a good upbringing.", name: 'life_hist_23', required: true, labels: scale_life}, 
    {prompt: "My father tried to teach me about life.", name: 'life_hist_24', required: true, labels: scale_life}, 
    {prompt: "My father was strict in his rules for me.", name: 'life_hist_25', required: true, labels: scale_life}, 
    {prompt: "My father was consistent about his rules for me.", name: 'life_hist_26', required: true, labels: scale_life}, 
    {prompt: "My father was harsh when he punished me.", name: 'life_hist_27', required: true, labels: scale_life}, 
    {prompt: "My father stopped me from doing things that other kids your age were allowed to do.", name: 'life_hist_28', required: true, labels: scale_life}, 
    {prompt: "My father was generous and helpful to people outside the family.", name: 'life_hist_29', required: true, labels: scale_life}, 
    {prompt: "My father was sociable and friendly to people outside the family.", name: 'life_hist_30', required: true, labels: scale_life}
],
  randomize_question_order: true,
  };



/////////////////////////////////////////////  life history - in home violence

var scale_5 = [
  "Not at all",
  "A little bit",
  "Somewhat",
  "A lot",
  "All of the time"
]

var life_history_4 = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  preamble: `<br><br>The following are questions about your childhood and early adolescence (ages 5-15). 
  <br> Please think over your family life and answer these questions by putting the relevant number next to each statement to indicate how much you agree with it.`,
  questions: [ 
    {prompt: "How often did a parent or other adult in the household swear at you, insult you, put you down, or act in a way that made you feel threatened?", name: 'life_hist_31', required: true, labels: scale_5}, 
    {prompt: "How often did a parent or other adult in the household push, grab, shove, or slap you?", name: 'life_hist_32', required: true, labels: scale_5},     
    {prompt: "Would you say that the household you grew up in was well-organized and well-managed?", name: 'life_hist_33', required: true, labels: scale_5}, 
    {prompt: "How often would you say there was quarreling, arguing, or shouting between your parents?", name: 'life_hist_34', required: true, labels: scale_5}, 
    {prompt: "How often would you say there was quarreling, arguing, or shouting between a parent and you?", name: 'life_hist_35', required: true, labels: scale_5}, 
    {prompt: "How often would you say there was quarreling, arguing, or shouting between a parent and one of your siblings?", name: 'life_hist_36', required: true, labels: scale_5}, 
    {prompt: "How often would you say there was quarreling, arguing, or shouting between your sibling(s) and you?", name: 'life_hist_37', required: true, labels: scale_5}, 
    {prompt: "Would you say the household you grew up in was chaotic and disorganized?", name: 'life_hist_38', required: true, labels: scale_5}, 
    {prompt: "How often would you say you were neglected while you were growing up, that is, left on your own to fend for yourself?", name: 'life_hist_39', required: true, labels: scale_5}
],
  randomize_question_order: true,
  };

  //////////////////////////////////////////// life history - police in your neighborhood  

  var police_effective = [
    "Extremely ineffective",
    "Very ineffective",
    "Somewhat effective",
    "Very effective",
    "Extremely effective"
  ]

  var police_response = [
    "Not at all",
    "Very slow",
    "Somewhat slowly",
    "Somewhat quickly",
    "Very quickly",
    "I don&#39;t know"
  ]


  var life_history_5 = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    preamble: `<br><br>The following are questions about your childhood and early adolescence (ages 5-15). 
    <br> Please answer the following four questions about the police in the neighborhood where you grew up.`,
    questions: [ 
      {prompt: "How effective are the police in your neighborhood in fighting crime?", name: 'life_hist_40', required: true, labels: police_effective}, 
      {prompt: "How effective are the police in your neighborhood at helping people who ask for help? ", name: 'life_hist_41', required: true, labels: police_effective},
      {prompt: "When people in your neighborhood call the police to ask for help, how quickly do the police respond? ", name: 'life_hist_42', required: true, labels: police_response}, 
      {prompt: "How likely would the people in your neighborhood be to call the police if they were the victims of a serious crime or if they witnessed a serious crime?", name: 'life_hist_43', required: true, labels: police_response}
  ],
    randomize_question_order: true,
    };


    //////////////////////////////////////////// life history - safety in neighborhood 

    var scale_11 = [
      "Never",
      "Once or twice",
      "Three to five times",
      "Six to ten times",
      "More than ten times"
    ]

    var life_history_6 = {
      type: 'survey-likert',
      data: { experiment_section: 'life_history' },
      preamble: `<br><br>The following are questions about your childhood and early adolescence (ages 5-15). 
      <br> How many times do you remember witnessing or hearing about the following events in your neighborhood when you were growing up?`,
      questions: [ 
        {prompt: "People getting into fistfights.", name: 'life_hist_44', required: true, labels: scale_11}, 
        {prompt: "Someone threatening someone else with a gun.", name: 'life_hist_45', required: true, labels: scale_11}, 
        {prompt: "Someone being injured during a fight so badly that he/she had to go to the hospital.", name: 'life_hist_46', required: true, labels: scale_11}, 
        {prompt: "Someone shooting someone else with a gun.", name: 'life_hist_47', required: true, labels: scale_11}, 
        {prompt: "Someone&#39;s home or property being vandalized.", name: 'life_hist_48', required: true, labels: scale_11}, 
        {prompt: "Someone&#39;s home being burglarized.", name: 'life_hist_49', required: true, labels: scale_11}, 
        {prompt: "Someone being murdered.", name: 'life_hist_50', required: true, labels: scale_11}, 
        {prompt: "Someone using violence to seek revenge against someone else.", name: 'life_hist_51', required: true, labels: scale_11}, 
        {prompt: "Someone being mugged or robbed on the streets.", name: 'life_hist_52', required: true, labels: scale_11}, 
        {prompt: "People drinking alcohol or using drugs on the streets.", name: 'life_hist_53', required: true, labels: scale_11}, 
        {prompt: "Someone beat you up in your neighborhood or in your school.", name: 'life_hist_54', required: true, labels: scale_11}, 
        {prompt: "Someone used force to take your things from you.", name: 'life_hist_55', required: true, labels: scale_11}, 
        {prompt: "Someone intentionally damaged or destroyed your belongings.", name: 'life_hist_56', required: true, labels: scale_11}
    ],
      randomize_question_order: true,
      };


    ///////////////////////////////////////////// life history - parental involvement and adult role models
   
    /* var scale_5 = [
      "Not at all",
      "A little bit",
      "Somewhat",
      "A lot",
      "All of the time"
    ] */


    var life_history_7 = {
      type: 'survey-likert',
      data: { experiment_section: 'life_history' },
      preamble: "<br><br>Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).",
      questions: [ 
        {prompt: "People in my family helped me study and/or complete my school assignments.", name: 'life_hist_57', required: true, labels: scale_5},
        {prompt: "Adults in my community that weren’t part of my family cared about me.", name: 'life_hist_58', required: true, labels: scale_5},
        {prompt: "My parents were involved with events at my school.", name: 'life_hist_59', required: true, labels: scale_5},
        {prompt: "I wasn’t afraid of getting hurt at my school.", name: 'life_hist_60', required: true, labels: scale_5},
        {prompt: "I felt comfortable walking around my neighborhood.", name: 'life_hist_61', required: true, labels: scale_5},
        {prompt: "Adults encouraged me to make a positive impact on my community.", name: 'life_hist_62', required: true, labels: scale_5},
        {prompt: "If you broke the rules at my school, you got in trouble.", name: 'life_hist_63', required: true, labels: scale_5},
        {prompt: "My parents knew who my friends were and what they were like.", name: 'life_hist_64', required: true, labels: scale_5},
        {prompt: "My parents would often ask about where I went and who I was with.", name: 'life_hist_65', required: true, labels: scale_5},
        {prompt: "Adults encouraged me to aim high and achieve.", name: 'life_hist_66', required: true, labels: scale_5},
        {prompt: "My close friends got good grades in school.", name: 'life_hist_67', required: true, labels: scale_5},
        {prompt: "My close friends didn not get in trouble with the school or the police.", name: 'life_hist_68', required: true, labels: scale_5},
        {prompt: "I spent a lot of time practicing, taking lessons, or working on art (dance, music, painting, etc).", name: 'life_hist_69', required: true, labels: scale_5},
        {prompt: "Adults encouraged me to get involved with sports teams.", name: 'life_hist_70', required: true, labels: scale_5},
        {prompt: "Adults encouraged me to join youth clubs (for example, the Boy Scouts or Girl Scouts).", name: 'life_hist_71', required: true, labels: scale_5},
        {prompt: "Adults encouraged me to get involved with my spiritual or religious organization.", name: 'life_hist_72', required: true, labels: scale_5}, 
    ],
      randomize_question_order: true,
      };


//////////////////////////////////////////////////////////// life history - adult role models


  var role_model = [
    "There was no one like this",
    "There was someone a little bit like this",
    "There was someone somewhat like this",
    "There was someone very much like this",
    "There was someone exactly like this"
  ]

  var life_history_8 = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    preamble: `<br><br>For the next questions, please think of your life while you were growing up (ages 5-15).`,  
    questions: [
      {prompt: 
        `When you were growing up, was there an important adult who was NOT your parent or guardian that did a lot of good things for you? 
        Someone you thought was a special person in your life? This could be a teacher, a neighbor, someone in your community, or anyone that did a 
        lot of good things for you.`, 
        name: 'life_hist_20', required: true, labels: role_model},
    ],
  };

  var scale_4 = [
    "None",
    "One",
    "A few",
    "Many"
  ]

  // life history scale section #3
  var life_history_9 = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `How many adults like this did you have in your life?`, name: 'life_hist_21', required: true, labels: scale_4},
    ],
  };


////////////////////////////////////////////////////////// life history - personal dates etc.

var yes_no = [
  "Yes",
  "No"
]

var parent_birth = {
  type: 'survey-text',
  data: { experiment_section: 'life_history' },
  preamble: `<br><br>You will now fill out the last questionnaire. Some of the questions are personal.  
  <br><br>You are asked these questions so that participants’ responses can be analyzed according to their individual profile and history.  
  <br><br>We wish to remind you that all of the responses we collect will be analysed completely anonymously - NO INFORMATION FROM THIS 
  <br>SECTION WILL BE LINKED TO YOU IN ANY WAY. If you would prefer to not respond to some of the questions, you will simply have to   
  <br>type in the box 'I don’t want to answer'.`,
  questions: [
    {prompt: `What is the birth year of your mother?`, name: 'mom_birth', required: true, rows: 1, columns: 7}, 
    {prompt: `What is the birth year of your father?`, name: 'dad_birth', required: true, rows: 1, columns: 7}
],
randomize_question_order: true,
  };

var alive_mom = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  questions: [
    {prompt: `Is your mother still alive?`, name: 'mom_alive', required: true, labels: yes_no}, 
],
  };

var no_death_mom = {
  type: 'survey-text',
  data: { experiment_section: 'life_history' },
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your mother die?`, name: 'mom_death', rows: 2, columns: 20}, 
],
  };

 var alive_dad = {
  type: 'survey-likert',
  data: { experiment_section: 'life_history' },
  questions: [
    {prompt: `Is you father still alive?`, name: 'dad_alive', required: true, labels: yes_no}
],
  };

var no_death_dad = {
  type: 'survey-text',
  data: { experiment_section: 'life_history' },
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your father die?`, name: 'dad_death', rows: 2, columns: 20}
],
  };  

  var count = [
    "I don&#39;t know",
    "  1  ",
    "  2  ",
    "  3  ",
    "  4  ",
    "  5  ",
    "  6  ",
    "  7  ",
    "  8  ",
    "  9  ",
    "  10  ",
    "More than 10"
  ]

  var birth_order = [
    "I don&#39;t know",
    "  1st  ",
    "  2nd  ",
    "  3rd  ",
    "  4th  ",
    "  5th  ",
    "  6th  ",
    "  7th  ",
    "  8th  ",
    "  9th  ",
    "  10th  ",
    "More than 10th"
  ]

  var siblings = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `How many children did your mother have?`, name: 'mom_siblings', required: true, labels: count},
      {prompt: `Among your mother&#39;s children you are the:`, name: 'mom_birth_order', required: true, labels: birth_order},
      {prompt: `How many children did your father have?`, name: 'dad_siblings', required: true, labels: count},
      {prompt: `Among your father&#39;s children you are the:`, name: 'dad_birth_order', required: true, labels: birth_order}
    ],
  };

  var parent_divorce = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `Did your parents got divorved or separated?`, name: 'divorce', required: true, labels: yes_no}
    ],
    required: true
  };

  var age_divorce = {
    type: 'survey-text',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `If your parents did get divorced or separated, how old were you when they got divorced?`, name: 'age_divorce', rows: 2, columns: 20}
  ],
    }; 

  var live_with_step_dad = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `If your parents did get divorced or separated, have you ever lived with a step-father?`, name: 'step_dad', labels: yes_no}
    ],
  };

  var age_divorce_step_dad = {
    type: 'survey-text',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `If your parents did get divorced or separated, and you lived with a step-father, from what age on did you live with your step-father?`, name: 'age_step_dad', rows: 2, columns: 20}
  ],
    };  

  var live_with_step_mom = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `If your parents did get divorced or separated, have you ever lived with a step-mother?`, name: 'step_mom', labels: yes_no}
  ],
    };

  var age_divorce_step_mom = {
    type: 'survey-text',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `If your parents did get divorced or separated, and you lived with a step-mother, from what age on did you live with your step-mother?`, name: 'age_step_mom', rows: 2, columns: 20}
    ],
  };  

  var foster_care = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `Were you ever placed in an institution or in a foster family?`, name: 'foster_care', required: true, labels: yes_no}
    ],
    required: true
  };

  var abuse_1 = {
    type: 'survey-multi-select',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `During my childhood, I was a victim of (please select all appropriate answers):`, 
      options: ["Physical abuse", "Sexual abuse", "Psychological abuse", "No form of abuse", "I do not want to answer"], name: 'childhood_abuse_yn', required: true}
    ],
  };

  var abuse_2 = {
    type: 'survey-multi-select',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `Answer this question only if you answered 'Physical abuse' or 'Psychological abuse' or 'Sexual abuse' to the previous question. <br>
                These episodes were caused by (please select all appropriate answers):`, 
        options: ["One or several people in my family", "One or several people outside my family", "Does not apply to me", "I do not want to answer"], name: 'childhood_abuse', required: true}
    ],
  };

  var stability = {
    type: 'survey-multi-select',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `During your childhood, did you live with one or several people who were (Please select all appropriate answers):`,         
        options: [
          "Alcoholic",
          "Violent",
          "Depressed", 
          "Who suffered from a mental disorder", 
          "Who regularly took illegal drugs", 
          "Who sometimes had issues with the judicial system", 
          "Who had spent time in prison", 
          "None of the above", 
          "I don’t want to answer"],
        name: 'home_stability', required: true}
    ],
  };

  var disease = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `   From your birth until you were 7 years old, did you suffer from a long disease that required a hospitalization?  `, name: 'disease', required: true, labels: yes_no}
    ],
  };

  var change_schools = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `From your birth until you were 7 years old, how many times did you change schools?`, name: 'change_schools', required: true, labels: count},
    ],
  };

  var paternal_care_scale = [  
    "He left my mother taking care of us",
    "He took care of us, but less than my mother",
    "He took care of us as much as my mother",
    "He took more care of us than my mother",
    "This question does not apply to me"
  ]

  var care_father = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `          From your birth until you were 7 years old, how much did your father take care of you?          `, name: 'paternal_care', required: true, labels: paternal_care_scale}
    ],
  };

  var sib_death = {
    type: 'survey-likert',
    data: { experiment_section: 'life_history' },
    questions: [
      {prompt: `               When you were growing up, did one of your siblings die?                 `, name: 'sib_die', required: true, labels: yes_no}
    ],
  };

///////////////////////////////////////// Personal strivings list ///////////////////////////////////////////

var personal_striving = {
  type: 'survey-text',
  data: { experiment_section: 'personal_strivings' },
  preamble: `<br><br> One way to describe someone’s personality is to consider the purposes or goals that the person seems to be seeking in his or her everyday behavior. 
    <br>We are interested in the things that you typically or characteristically are trying to do. We might call these objectives “strivings.” Here are some examples of strivings:
              
    <br>Trying to be physically attractive to others
    <br>Trying to persuade others that one is right
    <br>Trying to help others in need of help
    <br>Trying to seek new and exciting experiences
    <br>Trying to avoid being noticed by others
    <br>Trying to avoid feeling inferior to others

    <br><br>Note that these strivings are phrased in terms of what a person is &#39;&#39;trying&#39;&#39; to do, regardless of whether the person is actually successful. 
    For example, a person might be “Trying to get others to like me” without necessarily being successful.
    These strivings may be fairly broad, such as &#39;&#39;Trying to make others happy&#39;&#39; or more specific, as &#39;&#39;Trying to make my partner happy.&#39;&#39;
    Also note that the strivings can be either positive or negative. That is, they may be about something you typically try to obtain or keep, or things that you typically try to avoid or prevent. 
    For example, you might typically try to obtain attention from others, or you might typically try to avoid calling attention to yourself. 
    You can see that this way of describing yourself is different from using trait adjectives (friendly, intelligent, honest). We do not want you to use trait adjectives. 
    Since you may have never thought of yourself in this way before, think carefully about what we are asking you to do before you write anything down. 
    We want you to provide us with a list of your strivings. Please write down at least 15 strivings in the spaces provided below. 
    You may list additional strivings if you wish. Please keep your attention focused on yourself. 
    Do not mentally compare the things that you typically do with what other people do. Think of yourself and your purposes alone. Be as honest and as objective as possible. 
    Do not give simply socially desirable strivings or strivings which you think you &#39;&#39;ought&#39;&#39; to have.
    You might find it useful to think about your goals in different domains of your life: work and school, home and family, social relationships, and leisure/recreation. 
    Think about all of your desires, goals, wants, and hopes in these different areas.
    
    <br><br>Take your time with this task; spend some time thinking about your goals before you begin.`,
  questions: [
    {prompt: `I typically try to...`, name: 'striving_1', rows: 2, columns: 20},
    {prompt: `I typically try to...`, name: 'striving_2', rows: 2, columns: 20},
    {prompt: `I typically try to...`, name: 'striving_3', rows: 2, columns: 20},
    {prompt: `I typically try to...`, name: 'striving_4', rows: 2, columns: 20},
    {prompt: `I typically try to...`, name: 'striving_5', rows: 2, columns: 20},
    {prompt: `I typically try to...`, name: 'striving_6', rows: 2, columns: 20}
  ],
};  


/////////////////////////////////////// Volunteer functions inventory ///////////////////////////////////////

var scale_important = [
  "Not at all important or accurate",
  " ",
  " ",
  "Moderately important or accurate",
  " ",
  " ",
  "Extremely important or accurate"
]

var volunteer_functions = {
  type: 'survey-likert',
  data: { experiment_section: 'volunteer_functions' },
  preamble: `<br><br>Please indicate how important or accurate each of the 30 possible reasons for volunteering are for you when you take part in volunteer work.`,
  questions: [
    {prompt: `Volunteering can help me to get my foot in the door at a place where I would like to work.`, name: 'vol_funct_1', required: true, labels: scale_important},
    {prompt: `My friends volunteer.`, name: 'vol_funct_2', required: true, labels: scale_important},
    {prompt: `I am concerned about those less fortunate than myself.`, name: 'vol_funct_3', required: true, labels: scale_important},
    {prompt: `People I'm close to want me to volunteer.`, name: 'vol_funct_4', required: true, labels: scale_important},
    {prompt: `Volunteering makes me feel important.`, name: 'vol_funct_5', required: true, labels: scale_important},
    {prompt: `People I know share an interest in community service.`, name: 'vol_funct_6', required: true, labels: scale_important},
    {prompt: `No matter how bad I've been feeling, volunteering helps me to forget about it.`, name: 'vol_funct_7', required: true, labels: scale_important},
    {prompt: `I am genuinely concerned about the particular group I am serving.`, name: 'vol_funct_8', required: true, labels: scale_important},
    {prompt: `By volunteering I feel less lonely.`, name: 'vol_funct_9', required: true, labels: scale_important},
    {prompt: `I can make new contacts that might help my business or career.`, name: 'vol_funct_10', required: true, labels: scale_important},
    {prompt: `Doing volunteer work relieves me of some of the guilt over being more fortunate than others.`, name: 'vol_funct_11', required: true, labels: scale_important},
    {prompt: `I can learn more about the cause for which I am working.`, name: 'vol_funct_12', required: true, labels: scale_important},
    {prompt: `Volunteering increases my self-esteem.`, name: 'vol_funct_13', required: true, labels: scale_important},
    {prompt: `Volunteering allows me to gain a new perspective on things.`, name: 'vol_funct_14', required: true, labels: scale_important},
    {prompt: `Volunteering allows me to explore different career options.`, name: 'vol_funct_15', required: true, labels: scale_important},
    {prompt: `I feel compassion toward people in need. `, name: 'vol_funct_16', required: true, labels: scale_important},
    {prompt: `Others with whom I am close place a high value on community service.`, name: 'vol_funct_17', required: true, labels: scale_important},
    {prompt: `Volunteering lets me learn things through direct, hands on experience.`, name: 'vol_funct_18', required: true, labels: scale_important},
    {prompt: `I feel it is important to help others.`, name: 'vol_funct_19', required: true, labels: scale_important},
    {prompt: `Volunteering helps me work through by own personal problems.`, name: 'vol_funct_20', required: true, labels: scale_important},
    {prompt: `Volunteering will help me to succeed in my chosen profession.`, name: 'vol_funct_21', required: true, labels: scale_important},
    {prompt: `I can do something for a cause that is important to me.`, name: 'vol_funct_22', required: true, labels: scale_important},
    {prompt: `Volunteering is an important activity to the people I know best.`, name: 'vol_funct_23', required: true, labels: scale_important},
    {prompt: `Volunteering is a good escape from my own troubles.`, name: 'vol_funct_24', required: true, labels: scale_important},
    {prompt: `I can learn how to deal with a variety of people.`, name: 'vol_funct_25', required: true, labels: scale_important},
    {prompt: `Volunteering makes me feel needed.`, name: 'vol_funct_26', required: true, labels: scale_important},
    {prompt: `Volunteering makes me feel better about myself.`, name: 'vol_funct_27', required: true, labels: scale_important},
    {prompt: `Volunteering experience will look good on my resume.`, name: 'vol_funct_28', required: true, labels: scale_important},
    {prompt: `Volunteering is a way to make new friends.`, name: 'vol_funct_29', required: true, labels: scale_important},
    {prompt: `I can explore my own strengths.`, name: 'vol_funct_30', required: true, labels: scale_important},
],
randomize_question_order: true,
  };

//////////////////////////////////// motivation to help scale ///////////////////////////////////////////////

var scale_true = [
  "Not at all true",
  " ",
  " ",
  "Moderately true",
  " ",
  " ",
  "Very true"
]

var motivation_to_help = {
  type: 'survey-likert',
  data: { experiment_section: 'motivation_to_help' },
  preamble: `<br><br>Think of the last time you acted prosocially (e.g., selflessly, kindly, helpful, etc.) toward another person. 
  Please indicate how true or untrue each of the statements below is in describing why you acted prosocialy.`,
  questions: [
    {prompt: `So that I would be liked.`, name: 'motivation_help_1', required: true, labels: scale_true},
    {prompt: `Because I’d feel like a bad person if I didn&#39;t.`, name: 'motivation_help_2', required: true, labels: scale_true},
    {prompt: `Because others would get mad at me if I didn&#39;t.`, name: 'motivation_help_3', required: true, labels: scale_true},
    {prompt: `Because I thought it was important to act in this way.`, name: 'motivation_help_4', required: true, labels: scale_true},
    {prompt: `Because I liked acting this way.`, name: 'motivation_help_5', required: true, labels: scale_true},
    {prompt: `Because I felt I had to.`, name: 'motivation_help_6', required: true, labels: scale_true},
    {prompt: `Because I felt I should.`, name: 'motivation_help_7', required: true, labels: scale_true},
    {prompt: `Because I valued doing so.`, name: 'motivation_help_8', required: true, labels: scale_true},
    {prompt: `Because I cared about the other participant.`, name: 'motivation_help_9', required: true, labels: scale_true},
    {prompt: `Because I thought I would enjoy it.`, name: 'motivation_help_10', required: true, labels: scale_true},
],
randomize_question_order: true,
  };

///////////////////////////////////// reasons for action questionnaire //////////////////////////////////////////////////////////////////////////////// doesn't apply to this study??

//////////////////////////////////////// social values orientation scale ///////////////////////////////////////////

  const buildSocialValuesTable = (name, values) => `
    <table class="social-value-orientation-table">
      <tr>
        <th>You'll Receive</td>
        <th>They'll Receive</td>
        <th></td>
      </tr>
      ${values.map(([youReceive, theyReceive], i) => `
        <tr>
          <td>${youReceive}</td>
          <td>${theyReceive}</td>
          <td><input type="radio" name="${name}" value="${i + 1}" required/></td>
        </tr>
      `).join('')}
    </table>
  `;


  const socialOrientationScales = [
    {
      name: 'soc_oriet_1',
      values:[[100, 50], [98, 54], [96, 59], [94, 63], [93, 68], [91, 72], [89, 76], [87, 81], [85, 85]],
    },
    {
      name: 'soc_oriet_2',
      values:[[100, 50], [94,56], [88, 63], [81, 69], [75, 75], [69, 81], [63, 88], [56, 94], [50, 100]],
    },
    {
      name: 'soc_oriet_3',
      values:[[50, 100], [54, 89], [59, 79], [63, 68], [68, 58], [72, 47], [76, 36], [81, 26], [85, 15]],
    },
    {
      name: 'soc_oriet_4',
      values:[[50, 100 ], [54, 98], [59, 96], [63, 94], [68, 93], [72, 91], [76, 89], [81, 87] , [85, 85]],
    },
    {
      name: 'soc_oriet_5',
      values:[[85, 15], [87, 19], [89, 24], [91, 28], [93, 33], [93, 37], [94, 41], [98, 46] , [100, 50]],
    },
    {
      name: 'soc_oriet_6',
      values:[[85, 85], [85, 76], [85, 68], [85, 59], [85, 50], [85, 41], [85, 33], [85, 24] , [85, 15]],
    }
  ];

const social_value_orientation_timeline = socialOrientationScales.map(({ name, values }) => ({
  type: 'survey-html-form',
  data: { experiment_section: 'social_value_orientation' },
  html: buildSocialValuesTable(name, values),
  preamble: `
    <style>
      .instructions {
        max-width: 1250px;
        margin: 20px auto 0;
      }

      .indent {
        text-indent: 16px;
      }

      .mb {
        margin-bottom: 16px;
      }

      .social-value-orientation-table {
        margin: 20px auto 20px;
        border-spacing: 16px;
      }
    </style>
    <div class="instructions">
      <div class="indent">In this task you have been randomly paired with another person, whom we will refer to as the other.</div>
      <div class="indent">This other person is someone you do not know and will remain mutually anonymous. All of your choices are completely confidential.</div>
      <div class="indent">You will be making a series of decisions about allocating resources between you and this other person. For each of the following questions,</div>
      <div class="indent mb">please indicate the distribution you prefer most by marking the respective position along the midline. You can only make one mark for each question.</div>

      <div class="indent mb">Your decisions will yield money for both yourself and the other person. In the example below, a person has chosen to distribute money so that he/she receives 50 dollars, while the anonymous other person receives 40 dollars.</div>

      <div class="indent mb">There are no right or wrong answers, this is all about personal preferences. After you have made your decision, write the resulting distribution of money on the spaces on the right.</div>
      <div>As you can see, your choices will influence both the amount of money you receive as well as the amount of money the other receives.</div>
    </div>`
  }));


/////////////////////////////////////////////////// brief fear of negative evaluations scale //////////////////////////////////////////////

var characteristic = [
"Not at all <br>characteristic of me",
"Slightly <br>characteristic of me",
"Moderately <br>characteristic of me",
"Very <br>characteristic of me",
"Extremely <br>characteristic of me",
]

var fear_negative_evaluation = {
  type: 'survey-likert',
  data: { experiment_section: 'fear_of_negative_evaluations' },
  preamble: 
  `<br><br>Read each of the following statements carefully and indicate how characteristic it is of you according to the following scale:`,
  questions: [
    {prompt: `I worry about what other people will think of me even when I know it doesn&#39;t make any difference.`, name: 'neg_eval_fear_1', required: true, labels: characteristic},
    {prompt: `I am unconcerned even if I know people are forming an unfavorable impression of me.`, name: 'neg_eval_fear_2', required: true, labels: characteristic},
    {prompt: `I am frequently afraid of other people noticing my shortcomings.`, name: 'neg_eval_fear_3', required: true, labels: characteristic},
    {prompt: `I rarely worry about what kind of impression I am making on someone.`, name: 'neg_eval_fear_4', required: true, labels: characteristic},
    {prompt: `I am afraid others will not approve of me.`, name: 'neg_eval_fear_5', required: true, labels: characteristic},
    {prompt: `I am afraid that people will find fault with me.`, name: 'neg_eval_fear_6', required: true, labels: characteristic},
    {prompt: `Other people&#39;s opinions of me do not bother me.`, name: 'neg_eval_fear_7', required: true, labels: characteristic},
    {prompt: `When I am talking to someone, I worry about what they may be thinking about me.`, name: 'neg_eval_fear_8', required: true, labels: characteristic},
    {prompt: `I am usually worried about what kind of impression I make.`, name: 'neg_eval_fear_9', required: true, labels: characteristic},
    {prompt: `If I know someone is judging me, it has little effect on me.`, name: 'neg_eval_fear_10', required: true, labels: characteristic},
    {prompt: `Sometimes I think I am too concerned with what other people think of me.`, name: 'neg_eval_fear_11', required: true, labels: characteristic},
    {prompt: `I often worry that I will say or do the wrong things.`, name: 'neg_eval_fear_12', required: true, labels: characteristic}
],
randomize_question_order: true,
  };

/////////////////////////////////////// The Balanced Inventory of Desirable Responding Short Form (BIDR-16) ///////////////////////////////

  /*
  var scale_true = [
    "Not at all true",
    " ",
    " ",
    "Neutral",
    " ",
    " ",
    "Very true"
  ]
  */

  var desirable_responding = {
    type: 'survey-likert',
    data: { experiment_section: 'desirable_responding' },
    preamble: 
    `<br><br>Read each of the following statements carefully and indicate how characteristic it is of you according to the following scale:`,
    questions: [
      {prompt: `I have not always been honest with myself.`, name: 'desirable_responding_1', required: true, labels: scale_true},
      {prompt: `I always know why I like things.`, name: 'desirable_responding_2', required: true, labels: scale_true},
      {prompt: `It&#39;s hard for me to shut off a disturbing thought.`, name: 'desirable_responding_3', required: true, labels: scale_true},
      {prompt: `I never regret my decisions.`, name: 'desirable_responding_4', required: true, labels: scale_true},
      {prompt: `I sometimes lose out on things because I can&#39;t make up my mind soon enough.`, name: 'desirable_responding_5', required: true, labels: scale_true},
      {prompt: `I am a completely rational person.`, name: 'desirable_responding_6', required: true, labels: scale_true},
      {prompt: `I am very confident of my judgments.`, name: 'desirable_responding_7', required: true, labels: scale_true},
      {prompt: `I have sometimes doubted my ability as a lover.`, name: 'desirable_responding_8', required: true, labels: scale_true},
      {prompt: `I sometimes tell lies if I have to.`, name: 'desirable_responding_9', required: true, labels: scale_true},
      {prompt: `I never cover up my mistakes.`, name: 'desirable_responding_10', required: true, labels: scale_true},
      {prompt: `There have been occasions when I have taken advantage of someone.`, name: 'desirable_responding_11', required: true, labels: scale_true},
      {prompt: `I sometimes try to get even rather than forgive and forget.`, name: 'desirable_responding_12', required: true, labels: scale_true},
      {prompt: `I have said something bad about a friend behind his/her back.`, name: 'desirable_responding_13', required: true, labels: scale_true},
      {prompt: `When I hear people talking privately, I avoid listening.`, name: 'desirable_responding_14', required: true, labels: scale_true},
      {prompt: `I never take things that don&#39;t belong to me.`, name: 'desirable_responding_15', required: true, labels: scale_true},
      {prompt: `I don&#39;t gossip about other people&#39;s business.`, name: 'desirable_responding_16', required: true, labels: scale_true}
  ],
  randomize_question_order: true,
    };

/////////////////////////////////////////////////////////////////// Personal Norm of Reciprocity ///////////////////////////////////////////////

var scale_true_for_me = [
  "Not at all <br>true for me",
  " ",
  " ",
  "Moderately <br>true for me",
  " ",
  " ",
  "Very <br>true for me"
]

var pers_norm_reciprocity = {
  type: 'survey-likert',
  data: { experiment_section: 'personal_norm_reciprocity' },
  preamble: 
  `<br><br>Read each of the following statements carefully and indicate how characteristic it is of you according to the following scale:`,
  questions: [
    {prompt: `To help somebody is the best policy to be certain that s/he will help you in the future.`, name: 'br1', required: true, labels: scale_true_for_me},
    {prompt: `I do not behave badly with others so as to avoid them behaving badly with me.`, name: 'br2', required: true, labels: scale_true_for_me},
    {prompt: `I fear the reactions of a person I have previously treated badly.`, name: 'br3', required: true, labels: scale_true_for_me},
    {prompt: `If I work hard, I expect it will be repaid.`, name: 'br4', required: true, labels: scale_true_for_me},
    {prompt: `When I pay someone compliments, I expect that s/he in turn will reciprocate.`, name: 'br5', required: true, labels: scale_true_for_me},
    {prompt: `I avoid being impolite because I do not want others being impolite with me.`, name: 'br6', required: true, labels: scale_true_for_me},
    {prompt: `If I help tourists, I expect that they will thank me nicely.`, name: 'br7', required: true, labels: scale_true_for_me},
    {prompt: `It is obvious that if I treat someone badly s/he will look for revenge.`, name: 'br8', required: true, labels: scale_true_for_me},
    {prompt: `If I don’t leave a good tip in a restaurant, I expect that in future I will not get good service.`, name: 'br9', required: true, labels: scale_true_for_me},
    {prompt: `I am ready to undergo personal costs to help somebody who helped me before.`, name: 'pr1', required: true, labels: scale_true_for_me},
    {prompt: `If someone does a favor for me, I am ready to return it.`, name: 'pr2', required: true, labels: scale_true_for_me},
    {prompt: `If someone is helpful with me at work, I am pleased to help him/her.`, name: 'pr3', required: true, labels: scale_true_for_me},
    {prompt: `I’m ready to do a boring job to return someone’s previous help.`, name: 'pr4', required: true, labels: scale_true_for_me},
    {prompt: `When someone does me a favor, I feel committed to repay him/her.`, name: 'pr5', required: true, labels: scale_true_for_me},
    {prompt: `If someone asks me politely for information, I’m really happy to help him/her.`, name: 'pr6', required: true, labels: scale_true_for_me},
    {prompt: `If someone lends me money as a favour, I feel I should give him/her back something more than what is strictly due.`, name: 'pr7', required: true, labels: scale_true_for_me},
    {prompt: `If somebody suggests to me the name of the winning horse at the race, I would certainly give him/her part of my winnings.`, name: 'pr8', required: true, labels: scale_true_for_me},
    {prompt: `I go out of my way to help somebody who has been kind to me before.`, name: 'pr9', required: true, labels: scale_true_for_me}
],
randomize_question_order: true,
  };


////////////////////////////////////////////////////// The Five-Item Guilt Proneness Scale (GP-5) //////////////////////////////////////////////

var scale_likely = [
  "Extremely unlikely", 
  "Unlikely", 
  "About 50% likely", 
  "Likely",
  "Extremely likely"
]

var guilt_proneness_scale = {
  type: 'survey-likert',
  data: { experiment_section: 'guilt_proneness' },
  preamble: 
  `<br><br>In this questionnaire you will read about situations that people are likely to encounter in day‐to‐day life, followed by common reactions to those situations. 
  As you read each scenario, try to imagine yourself in that situation. Then indicate the likelihood that you would react in the way described.`,
  questions: [
    {prompt: `After realizing you have received too much change at a store, you decide to keep it because the sales clerk doesn&#39;t notice. What is the likelihood that you would feel uncomfortable about keeping the money?`, name: 'gp_1', required: true, labels: scale_likely},
    {prompt: `You secretly commit a felony. What is the likelihood that you would feel remorse about breaking the law?`, name: 'gp_2', required: true, labels: scale_likely},
    {prompt: `At a coworker&#39;s housewarming party, you spill red wine on their new cream-colored carpet. You cover the stain with a chair so that nobody notices your mess. What is the likelihood that you would feel that the way you acted was pathetic?`, name: 'gp_3', required: true, labels: scale_likely},
    {prompt: `You lie to people but they never find out about it. What is the likelihood that you would feel terrible about the lies you told?`, name: 'gp_4', required: true, labels: scale_likely},
    {prompt: `Out of frustration, you break the photocopier at work. Nobody is around and you leave without telling anyone. <br>What is the likelihood you would feel bad about the way you acted?`, name: 'gp_5', required: true, labels: scale_likely}
],
randomize_question_order: true,
  };


///////////////////////////////////////////////////////// Justice Sensitivity Scale ///////////////////////////////////////////////////////////////

var scale_agree = [
  "Not at all", 
  " ", 
  " ", 
  "Somewhat",
  " ",
  " ",
  "Exactly"
]

var justice_sensitivity = {
  type: 'survey-likert',
  data: { experiment_section: 'justice_sensitivity' },
  preamble: 
  `<br><br> People react quite differently in unfair situations. Use the following scale to indicate how much you agree with each statement. Please be honest and thoughtful in your responses.`,
  questions: [
    {prompt: `It gets me down when I get fewer opportunities than others to develop my skills.`, name: 'own_dis_1', required: true, labels: scale_agree},
    {prompt: `It makes me angry when others are undeservingly better off than me.`, name: 'own_dis_2', required: true, labels: scale_agree},
    {prompt: `It worries me when I have to work hard for things that come easily to others.`, name: 'own_dis_3', required: true, labels: scale_agree},
    {prompt: `I ruminate for a long time when other people are treated better than me.`, name: 'own_dis_4', required: true, labels: scale_agree},

    {prompt: `It bothers me when someone gets something they don’t deserve.`, name: 'justice_other_1', required: true, labels: scale_agree},
    {prompt: `I am upset when someone does not get a reward he/she has earned.`, name: 'justice_other_2', required: true, labels: scale_agree},
    {prompt: `I am upset when someone is undeservingly worse off than others.`, name: 'justice_other_3', required: true, labels: scale_agree},
    {prompt: `It worries me when someone has to work hard for things that come easily to others.`, name: 'justice_other_4', required: true, labels: scale_agree},

    {prompt: `I feel guilty when I am better off than others for no reason.`, name: 'justice_adv_1', required: true, labels: scale_agree},
    {prompt: `It bothers me when things come easily to me that others have to work hard for.`, name: 'justice_adv_2', required: true, labels: scale_agree},
    {prompt: `I ruminate for a long time about being treated nicer than others for no reason.`, name: 'justice_adv_3', required: true, labels: scale_agree},
    {prompt: `I feel guilty when I receive better treatment than others.`, name: 'justice_adv_4', required: true, labels: scale_agree},

    {prompt: `I cannot stand the feeling of exploiting someone.`, name: 'justice_you_other_1', required: true, labels: scale_agree},
    {prompt: `It takes me a long time to forget when I allow myself to be careless at the expense of someone else.`, name: 'justice_you_other_2', required: true, labels: scale_agree},
    {prompt: `I feel guilty when I enrich myself at the cost of others.`, name: 'justice_you_other_3', required: true, labels: scale_agree},
    {prompt: `It bothers me when I use tricks to achieve something while others have to struggle for it.`, name: 'justice_you_other_4', required: true, labels: scale_agree}
],
randomize_question_order: true,
  };


////////////////////////////////////////////////////////// Interpersonal Reactivity Index //////////////////////////////////////////////////////////////////

var scale_describe = [
  "Does not describe me very well", 
  " ", 
  " ", 
  "Somewhat describes me well",
  " ",
  " ",
  "Does describe me very well"
]

var reactivity_index = {
  type: 'survey-likert',
  data: { experiment_section: 'interpersonal_reactivity' },
  preamble: 
  `<br><br> The following statements inquire about your thoughts and feelings in a variety of situations.
  For each item, indicate how well it describes you by choosing the appropriate point on the scale.
  Read each item carefully before responding. Answer as honestly as you can.`,
  questions: [
    {prompt: `I often have tender, concerned feelings for people less fortunate than me.`, name: 'react_1', required: true, labels: scale_describe},
    {prompt: `Sometimes I don&#39;t feel very sorry for other people when they are having problems.`, name: 'react_2R', required: true, labels: scale_describe},
    {prompt: `When I see someone being taken advantage of, I feel kind of protective towards them.`, name: 'react_3', required: true, labels: scale_describe},
    {prompt: `Other people&#39;s misfortunes do not usually disturb me a great deal.`, name: 'react_4R', required: true, labels: scale_describe},
    {prompt: `When I see someone being treated unfairly, I sometimes don&#39;t feel very much pity for them.`, name: 'react_5R', required: true, labels: scale_describe},
    {prompt: `I am often quite touched by things that I see happen.`, name: 'react_6', required: true, labels: scale_describe},
    {prompt: `I would describe myself as a pretty soft-hearted person.`, name: 'react_7', required: true, labels: scale_describe}
],
randomize_question_order: true,
  };

/////////////////////////////////////////////////////////////// Agentic and Communal Values Scale /////////////////////////////////////////////////////////////

var scale_important = [
  "Not at all important to me", 
  " ", 
  " ", 
  " ", 
  "Somewhat important to me",
  " ",
  " ", 
  " ",
  "Highly important to me"
]

var agentic_communal_values_scale = {
  type: 'survey-likert',
  data: { experiment_section: 'agentic_communal_values' },
  preamble: 
  `<br><br> Below are different values that people rate of different importance in their lives. FIRST READ THROUGH THE LIST to familiarize yourself with all the values. 
  While reading over the list, consider which ones tend to be most important to you and which tend to be least important to you. After familiarizing yourself with the list, 
  rate the relative importance of each value to you as a guiding principle in your life.
 
  <br><br>It is important to spread your ratings out as best you can—be sure to use some numbers in the lower range, some in the middle range, and some in the higher range. 
  Avoid using too many similar numbers. Work fairly quickly.`,
  questions: [
    {prompt: `FORGIVENESS (pardoning others’ faults, being merciful)`, name: 'AC_values_1', required: true, labels: scale_important},
    {prompt: `COMPETENCE (displaying mastery, being capable, effective)`, name: 'AC_values_2', required: true, labels: scale_important},
    {prompt: `ACHIEVEMENT (reaching lofty goals)`, name: 'AC_values_3', required: true, labels: scale_important},
    {prompt: `ALTRUISM (helping others in need)`, name: 'AC_values_4', required: true, labels: scale_important},
    {prompt: `LOYALTY (being faithful to friends, family, and group)`, name: 'AC_values_5', required: true, labels: scale_important},
    {prompt: `POWER (control over others, dominance)`, name: 'AC_values_6', required: true, labels: scale_important},
    {prompt: `HONESTY (being genuine, sincere)`, name: 'AC_values_7', required: true, labels: scale_important},
    {prompt: `COMPASSION (caring for others, displaying kindness)`, name: 'AC_values_8', required: true, labels: scale_important},
    {prompt: `STATUS (high rank, wide respect)`, name: 'AC_values_9', required: true, labels: scale_important},
    {prompt: `CIVILITY (being considerate and respectful toward others)`, name: 'AC_values_10', required: true, labels: scale_important},
    {prompt: `RECOGNITION (becoming notable, famous, or admired)`, name: 'AC_values_11', required: true, labels: scale_important},
    {prompt: `SUPERIORITY (defeating the competition, standing on top)`, name: 'AC_values_12', required: true, labels: scale_important}
],
randomize_question_order: true,
  };


/////////////////////////////////////////////////////////////////// Parental Bonding Instrument (PBI) /////////////////////////////////////////////////////////


var scale_parent = [
  "Very like", 
  "Moderately like", 
  "Neither like nor unlike", 
  "Moderately unlike",
  "Very unlike"
]

var parental_bonding_mom = {
  type: 'survey-likert',
  data: { experiment_section: 'parental_bonding' },
  preamble: 
  `<br><br>This questionnaire lists various attitudes and behaviors of parents. As you remember your <b>mother</b> in your first 16 years, would you rate each question as either very like to very unlike`,
  questions: [
    {prompt: `Spoke to me with a warm and friendly voice.`, name: 'pbm_1', required: true, labels: scale_parent},
    {prompt: `Did not help me as much as I needed.`, name: 'pbm_2', required: true, labels: scale_parent},
    {prompt: `Let me do those things I liked doing.`, name: 'pbm_3', required: true, labels: scale_parent},
    {prompt: `Seemed emotionally cold to me.`, name: 'pbm_4', required: true, labels: scale_parent},
    {prompt: `Appeared to understand my problems and worries.`, name: 'pbm_5', required: true, labels: scale_parent},
    {prompt: `Was affectionate to me.`, name: 'pbm_6', required: true, labels: scale_parent},
    {prompt: `Liked me to make my own decisions.`, name: 'pbm_7', required: true, labels: scale_parent},
    {prompt: `Did not want me to grow up.`, name: 'pbm_8', required: true, labels: scale_parent},
    {prompt: `Tried to control everything I did.`, name: 'pbm_9', required: true, labels: scale_parent},
    {prompt: `Invaded my privacy.`, name: 'pbm_10', required: true, labels: scale_parent},
    {prompt: `Enjoyed talking things over with me.`, name: 'pbm_11', required: true, labels: scale_parent},
    {prompt: `Frequently smiled at me.`, name: 'pbm_12', required: true, labels: scale_parent},
    {prompt: `Tended to baby me.`, name: 'pbm_13', required: true, labels: scale_parent},
    {prompt: `Did not seem to understand what I needed.`, name: 'pbm_14', required: true, labels: scale_parent},
    {prompt: `Let me decide things for myself.`, name: 'pbm_15', required: true, labels: scale_parent},
    {prompt: `Made me feel I wasn’t wanted.`, name: 'pbm_16', required: true, labels: scale_parent},
    {prompt: `Could make me feel better when I was upset.`, name: 'pbm_17', required: true, labels: scale_parent},
    {prompt: `Did not talk with me very much.`, name: 'pbm_18', required: true, labels: scale_parent},
    {prompt: `Tried to make me dependent on her/him.`, name: 'pbm_19', required: true, labels: scale_parent},
    {prompt: `Felt I could not look after myself unless.`, name: 'pbm_20', required: true, labels: scale_parent},
    {prompt: `Gave me as much freedom as I wanted.`, name: 'pbm_21', required: true, labels: scale_parent},
    {prompt: `Let me go out as often as I wanted.`, name: 'pbm_22', required: true, labels: scale_parent},
    {prompt: `Was overprotective of me.`, name: 'pbm_23', required: true, labels: scale_parent},
    {prompt: `Did not praise me.`, name: 'pbm_24', required: true, labels: scale_parent},
    {prompt: `Let me dress in any way I pleased.`, name: 'pbm_25', required: true, labels: scale_parent}
],
randomize_question_order: true,
  };

  
var parental_bonding_dad = {
  type: 'survey-likert',
  data: { experiment_section: 'parental_bonding' },
  preamble: 
  `<br><br>This questionnaire lists various attitudes and behaviors of parents. As you remember your <b>father</b> in your first 16 years, would you rate each question as either very like to very unlike`,
  questions: [
    {prompt: `Spoke to me with a warm and friendly voice.`, name: 'pbf_1', required: true, labels: scale_parent},
    {prompt: `Did not help me as much as I needed.`, name: 'pbf_2', required: true, labels: scale_parent},
    {prompt: `Let me do those things I liked doing.`, name: 'pbf_3', required: true, labels: scale_parent},
    {prompt: `Seemed emotionally cold to me.`, name: 'pbf_4', required: true, labels: scale_parent},
    {prompt: `Appeared to understand my problems and worries.`, name: 'pbf_5', required: true, labels: scale_parent},
    {prompt: `Was affectionate to me.`, name: 'pbf_6', required: true, labels: scale_parent},
    {prompt: `Liked me to make my own decisions.`, name: 'pbf_7', required: true, labels: scale_parent},
    {prompt: `Did not want me to grow up.`, name: 'pbf_8', required: true, labels: scale_parent},
    {prompt: `Tried to control everything I did.`, name: 'pbf_9', required: true, labels: scale_parent},
    {prompt: `Invaded my privacy.`, name: 'pbf_10', required: true, labels: scale_parent},
    {prompt: `Enjoyed talking things over with me.`, name: 'pbf_11', required: true, labels: scale_parent},
    {prompt: `Frequently smiled at me.`, name: 'pbf_12', required: true, labels: scale_parent},
    {prompt: `Tended to baby me.`, name: 'pbf_13', required: true, labels: scale_parent},
    {prompt: `Did not seem to understand what I needed.`, name: 'pbf_14', required: true, labels: scale_parent},
    {prompt: `Let me decide things for myself.`, name: 'pbf_15', required: true, labels: scale_parent},
    {prompt: `Made me feel I wasn’t wanted.`, name: 'pbf_16', required: true, labels: scale_parent},
    {prompt: `Could make me feel better when I was upset.`, name: 'pbf_17', required: true, labels: scale_parent},
    {prompt: `Did not talk with me very much.`, name: 'pbf_18', required: true, labels: scale_parent},
    {prompt: `Tried to make me dependent on her/him.`, name: 'pbf_19', required: true, labels: scale_parent},
    {prompt: `Felt I could not look after myself unless.`, name: 'pbf_20', required: true, labels: scale_parent},
    {prompt: `Gave me as much freedom as I wanted.`, name: 'pbf_21', required: true, labels: scale_parent},
    {prompt: `Let me go out as often as I wanted.`, name: 'pbf_22', required: true, labels: scale_parent},
    {prompt: `Was overprotective of me.`, name: 'pbf_23', required: true, labels: scale_parent},
    {prompt: `Did not praise me.`, name: 'pbf_24', required: true, labels: scale_parent},
    {prompt: `Let me dress in any way I pleased.`, name: 'pbf_25', required: true, labels: scale_parent}
],
randomize_question_order: true,
  };

/////////////////////////////////////////////////////////////// Religious Commitment Inventory /////////////////////////////////////////////////////////////

var scale_true_of_me = [
  "Not at all <br>true for me",
  "Somewhat <br>true of me",
  "Moderately <br>true for me",
  "Mostly <br>true of me",
  "Very <br>true for me"
]

var relig_commitment = {
  type: 'survey-likert',
  data: { experiment_section: 'religious_commitment' },
  preamble: 
  `<br><br>Please read each of the following statements. Choose the response that best describes how true each statement is for you.`,
  questions: [
    {prompt: `I often read books and magazines about my faith.`, name: 'rc_1', required: true, labels: scale_true_of_me},
    {prompt: `I make financial contributions to my religious organization.`, name: 'rc_2', required: true, labels: scale_true_of_me},
    {prompt: `I spend time trying to grow in understanding of my faith.`, name: 'rc_3', required: true, labels: scale_true_of_me},
    {prompt: `Religion is especially important to me because it answers many questions about the meaning of life.`, name: 'rc_4', required: true, labels: scale_true_of_me},
    {prompt: `My religious beliefs lie behind my whole approach to life.`, name: 'rc_5', required: true, labels: scale_true_of_me},
    {prompt: `I enjoy spending time with others of my religious affiliation.`, name: 'rc_6', required: true, labels: scale_true_of_me},
    {prompt: `Religious beliefs influence all my dealings in life.`, name: 'rc_7', required: true, labels: scale_true_of_me},
    {prompt: `It is important to me to spend periods of time in private religious thought and reflection.`, name: 'rc_8', required: true, labels: scale_true_of_me},
    {prompt: `I enjoy working in the activities of my religious affiliation.`, name: 'rc_9', required: true, labels: scale_true_of_me},
    {prompt: `I keep well informed about my local religious group and have some influence in its decisions. `, name: 'rc_10', required: true, labels: scale_true_of_me}
],
randomize_question_order: true,
  };

////////////////////////////////////////////////////////////// Religious Behaviors //////////////////////////////////////////////////////////////

  /*
  var scale_true = [
    "Not at all true",
    " ",
    " ",
    "Neutral",
    " ",
    " ",
    "Very true"
  ]
  */

 var relig_behavior_A = {
  type: 'survey-likert',
  data: { experiment_section: 'religious_behaviors' },
  preamble: 
  `<br><br>This questionnaire has four statements, each of which is followed by three possible responses. Please read the first statement, and then consider each response. 
  Indicate how true each response is for you, using the following scale.
  <br><br><b>One reason I think it’s important to actively share my faith with others is:</b>`,
  questions: [
    {prompt: `Because God is important to me and I’d like other people to know about Him too.`, name: 'rb_1', required: true, labels: scale_true},
    {prompt: `Because I would feel bad about myself if I didn’t.`, name: 'rb_2', required: true, labels: scale_true},
    {prompt: `Because I want other Christians to approve of me.`, name: 'rb_3', required: true, labels: scale_true}
],
randomize_question_order: true,
  };


  var relig_behavior_B = {
    type: 'survey-likert',
    data: { experiment_section: 'religious_behaviors' },
    preamble: 
    `<br><br>This questionnaire has four statements, each of which is followed by three possible responses. Please read the first statement, and then consider each response. 
    <br>Indicate how true each response is for you, using the following scale.
    <br><br><b>When I turn to God, I most often do it because:</b>`,
    questions: [
      {prompt: `I enjoy spending time with Him.`, name: 'rb_4', required: true, labels: scale_true},
      {prompt: `I would feel guilty if I didn’t.`, name: 'rb_5', required: true, labels: scale_true},
      {prompt: `I find it is satisfying to me.`, name: 'rb_6', required: true, labels: scale_true}
  ],
  randomize_question_order: true,
    };


  var relig_behavior_C = {
    type: 'survey-likert',
    data: { experiment_section: 'religious_behaviors' },
    preamble: 
    `<br><br>This questionnaire has four statements, each of which is followed by three possible responses. Please read the first statement, and then consider each response. 
    <br>Indicate how true each response is for you, using the following scale.
    <br><br><b>A reason I think praying by myself is important is:</b>`,
    questions: [
      {prompt: `Because if I don&#39;t, God will disapprove of me.`, name: 'rb_7', required: true, labels: scale_true},
      {prompt: `Because I enjoy praying.`, name: 'rb_8', required: true, labels: scale_true},
      {prompt: `Because I find prayer satisfying.`, name: 'rb_9', required: true, labels: scale_true}
  ],
  randomize_question_order: true,
    };


    var relig_behavior_D = {
      type: 'survey-likert',
      data: { experiment_section: 'religious_behaviors' },
      preamble: 
      `<br><br>This questionnaire has four statements, each of which is followed by three possible responses. Please read the first statement, and then consider each response. 
      <br>Indicate how true each response is for you, using the following scale.
      <br><br><b>An important reason why I attend church is:</b>`,
      questions: [
        {prompt: `Because one is supposed to go to church.`, name: 'rb_10', required: true, labels: scale_true},
        {prompt: `By going to church I learn new things.`, name: 'rb_11', required: true, labels: scale_true},
        {prompt: `Because others would disapprove of me if I didn&#39;t.`, name: 'rb_12', required: true, labels: scale_true}
    ],
    randomize_question_order: true,
      };
  

//////////////////////////////////////////////////////// 5-item General Trust Scale (GTS)  ///////////////////////////////////////////////

var scale_1 = [
  "Strongly disagree", 
  "Disagree", 
  "Moderately disagree",
  "Neither agree nor disagree", 
  "Moderately agree",
  "Agree", 
  "Strongly agree"
]

var general_trust_scale = {
  type: 'survey-likert',
  data: { experiment_section: 'general_trust' },
  preamble: 
  `<br><br> Please read each of the following statements. Choose the response that best describes strongly you agree or disagree with the statement.`,
  questions: [
    {prompt: `Most people are basically honest.`, name: 'gt_1', required: true, labels: scale_1},
    {prompt: `Most people are basically good-natured and kind.`, name: 'gt_2', required: true, labels: scale_1},
    {prompt: `Most people trust others.`, name: 'gt_3', required: true, labels: scale_1},
    {prompt: `Generally, I trust others.`, name: 'gt_4', required: true, labels: scale_1},
    {prompt: `Most people are trustworthy.`, name: 'gt_5', required: true, labels: scale_1}
],
randomize_question_order: true,
  };

///////////////////////////////////////////////////////////// Personal Belief in a Just World Scale /////////////////////////////////////

/*
var scale_1 = [
  "Strongly Disagree", 
  "Disagree", 
  "Moderately Disagree",
  "Neither Agree Nor Disagree", 
  "Moderately Agree",
  "Agree", 
  "Strongly Agree"
] 
*/

var personal_belief_just_world_scale = {
  type: 'survey-likert',
  data: { experiment_section: 'personal_belief' },
  preamble: 
  `<br><br> Below you will find various statements. Most likely, you will strongly agree with some statements, and strongly disagree with others. Sometimes you may feel more neutral.
  <br>Read each statement carefully and decide to what extent you personally agree or disagree with it. Choose the point which corresponds to this judgement. 
  `,
  questions: [
    {prompt: `I believe that, by and large, I deserve what happens to me.`, name: 'pbjw_1', required: true, labels: scale_1},
    {prompt: `I am usually treated fairly.`, name: 'pbjw_2', required: true, labels: scale_1},
    {prompt: `I believe that I usually get what I deserve.`, name: 'pbjw_3', required: true, labels: scale_1},
    {prompt: `Overall, events in my life are just.`, name: 'pbjw_4', required: true, labels: scale_1},
    {prompt: `In my life, injustice is the exception rather than the rule.`, name: 'pbjw_5', required: true, labels: scale_1},
    {prompt: `I believe that most of the things that happen in my life are fair.`, name: 'pbjw_6', required: true, labels: scale_1},
    {prompt: `I think that important decisions that are made concerning me are usually just.`, name: 'pbjw_7', required: true, labels: scale_1},
],
randomize_question_order: true,
  };



//////////////////////////////////////////////////// General Belief in a Just World Scale //////////////////////////////////////

/*
var scale_1 = [
  "Strongly Disagree", 
  "Disagree", 
  "Moderately Disagree",
  "Neither Agree Nor Disagree", 
  "Moderately Agree",
  "Agree", 
  "Strongly Agree"
] 
*/

var general_trust_scale = {
  type: 'survey-likert',
  data: { experiment_section: 'general_belief' },
  preamble: 
  `<br><br> Below you will find various statements. Most likely, you will strongly agree with some statements, and strongly disagree with others. Sometimes you may feel more neutral.
  <br>Read each statement carefully and decide to what extent you personally agree or disagree with it. Choose the point which corresponds to this judgement. 
  `,
  questions: [
    {prompt: `I think the world is a just place.`, name: 'gbjw_1', required: true, labels: scale_1},
    {prompt: `I believe that, by and large, people get what they deserve.`, name: 'gbjw_2', required: true, labels: scale_1},
    {prompt: `I am confident that justice always prevails over injustice.`, name: 'gbjw_3', required: true, labels: scale_1},
    {prompt: `I am convinced that in the long run people will be compensated for injustices.`, name: 'gbjw_4', required: true, labels: scale_1},
    {prompt: `I firmly believe that injustices in all areas of life (e.g., professional, family, politics) are the exception rather than the rule.`, name: 'gbjw_5', required: true, labels: scale_1},
    {prompt: `I think people try to be fair when making important decisions.`, name: 'gbjw_6', required: true, labels: scale_1},
],
randomize_question_order: true,
  };


//////////////////////////////////////////////////////////// Social Dominance Orientation Scale, Short-Form (SDO-7s) ////////////////////////////

/*
var scale_1 = [
  "Strongly Disagree", 
  "Disagree", 
  "Moderately Disagree",
  "Neither Agree Nor Disagree", 
  "Moderately Agree",
  "Agree", 
  "Strongly Agree"
] 
*/

var social_dominance_orientation = {
  type: 'survey-likert',
  data: { experiment_section: 'social_dominance_orientation' },
  preamble:
  `<br><br>Show how much you agree or disagree each idea below by selecting a number from 1 to 7 on the scale below. You can work quickly; your first feeling is generally best.`,
  questions: [
    {prompt: `An ideal society requires some groups to be on top and others to be on the bottom. `, name: 'sdo_1', required: true, labels: scale_1},
    {prompt: `Some groups of people are simply inferior to other groups. `, name: 'sdo_2', required: true, labels: scale_1},
    {prompt: `No one group should dominate in society. `, name: 'sdo_3', required: true, labels: scale_1},
    {prompt: `Groups at the bottom are just as deserving as groups at the top. `, name: 'sdo_4', required: true, labels: scale_1},
    {prompt: `Group equality should not be our primary goal.`, name: 'sdo_5', required: true, labels: scale_1},
    {prompt: `It is unjust to try to make groups equal. `, name: 'sdo_6', required: true, labels: scale_1},
    {prompt: `We should do what we can to equalize conditions for different groups. `, name: 'sdo_7', required: true, labels: scale_1},
    {prompt: `We should work to give all groups an equal chance to succeed.`, name: 'sdo_8', required: true, labels: scale_1},
],
randomize_question_order: true,
  };


//////////////////////////////////////////////////////////// Power / Domineering Position ////////////////////////////////////////////////////////////////

/*
var scale_1 = [
  "Strongly Disagree", 
  "Disagree", 
  "Moderately Disagree",
  "Neither Agree Nor Disagree", 
  "Moderately Agree",
  "Agree", 
  "Strongly Agree"
] 
*/

var power_domineering_position = {
  type: 'survey-likert',
  data: { experiment_section: 'power_domineering_position' },
  preamble: 
  `<br><br>Show how much you agree or disagree each idea below by selecting a number from 1 to 7 on the scale below. You can work quickly; your first feeling is generally best.`,
  questions: [
    {prompt: `I&#39;d rather be seen as a ruthless person than as a sissy.`, name: 'pdp_1', required: true, labels: scale_1},
    {prompt: `I don&#39;t feel bad if I occasionally step on others to get what I want.`, name: 'pdp_2', required: true, labels: scale_1},
    {prompt: `Taking charge in a group doesn&#39;t interest me.`, name: 'pdp_3R', required: true, labels: scale_1},
    {prompt: `I&#39;m not ashamed to take the power that is within my reach.`, name: 'pdp_4', required: true, labels: scale_1},
    {prompt: `In a leadership position I avoid using my power more than necessary.`, name: 'pdp_5R', required: true, labels: scale_1},
    {prompt: `In a power hierarchy I make sure that I end up as high as possible.`, name: 'pdp_6', required: true, labels: scale_1},
    {prompt: `In social hierarchies I seek to maximize my own influence.`, name: 'pdp_7', required: true, labels: scale_1},
],
randomize_question_order: true,
  };

/////////////////////////////// Adapted Team Prosocial and Intrinsic Motivation Scale /////////////////////////////// 

var team_prosocial_motivation = {
  type: 'survey-likert',
  data: { experiment_section: 'team_prosocial_motivation' },
  preamble: `<br><br> We are interested in how you approach teamwork-related tasks. <br>
  When you work with others in teams (for example, on a sports team, or at a job, or for schoolwork) what motivates you to contribute to your team&#39;s work?`,
  questions: [
    {prompt: "I care about benefiting others through our work.", name: 'team_1', required: true, labels: scale_1},
    {prompt: "I want to help others through our work.", name: 'team_2', required: true, labels: scale_1},
    {prompt: "I want to have a positive impact on others.", name: 'team_3', required: true, labels: scale_1},
    {prompt: "It is important to me to do good for others through our work.", name: 'team_4', required: true, labels: scale_1},
    {prompt: "I enjoy the work itself.", name: 'team_5',required: true, labels: scale_1},
    {prompt: "The work is fun.", name: 'team_6', required: true, labels: scale_1},
    {prompt: "I find the work engaging.", name: 'team_7', required: true, labels: scale_1},
    {prompt: "I enjoy it.", name: 'team_8', required: true, labels: scale_1},
  ],
  randomize_question_order: true,
  };


/////////////////////////// Adapted Organizational Citizenship Behavior scale  /////////////////////////


  var org_citizenship_behavior_scale = {
    type: 'survey-likert',
    data: { experiment_section: 'org_citizenship_behavior' },
    preamble: `<br><br> We are interested in how you approach teamwork-related tasks. <br>
    When you work with others in teams (for example, on a sports team, or at a job, or for schoolwork) what motivates you to contribute to your team&#39;s work?`,
    questions: [
      {prompt: "I help others who have heavy workloads.", name: 'OCB_1', required: true, labels: scale_1},
      {prompt: "I am always ready to lend a helping hand to those around me.", name: 'OCB_2', required: true, labels: scale_1},
      {prompt: "I help others who have been absent.", name: 'OCB_3', required: true, labels: scale_1},
      {prompt: "I am willing to help others who have work-related problems.", name: 'OCB_4', required: true, labels: scale_1},
      {prompt: "I help orient new people even though it is not required.", name: 'OCB_5', required: true, labels: scale_1},
      {prompt: "I am one of the most conscientious team members.", name: 'OCB_6', required: true, labels: scale_1},
      {prompt: "I believe in giving an honest day&#39;s work for an honest day&#39;s pay.", name: 'OCB_7', required: true, labels: scale_1},
      {prompt: "I do not take extra breaks.", name: 'OCB_8', required: true, labels: scale_1},
      {prompt: "I obey team rules and regulations even when no one is watching.", name: 'OCB_9', required: true, labels: scale_1},
      {prompt: "I am the classic &#39;&#39;squeaky wheel&#39;&#39; that always needs greasing.", name: 'OCB_10', required: true, labels: scale_1},
      {prompt: "I consume a lot of time complaining about trivial matters.", name: 'OCB_11', required: true, labels: scale_1},
      {prompt: "I tend to make &#39;&#39;Mountains out of molehills&#39;&#39;.", name: 'OCB_12', required: true, labels: scale_1},
      {prompt: "I always focus on what&#39;s wrong, rather than the positive side.", name: 'OCB_13', required: true, labels: scale_1},
      {prompt: "I always find fault with what the team is doing.", name: 'OCB_14', required: true, labels: scale_1},
      {prompt: "I try to avoid creating problems for teammates.", name: 'OCB_15', required: true, labels: scale_1},
      {prompt: "I consider the impact of my actions on teammates.", name: 'OCB_16', required: true, labels: scale_1},
      {prompt: "I do not abuse the rights of others.", name: 'OCB_17', required: true, labels: scale_1},
      {prompt: "I take steps to try to prevent problems with other teammates.", name: 'OCB_18', required: true, labels: scale_1},
      {prompt: "I am mindful of how my behavior affects the performance of other teammates.", name: 'OCB_19', required: true, labels: scale_1},
      {prompt: "I keep myself abreast of changes in the team.", name: 'OCB_20', required: true, labels: scale_1},
    ],
    randomize_question_order: true,
    };

////////////////////////////////////////// Teamwork scale //////////////////////////////////

var teamwork_scale = {
type: 'survey-likert',
data: { experiment_section: 'teamwork_scale' },
preamble: `<br><br> We are interested in how you approach teamwork-related tasks. <br>
When you work with others in teams (for example, on a sports team, or at a job, or for schoolwork) what motivates you to contribute to your team&#39;s work?`,
questions: [
  {prompt: "In my experience, groups work better when group members have different strengths.", name: 'teamwork_comp_1', required: true, labels: scale_1},
  {prompt: "My group work experience shows that groups can produce better work than individuals.", name: 'teamwork_comp_2', required: true, labels: scale_1},
  {prompt: "I encourage the group to recognize the contributions of each group member (e.g., some are better at academic work while others are better at organizing).", name: 'teamwork_comp_3', required: true, labels: scale_1},
  {prompt: "I have had to manage changing group members to avoid disruption of the group’s progress.", name: 'teamwork_comp_4', required: true, labels: scale_1},
  {prompt: "I align my task expectations with the rest of the group.", name: 'teamwork_intdep_5', required: true, labels: scale_1},
  {prompt: "I will concede my individual issues for the benefit of the group.", name: 'teamwork_intdep_6', required: true, labels: scale_1},
  {prompt: "I ask the entire group for ideas when making decisions.", name: 'teamwork_intdep_7', required: true, labels: scale_1},
  {prompt: "As a group member, I equally share responsibility for group decisions.", name: 'teamwork_intdep_8', required: true, labels: scale_1},
  {prompt: "If a problem-solving strategy is ineffective, I collaborate to generate alternative strategies.", name: 'teamwork_intdep_9', required: true, labels: scale_1},
  {prompt: "I encourage my group members to identify several options before making decisions.", name: 'teamwork_intdep_10', required: true, labels: scale_1},
  {prompt: "I have relied on my group members to accomplish tasks beyond my skill level.", name: 'teamwork__intdep_11', required: true, labels: scale_1},
  {prompt: "I am willing to take on a group role that I wouldn’t prefer in order to improve group functioning.", name: 'teamwork_role_12', required: true, labels: scale_1},
  {prompt: "I ensure my group follows a process so members have to do their fair share of the work.", name: 'teamwork_role_13', required: true, labels: scale_1},
  {prompt: "I make sure I understand my assigned role before working on my individual task.", name: 'teamwork_role_14', required: true, labels: scale_1},
  {prompt: "My group members would say I always attend group meetings.", name: 'teamwork_role_15', required: true, labels: scale_1},
  {prompt: "My group members would say I am always prepared for group meetings.", name: 'teamwork_role_16', required: true, labels: scale_1},
  {prompt: "I consider group members’ strengths when task roles are assigned.", name: 'teamwork_role_17', required: true, labels: scale_1},
  {prompt: "I align my individual goals to the goals of the group.", name: 'teamwork_goals_18', required: true, labels: scale_1},
  {prompt: "I am an active voice in identifying group goals.", name: 'teamwork_goals_19', required: true, labels: scale_1},
  {prompt: "I feel a sense of personal responsibility for group outcomes.", name: 'teamwork_goals_20', required: true, labels: scale_1},
  {prompt: "I ensure that the goals of the team reflect the input of all group members.", name: 'teamwork_goals_21', required: true, labels: scale_1},
  {prompt: "I encourage the group to evaluate goal progress.", name: 'teamwork_goals_22', required: true, labels: scale_1},
  {prompt: "I have been in groups that were required to set specific goals.", name: 'teamwork_goals_23', required: true, labels: scale_1},
  {prompt: "I have been in groups that had to follow a strict timeline to attain goals.", name: 'teamwork_goals_24', required: true, labels: scale_1},
  {prompt: "I would be willing to assume extra responsibilities for my group to achieve its goals.", name: 'teamwork_goals_25', required: true, labels: scale_1},
  {prompt: "I make a unique contribution (e.g., strengths, knowledge) to accomplishing group goals.", name: 'teamwork_goals_26', required: true, labels: scale_1},
],
randomize_question_order: true,
};

//////////////////////////////////////////////  transition page from moderator surveys to demographic survey  /////////////////////////////////////////////////////

var transition_4 = {
  type: 'instructions',
  data: { experiment_section: 'instructions' },
  pages: [
    `Next, you will answer some demographic questions. <br><br> 
    
    Click &#39;Next&#39; when you are ready to begin.`
  ],
  show_clickable_nav: true
}

 ///////////////////////////////////////////////////////////////// demographic survey items //////////////////////////////////////////////////////////////////////

// age
var age = {
  type: 'survey-text',
  data: { experiment_section: 'demographics' },
  questions: [
    {prompt: "How old are you? (leave blank if prefer not to say)", name: 'age'}
  ]};

// gender
var gender = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
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
  data: { experiment_section: 'demographics' },
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

  // hispanic
var hispanic = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
  questions: [
    {
      prompt: "Would you consider yourself Hispanic or Latinx?", 
      options: ["Yes", "No"], 
      required: true,
      name: 'hispanic'
    }
  ]};

// language
var language = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
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
  data: { experiment_section: 'demographics' },
  questions: [
    {
      prompt: "Which of the following best describes your sexual orientation?", 
      options: [
        "Exclusively heterosexual", 
        "Predominantly heterosexual/ Infrequently heterosexual", 
        "Predominantly heterosexual but frequently homosexual", 
        "Equally heterosexual and homosexual", 
        "Predominantly homosexual but frequently heterosexual", 
        "Predominantly homosexual/ Infrequently heterosexual", 
        "Exclusively homosexual",
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
  data: { experiment_section: 'demographics' },
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
        "Master&#39;s Degree (MS, MA, MBA, etc.)",
        "Doctoral Degree (PhD)",
        "Professional Degree (MD, JD, etc.)", 
        "Other",
        "Prefer not to say"],
      horizontal: false, required: true, name: 'education'
    }
  ]};

// living area
var area = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
  questions: [
    {
      prompt: "Which of the following best describes the area you live in?", 
      options: ["Urban", "Suburban", "Rural"], 
      horizontal: false, required: true, name: 'area'
    }
  ]};

//marital status
var status = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
  questions: [    
    { prompt: "Which of the following best describes your marital status?", 
      options: ["Never Married", "Married", "Widowed", "Divorced", "Prefer not to say"], 
      horizontal: false, required: true, name: 'status'}
  ]};
  
// number of children
var children = {
  type: 'survey-multi-choice',
  data: { experiment_section: 'demographics' },
  questions: [   
    {
      prompt: "How many children do you have?", 
      options: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "more than 10", "Prefer not to say"], 
      horizontal: false, required: true, name: 'children'
    }
  ]};

  // age of children
var children_age = {
  type: 'survey-text',
  data: { experiment_section: 'demographics' },
  preamble: `If you have children, what are the ages of your children in years? Please round to the nearest year. You should only fill out as many boxes as children you have. If you have more than 18 children, just fill in the ages of the first 18 children. `,
  questions:[
    {prompt: "Child 1:", name: 'childAge_1', columns: 20, rows: 2},
    {prompt: "Child 2:", name: 'childAge_2', columns: 20, rows: 2},
    {prompt: "Child 3:", name: 'childAge_3', columns: 20, rows: 2},
    {prompt: "Child 4:", name: 'childAge_4', columns: 20, rows: 2},
    {prompt: "Child 5:", name: 'childAge_5', columns: 20, rows: 2},
    {prompt: "Child 6:", name: 'childAge_6', columns: 20, rows: 2},
    {prompt: "Child 7:", name: 'childAge_7', columns: 20, rows: 2},
    {prompt: "Child 8:", name: 'childAge_8', columns: 20, rows: 2},
    {prompt: "Child 9:", name: 'childAge_9', columns: 20, rows: 2},
    {prompt: "Child 10:", name: 'childAge_10', columns: 20, rows: 2},
    {prompt: "Child 11:", name: 'childAge_11', columns: 20, rows: 2},
    {prompt: "Child 12:", name: 'childAge_12', columns: 20, rows: 2},
    {prompt: "Child 13:", name: 'childAge_13', columns: 20, rows: 2},
    {prompt: "Child 14:", name: 'childAge_14', columns: 20, rows: 2},
    {prompt: "Child 15:", name: 'childAge_15', columns: 20, rows: 2},
    {prompt: "Child 16:", name: 'childAge_16', columns: 20, rows: 2},
    {prompt: "Child 17:", name: 'childAge_17', columns: 20, rows: 2},
    {prompt: "Child 18:", name: 'childAge_18', columns: 20, rows: 2},
  ],
};

////////////////////////////////////////////////////////  debrief questions  ///////////////////////////////////////////////////////////////////////
var debrief_1 = {
  type: 'survey-text',
  data: { experiment_section: 'debrief' },
  questions: [
    {prompt: "Do you have any general comments about the study? Continue when finished, or if you have no comments.", name: 'debrief_1', rows: 5, columns: 40}, 
],
  };

var debrief_2 = {
  type: 'survey-text',
  data: { experiment_section: 'debrief' },
  questions: [
    {prompt: "Did anything about today&#39;s study strike you as odd or strange?", name: 'debrief_2', rows: 5, columns: 40}, 
],
  };

var debrief_3 = {
  type: 'survey-text',
  data: { experiment_section: 'debrief' },
  questions: [
    {prompt: 
      `Sometimes people think that psychology experiments are all about tricks and behind the scenes stuff; 
      did you have any thoughts that maybe there were some things going on that we didn&#39;t tell you about? If so, what and when?`, name: 'debrief_3', rows: 5, columns: 40}, 
],
  };

  // debrief  
  var debrief = {
    type: 'instructions',
    data: { experiment_section: 'debrief' },
    pages: [
      `Dear Participant, <br><br> 

      During this study, you were asked to read statements made by a variety of different people, complete a memory task, and answer several 
      questionnaires. However, we withheld some information about the actual purpose of the study, which was to understand the attentional 
      processes and cognitive capacities underlying altruistic behavior.<br><br>

      We were interested in some problems that we couldn&#39;t discuss with you in advance.<br><br>
      Our major concern in this study is with understanding people&#39;s memory and motivational processes when presented information about needy 
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

  const surveys = [   
    GB_checklist, // generative behavior checklist
    principle_of_care, // principle of care scale
    moral_identity, // moral identity scale
    life_orientation, // life orientation test-revised
    hexaco_1, // hexaco
    hexaco_2,
    hexaco_3,
    hexaco_4,
    hexaco_5,
    hexaco_6,
    hexaco_7,
    life_history_1, // life history start
    life_history_2,
    life_history_3,
    life_history_4,
    life_history_5,
    life_history_6,
    life_history_7,
    life_history_8,
    life_history_9,
    parent_birth,
    alive_mom,
    no_death_mom,
    alive_dad,
    no_death_dad,
    siblings,
    parent_divorce,
    age_divorce,
    live_with_step_mom,
    age_divorce_step_dad,
    live_with_step_mom,
    age_divorce_step_mom,
    foster_care,
    abuse_1,
    abuse_2,
    stability,
    disease,
    change_schools,
    care_father,
    sib_death, // life history end
    personal_striving, // personal strivings list
    volunteer_functions, // volunteer functions inventory
    motivation_to_help, // motivation to help scale
    ...social_value_orientation_timeline,    
    fear_negative_evaluation, // Brief Fear of Negative Evaluation Scale
    desirable_responding, // The Balanced Inventory of Desirable Responding Short Form (BIDR-16)
    pers_norm_reciprocity, // Personal Norm of Reciprocity
    guilt_proneness_scale, // The Five-Item Guilt Proneness Scale (GP-5)
    justice_sensitivity, // Justice Sensitivity Scale
    reactivity_index, // Interpersonal Reactivity Index
    agentic_communal_values_scale, // agentic communal values scale
    parental_bonding_mom, // parental bonding scales
    parental_bonding_dad,
    relig_commitment, // religious commitment inventory
    relig_behavior_A, // religious behavior scales
    relig_behavior_B,
    relig_behavior_C,
    relig_behavior_D,
    general_trust_scale, //5-Item General Trust Scale (GTS)
    personal_belief_just_world_scale, // Personal Belief in a Just World Scale
    general_trust_scale, // general belied in a just world scale
    social_dominance_orientation, // Social Dominance Orientation Scale, Short-Form (SDO-7s)
    power_domineering_position, // Power / Domineering Position
    team_prosocial_motivation, // Adapted Version of the 4-item Team Prosocial Motivation and 4-tem Team Intrinsic Motivation Scale
    org_citizenship_behavior_scale, // Adapted Version of Organizational Citizenship Behavior Scale
    teamwork_scale // Teamwork Scale
  ];

  const demographicQuestions = [
    gender,
    age,
    ethnicity,
    hispanic,
    language,
    sexuality,
    education,
    area,
    status,
    children,
    children_age
  ];

  const debriefs = [
    debrief_1,
    debrief_2,
    debrief_3,
    debrief,
  ];

  const selectionFaces = random.shuffle(maleSample.concat(femaleSample));
  const recall_tasks = random.shuffle(statementSelections.flat()).map(statement => ({
    type: 'multi-image-selection',
    data: { experiment_section: 'recall_tasks' },
    image_paths: selectionFaces,
    prompt: statement,
  }));

  const timeline = [
    consent,
    instructions,
    face_stimulus_procedure,
    transition_1,
    distractor_task,
    transition_2,
    ...recall_tasks,
    transition_3,
    ...surveys,
    transition_4,
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


/*
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

  /////////////////////// emotional reaction to needy others /////////////////////////////////////////

  var reaction_needy = {
    type: 'survey-likert',
    preamble: `<br><br> Please indicate how much you feel the following emotions.`,
    questions: [
      {prompt: "<br>Angry", name: 'angry', required: true, labels: scale_7},
      {prompt: "<br>Bored", name: 'bored', required: true, labels: scale_7},
      {prompt: "<br>Compassionate", name: 'compassionate', required: true, labels: scale_7},
      {prompt: "<br>Confused", name: 'confused', required: true, labels: scale_7},
      {prompt: "<br>Curious", name: 'curious', required: true, labels: scale_7},
      {prompt: "<br>Distressed", name: 'distressed', required: true, labels: scale_7},
      {prompt: "<br>Empathic", name: 'empathic', required: true, labels: scale_7},
      {prompt: "<br>Excited", name: 'excited', required: true, labels: scale_7},
      {prompt: "<br>Inspired", name: 'inspired', required: true, labels: scale_7},
      {prompt: "<br>Interested", name: 'interested', required: true, labels: scale_7},
      {prompt: "<br>Moved", name: 'moved', required: true, labels: scale_7},
      {prompt: "<br>Softhearted", name: 'softhearted', required: true, labels: scale_7},
      {prompt: "<br>Surprised", name: 'suprised', required: true, labels: scale_7},
      {prompt: "<br>Sympathetic", name: 'sympathetic', required: true, labels: scale_7},
      {prompt: "<br>Tender", name: 'tender', required: true, labels: scale_7},
    ],
    randomize_question_order: true,
    };

  ///////////////////////////////////////// oxford utilitarian scale ///////////////////////////////////////////

  var oxford_utilitarian = {
    type: 'survey-likert',
    preamble: "<br><br>Please indicate below the degree to which you agree with the following statements.",
    questions: [
      {prompt: "If the only way to save another person&#39;s life during an emergency is to sacrifice one&#39;s own leg, then one is morally required to make this sacrifice.", name: 'oxford_1', required: true, labels: scale_1},
      {prompt: "From a moral point of view, we should feel obliged to give one of our kidneys to a person with kidney failure since we do not need two kidneys to survive, but really only one to be healthy.", name: 'oxford_2', required: true, labels: scale_1},
      {prompt: "From a moral perspective, people should care about the well-being of all human beings on the planet equally; they should not favor the well-being of people who are especially close to them either physically or emotionally.", name: 'oxford_3', required: true, labels: scale_1},
      {prompt: "It is just as wrong to fail to help someone as it is to actively harm them yourself.", name: 'oxford_4', required: true, labels: scale_1},
      {prompt: "It is morally wrong to keep money that one doesn&#39;t really need if one can donate it to causes that provide effective help to those who will benefit a great deal.", name: 'oxford_5', required: true, labels: scale_1},
      {prompt: "It is morally right to harm an innocent person if harming them is a necessary means to helping several other innocent people.", name: 'oxford_6', required: true, labels: scale_1},
      {prompt: "If the only way to ensure the overall well-being and happiness of people is through the use of political oppression for a short, limited period, then political oppression should be used.", name: 'oxford_7', required: true, labels: scale_1},
      {prompt: "It is permissible to torture an innocent person if this would be necessary to provide information to prevent a bomb going off that would kill hundreds of people.", name: 'oxford_8', required: true, labels: scale_1},
      {prompt: "Sometimes it is morally necessary for innocent people to die as collateral damage &#45; if more people are saved overall.", name: 'oxford_9', required: true, labels: scale_1}
    ],
    randomize_question_order: true,
  };

  ////////////////////////////////////////////////// empathy index scale //////////////////////////////////////

var empathy_index = {
  type: 'survey-likert',
  preamble: "<br><br>Please indicate below the degree to which you agree with the following statements.",
  questions: [
    {prompt: "If I see someone who is excited, I will feel excited myself.", name: 'empathy_1', required: true, labels: scale_1},
    {prompt: "I sometimes find myself feeling the emotions of the people around me, even if I don&#39;t try to feel what they&#39;re feeling. ", name: 'empathy_2', required: true, labels: scale_1},
    {prompt: "If I&#39;m watching a movie and a character injures their leg, I will feel pain in my leg. ", name: 'empathy_3', required: true, labels: scale_1},
    {prompt: "If I hear a story in which someone is scared, I will imagine how scared I would be in that situation and begin to feel scared myself. ", name: 'empathy_4', required: true, labels: scale_1},
    {prompt: "If I hear an awkward story about someone else, I might feel a little embarrassed. ", name: 'empathy_5', required: true, labels: scale_1},
    {prompt: "I can&#39;t watch shows in which an animal is being hunted, because I feel nervous as if I am being hunted. ", name: 'empathy_6', required: true, labels: scale_1},
    {prompt: "If I see someone else yawn, I am also likely to yawn.", name: 'empathy_7', required: true, labels: scale_1},
    {prompt: "If I see someone fidgeting, I&#39;ll start feeling anxious too.", name: 'empathy_8', required: true, labels: scale_1},
    {prompt: "If I see someone vomit, I will gag.", name: 'empathy_9', required: true, labels: scale_1},
    {prompt: "I catch myself crossing my arms or legs just like the person I&#39;m talking to.", name: 'empathy_10', required: true, labels: scale_1},
    {prompt: "If I see a video of a baby smiling, I find myself smiling.", name: 'empathy_11',required: true, labels: scale_1},
    {prompt: "If I see someone suddenly looking away, I&#39;ll automatically look in the direction they are looking.", name: 'empathy_12', required: true, labels: scale_1},
    {prompt: "If I&#39;m watching someone walking on a balance beam, I will lean when they lean.", name: 'empathy_13', required: true, labels: scale_1},
    {prompt: "If I&#39;m having a conversation with someone and they scratch their nose, I will also scratch my nose.", name: 'empathy_14', required: true, labels: scale_1}
    ],
    randomize_question_order: true,
  };

   /////////////////////////////////////// cognitive reflection test //////////////////////////////////////////

var cog_ref = {
  type: 'survey-text',
  preamble: "<br><br>Please answer the next few problems to the best of your ability and type the answers in the box.",
  questions: [
    {prompt: "A bat and a ball cost $1.10. The bat costs $1.00 more than the ball. How much does the ball cost?", name: 'cog_ref_1', required: true, rows: 2, columns: 20}, 
    {prompt: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?", name: 'cog_ref_2', required: true, rows: 2, columns: 20},
    {prompt: "In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?", name: 'cog_ref_3', required: true, rows: 2, columns: 20}
],
  randomize_question_order: true,
  };

  ////////////////////////////////////////// religious beliefs ///////////////////////////////////////////////

// belief - y/n
var belief_god = {
  type: 'survey-likert',
  questions: [
    {prompt: `Do you believe in God or gods?`, 
    name: 'belief_god', 
    required: true,
    labels: yes_no,}
  ],
  required: true
};

  // religion
  var religion = {
    type: 'survey-multi-choice',
    questions: [
      {
        prompt: "Which comes closest to describing your religion?", 
        options: [
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
          "Other"],
        horizontal: false,
        required: true,
        name: 'religion'
      }
    ]};

 // religious strength
var religious_strength = {
  type: 'survey-likert',   
  preamble:"<br><br> ",
  questions: [
    {prompt: `How much do you believe in God or gods?`, name: 'relig_str_1', required: true, labels: scale_6},
    {prompt: `How much do you believe in the scriptures and writings of your religion?`, name: 'relig_str_2', required: true, labels: scale_6},
    {prompt: `How much do you believe in the lessons taught by the founders of your religion?`, name: 'relig_str_3', required: true, labels: scale_6},
    {prompt: `How much do you believe in the lessons taught by the leaders of your religion?`, name: 'relig_str_4', required: true, labels: scale_6},
    {prompt: `How important are your religious beliefs in your daily life?`, name: 'relig_str_5', required: true, labels: scale_6},
    {prompt: `How often do you pray?`, name: 'prayer', required: true, labels: prayer},
    {prompt: `How often do you attend public religious activities or services?`, name: 'attend', required: true, labels: attendance}
  ],
};

//////////////////////////////////////////////////// religious internalization //////////////////////////////////////////////////////////

// most meaningful religious act
var relig_act = {
  type: 'survey-text',
  preamble: `Please list an activity that you think is the most important religious activity in which you express your religious beliefs.`,
  questions:[
    {prompt: "The most important activity that you engage in is:", name: 'relig_act', required: true, columns: 40, rows: 5},
  ],
  };

// Why you do that act
var religious_internalization = {
  type: 'survey-likert',
  preamble:"Why do you engage in this activity?",
  questions: [
    {prompt: `Because it connects well with what I want in life.`, name: 'relig_act_1', required: true, labels: scale_1},
    {prompt: `Because it is in harmony with my way of life.`, name: 'relig_act_2', required: true, labels: scale_1},
    {prompt: `Because it corresponds well with how I approach other things in life.`, name: 'relig_act_3', required: true, labels: scale_1},
    {prompt: `Because it is in accordance with my vision of life.`, name: 'relig_act_4', required: true, labels: scale_1},
    {prompt: `Because it is a meaningful activity to me.`, name: 'relig_act_5', required: true, labels: scale_1},
    {prompt: `Because I find it a personally valuable activity.`, name: 'relig_act_6', required: true, labels: scale_1},
    {prompt: `Because I fully endorse it.`, name: 'relig_act_7', required: true, labels: scale_1},
    {prompt: `Because I would feel bad if I don’t.`, name: 'relig_act_8', required: true, labels: scale_1},
    {prompt: `Because I would feel guilty if I don&#39;t.`, name: 'relig_act_9', required: true, labels: scale_1}, 
    {prompt: `Because I want others to see me as a worthy person.`, name: 'relig_act_10', required: true, labels: scale_1},
    {prompt: `Because I would feel ashamed if I didn’t do it.`, name: 'relig_act_11', required: true, labels: scale_1},
    {prompt: `Because I feel I’m expected to do so.`, name: 'relig_act_12', required: true, labels: scale_1},
    {prompt: `Because I feel pushed by others.`, name: 'relig_act_13', required: true, labels: scale_1},
    {prompt: `Because others put me under pressure to do so.`, name: 'relig_act_14', required: true, labels: scale_1}
  ],  
  randomize_question_order: true,
  };

  ////////////////////////////////////////////////// spontaneous donation task //////////////////////////////////////////////////////////////////

  var spon_donate = {
    type: 'survey-text',
    preamble: `<br><br>We'd like to test your creativity by asking you to imagine that you were given $1.<br>
    What are some possible ways that you might use that money? We encourage you to be creative, <br>
    and list as many possibilities as you can imagine. However, you only have a limited amount of time,
    <br>so you'll need to think fast!<br><br>
    
    After the survey results are collected, a panel of judges will rate the responses. <br>
    The top 10% of respondents will be rewarded with $1 in bonus money.`,
    questions: [
      {prompt: "I could use $1 by...", name: '1_dollar', required: true, rows: 20, columns: 70}
  ],
    };

// life history scale section #1
  
var life_history_1 = {
  type: 'survey-likert',
  preamble: "<br><br>Please indicate how well each of the following statements describes your life while you were growing up (ages 5- 15).",
  questions: [ 
    {prompt: "People in my family helped me study and/or complete my school assignments.", name: 'life_hist_1', required: true, labels: scale_1},
    {prompt: "People in my family acted lovingly towards me.", name: 'life_hist_2', required: true, labels: scale_1},
    {prompt: "People in my family cared about me.", name: 'life_hist_3', required: true, labels: scale_1},
    {prompt: "Adults in my community that weren’t part of my family cared about me.", name: 'life_hist_4', required: true, labels: scale_1},
    {prompt: "My parents were involved with events at my school.", name: 'life_hist_5', required: true, labels: scale_1},
    {prompt: "I volunteered to make my community a better place.", name: 'life_hist_6', required: true, labels: scale_1},
    {prompt: "I wasn’t afraid of getting hurt at my school.", name: 'life_hist_7', required: true, labels: scale_1},
    {prompt: "I felt comfortable walking around my neighborhood.", name: 'life_hist_8', required: true, labels: scale_1},
    {prompt: "I could make an impact on my community.", name: 'life_hist_9', required: true, labels: scale_1},
    {prompt: "If you broke the rules at my school, you got in trouble.", name: 'life_hist_10', required: true, labels: scale_1},
    {prompt: "My parents knew who my friends were and what they were like.", name: 'life_hist_11', required: true, labels: scale_1},
    {prompt: "My parents would often ask about where I went and who I was with.", name: 'life_hist_12', required: true, labels: scale_1},
    {prompt: "Adults encouraged me to “aim high” and achieve.", name: 'life_hist_13', required: true, labels: scale_1},
    {prompt: "My close friends got good grades in school.", name: 'life_hist_14', required: true, labels: scale_1},
    {prompt: "My close friends didn’t get in trouble with the school or the police.", name: 'life_hist_15', required: true, labels: scale_1},
    {prompt: "I spent a lot of time practicing, taking lessons, or working on art (dance, music, painting, etc).", name: 'life_hist_16', required: true, labels: scale_1},
    {prompt: "I was involved with sports teams.", name: 'life_hist_17', required: true, labels: scale_1},
    {prompt: "I was a member of youth clubs (for example, the Boy Scouts or Girl Scouts).", name: 'life_hist_18', required: true, labels: scale_1},
    {prompt: "I was heavily involved with my spiritual or religious organization.", name: 'life_hist_19', required: true, labels: scale_1}, 
],
  randomize_question_order: true,
  };

// life history scale section #2
var life_history_2 = {
  type: 'survey-likert',
  preamble: `<br><br>For the next questions, please think of your life while you were growing up (ages 5-15).`,  
  questions: [
    {prompt: 
      `When you were growing up, was there an important adult who was NOT your parent or guardian that did a lot of good things for you? 
      Someone you thought was a special person in your life? This could be a teacher, a neighbor, someone in your community, or anyone that did a 
      lot of good things for you.`, 
      name: 'life_hist_20', 
      required: true,
      labels: scale_3},
],
required: true
};

// life history scale section #3
var life_history_3 = {
  type: 'survey-likert',
  questions: [
    {prompt: `How many adults like this did you have in your life?`, 
    name: 'life_hist_21', 
    required: true,
    labels: scale_4},
],
  };

// life history scale section #4
var life_history_4 = {
  type: 'survey-likert',
  preamble: 
    `<br><br>Thinking about the adult from the last question, please indicate how much you agree with each statement describing how you felt about that adult while growing up. 
    If there was more than one adult like that in your life, please think of the adult that was most important to you. 
    If you didn’t have any important adults in your life, please respond “Not at all”.`,
  questions: [
    {prompt: `I looked up to this adult.`, 
    name: 'life_hist_22', 
    required: true,
    labels: scale_5},
    {prompt: `This adult encouraged me to do my best.`, 
    name: 'life_hist_23', 
    required: true,
    labels: scale_5},
    {prompt: `I felt like this adult really cared about what happened to me.`, 
    name: 'life_hist_24', 
    required: true,
    labels: scale_5},
    {prompt: `This adult influenced what I did and the choices I made.`, 
    name: 'life_hist_25', 
    required: true,
    labels: scale_5},
    {prompt: `I felt like I could talk to this adult about my personal problems.`, 
    name: 'life_hist_26', 
    required: true,
    labels: scale_5},
    {prompt: `This adult helped me see good things about myself.`, 
    name: 'life_hist_27', 
    required: true,
    labels: scale_5},
],
  randomize_question_order: true,
  };

  // life history section #5
var parent_birth = {
  type: 'survey-text',
  preamble: `<br><br>You will now fill out the last questionnaire. Some of the questions are personal.  
  <br>You are asked these questions so that participants’ responses can be analyzed according to their individual profile and history.  
  <br>We wish to remind you that all of the responses we collect will be analysed completely anonymously - NO INFORMATION FROM THIS 
  <br>SECTION WILL BE LINKED TO YOU IN ANY WAY. If you would prefer to not respond to some of the questions, you will simply have to   <br>type in the box 'I don’t want to answer'.`,
  questions: [
    {prompt: `What is the birth year of your mother?`, 
    name: 'mom_birth', 
    required: true,
    rows: 1, 
    columns: 7}, 
    {prompt: `What is the birth year of your father?`, 
    name: 'dad_birth', 
    required: true,
    rows: 1, 
    columns: 7}
],
  };

var alive_mom = {
  type: 'survey-likert',
  questions: [
    {prompt: `Is your mother still alive?`, 
    name: 'mom_alive', 
    required: true,
    labels: yes_no}, 
],
  };

var no_death_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your mother die?`, 
    name: 'mom_death', 
    rows: 2, 
    columns: 20}, 
],
  };

 var alive_dad = {
  type: 'survey-likert',
  questions: [
    {prompt: `Is you father still alive?`, 
    name: 'dad_alive', 
    required: true,
    labels: yes_no}
],
required: true
  };

var no_death_dad = {
  type: 'survey-text',
  questions: [
    {prompt: `If you answered “No” to the above question, what year did your father die?`, 
    name: 'dad_death', 
    rows: 2, 
    columns: 20}
],
  };  

var siblings = {
  type: 'survey-likert',
  questions: [
    {prompt: `How many children did your mother have?`, 
    name: 'mom_siblings', 
    required: true,
    labels: children},
    {prompt: `Among your mother's children you are the:`, 
    name: 'mom_birth_order', 
    required: true,
    labels: birth_order},
    {prompt: `How many children did your father have?`, 
    name: 'dad_siblings', 
    required: true,
    labels: children},
    {prompt: `Among your father's children you are the:`, 
    name: 'dad_birth_order', 
    required: true,
    labels: birth_order}
],
required: true
  };

var parent_divorce = {
  type: 'survey-likert',
  questions: [
    {prompt: `Did your parents got divorved or separated?`, 
    name: 'divorce', 
    required: true,
    labels: yes_no}
],
required: true
  };

var age_divorce = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents did get divorced or separated, how old were you when they got divorced?`, 
    name: 'age_divorce', 
    rows: 2, 
    columns: 20}
],
  }; 

var live_with_step_dad = {
  type: 'survey-likert',
  questions: [
    {prompt: `If your parents did get divorced or separated, have you ever lived with a step-father?`, 
    name: 'step_dad', 
    labels: yes_no}
],
required: true
  };

var age_divorce_step_dad = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents did get divorced or separated, and you lived with a step-father, from what age on did you live with your step-father?`, 
    name: 'age_step_dad', 
    rows: 2, 
    columns: 20}
],
  };  

var live_with_step_mom = {
  type: 'survey-likert',
  questions: [
    {prompt: `If your parents did get divorced or separated, have you ever lived with a step-mother?`, 
    name: 'step_mom', 
    labels: yes_no}
],
  };


var age_divorce_step_mom = {
  type: 'survey-text',
  questions: [
    {prompt: `If your parents did get divorced or separated, and you lived with a step-mother, from what age on did you live with your step-mother?`, 
    name: 'age_step_mom', 
    rows: 2, 
    columns: 20}
],
  };  

var foster_care = {
  type: 'survey-likert',
  questions: [
    {prompt: `Were you ever placed in an institution or in a foster family?`, 
    name: 'foster_care', 
    required: true,
    labels: yes_no}
],
required: true
  };

var abuse_1 = {
  type: 'survey-multi-select',
  questions: [
    {prompt: `During my childhood, I was a victim of (please select all appropriate answers):`, 
      options: ["Physical abuse", "Sexual abuse", "Psychological abuse", "No form of abuse", "I don’t want to answer"],
      name: 'childhood_abuse_yn',
      required: true}
],
  };

var abuse_2 = {
  type: 'survey-multi-select',
  questions: [
    {
      prompt: `Answer this question only if you answered 'Physical abuse' or 'Psychological abuse ' or 'Sexual abuse' to the previous question. <br>
              These episodes were caused by (please select all appropriate answers):`, 
      options: ["One or several people in my family", "One or several people outside my family"],
      name: 'childhood_abuse',
      required: true
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
        "who regularly took illegal drugs", 
        "who sometimes had issues with the judicial system", 
        "who had spent time in prison", 
        "none of the above", 
        "I don’t want to answer"],
      name: 'home_stability',
      required: true
    }
],
};

var disease = {
  type: 'survey-likert',
  questions: [
    {prompt: `   From your birth until you were 7 years old, did you suffer from a long disease that required a hospitalization?  `, 
    name: 'disease',
    required: true,
    labels: yes_no}
  ],
  };

var change_schools = {
  type: 'survey-likert',
  questions: [
    {prompt: `From your birth until you were 7 years old, how many times did you change schools?`, 
    name: 'change_schools',
    required: true,
    labels: children},
],    
  };

var care = {
  type: 'survey-likert',
  questions: [
    {prompt: `          From your birth until you were 7 years old, how much did your father take care of you?          `, 
    name: 'paternal_care',
    required: true,
    labels: paternal_care}
],
  };

  
  // moderator surveys

  var scale_6 = [
    "Not at all",
    "Not really",
    "Not sure",
    "Mostly",
    "Completely"
  ]

  var scale_7 = [
    "Not at all",
    "A little",
    "Moderately",
    "A lot",
    "Extremely"
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

  */
