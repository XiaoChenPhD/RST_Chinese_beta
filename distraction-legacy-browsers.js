/******************** 
 * Distraction *
 ********************/


// store info about the experiment session:
let expName = 'distraction';  // from the Builder filename that created this script
let expInfo = {
    'participant': '999',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(refreshRoutineBegin());
flowScheduler.add(refreshRoutineEachFrame());
flowScheduler.add(refreshRoutineEnd());
flowScheduler.add(wait4trigger_scannerRoutineBegin());
flowScheduler.add(wait4trigger_scannerRoutineEachFrame());
flowScheduler.add(wait4trigger_scannerRoutineEnd());
flowScheduler.add(fake_stimulusRoutineBegin());
flowScheduler.add(fake_stimulusRoutineEachFrame());
flowScheduler.add(fake_stimulusRoutineEnd());
const distraction_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(distraction_loopLoopBegin(distraction_loopLoopScheduler));
flowScheduler.add(distraction_loopLoopScheduler);
flowScheduler.add(distraction_loopLoopEnd);


flowScheduler.add(refreshRoutineBegin());
flowScheduler.add(refreshRoutineEachFrame());
flowScheduler.add(refreshRoutineEnd());
flowScheduler.add(emotion_instructRoutineBegin());
flowScheduler.add(emotion_instructRoutineEachFrame());
flowScheduler.add(emotion_instructRoutineEnd());
flowScheduler.add(refreshRoutineBegin());
flowScheduler.add(refreshRoutineEachFrame());
flowScheduler.add(refreshRoutineEnd());
flowScheduler.add(emotional_levelRoutineBegin());
flowScheduler.add(emotional_levelRoutineEachFrame());
flowScheduler.add(emotional_levelRoutineEnd());
flowScheduler.add(refreshRoutineBegin());
flowScheduler.add(refreshRoutineEachFrame());
flowScheduler.add(refreshRoutineEnd());
flowScheduler.add(think_content_instructRoutineBegin());
flowScheduler.add(think_content_instructRoutineEachFrame());
flowScheduler.add(think_content_instructRoutineEnd());
flowScheduler.add(refreshRoutineBegin());
flowScheduler.add(refreshRoutineEachFrame());
flowScheduler.add(refreshRoutineEnd());
const think_content_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(think_content_loopLoopBegin(think_content_loopLoopScheduler));
flowScheduler.add(think_content_loopLoopScheduler);
flowScheduler.add(think_content_loopLoopEnd);



flowScheduler.add(goodbyeRoutineBegin());
flowScheduler.add(goodbyeRoutineEachFrame());
flowScheduler.add(goodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'dis_prompt_image.xlsx', 'path': 'dis_prompt_image.xlsx'},
    {'name': 'stimuli/dis_prompt_1.png', 'path': 'stimuli/dis_prompt_1.png'},
    {'name': 'stimuli/dis_prompt_2.png', 'path': 'stimuli/dis_prompt_2.png'},
    {'name': 'stimuli/dis_prompt_3.png', 'path': 'stimuli/dis_prompt_3.png'},
    {'name': 'stimuli/dis_prompt_4.png', 'path': 'stimuli/dis_prompt_4.png'},
    {'name': 'think_content_condition.xlsx', 'path': 'think_content_condition.xlsx'},
    {'name': 'stimuli/dis_instruct.png', 'path': 'stimuli/dis_instruct.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/emotion_instruct.png', 'path': 'stimuli/emotion_instruct.png'},
    {'name': 'stimuli/think_content_instruct.png', 'path': 'stimuli/think_content_instruct.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcome_screenClock;
var image_dis_instruct;
var key_resp_welcome;
var refreshClock;
var text_refresh;
var wait4trigger_scannerClock;
var wait4trigger_text;
var scanner_trigger;
var fake_stimulusClock;
var fake_stimulus_text;
var distractionClock;
var image_dis;
var emotion_instructClock;
var image_emotion_instruct;
var key_resp_emotion_instruct;
var emotional_levelClock;
var rate_emotion_prompt;
var slider_emotion;
var key_resp_emotion;
var think_content_instructClock;
var image_think_content_instruct;
var key_resp_think_content_instruct;
var think_contentClock;
var main_body_questionnaire;
var item_text;
var slider_thinking_content;
var key_resp_thinking_content;
var goodbyeClock;
var goodbye_text;
var key_resp_goodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome_screen"
  welcome_screenClock = new util.Clock();
  image_dis_instruct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dis_instruct', units : undefined, 
    image : 'stimuli/dis_instruct.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.1, 0.825],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  key_resp_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "refresh"
  refreshClock = new util.Clock();
  text_refresh = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_refresh',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "wait4trigger_scanner"
  wait4trigger_scannerClock = new util.Clock();
  wait4trigger_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'wait4trigger_text',
    text: '即将开始，请等待。',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  scanner_trigger = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fake_stimulus"
  fake_stimulusClock = new util.Clock();
  fake_stimulus_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'fake_stimulus_text',
    text: '即将开始，请等待。',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "distraction"
  distractionClock = new util.Clock();
  image_dis = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_dis', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.1, 0.825],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  // Initialize components for Routine "emotion_instruct"
  emotion_instructClock = new util.Clock();
  image_emotion_instruct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_emotion_instruct', units : undefined, 
    image : 'stimuli/emotion_instruct.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.1, 0.825],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  key_resp_emotion_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "emotional_level"
  emotional_levelClock = new util.Clock();
  rate_emotion_prompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'rate_emotion_prompt',
    text: '请使用数字描述您目前的情绪状态：',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  slider_emotion = new visual.Slider({
    win: psychoJS.window, name: 'slider_emotion',
    startValue: 5,
    size: [1.0, 0.1], pos: [0, (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u975e\u5e38\u4e0d\u9ad8\u5174", "", "", "", "\u5e73\u9759", "", "", "", "\u975e\u5e38\u9ad8\u5174"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans SC', bold: true, italic: false, depth: -1, 
    flip: false,
  });
  
  key_resp_emotion = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "think_content_instruct"
  think_content_instructClock = new util.Clock();
  image_think_content_instruct = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_think_content_instruct', units : undefined, 
    image : 'stimuli/think_content_instruct.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.1, 0.825],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : false, depth : 0.0 
  });
  key_resp_think_content_instruct = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "think_content"
  think_contentClock = new util.Clock();
  main_body_questionnaire = new visual.TextStim({
    win: psychoJS.window,
    name: 'main_body_questionnaire',
    text: '我刚才的思维内容：',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0.3], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  item_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'item_text',
    text: '',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0.1], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_thinking_content = new visual.Slider({
    win: psychoJS.window, name: 'slider_thinking_content',
    startValue: 5,
    size: [1.0, 0.1], pos: [0, (- 0.1)], ori: 0.0, units: psychoJS.window.units,
    labels: ["\u5b8c\u5168\u6ca1\u6709 ", "", "", "", "\u4e00\u822c", "", "", "", "\u51e0\u4e4e\u90fd\u662f"], fontSize: 0.04, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    granularity: 1.0, style: ["RATING"],
    color: new util.Color('LightGray'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Noto Sans SC', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_thinking_content = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "goodbye"
  goodbyeClock = new util.Clock();
  goodbye_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'goodbye_text',
    text: '本阶段结束，请等待下一阶段的扫描。',
    font: 'Noto Sans SC',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_goodbye = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcome_screenMaxDurationReached;
var _key_resp_welcome_allKeys;
var welcome_screenMaxDuration;
var welcome_screenComponents;
function welcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome_screenClock.reset();
    routineTimer.reset();
    welcome_screenMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_welcome.keys = undefined;
    key_resp_welcome.rt = undefined;
    _key_resp_welcome_allKeys = [];
    psychoJS.experiment.addData('welcome_screen.started', globalClock.getTime());
    welcome_screenMaxDuration = null
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screenComponents.push(image_dis_instruct);
    welcome_screenComponents.push(key_resp_welcome);
    
    welcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_screen' ---
    // get current time
    t = welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_dis_instruct* updates
    if (t >= 0.0 && image_dis_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_dis_instruct.tStart = t;  // (not accounting for frame time here)
      image_dis_instruct.frameNStart = frameN;  // exact frame index
      
      image_dis_instruct.setAutoDraw(true);
    }
    
    
    // if image_dis_instruct is active this frame...
    if (image_dis_instruct.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_welcome* updates
    if (t >= 0.0 && key_resp_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_welcome.tStart = t;  // (not accounting for frame time here)
      key_resp_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_welcome.clearEvents(); });
    }
    
    // if key_resp_welcome is active this frame...
    if (key_resp_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_welcome.getKeys({keyList: ['3','4'], waitRelease: false});
      _key_resp_welcome_allKeys = _key_resp_welcome_allKeys.concat(theseKeys);
      if (_key_resp_welcome_allKeys.length > 0) {
        key_resp_welcome.keys = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_resp_welcome.rt = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].rt;
        key_resp_welcome.duration = _key_resp_welcome_allKeys[_key_resp_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcome_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_screen' ---
    welcome_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcome_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_welcome.corr, level);
    }
    psychoJS.experiment.addData('key_resp_welcome.keys', key_resp_welcome.keys);
    if (typeof key_resp_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_welcome.rt', key_resp_welcome.rt);
        psychoJS.experiment.addData('key_resp_welcome.duration', key_resp_welcome.duration);
        routineTimer.reset();
        }
    
    key_resp_welcome.stop();
    // the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var refreshMaxDurationReached;
var refreshMaxDuration;
var refreshComponents;
function refreshRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'refresh' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    refreshClock.reset(routineTimer.getTime());
    routineTimer.add(0.300000);
    refreshMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('refresh.started', globalClock.getTime());
    refreshMaxDuration = null
    // keep track of which components have finished
    refreshComponents = [];
    refreshComponents.push(text_refresh);
    
    refreshComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function refreshRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'refresh' ---
    // get current time
    t = refreshClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_refresh* updates
    if (t >= 0.0 && text_refresh.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_refresh.tStart = t;  // (not accounting for frame time here)
      text_refresh.frameNStart = frameN;  // exact frame index
      
      text_refresh.setAutoDraw(true);
    }
    
    
    // if text_refresh is active this frame...
    if (text_refresh.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_refresh.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_refresh.tStop = t;  // not accounting for scr refresh
      text_refresh.frameNStop = frameN;  // exact frame index
      // update status
      text_refresh.status = PsychoJS.Status.FINISHED;
      text_refresh.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    refreshComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function refreshRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'refresh' ---
    refreshComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('refresh.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (refreshMaxDurationReached) {
        refreshClock.add(refreshMaxDuration);
    } else {
        refreshClock.add(0.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var wait4trigger_scannerMaxDurationReached;
var _scanner_trigger_allKeys;
var wait4trigger_scannerMaxDuration;
var wait4trigger_scannerComponents;
function wait4trigger_scannerRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'wait4trigger_scanner' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    wait4trigger_scannerClock.reset();
    routineTimer.reset();
    wait4trigger_scannerMaxDurationReached = false;
    // update component parameters for each repeat
    scanner_trigger.keys = undefined;
    scanner_trigger.rt = undefined;
    _scanner_trigger_allKeys = [];
    psychoJS.experiment.addData('wait4trigger_scanner.started', globalClock.getTime());
    wait4trigger_scannerMaxDuration = null
    // keep track of which components have finished
    wait4trigger_scannerComponents = [];
    wait4trigger_scannerComponents.push(wait4trigger_text);
    wait4trigger_scannerComponents.push(scanner_trigger);
    
    wait4trigger_scannerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function wait4trigger_scannerRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'wait4trigger_scanner' ---
    // get current time
    t = wait4trigger_scannerClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *wait4trigger_text* updates
    if (t >= 0.0 && wait4trigger_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      wait4trigger_text.tStart = t;  // (not accounting for frame time here)
      wait4trigger_text.frameNStart = frameN;  // exact frame index
      
      wait4trigger_text.setAutoDraw(true);
    }
    
    
    // if wait4trigger_text is active this frame...
    if (wait4trigger_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *scanner_trigger* updates
    if (t >= 0.0 && scanner_trigger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scanner_trigger.tStart = t;  // (not accounting for frame time here)
      scanner_trigger.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { scanner_trigger.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { scanner_trigger.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { scanner_trigger.clearEvents(); });
    }
    
    // if scanner_trigger is active this frame...
    if (scanner_trigger.status === PsychoJS.Status.STARTED) {
      let theseKeys = scanner_trigger.getKeys({keyList: ['S','s'], waitRelease: false});
      _scanner_trigger_allKeys = _scanner_trigger_allKeys.concat(theseKeys);
      if (_scanner_trigger_allKeys.length > 0) {
        scanner_trigger.keys = _scanner_trigger_allKeys[_scanner_trigger_allKeys.length - 1].name;  // just the last key pressed
        scanner_trigger.rt = _scanner_trigger_allKeys[_scanner_trigger_allKeys.length - 1].rt;
        scanner_trigger.duration = _scanner_trigger_allKeys[_scanner_trigger_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    wait4trigger_scannerComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function wait4trigger_scannerRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'wait4trigger_scanner' ---
    wait4trigger_scannerComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('wait4trigger_scanner.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(scanner_trigger.corr, level);
    }
    psychoJS.experiment.addData('scanner_trigger.keys', scanner_trigger.keys);
    if (typeof scanner_trigger.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('scanner_trigger.rt', scanner_trigger.rt);
        psychoJS.experiment.addData('scanner_trigger.duration', scanner_trigger.duration);
        routineTimer.reset();
        }
    
    scanner_trigger.stop();
    // the Routine "wait4trigger_scanner" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var fake_stimulusMaxDurationReached;
var fake_stimulusMaxDuration;
var fake_stimulusComponents;
function fake_stimulusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'fake_stimulus' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    fake_stimulusClock.reset(routineTimer.getTime());
    routineTimer.add(10.000000);
    fake_stimulusMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('fake_stimulus.started', globalClock.getTime());
    fake_stimulusMaxDuration = null
    // keep track of which components have finished
    fake_stimulusComponents = [];
    fake_stimulusComponents.push(fake_stimulus_text);
    
    fake_stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fake_stimulusRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'fake_stimulus' ---
    // get current time
    t = fake_stimulusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fake_stimulus_text* updates
    if (t >= 0.0 && fake_stimulus_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fake_stimulus_text.tStart = t;  // (not accounting for frame time here)
      fake_stimulus_text.frameNStart = frameN;  // exact frame index
      
      fake_stimulus_text.setAutoDraw(true);
    }
    
    
    // if fake_stimulus_text is active this frame...
    if (fake_stimulus_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (fake_stimulus_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      fake_stimulus_text.tStop = t;  // not accounting for scr refresh
      fake_stimulus_text.frameNStop = frameN;  // exact frame index
      // update status
      fake_stimulus_text.status = PsychoJS.Status.FINISHED;
      fake_stimulus_text.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fake_stimulusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fake_stimulusRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'fake_stimulus' ---
    fake_stimulusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('fake_stimulus.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (fake_stimulusMaxDurationReached) {
        fake_stimulusClock.add(fake_stimulusMaxDuration);
    } else {
        fake_stimulusClock.add(10.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var distraction_loop;
function distraction_loopLoopBegin(distraction_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    distraction_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'dis_prompt_image.xlsx',
      seed: undefined, name: 'distraction_loop'
    });
    psychoJS.experiment.addLoop(distraction_loop); // add the loop to the experiment
    currentLoop = distraction_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    distraction_loop.forEach(function() {
      snapshot = distraction_loop.getSnapshot();
    
      distraction_loopLoopScheduler.add(importConditions(snapshot));
      distraction_loopLoopScheduler.add(distractionRoutineBegin(snapshot));
      distraction_loopLoopScheduler.add(distractionRoutineEachFrame());
      distraction_loopLoopScheduler.add(distractionRoutineEnd(snapshot));
      distraction_loopLoopScheduler.add(distraction_loopLoopEndIteration(distraction_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function distraction_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(distraction_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function distraction_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var think_content_loop;
function think_content_loopLoopBegin(think_content_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    think_content_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'think_content_condition.xlsx',
      seed: undefined, name: 'think_content_loop'
    });
    psychoJS.experiment.addLoop(think_content_loop); // add the loop to the experiment
    currentLoop = think_content_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    think_content_loop.forEach(function() {
      snapshot = think_content_loop.getSnapshot();
    
      think_content_loopLoopScheduler.add(importConditions(snapshot));
      think_content_loopLoopScheduler.add(think_contentRoutineBegin(snapshot));
      think_content_loopLoopScheduler.add(think_contentRoutineEachFrame());
      think_content_loopLoopScheduler.add(think_contentRoutineEnd(snapshot));
      think_content_loopLoopScheduler.add(refreshRoutineBegin(snapshot));
      think_content_loopLoopScheduler.add(refreshRoutineEachFrame());
      think_content_loopLoopScheduler.add(refreshRoutineEnd(snapshot));
      think_content_loopLoopScheduler.add(think_content_loopLoopEndIteration(think_content_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function think_content_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(think_content_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function think_content_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var distractionMaxDurationReached;
var distractionMaxDuration;
var distractionComponents;
function distractionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'distraction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    distractionClock.reset(routineTimer.getTime());
    routineTimer.add(120.000000);
    distractionMaxDurationReached = false;
    // update component parameters for each repeat
    image_dis.setImage(prompt_image);
    psychoJS.experiment.addData('distraction.started', globalClock.getTime());
    distractionMaxDuration = null
    // keep track of which components have finished
    distractionComponents = [];
    distractionComponents.push(image_dis);
    
    distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function distractionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'distraction' ---
    // get current time
    t = distractionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_dis* updates
    if (t >= 0.0 && image_dis.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_dis.tStart = t;  // (not accounting for frame time here)
      image_dis.frameNStart = frameN;  // exact frame index
      
      image_dis.setAutoDraw(true);
    }
    
    
    // if image_dis is active this frame...
    if (image_dis.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 120 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_dis.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_dis.tStop = t;  // not accounting for scr refresh
      image_dis.frameNStop = frameN;  // exact frame index
      // update status
      image_dis.status = PsychoJS.Status.FINISHED;
      image_dis.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'distraction' ---
    distractionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('distraction.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (distractionMaxDurationReached) {
        distractionClock.add(distractionMaxDuration);
    } else {
        distractionClock.add(120.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var emotion_instructMaxDurationReached;
var _key_resp_emotion_instruct_allKeys;
var emotion_instructMaxDuration;
var emotion_instructComponents;
function emotion_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'emotion_instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    emotion_instructClock.reset();
    routineTimer.reset();
    emotion_instructMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_emotion_instruct.keys = undefined;
    key_resp_emotion_instruct.rt = undefined;
    _key_resp_emotion_instruct_allKeys = [];
    psychoJS.experiment.addData('emotion_instruct.started', globalClock.getTime());
    emotion_instructMaxDuration = null
    // keep track of which components have finished
    emotion_instructComponents = [];
    emotion_instructComponents.push(image_emotion_instruct);
    emotion_instructComponents.push(key_resp_emotion_instruct);
    
    emotion_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function emotion_instructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'emotion_instruct' ---
    // get current time
    t = emotion_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_emotion_instruct* updates
    if (t >= 0.0 && image_emotion_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_emotion_instruct.tStart = t;  // (not accounting for frame time here)
      image_emotion_instruct.frameNStart = frameN;  // exact frame index
      
      image_emotion_instruct.setAutoDraw(true);
    }
    
    
    // if image_emotion_instruct is active this frame...
    if (image_emotion_instruct.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_emotion_instruct* updates
    if (t >= 0.0 && key_resp_emotion_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_emotion_instruct.tStart = t;  // (not accounting for frame time here)
      key_resp_emotion_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_emotion_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_emotion_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_emotion_instruct.clearEvents(); });
    }
    
    // if key_resp_emotion_instruct is active this frame...
    if (key_resp_emotion_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_emotion_instruct.getKeys({keyList: ['3','4'], waitRelease: false});
      _key_resp_emotion_instruct_allKeys = _key_resp_emotion_instruct_allKeys.concat(theseKeys);
      if (_key_resp_emotion_instruct_allKeys.length > 0) {
        key_resp_emotion_instruct.keys = _key_resp_emotion_instruct_allKeys[_key_resp_emotion_instruct_allKeys.length - 1].name;  // just the last key pressed
        key_resp_emotion_instruct.rt = _key_resp_emotion_instruct_allKeys[_key_resp_emotion_instruct_allKeys.length - 1].rt;
        key_resp_emotion_instruct.duration = _key_resp_emotion_instruct_allKeys[_key_resp_emotion_instruct_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    emotion_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emotion_instructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'emotion_instruct' ---
    emotion_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('emotion_instruct.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_emotion_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_resp_emotion_instruct.keys', key_resp_emotion_instruct.keys);
    if (typeof key_resp_emotion_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_emotion_instruct.rt', key_resp_emotion_instruct.rt);
        psychoJS.experiment.addData('key_resp_emotion_instruct.duration', key_resp_emotion_instruct.duration);
        routineTimer.reset();
        }
    
    key_resp_emotion_instruct.stop();
    // the Routine "emotion_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var emotional_levelMaxDurationReached;
var _key_resp_emotion_allKeys;
var emotional_levelMaxDuration;
var emotional_levelComponents;
function emotional_levelRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'emotional_level' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    emotional_levelClock.reset();
    routineTimer.reset();
    emotional_levelMaxDurationReached = false;
    // update component parameters for each repeat
    slider_emotion.reset()
    // Run 'Begin Routine' code from code_emotion
    psychoJS.eventManager.clearEvents("keyboard");
    slider_emotion.markerPos = 5;
    
    key_resp_emotion.keys = undefined;
    key_resp_emotion.rt = undefined;
    _key_resp_emotion_allKeys = [];
    psychoJS.experiment.addData('emotional_level.started', globalClock.getTime());
    emotional_levelMaxDuration = null
    // keep track of which components have finished
    emotional_levelComponents = [];
    emotional_levelComponents.push(rate_emotion_prompt);
    emotional_levelComponents.push(slider_emotion);
    emotional_levelComponents.push(key_resp_emotion);
    
    emotional_levelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
function emotional_levelRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'emotional_level' ---
    // get current time
    t = emotional_levelClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *rate_emotion_prompt* updates
    if (t >= 0.0 && rate_emotion_prompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      rate_emotion_prompt.tStart = t;  // (not accounting for frame time here)
      rate_emotion_prompt.frameNStart = frameN;  // exact frame index
      
      rate_emotion_prompt.setAutoDraw(true);
    }
    
    
    // if rate_emotion_prompt is active this frame...
    if (rate_emotion_prompt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider_emotion* updates
    if (t >= 0.0 && slider_emotion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_emotion.tStart = t;  // (not accounting for frame time here)
      slider_emotion.frameNStart = frameN;  // exact frame index
      
      slider_emotion.setAutoDraw(true);
    }
    
    
    // if slider_emotion is active this frame...
    if (slider_emotion.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_emotion
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("1", keys)) {
            slider_emotion.markerPos = (slider_emotion.markerPos - 1);
        } else {
            if (_pj.in_es6("2", keys)) {
                slider_emotion.markerPos = (slider_emotion.markerPos + 1);
            }
        }
    }
    
    
    // *key_resp_emotion* updates
    if (t >= 0.0 && key_resp_emotion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_emotion.tStart = t;  // (not accounting for frame time here)
      key_resp_emotion.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_emotion.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_emotion.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_emotion.clearEvents(); });
    }
    
    // if key_resp_emotion is active this frame...
    if (key_resp_emotion.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_emotion.getKeys({keyList: ['3','4'], waitRelease: false});
      _key_resp_emotion_allKeys = _key_resp_emotion_allKeys.concat(theseKeys);
      if (_key_resp_emotion_allKeys.length > 0) {
        key_resp_emotion.keys = _key_resp_emotion_allKeys[_key_resp_emotion_allKeys.length - 1].name;  // just the last key pressed
        key_resp_emotion.rt = _key_resp_emotion_allKeys[_key_resp_emotion_allKeys.length - 1].rt;
        key_resp_emotion.duration = _key_resp_emotion_allKeys[_key_resp_emotion_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    emotional_levelComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emotional_levelRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'emotional_level' ---
    emotional_levelComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('emotional_level.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_emotion.response', slider_emotion.getRating());
    psychoJS.experiment.addData('slider_emotion.rt', slider_emotion.getRT());
    // Run 'End Routine' code from code_emotion
    psychoJS.experiment.addData("Rating", slider_emotion.markerPos);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_emotion.corr, level);
    }
    psychoJS.experiment.addData('key_resp_emotion.keys', key_resp_emotion.keys);
    if (typeof key_resp_emotion.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_emotion.rt', key_resp_emotion.rt);
        psychoJS.experiment.addData('key_resp_emotion.duration', key_resp_emotion.duration);
        routineTimer.reset();
        }
    
    key_resp_emotion.stop();
    // the Routine "emotional_level" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var think_content_instructMaxDurationReached;
var _key_resp_think_content_instruct_allKeys;
var think_content_instructMaxDuration;
var think_content_instructComponents;
function think_content_instructRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'think_content_instruct' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    think_content_instructClock.reset();
    routineTimer.reset();
    think_content_instructMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_think_content_instruct.keys = undefined;
    key_resp_think_content_instruct.rt = undefined;
    _key_resp_think_content_instruct_allKeys = [];
    psychoJS.experiment.addData('think_content_instruct.started', globalClock.getTime());
    think_content_instructMaxDuration = null
    // keep track of which components have finished
    think_content_instructComponents = [];
    think_content_instructComponents.push(image_think_content_instruct);
    think_content_instructComponents.push(key_resp_think_content_instruct);
    
    think_content_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function think_content_instructRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'think_content_instruct' ---
    // get current time
    t = think_content_instructClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_think_content_instruct* updates
    if (t >= 0.0 && image_think_content_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_think_content_instruct.tStart = t;  // (not accounting for frame time here)
      image_think_content_instruct.frameNStart = frameN;  // exact frame index
      
      image_think_content_instruct.setAutoDraw(true);
    }
    
    
    // if image_think_content_instruct is active this frame...
    if (image_think_content_instruct.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_think_content_instruct* updates
    if (t >= 0.0 && key_resp_think_content_instruct.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_think_content_instruct.tStart = t;  // (not accounting for frame time here)
      key_resp_think_content_instruct.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_think_content_instruct.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_think_content_instruct.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_think_content_instruct.clearEvents(); });
    }
    
    // if key_resp_think_content_instruct is active this frame...
    if (key_resp_think_content_instruct.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_think_content_instruct.getKeys({keyList: ['3','4'], waitRelease: false});
      _key_resp_think_content_instruct_allKeys = _key_resp_think_content_instruct_allKeys.concat(theseKeys);
      if (_key_resp_think_content_instruct_allKeys.length > 0) {
        key_resp_think_content_instruct.keys = _key_resp_think_content_instruct_allKeys[_key_resp_think_content_instruct_allKeys.length - 1].name;  // just the last key pressed
        key_resp_think_content_instruct.rt = _key_resp_think_content_instruct_allKeys[_key_resp_think_content_instruct_allKeys.length - 1].rt;
        key_resp_think_content_instruct.duration = _key_resp_think_content_instruct_allKeys[_key_resp_think_content_instruct_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    think_content_instructComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function think_content_instructRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'think_content_instruct' ---
    think_content_instructComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('think_content_instruct.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_think_content_instruct.corr, level);
    }
    psychoJS.experiment.addData('key_resp_think_content_instruct.keys', key_resp_think_content_instruct.keys);
    if (typeof key_resp_think_content_instruct.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_think_content_instruct.rt', key_resp_think_content_instruct.rt);
        psychoJS.experiment.addData('key_resp_think_content_instruct.duration', key_resp_think_content_instruct.duration);
        routineTimer.reset();
        }
    
    key_resp_think_content_instruct.stop();
    // the Routine "think_content_instruct" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var think_contentMaxDurationReached;
var _key_resp_thinking_content_allKeys;
var think_contentMaxDuration;
var think_contentComponents;
function think_contentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'think_content' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    think_contentClock.reset();
    routineTimer.reset();
    think_contentMaxDurationReached = false;
    // update component parameters for each repeat
    item_text.setText(item);
    slider_thinking_content.reset()
    // Run 'Begin Routine' code from code_thinking_content
    psychoJS.eventManager.clearEvents("keyboard");
    slider_thinking_content.markerPos = 5;
    
    key_resp_thinking_content.keys = undefined;
    key_resp_thinking_content.rt = undefined;
    _key_resp_thinking_content_allKeys = [];
    psychoJS.experiment.addData('think_content.started', globalClock.getTime());
    think_contentMaxDuration = null
    // keep track of which components have finished
    think_contentComponents = [];
    think_contentComponents.push(main_body_questionnaire);
    think_contentComponents.push(item_text);
    think_contentComponents.push(slider_thinking_content);
    think_contentComponents.push(key_resp_thinking_content);
    
    think_contentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function think_contentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'think_content' ---
    // get current time
    t = think_contentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *main_body_questionnaire* updates
    if (t >= 0.0 && main_body_questionnaire.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      main_body_questionnaire.tStart = t;  // (not accounting for frame time here)
      main_body_questionnaire.frameNStart = frameN;  // exact frame index
      
      main_body_questionnaire.setAutoDraw(true);
    }
    
    
    // if main_body_questionnaire is active this frame...
    if (main_body_questionnaire.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *item_text* updates
    if (t >= 0.0 && item_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_text.tStart = t;  // (not accounting for frame time here)
      item_text.frameNStart = frameN;  // exact frame index
      
      item_text.setAutoDraw(true);
    }
    
    
    // if item_text is active this frame...
    if (item_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *slider_thinking_content* updates
    if (t >= 0.0 && slider_thinking_content.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_thinking_content.tStart = t;  // (not accounting for frame time here)
      slider_thinking_content.frameNStart = frameN;  // exact frame index
      
      slider_thinking_content.setAutoDraw(true);
    }
    
    
    // if slider_thinking_content is active this frame...
    if (slider_thinking_content.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from code_thinking_content
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        if (_pj.in_es6("1", keys)) {
            slider_thinking_content.markerPos = (slider_thinking_content.markerPos - 1);
        } else {
            if (_pj.in_es6("2", keys)) {
                slider_thinking_content.markerPos = (slider_thinking_content.markerPos + 1);
            }
        }
    }
    
    
    // *key_resp_thinking_content* updates
    if (t >= 0.0 && key_resp_thinking_content.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_thinking_content.tStart = t;  // (not accounting for frame time here)
      key_resp_thinking_content.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_thinking_content.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thinking_content.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thinking_content.clearEvents(); });
    }
    
    // if key_resp_thinking_content is active this frame...
    if (key_resp_thinking_content.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_thinking_content.getKeys({keyList: ['3','4'], waitRelease: false});
      _key_resp_thinking_content_allKeys = _key_resp_thinking_content_allKeys.concat(theseKeys);
      if (_key_resp_thinking_content_allKeys.length > 0) {
        key_resp_thinking_content.keys = _key_resp_thinking_content_allKeys[_key_resp_thinking_content_allKeys.length - 1].name;  // just the last key pressed
        key_resp_thinking_content.rt = _key_resp_thinking_content_allKeys[_key_resp_thinking_content_allKeys.length - 1].rt;
        key_resp_thinking_content.duration = _key_resp_thinking_content_allKeys[_key_resp_thinking_content_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    think_contentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function think_contentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'think_content' ---
    think_contentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('think_content.stopped', globalClock.getTime());
    psychoJS.experiment.addData('slider_thinking_content.response', slider_thinking_content.getRating());
    psychoJS.experiment.addData('slider_thinking_content.rt', slider_thinking_content.getRT());
    // Run 'End Routine' code from code_thinking_content
    psychoJS.experiment.addData("Rating", slider_thinking_content.markerPos);
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_thinking_content.corr, level);
    }
    psychoJS.experiment.addData('key_resp_thinking_content.keys', key_resp_thinking_content.keys);
    if (typeof key_resp_thinking_content.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_thinking_content.rt', key_resp_thinking_content.rt);
        psychoJS.experiment.addData('key_resp_thinking_content.duration', key_resp_thinking_content.duration);
        routineTimer.reset();
        }
    
    key_resp_thinking_content.stop();
    // the Routine "think_content" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var goodbyeMaxDurationReached;
var _key_resp_goodbye_allKeys;
var goodbyeMaxDuration;
var goodbyeComponents;
function goodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'goodbye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    goodbyeClock.reset();
    routineTimer.reset();
    goodbyeMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_goodbye.keys = undefined;
    key_resp_goodbye.rt = undefined;
    _key_resp_goodbye_allKeys = [];
    psychoJS.experiment.addData('goodbye.started', globalClock.getTime());
    goodbyeMaxDuration = null
    // keep track of which components have finished
    goodbyeComponents = [];
    goodbyeComponents.push(goodbye_text);
    goodbyeComponents.push(key_resp_goodbye);
    
    goodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function goodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'goodbye' ---
    // get current time
    t = goodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *goodbye_text* updates
    if (t >= 0.0 && goodbye_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      goodbye_text.tStart = t;  // (not accounting for frame time here)
      goodbye_text.frameNStart = frameN;  // exact frame index
      
      goodbye_text.setAutoDraw(true);
    }
    
    
    // if goodbye_text is active this frame...
    if (goodbye_text.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (goodbye_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      goodbye_text.tStop = t;  // not accounting for scr refresh
      goodbye_text.frameNStop = frameN;  // exact frame index
      // update status
      goodbye_text.status = PsychoJS.Status.FINISHED;
      goodbye_text.setAutoDraw(false);
    }
    
    
    // *key_resp_goodbye* updates
    if (t >= 0.0 && key_resp_goodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_goodbye.tStart = t;  // (not accounting for frame time here)
      key_resp_goodbye.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_goodbye.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_goodbye.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_goodbye.clearEvents(); });
    }
    
    // if key_resp_goodbye is active this frame...
    if (key_resp_goodbye.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_goodbye.getKeys({keyList: ['a','s'], waitRelease: false});
      _key_resp_goodbye_allKeys = _key_resp_goodbye_allKeys.concat(theseKeys);
      if (_key_resp_goodbye_allKeys.length > 0) {
        key_resp_goodbye.keys = _key_resp_goodbye_allKeys[_key_resp_goodbye_allKeys.length - 1].name;  // just the last key pressed
        key_resp_goodbye.rt = _key_resp_goodbye_allKeys[_key_resp_goodbye_allKeys.length - 1].rt;
        key_resp_goodbye.duration = _key_resp_goodbye_allKeys[_key_resp_goodbye_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    goodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function goodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'goodbye' ---
    goodbyeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('goodbye.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_goodbye.corr, level);
    }
    psychoJS.experiment.addData('key_resp_goodbye.keys', key_resp_goodbye.keys);
    if (typeof key_resp_goodbye.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_goodbye.rt', key_resp_goodbye.rt);
        psychoJS.experiment.addData('key_resp_goodbye.duration', key_resp_goodbye.duration);
        routineTimer.reset();
        }
    
    key_resp_goodbye.stop();
    // the Routine "goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
