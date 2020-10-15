/**
 * jspsych-multi-image-selection
 * a jspsych plugin for displaying a list of images
 * and recording the clicked image
 *
 * documentation: docs.jspsych.org
 *
 */

jsPsych.plugins['multi-image-selection'] = (function() {

  var plugin = {};

  plugin.info = {
    name: 'multi-image-selection',
    description: '',
    parameters: {
      image_paths: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'String',
        default: [],
        array: true,
        description: 'HTML formatted string containing all the input elements to display. Every element has to have its own distinctive name attribute. The <form> tag must not be included and is generated by the plugin.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'HTML formatted string to display below the images'
      },
    }
  };

  const buildImages = (images) => {
    return images.map(image => `<img width="300px" src=${image} class="jspsych-multi-image-selection-image" />`).join('\n');
  };

  plugin.trial = (display_element, trial) => {
    const html = `
      <style>
        .jspsych-multi-image-selection-images {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            max-width: 1350px;
        }

        .jspsych-multi-image-selection-image {
          margin-right: 20px;
          margin-bottom: 50px;
          width: 300px;
          cursor: pointer;
        }

        .jspsych-multi-image-selection-prompt {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      </style>
      <div class="jspsych-multi-image-selection-images">
        ${buildImages(trial.image_paths)}
      </div>
      <div id="jspsych-multi-image-selection-prompt" class="jspych-multi-image-selection-prompt">
        ${trial.prompt}
      </div>
    `;

    display_element.innerHTML = html;

    // start timing
    var start_time = performance.now();

    for (element of display_element.querySelectorAll('.jspsych-multi-image-selection-image')) {
      element.addEventListener('click', event => {
        const end_time = performance.now();
        const rt = end_time - start_time;
  
        jsPsych.finishTrial({ rt: rt, choice: event.currentTarget.src.split('/').pop(), prompt: trial.prompt })
      });
    };
  };

  return plugin;
})();