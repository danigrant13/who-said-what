/** (July 2012, Erik Weitnauer)
The html-plugin will load and display an external html pages. To proceed to the next, the
user might either press a button on the page or a specific key. Afterwards, the page get hidden and
the plugin will wait of a specified time before it proceeds.

documentation: docs.jspsych.org
*/

jsPsych.plugins['custom-external-html'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'custom-external-html',
    description: '',
    parameters: {
      url: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'URL',
        default: undefined,
        description: 'The url of the external html page'
      },
      cont_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'Continue key',
        default: null,
        description: 'The key to continue to the next page.'
      },
      cont_btn: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Continue button',
        default: null,
        description: 'The button to continue to the next page.'
      },
      check_fn: {
        type: jsPsych.plugins.parameterType.FUNCTION,
        pretty_name: 'Check function',
        default: function() { return true; },
        description: ''
      },
      end_key: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        pretty_name: 'End key',
        default: null,
        description: 'The key to end the study.'
      },
      end_btn: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Continue button',
        default: null,
        description: 'The button to end the study'
      },
      end_fn: {
        type: jsPsych.plugins.parameterType.FUNCTION,
        pretty_name: 'End function',
        default: function() { return true; },
        description: 'Callback if user does not consent. Trial data is passed to it with keys rt (response time) and url (trial url)',
      },
      force_refresh: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Force refresh',
        default: false,
        description: 'Refresh page.'
      },
      // if execute_Script == true, then all javascript code on the external page
      // will be executed in the plugin site within your jsPsych test
      execute_script: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Execute scripts',
        default: false,
        description: 'If true, JS scripts on the external html file will be executed.'
      }
    }
  }

  plugin.trial = function(display_element, trial) {

    var url = trial.url;
    if (trial.force_refresh) {
      url = trial.url + "?t=" + performance.now();
    }

    load(display_element, url, function() {
      var t0 = performance.now();
      var consent = function() {
        if (trial.check_fn && !trial.check_fn(display_element)) { return };
        if (trial.cont_key) { display_element.removeEventListener('keydown', consent_listener); }
        const trial_data = {
          rt: performance.now() - t0,
          url: trial.url
        };
        display_element.innerHTML = '';
        jsPsych.finishTrial(trial_data);
      };

      var endTrial = function() {
        if (trial.end_key) { display_element.removeEventListener('keydown', end_trial_listener); }
        const trial_data = {
          rt: performance.now() - t0,
          url: trial.url
        };
        display_element.innerHTML = '';
        trial.end_fn(trial_data);
      };

      // by default, scripts on the external page are not executed with XMLHttpRequest().
      // To activate their content through DOM manipulation, we need to relocate all script tags
      if (trial.execute_script) {
        for (const scriptElement of display_element.getElementsByTagName("script")) {
        const relocatedScript = document.createElement("script");
        relocatedScript.text = scriptElement.text;
        scriptElement.parentNode.replaceChild(relocatedScript, scriptElement);
        };
      }

      if (trial.cont_btn) { display_element.querySelector('#'+trial.cont_btn).addEventListener('click', consent); }
      if (trial.cont_key) {
        var consent_listener = function(e) {
          if (e.which == trial.cont_key) consent();
        };
        display_element.addEventListener('keydown', consent_listener);
      }

      if (trial.end_btn) { display_element.querySelector('#'+trial.end_btn).addEventListener('click', endTrial); }
      if (trial.end_key) {
        var end_trial_listener = function(e) {
          if (e.which == trial.end_key) endTrial();
        };
        display_element.addEventListener('keydown', end_trial_listener);
      }
    });
  };

  // helper to load via XMLHttpRequest
  function load(element, file, callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", file, true);
    xmlhttp.onload = function(){
        if(xmlhttp.status == 200 || xmlhttp.status == 0){ //Check if loaded
            element.innerHTML = xmlhttp.responseText;
            callback();
        }
    }
    xmlhttp.send();
  }

  return plugin;
})();
