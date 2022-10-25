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
  var covid_personal_need = [
    //depression
    [`Depression can be really unpredictable, and being stuck inside because <br/>
    of COVID-19 has been really rough. I wish I could talk to someone about it in person.`,
    `Some days I am so depressed I can&#39;t even get out of bed. With the city stay-at-home<br/>
     recommendation, this morning it took me a few hours to finally get up to make breakfast.`, 
    `Because of the COVID-19 epidemic, my anxiety has interfered with all aspects of my life.<br/>
     I&#39;ve had insomnia and a debilitating fear of going to the grocery store.`],
    //loneliness
    [`I&#39;ve been feeling really alone since my college shifted online last semester. I wish<br/>
     I had someone to talk to about how hard it is living in a city shut down by Covid-19.`,
    `I just feel like my life is falling apart right now. I feel so down all the time, and just<br/>
     wish I had someone to hang out with to take my mind off my worries about Covid-19.`,
    `I often feel really lonely and anxious since Covid-19 shut down the city, and all my close<br/>
     friends who I could hang out with to distract me live really far away.`],
    //illness
    [`I&#39;ve been really sick with COVID-19 the last couple of days. It&#39;s rough because I<br/>
    live alone, so I still have to get up and walk around even though I feel so exhausted.`,
    `I&#39;m nervous about falling asleep because there is no one around to check-in on me while<br/>
     I&#39;m recovering from COVID-19. What if I struggle to breath and need to go to the ER for<br/>
      a ventilator?`,
    `I don&#39;t own a car, so I know if I got COVID-19 symptoms bad enough I would have to<br/>
     call an ambulance to get to the hospital. I hope I don&#39;t need it because I&#39;m<br/>
      worried about the cost of the medical bill.`],
    //grandparent death
    [`I&#39;ve really missed my grandmother since she passed away from Coronavirus. It&#39;s<br/>
     been hard because I&#39;m basically planning her funeral on my own.`,
    `Since my grandmother passed away there are some nights where I just sit and cry because I<br/>
     miss her so much. It would be nice if I had someone there with me, but I don&#39;t want to<br/>
      risk spreading Coronavirus.`,
    `My family life has been so stressful since my grandmother passed away. We can&#39;t mourn<br/>
     in person together, and everyone is always either arguing or really sad.`],
    //caring for parent
    [`A few weeks ago my dad was diagnosed with Covid-19. I asked him to move in with me so I<br/>
     could help him recover. Knowing he could be gone soon makes me feel so hopeless.`,
    `I love my dad so much, but helping him out through his Covid-19 recovery has been such a struggle.<br/>
     Each day he seems worse, and I feel so helpless.`,
    `I feel so much guilt sometimes taking care of my dad while he fights Covid-19. I want to<br/>
     support him emotionally, but I often feel the weight of the world on my shoulders which makes<br/>
      it really hard sometimes.`],
    //caring for child
    [`For the last few months, it has been difficult to pay for rent and for my daughter&#39;s<br/>
     daycare. Being a single parent during the Covid-19 pandemic can be a struggle sometimes.`,
    `With no family nearby, I have to pay for childcare. Most of the time I can&#39;t afford to pay<br/>
     for even a few extra hours to have some time to myself since my son is at home due to the<br/>
      pandemic. Sometimes I feel so burnt out.`,
    `Money has been tight lately because Covid-19 restrictions cut my work hours. To make it worse,<br/>
     last week I lost my job. I am so worried about finances, but I have a put on a smile each<br/>
      morning so my daughter doesn&#39;t worry.`],
    //lost job
    [`A while ago the cafe I worked for closed because of Covid-19, and I was laid off. I&#39;m<br/>
     worried I will run out of savings to pay rent before I find another job.`,
    `Recently, I applied for unemployment, but I haven&#39;t received a response yet. It seems<br/>
     like everyone is applying for it because of the pandemic, so I&#39;m worried I won&#39;t<br/>
      even be considered.`,
    `Some businesses in my area are reopening from Covid-19 shutdowns. I&#39;ve applied to every<br/>
     job position I&#39;ve learned about, but haven&#39;t received a single call back.`],
    //lost meaning
    [`I have been staying home socially distancing for months now. Every day is the same. I get up<br/>
     and I work on my computer. I used to be passionate about my job, but now my work<br/>
      feels so meaningless.`,
    `Having no structured daily routine during the pandemic has been the most difficult part for me.<br/>
     Life feels bland and I feel so unmotivated in all parts of my life.`,
    `Not being able to see my friends in person is really straining. I miss being around people<br/>
     and video chatting just isn&#39;t the same. Life just feels pointless sometimes when I<br/>
      can&#39;t see my friends and family.`]
];

  var general_personal_need = [
    //depression
    [`Depression can be really unpredictable, and it makes it really hard to leave the house.<br/>
     I wish I could talk to someone about it in person.`,
    `Some days I am so depressed I can&#39;t even get out of bed. This morning it took me a few<br/>
     hours to finally get up to make breakfast.`,
    `Having depression and my anxiety has interfered with all aspects of my life. I&#39;ve had<br/>
     insomnia and a debilitating fear of going to the grocery store.`],
    //loneliness
    [`I&#39;ve been feeling really alone since I moved for college last semester. I wish I had<br/>
     someone to talk to about how hard it is living in a new city.`,
    `I just feel like my life is falling apart right now. I feel so down all the time, and just<br/>
     wish I had someone to hang out with who is encouraging.`,
    `I often feel really lonely and anxious when I go out into the city, and all my close friends<br/>
     who could distract me from these feelings live really far away.`],
    //illness
    [`I&#39;ve been really ill with food poisoning the last few days. It&#39;s rough because I<br/>
     live alone, so I still have to get up and walk around even though I feel exhausted.`,
    `I&#39;m so nervous about falling asleep with food poisoning because there is no one around<br/>
     to check-in on me while I&#39;m recovering. What if I get dehydrated and need to go to the ER?`,
    `I don&#39;t own a car, so I know if I ever got sick enough from food poisoning I would have<br/>
     to call an ambulance to get to the hospital.`],
    //grandmoth death
    [`I&#39;ve really missed my grandmother since she passed away. It&#39;s been hard because<br/>
     I&#39;m basically planning her funeral on my own.`,
    `Since my grandmother passed away there are some nights where I just sit and cry because I<br/>
     miss her so much. It would be nice if I had someone there with me.`,
    `My family has been so stressful since my grandmother passed away. Everyone is always either<br/>
    arguing or really sad.`],
    //caring for parent
    [`Last year my dad was diagnosed with cancer. I asked him to move in with me so I could help<br/>
     him through treatment. Knowing he could be gone soon makes me feel hopeless.`,
    `I love my dad so much, but helping him out through chemotherapy has been such a struggle.<br/>
     Each day he seems worse, and I feel so helpless.`,
    `I feel so much guilt sometimes taking care of my dad while he fights cancer. I want to support<br/>
     him, but I often feel the weight of the world on my shoulders.`],
    //caring for child
    [`For the last few months, it has been difficult to pay rent and for my daughter&#39;s daycare.<br/>
     Being a single parent can be a struggle sometimes.`,
    `With no family nearby, I have to pay for childcare. Most of the time I can&#39;t afford to pay<br/>
     for even a few extra hours to have some time to myself. Sometimes I feel so burnt out.`,
    `Because money has been so tight lately, I took on a second job. I know it will help with<br/>
     finances, but I&#39;m broken up about being away from my daughter.`],
    //lost job
    [`A while ago, the cafe I worked for closed down and I was laid off. I&#39;m so worried I will<br/>
     run out of savings for paying rent before I find another job.`,
    `Recently, I applied for unemployment, but I haven&#39;t received a response yet. I&#39;m<br/>
     worried I won&#39;t even be considered.`,
    `I&#39;ve applied to every job position I&#39;ve learned about, but haven&#39;t received<br/>
     a single call back.`],
    //lost meaning
    [`Recently, every day is the same. I get up and I go to work. I used to be passionate about my<br/>
     job, but now my work and life feels so meaningless.`,
    `I feel like I have no structure or routine in my life right now. Life feels bland and I am so<br/>
     unmotivated at work, reaching out to friends, or getting out of the house.`,
    `My friendships have felt so strained lately. When I&#39;m alone I miss being around people, but<br/>
     when I&#39;m with people I miss being at home. Life just feels pointless sometimes when I<br/>
      can&#39;t find meaning in my relationships with friends.`]
  ];

  var covid_abstract_need = [
    [`It can be difficult for people navigating the unpredictability of the pandemic. Sometimes it<br/>
     is alright to go outside when the spread is under control, and just a few days later you<br/>
      have to quarantine.`,
    `Life during the COVID-19 pandemic can feel so uncertain. You just have to take it day-by-day<br/>
     and just trust it will work out, I guess.`,
    `I wonder how uncomfortable people will feel being in public places after the COVID-19 pandemic<br/>
     restrictions are over. I suspect some people will struggle with social anxiety and being in<br/>
      crowded places.`],

    [`Many people seem to be struggling with loneliness working from home and doing school from<br/>
     home all the time. Being intentional scheduling time to chat with your friends can really<br/>
      help keep you balanced.`, 
    `Some people make fun, but video chatting fatigue is really a struggle. Rather than jumping<br/>
     from meeting to meeting, it can be helpful setting aside a few minutes throughout the day to<br/>
      get away from the computer.`,
    `It must be very hard living in a crowded city during Covid-19 restrictions. You can&#39;t go<br/>
     out to eat, or really even get away from people anywhere but in your apartment.`],

    [`Living alone during the COVID-19 pandemic could be really good and really bad. Good because<br/>
     you are less likely to contract the virus, but bad because if you do get sick no one is living<br/>
      with you to help.`,
    `It seems the fear of COVID-19 symptoms is a thought many people struggle with. Catching COVID-19<br/>
     includes so many uncertain factors. Will you get sick or will you be asymptomatic? You can&#39;t<br/>
      know unless you get it.`,
    `Surprisingly, many people are worried about COVID-19 not because of the symptoms, but the<br/>
     possibility of having big medical bills if they need to go to the hospital.`],

    [`Do your best to be mindful of others when discussing the Covid-19 pandemic. You never know if<br/>
     someone you are talking to has lost someone they love to the virus.`,
    `Losing someone during Covid-19 is terrible. It is good to remember that there are many people<br/>
     also struggling with grief too and you are not alone.`,
    `Deciding whether to spend time with family can be a stressful experience during the pandemic.<br/>
     It means so much to grandparents when you visit, but it can also be dangerous for their health.`],

    [`Covid-19 is not only a struggle for those who become sick, but also for their loved ones.<br/>
     It is really difficult to cope with having no control over their recovery.`,
    `There is so much uncertainty when you know someone who tests positive for Covid-19. Will they<br/>
     get really ill or will they have no symptoms. You just need to keep hope that everything will<br/>
      workout in the end.`,
    `When you are the only one caring for someone with Covid-19, it can be overwhelming. If it is<br/>
     possible, it is good to have someone else helping you along the way.`],

    [`Children rely on their parents for reassurance of safety, both physical and emotional. This is<br/>
     why parents need to keep in mind helping their kids understand that we will get through the<br/>
      pandemic together.`,
    `Being a single parent during the pandemic isn&#39;t easy, having to work and help your child<br/>
     with remote schooling. It is good to know that accepting a bad situation doesn&#39;t mean you<br/>
      have to like it.`,
    `Many parents&#39; lives have been severely disrupted during the pandemic. Because they have so<br/>
     much to manage now, their own personal lives may have to be pushed to the back burner.`],

    [`Millions of people around the world are coping with job loss caused by the Covid-19 pandemic.<br/>
     For those who do love their jobs, it&#39;s good to remember you are just doing the best you<br/>
      can under the current circumstances.`,
    `Try to keep in mind that the Covid-19 pandemic is causing many companies to make difficult<br/>
     decisions about their employees. If you are laid off, it has nothing to do with your worth.`,
    `Keep in mind to use your energy wisely when looking for a job during the pandemic. Be kind to<br/>
     yourself and focus on what you can work on in the moment to get where you want to be.`],

    [`During the pandemic you need to remain intentional about creating purpose in your life.<br/>
     Planning a daily routine and tossing in new activities every once and a while can really help<br/>
      keep life interesting while socially isolating.`,
    `Learning to live with purpose during the Covid-19 pandemic is the ultimate challenge. Staying<br/>
     home most days strips away much of the minutia and you can focus on looking inward.`,
    `A pandemic is a great time to discover what really matters most in your life, what you care<br/>
     about, what&#39;s most important. This is the foundation of a life purpose. Now is a time to<br/>
      discover strengths you didn&#39;t know you had.`]
  ];

  var general_abstract_need = [
      [`I&#39;ve had friends in the past who have struggled with mental health issues. They told me<br/>
       sometimes just sitting there and being with them can be a big help.`,
      `I try to remember that some people may struggle a lot with things I don&#39;t find difficult<br/>
       at all. Simply motivating yourself to get out of bed can be a challenge.`,
      `I need to remember my strengths and limitations when others are struggling with their<br/>
       mental health. Sometimes I can help, but other times I need to trust that someone better<br/>
        equipped will help.`],

      [`I&#39;ve had friends in the past who have struggled with mental health issues. They told<br/>
       me sometimes just sitting there and being with them can be a big help.`,
      `I try to remember that some people may struggle a lot with things I don&#39;t find<br/>
       difficult at all. Simply motivating yourself to get out of bed can be a challenge.`,
      `I need to remember my strengths and limitations when others are struggling with their<br/>
       mental health. Sometimes I can help, but other times I need to trust that someone better<br/>
        equipped will help.`],

      [`I think getting sick with fever and nausea would be the absolute worst, especially when<br/>
       you don&#39;t have anyone to help take care of you.`,
      `Having foodborne illness would be terrible. I&#39;ve heard you can get so dehydrated that<br/>
       you have to go to the ER. That would be so scary.`,
      `If I were ever that sick, I would be really nervous about having to call an ambulance even<br/>
       if I thought I needed to go to the hospital.`],

      [`Sometimes I struggle with the idea that terrible things happen to people all of the time,<br/>
       and that there&#39;s pain everywhere in the world.`,
      `There are so many people struggling in the world with the loss of loved ones that I often<br/>
       get overwhelmed just thinking about it.`,
      `I can&#39;t imagine how difficult it would be to lose a family member. I&#39;ve never lost<br/>
       anyone close to me, but just the thought of it is really scary.`],

      [`I read recently that volunteering for an organization like a retirement home or for a hospital<br/>
       can often connect you with others in your community and be very fulfilling.`,
      `I know a few people who have time to volunteer for a local non-profit one day a week.<br/>
       They say they really enjoy it.`,
      `Helping provide for others can often bring a lot of meaning to a person&#39;s life. Though, I<br/>
       bet it can also be really overwhelming too.`],

      [`I sometimes wonder what it&#39;s like to be a single parent. It must be a real struggle to<br/>
       balance work and taking care of a child.`,
      `I&#39;ve heard that single parents often struggle with feeling burnt out. If you don&#39;t<br/>
       have a baby sitter or family nearby, then going non-stop all the time must be really exhausting.`,
      `Often with only one source of income, I bet being a single parent is quite a struggle. I&#39;ve<br/>
       heard some parents often get a second job. That must be horrible being away from the kids so much.`],

      [`I noticed the other day that my grocery store put on a fundraiser by asking shoppers to buy<br/>
       food for a local food drive rather than just donating money. I thought that was a unique idea.`,
      `There are a lot of people struggling these days trying to get back up on their feet. I&#39;d<br/>
       like to learn more about the charities that help people with these problems.`,
      `Sometimes just giving a dollar to someone in need when walking down the street can make that<br/>
       person&#39;s day. Who knows, it could make your day too.`],

      [`Sometimes you need to remain intentional about creating purpose in your life. Planning a daily<br/>
       routine and tossing in new activities every once and a while can really help keep life interesting.`,
      `Learning to live with purpose is the ultimate challenge. It often helps when you can take the time<br/>
       to focus on looking inward.`,
      `Everyday is a great time to discover what really matters most in your life, what you care about,<br/>
       what&#39;s most important. This is the foundation of a life purpose. Now is a time to discover<br/>
        strengths you didn&#39;t know you had.`]
  ];

  var aphorism = [
    [`Sometimes I think our world is overly complicated. I feel like I make thousands of decisions everyday,<br/>
     and after a while, it gets really exhausting.`,
    `Life is uncertain and full of many day-to-day challenges and obstacles. We never know what each<br/>
     day will bring.`,
    `Even though the world can feel overwhelming, I am fortunate enough to live in a place where I can<br/>
     think about all kinds of future possibilities, whether that be for my career or personal life.`],

    [`You will never know what new people that will enter your life. That is why you must always keep<br/>
     an open mind.`,
    `I do my best not to give up even when I am so tired of working for something. In those moments I<br/>
     let myself take a break to rejuvenate my strength.`,
    `We find ourselves in this world, trying to figure out how we should act, and what we should do.<br/>
     It&#39;s hard to know the right courses of action.`],

    [`You should always wash your hands before and after working with raw meat because it can cause<br/>
     foodborne illness. You don&#39;t want to make yourself or others sick.`,
    `Anyone can get food poisoning, but some are at a higher risk. When others do get sick, it&#39;s<br/>
     best to stay and take care of them just in case they need some help.`,
    `Often it&#39;s not the illness itself when someone is sick that makes a person need an ambulance,<br/>
     it&#39;s the body&#39;s response causing dehydration or fever that makes them need hospital care.`],

    [`Only people who are capable of loving strongly can also suffer great sorrow, but this same<br/>
     necessity of loving serves to counteract their grief and heals them.`,
    `While grief is fresh, every attempt to divert only irritates. You must wait until it is digested,<br/>
     and then amusement will dissipate the remains of it.`,
    `There is no shame in holding on the grief, so long as you make room for other things too. It is<br/>
     often just a part of life.`],

    [`You can be a victim of life threatening illness or a survivor of it. You can let it conquer you,<br/>
     or you can conquer it. It&#39;s all a mindset.`,
    `The secret of health for both mind and body is not  to mourn for the past, worry about the suture,<br/>
     or anticipate troubles, but to live in the present.`,
    `Coping with terminal illness is a journey, but you walk the road alone. There are many places to<br/>
     stop along the way and get nourishment - you just have to be willing to take it.`],

    [`Being a single parent is twice the work, stress, and tears - but also twice the hugs, love, and<br/>
     pride. It can be really difficult at time, but it is worth it.`,
    `A person doesn&#39;t often set out to be a single parent, and it takes a strong person to be a<br/>
     single parent, taking on two roles.`,
    `The birth of a child and parenthood are not things that a person can be trained to do. Even if you<br/>
     have a good example in your own parents, nobody teaches you how to be a really great parent.`],

    [`People often say money doesn&#39;t provide happiness, but everyone still wants to prove it to themselves.`,
    `Money is numbers, and numbers never end. If it takes money to be happy, your search for<br/>
     happiness will never end.`,
    `Time is always more valuable than money. You can earn more money for the rest of your life, but you<br/>
     can never get the time back to that you lost.`],

    [`There are moments when nothing seems to make sense. These are the moments where you get to explore.<br/>
     We are not born with meaning for our life. Meaning comes from learning who we are and growing as a person.`,
    `The quickest way to destroy your life is to believe that it has no meaning. If you feel like you<br/>
     are lacking purpose and passion, the best thing to do is begin to experiment. Standing still is not<br/>
      how you find the answer.`,
    `To begin to think with purpose, is to enter the ranks of those strong ones who only recognize failure<br/>
     as one of the pathways to attainment.`],
  ];
  
  // condition pairs
  var conditions_general = [
    [general_personal_need, general_abstract_need],
    [general_personal_need, aphorism],
    [general_abstract_need, aphorism],
  ];

  var conditions_covid = [
    [covid_personal_need, covid_abstract_need],
    [covid_personal_need, aphorism],
    [covid_abstract_need, aphorism]
  ];

  // randomly select statement clusters from list
  var allStatementGroups = [
    random.sampleWithoutReplacement(conditions_general, 1),
    random.sampleWithoutReplacement(conditions_covid, 1),
  ];
  
  // assign selected statement clusters to single array
  var allStatementSelections = random.shuffle(allStatementGroups)
    .flat()
    .map(choice => choice.map(group => random.sampleWithoutReplacement(group, 4)).flat());

  // shuffle statement order
  statementSelections = allStatementSelections.map(selections => random.shuffle(selections));
  // randomly sample from female faces 
  var allFemaleSample = random.sampleWithoutReplacement(females, 8);
  var femaleSamples = [allFemaleSample.slice(0, 4), allFemaleSample.slice(4, 8)]
  // randomly sample from male faces
  var allMaleSample = random.sampleWithoutReplacement(males, 8);
  var maleSamples = [allMaleSample.slice(0, 4), allMaleSample.slice(4, 8)];

  // place male and female faces in single array and randomize order
  var allFaces = [0, 1].map(i => random.shuffle(maleSamples[i].concat(femaleSamples[i])));

  // pair faces with statement clusters
  var facesWithStatements = allFaces.map((faces, i) => faces.map((face, j) => ({ face, statements: statementSelections[i][j] })));
  // call statements when paired face displays

 var trialData = [0, 1].map(i => {
    return [0, 1, 2].map(j =>
      random.shuffle(facesWithStatements[i]).map(({ face, statements }) => ({ face, statement: statements[j] }))
    ).flat();
  });
  
  var participant_number = crypto.randomUUID();

  // declare the block
  var consent = {
    type:'custom-external-html',
    data: { experiment_section: 'consent', participant_number },
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
      `This study has two parts. In each part you will observe an interaction among eight individiduals discussing a<br>
      topic of interest.<br><br>`,
      `The discussion is presented as a series of slides, each of which contains a photo of a single speaker,<br> 
      along with the text of a statement made by that speaker.<br><br>`,
      'Please attend carefully to the discussion and form impressions of the speakers.<br><br>',
      'The study will begin on the next page. <br><br> Press &#39;Next&#39; to begin the study.<br><br>'
    ],
    show_clickable_nav: true
  };

  var objectiveStatement = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `<b>While you are reading the statements, try to be as objective as possible about what each person is experiencing<br>
      and how it has affected his or her life. To remain objective, do not let yourself get caught up in imagining what<br> 
      this person has been through and how he or she feels as a result.<br>
      Just try to remain objective and detached.</b>
      <br><br> When you are ready to move on, click &#39;Begin&#39;.<br><br>`,
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: "Begin",
  };

  var empathyStatement = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `<b>While you are reading the statements, try to imagine how each person feels about what they are experiencing and how<br>
      it has affected his or her life. Try not to concern yourself with attending to all of the information presented.<br>
      Just concentrate on trying to imagine how the person feels.</b>
      <br><br> When you are ready to move on, click &#39;Begin &#39;.<br><br>`,
    ],
    show_clickable_nav: true,
    allow_backward: false,
    button_label_next: "Begin",
  };

  // stimulus presentation
  var face_stimulus_procedure_objective = {
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
              perspective: 'objective',
            },
            stimulus: jsPsych.timelineVariable('face'),
            stimulus_width: 600,
            maintain_aspect_ration: true,
            choices: jsPsych.NO_KEYS,
            trial_duration: 15000, ////////////////////////////////////////////////////////////// set back to 15000 ms
            prompt: () => `<p>${jsPsych.timelineVariable('statement', true)}</p>`
        }
    ],
    timeline_variables: trialData[0],
  };

    // stimulus presentation
    var face_stimulus_procedure_empathy = {
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
                perspective: 'empathy',
              },
              stimulus: jsPsych.timelineVariable('face'),
              stimulus_width: 600,
              maintain_aspect_ration: true,
              choices: jsPsych.NO_KEYS,
              trial_duration: 15000,  //////////////////////////////////////////////////////////////////////// set back to 15000 ms
              prompt: () => `<p>${jsPsych.timelineVariable('statement', true)}</p>`
          }
      ],
      timeline_variables: trialData[1],
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

  //   distractor task    #1
  var distractor_task_1 = {
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
      var nextButton = document.getElementById('jspsych-survey-html-form-next');
      setTimeout(() => {
        nextButton.click();
      }, 60000) 
    `
  };

  //   distractor task    #2
  var distractor_task_2 = {
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
      var nextButton = document.getElementById('jspsych-survey-html-form-next');
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
      `Thank you for taking part in that task. There is one last task for you to do. On the next page we will<br>
       describe this task to you.
      <br><br> Click &#39;Next&#39; when you are ready to read the instructions.<br><br>`,

      `Next, you will take part in a recall task. You will see a screen with all the faces that were presented to you in the first task.<br>
      The statements each person said will appear sequentially. Please reread each statement and try to recall which person said it.<br>
      To choose the person you think said the presented statement, simply click their picture.<br><br> 
      When you are ready to begin, click &#39;Next&#39;.<br><br>`
    ],
    show_clickable_nav: true
  };

  // transition from first task to second task
  var transition_3 = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in the first part of the study. Now, you will move on to the second part.
      <br><br> Click &#39;Next&#39; when you are ready to begin.<br><br>`,
    ],
    show_clickable_nav: true
  };

 // transition page from recall task to moderator surveys
  var transition_4 = {
    type: 'instructions',
    data: { experiment_section: 'instructions' },
    pages: [
      `Thank you for taking part in those two tasks. Next, you will answer some survey questions.
       <br><br> Click &#39;Next&#39; when you are ready to be redirected.<br><br>`
    ],
    show_clickable_nav: true
  };

  const selectionFacesObjective = random.shuffle(allFaces[0]);

  const recall_tasks_objective = random.shuffle(statementSelections[0].flat()).map(statement => ({
    type: 'multi-image-selection',
    data: { experiment_section: 'recall_tasks', perspective: 'objective' },
    image_paths: selectionFacesObjective,
    prompt: statement,
  }));

  const selectionFacesEmpathy = random.shuffle(allFaces[1]);

  const recall_tasks_empathy = random.shuffle(statementSelections[1].flat()).map(statement => ({
    type: 'multi-image-selection',
    data: { experiment_section: 'recall_tasks', perspective: 'empathy' },
    image_paths: selectionFacesEmpathy,
    prompt: statement,
  }));


  const objectiveTrial = [
    objectiveStatement,
    face_stimulus_procedure_objective,
    transition_1,
    distractor_task_1,
    transition_2,
    ...recall_tasks_objective,
  ]

  const empathyTrial = [
    empathyStatement,
    face_stimulus_procedure_empathy,
    transition_1,
    distractor_task_2,
    transition_2,
    ...recall_tasks_empathy,
  ]

  const mainTrials = random.shuffle([empathyTrial, objectiveTrial]) 

  const timeline = [
    consent,
    instructions,
    ...mainTrials[0],
    transition_3,
    ...mainTrials[1],
    transition_4,
  ];

  window.jatos.onLoad(() => {
    jsPsych.init({
      timeline: timeline,
      on_finish: data => {
        const url = `https://ucsas.qualtrics.com/jfe/form/SV_7akX7f1MBgXCqcm?participantNumber=${participant_number}`; 
        window.jatos.submitResultData(data.json());
        window.jatos.endStudyAjax(
          true,
          "Ended at max index in study flow.",
          onSuccess=() => { window.location.assign(url); },
          onError=() => { window.location.assign(url); }
        ); 
      }
    });
  });
});

