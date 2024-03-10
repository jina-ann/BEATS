console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
 
let lyrics = [
    `A broken heart is all that's left
    I'm still fixin' all the cracks
    Lost a couple of pieces when
    I carried it, carried it, carried it home
    I'm afraid of all I am
    My mind feels like a foreign land
    Silence ringin' inside my head
    Please, carry me, carry me, carry me home
    I've spent all of the love I saved
    We were always a losing game
    Small town boy in a big arcade
    I got addicted to a losing game
    Oh-oh-oh-oh, oh-oh-oh-oh
    All I know, all I know
    Loving you is a losing game
    How many pennies in the slot?
    Givin' us up didn't take a lot
    I saw the end 'fore it begun
    Still, I carried, I carried, I carried on
    Oh-oh-oh-oh, oh-oh-oh-oh
    All I know, all I know
    Loving you is a losing game
    Oh-oh-oh-oh, oh-oh-oh-oh
    All I know, all I know
    Loving you is a losing game
    I don't need your games, game over
    Get me off this rollercoaster
    Oh-oh-oh-oh, oh-oh-oh-oh
    All I know, all I know
    Loving you is a losing game
    (Oh-oh-oh-oh) oh-oh-oh-oh
    All I know, all I know
    Loving you is a losing game`,
    `Past lives couldn't ever hold me down
    Lost love is sweeter when it's finally found
    I've got the strangest feeling
    This isn't our first time around
    Past lives couldn't ever come between us
    Some time the dreamers finally wake up
    Don't wake me I'm not dreaming
    Don't wake me I'm not dreaming
    All my past lives
    They've got nothing on me
    Golden eagle, you're the one and only flying high
    Through the cities in the sky
    I'll take you way back
    Countless centuries
    Don't you remember?
    That you were meant to be my Queen of Hearts
    Meant to be my love
    Through all of my lives
    I never thought I'd wait so long for you
    The timing is right
    The stars are aligned
    So save that heart for me
    Cause girl you know that you're my destiny
    Swear to the moon, the stars
    The sons, and the daughters
    Our love is deeper than the oceans of water
    Hey, I need you now
    I've waited oh so long yeah
    Baby love, I need you now
    I've waited oh so long
    Passing seasons
    Empty bottles of wine
    My ancient kingdom came crashing down without you
    Baby child, I'm lost without your love
    Diamond sparrow, my moonlight majesty
    You know I need you, come flying back to me
    Through all of my lives
    I never thought I'd wait so long for you
    The timing is right
    The stars are aligned
    So save that heart for me
    Cause girl you know that you're my destiny
    Swear to the moon, the stars
    The sons, and the daughters
    Our love is deeper than the oceans of water
    Save that heart for me
    And girl I'll give you everything you need
    Here's to our past lives
    Our mothers and fathers
    Our love is deeper than the oceans of water`,
    `Thought I found a way
    Thought I found a way out (found)
    But you never go away (never go away)
    So I guess I gotta stay now
    Oh, I hope some day I'll make it out of here
    Even if it takes all night or a hundred years
    Need a place to hide, but I can't find one near
    Wanna feel alive, outside I can't fight my fear
    Isn't it lovely? All alone
    Heart made of glass, my mind of stone
    Tear me to pieces, skin to bone
    Hello, welcome home
    Walking out of town
    Looking for a better place (looking for a better place)
    Something's on my mind
    Always in my head space
    But I know someday I'll make it out of here
    Even if it takes all night or a hundred years
    Need a place to hide, but I can't find one near
    Wanna feel alive, outside I can't fight my fear
    Isn't it lovely? All alone
    Heart made of glass, my mind of stone
    Tear me to pieces, skin to bone
    Hello, welcome home
    Woah, yeah
    Yeah, ah
    Woah, woah
    Hello, welcome home`,
    `Not tryna be indie
    Not tryna be cool
    Just tryna be in this
    Tell me, are you too?
    Can you feel where the wind is?
    Can you feel it through
    All of the windows
    Inside this room?
    'Cause I wanna touch you, baby
    And I wanna feel you too
    I wanna see the sun rise on your sins, just me and you
    Light it up, on the run
    Let's make love tonight
    Make it up, fall in love, try
    (Baby, I'm right here)
    But you'll never be alone
    I'll be with you from dusk till dawn
    I'll be with you from dusk till dawn
    Baby, I'm right here
    I'll hold you when things go wrong
    I'll be with you from dusk till dawn
    I'll be with you from dusk till dawn
    Baby, I'm right here
    I'll be with you from dusk till dawn
    Baby, I'm right here
    We were shut like a jacket
    So do your zip
    We would roll down the rapids
    To find a wave that fits
    Can you feel where the wind is?
    Can you feel it through
    All of the windows
    Inside this room?
    'Cause I wanna touch you, baby
    I wanna feel you too
    I wanna see the sun rise on your sins, just me and you
    Light it up, on the run
    Let's make love tonight
    Make it up, fall in love, try
    (Baby, I'm right here)
    But you'll never be alone
    I'll be with you from dusk till dawn
    I'll be with you from dusk till dawn
    Baby, I'm right here
    I'll hold you when things go wrong
    I'll be with you from dusk till dawn
    I'll be with you from dusk till dawn
    Baby, I'm right here
    I'll be with you from dusk till dawn
    Baby, I'm right here`,
    `I summoned you, please come to me
    Don't bury thoughts that you really want
    I fill you up, drink from my cup
    Within me lies what you really want
    
    Come, lay me down
    'Cause you know this
    'Cause you know this sound
    
    In the middle of the night, in the middle of the night
    Just call my name, I'm yours to tame
    In the middle of the night, in the middle of the night
    I'm wide awake, I crave your taste
    All night long 'til morning comes
    I'm getting what is mine, you gon' get yours, oh
    In the middle of the night, in the middle of the night, oh
    
    These burning flames, these crashing waves
    Wash over me like a hurricane
    I'll captivate, you're hypnotized
    Feel powerful but it's me again
    
    Come, lay me down
    'Cause I know this
    'Cause I know this lord
    
    In the middle of the night, in the middle of the night
    Just call my name, I'm yours to tame
    In the middle of the night, in the middle of the night
    I'm wide awake, I crave your taste
    All night long 'til morning comes
    I'm getting what is mine, you gon' get yours, oh
    In the middle of the night, in the middle of the night, oh
    
    And just call on me, ah, just call my name
    Lie with me in
    
    In the middle of the night, in the middle of the night
    Just call my name, I'm yours to tame
    In the middle of the night, in the middle of the night
    I'm wide awake, I crave your taste
    All night long 'til morning comes
    I'm getting what is mine, you gon' get yours, oh
    In the middle of the night, in the middle of the night, oh whoa`,
    `Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed
    Yeah, I don't wanna fall asleep, I don't wanna pass away
    I been thinking of our future, 'cause I'll never see those days
    I don't know why this has happened, but I probably deserve it
    I tried to do my best, but you know that I'm not perfect
    I been praying for forgiveness, you've been praying for my health
    When I leave this Earth, hoping you'll find someone else
    'Cause, yeah, we still young, there's so much we haven't done
    Getting married, start a family, watch your husband with his son
    I wish it could be me, but I won't make it out this bed
    I hope I go to Heaven, so I see you once again
    My life was kinda short, but I got so many blessings
    Happy you were mine, it sucks that it's all ending
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed (yeah, ayy, ayy)
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed (ayy, yeah)
    I'm happy that you here with me, I'm sorry if I tear up
    When me and you were younger, you would always make me cheer up
    Taking goofy videos and walking through the park
    You would jump into my arms every time you heard a bark
    Cuddle in your sheets, sing me sound asleep
    And sneak out through your kitchen at exactly 1:03
    Sundays, went to church, on Mondays, watched a movie
    Soon you'll be alone, sorry that you have to lose me
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed
    Don't stay awake for too long, don't go to bed
    I'll make a cup of coffee for your head
    It'll get you up and going out of bed`,
    `I'm going under and this time I fear there's no one to save me
    This all or nothing really got a way of driving me crazy
    I need somebody to heal, somebody to know
    Somebody to have, somebody to hold
    It's easy to say, but it's never the same
    I guess I kinda liked the way you numbed all the pain
    Now the day bleeds into nightfall
    And you're not here to get me through it all
    I let my guard down, and then you pulled the rug
    I was getting kinda used to being someone you loved
    I'm going under and this time I fear there's no one to turn to
    This all or nothing way of loving got me sleeping without you
    Now, I need somebody to know, somebody to heal
    Somebody to have, just to know how it feels
    It's easy to say, but it's never the same
    I guess I kinda liked the way you helped me escape
    Now the day bleeds into nightfall
    And you're not here to get me through it all
    I let my guard down, and then you pulled the rug
    I was getting kinda used to being someone you loved
    And I tend to close my eyes when it hurts sometimes
    I fall into your arms
    I'll be safe in your sound 'til I come back around
    For now the day bleeds into nightfall
    And you're not here to get me through it all
    I let my guard down, and then you pulled the rug
    I was getting kinda used to being someone you loved
    But now the day bleeds into nightfall
    And you're not here to get me through it all
    I let my guard down, and then you pulled the rug
    I was getting kinda used to being someone you loved
    I let my guard down, and then you pulled the rug
    I was getting kinda used to being someone you loved`,
    `As I walk through the valley of the shadow of death
    I take a look at my life and realize there's nothin' left
    'Cause I've been blastin' and laughin' so long that
    Even my mama thinks that my mind is gone
    But I ain't never crossed a man that didn't deserve it
    Me be treated like a punk, you know that's unheard of
    You better watch how ya talkin' and where ya walkin'
    Or you and your homies might be lined in chalk
    I really hate to trip but I gotta loc
    As they croak, I see myself in the pistol smoke, fool
    I'm the kind of G that little homies wanna be like
    On my knees in the night, sayin' prayers in the street light
    Been spending most their lives
    Living in a gangsta's paradise
    Been spending most their lives
    Living in a gangsta's paradise
    Keep spending most our lives
    Living in a gangsta's paradise
    Keep spending most our lives
    Living in a gangsta's paradise
    Look at the situation they got me facin'
    I can't live a normal life, I was raised by the stripes
    So I gotta be down with the hood team
    Too much television watchin' got me chasin' dreams
    I'm an educated fool with money on my mind
    Got my ten in my hand and a gleam in my eye
    I'm a loc'd out gangsta, set trippin' banger
    And my homies is down, so don't arouse my anger, fool
    Death ain't nothin' but a heartbeat away
    I'm livin' my life do-or-die, uh, what can I say?
    I'm 23 now, but will I live to see 24?
    The way things is going, I don't know
    Tell me why are we so blind to see
    That the ones we hurt are you and me?
    Been spending most their lives
    Living in a gangsta's paradise
    Been spending most their lives
    Living in a gangsta's paradise
    Keep spending most our lives
    Living in a gangsta's paradise
    Keep spending most our lives
    Living in a gangsta's paradise`,
    `My heart's a stereo
    It beats for you, so listen close
    Hear my thoughts in every no-ote
    Make me your radio
    And turn me up when you feel low (turn it up a little bit)
    This melody was meant for you (right there)
    Just sing along to my stereo (Gym Class Hero, baby)
    If I was just another dusty record on the shelf
    Would you blow me off and play me like everybody else?
    If I asked you to scratch my back, could you manage that?
    Like it yikky yeah, check it Travie, I can handle that
    Furthermore, I apologize for any skipping tracks
    It's just the last girl that played me left a couple cracks
    I used to, used to, used to, used to, now I'm over that
    'Cause holding grudges over love is ancient artifacts
    If I could only find a note to make you understand
    I'd sing it softly in your ear and grab you by the hand
    Just keep it stuck inside your head, like your favorite tune
    And know my hearts a stereo that only plays for you
    My heart's a stereo
    It beats for you, so listen close
    Hear my thoughts in every no-ote
    Make me your radio
    And turn me up when you feel low
    This melody was meant for you
    Just sing along to my stereo
    (Oh, oh-oh, oh, oh, oh-oh, oh) to my stereo
    (Oh, oh-oh, oh) just sing along to my stereo
    Let's go!
    If I was an old-school, fifty-pound boombox (remember them?)
    Would you hold me on your shoulder, wherever you walk?
    Would you turn my volume up in front of the cops?
    And crank it higher every time they told you to stop
    And all I ask is that you don't get mad at me
    When you have to purchase mad D batteries
    Appreciate every mixtape your friends make
    You never know, we come and go like on the interstate (never know)
    I think I finally found a note to make you understand
    If you can hit it, sing along and take me by the hand
    Just keep me stuck inside your head, like your favorite tune
    You know my heart's a stereo that only plays for you
    My heart's a stereo
    It beats for you, so listen close (listen)
    Hear my thoughts in every no-ote
    Make me your radio (come on)
    And turn me up when you feel low (turn it up)
    This melody was meant for you
    Just sing along to my stereo (sing along like)
    (Oh, oh-oh, oh, oh, oh-oh, oh) to my stereo
    (Oh, oh-oh, oh) just sing along to my stereo
    I only pray you'll never leave me behind (never leave me)
    Because good music can be so hard to find (so hard to find)
    I take your hand, hold it closer to mine (yeah)
    Thought love was dead, but now you're changing my mind`,
    `Georgia, wrap me up in all your-
    I want you in my arms
    Oh, let me hold you
    I'll never let you go again like I did
    Oh, I used to say
    "I would never fall in love again until I found her"
    I said, "I would never fall unless it's you I fall into"
    I was lost within the darkness, but then I found her
    I found you
    Heaven, when I held you again
    How could we ever just be friends?
    I would rather die than let you go
    Juliet to your Romeo, how I heard you say
    "I would never fall in love again until I found her"
    I said, "I would never fall unless it's you I fall into"
    I was lost within the darkness, but then I found her
    I found you
    I would never fall in love again until I found her
    I said, "I would never fall unless it's you I fall into"
    I was lost within the darkness, but then I found her
    I found you`,
        
        // Add lyrics for each song
    ];
    

let songs = [
    {songName: "Arcade-Duncan Laurance", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Past Lives", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Lovely - Billie", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dusk Till Dawn ", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Middle of the Night", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "DeathBed - Poffu", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Someone You Loved", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "GangstaS paradise", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Stereo Hearts", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Untill i Found u", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        document.getElementById('lyrics').innerText = lyrics[songIndex];
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
localStorage.clear();

function saveInput() {
    var input = document.getElementById("userInput").value;
    var storedInputs = JSON.parse(localStorage.getItem("storedInputs")) || [];
    storedInputs.push(input);
    localStorage.setItem("storedInputs", JSON.stringify(storedInputs));
    document.getElementById("output").innerText = "Input saved!";
  }

function loadInput() {
    var storedInputs = JSON.parse(localStorage.getItem("storedInputs")) || [];
    if (storedInputs.length > 0) {
      var inputList = "";
      for (var i = 0; i < storedInputs.length; i++) {
        inputList += storedInputs[i] + "<br>";
      }
      document.getElementById("output").innerHTML = inputList;
    } else {
      document.getElementById("output").innerText = "No inputs stored.";
    }
  }

    
