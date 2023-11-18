// const TETHER_GAME_URL = 'https://tether.rayhanadev.repl.co/'

const SNAKE_GAME_URL = 'https://pkief.com/Snake/'
const INVADERS_GAME_URL = 'https://susam.net/invaders.html'
const SPACECRAFT_GAME_URL = 'https://js13kgames.com/games/spacecraft/index.html'
const PATH_TO_GLORY_GAME_URL = 'https://js13kgames.com/games/path-to-glory/index.html' // mobile
const MERLIN_VS_ALFONSO_GAME_URL = 'https://js13kgames.com/games/merlin-vs-alfonso/index.html' //mobile
const CASUAL_CRUSADE_GAME_URL = 'https://js13kgames.com/games/casual-crusade/index.html' // mobile
const PORTOLANI_GAME_URL = 'https://js13kgames.com/games/portolani/index.html' // mobile
const TINY_YURTS_GAME_URL = 'https://js13kgames.com/games/tiny-yurts/index.html' // mobile
const CASTLE_SCAPE_2023_GAME_URL = 'https://js13kgames.com/games/castle-escape-2023/index.html' // mobile
const TOWER_GAME_URL = 'https://iamkun.github.io/tower_game/' // mobile
const NUMBER_KNIGHT = 'https://js13kgames.com/games/number-knight/index.html' // mobile
const SAMURAI_SAM_GAME_URL = 'https://js13kgames.com/games/samurai-sam/index.html' // mobile
const RUNEKEEPER_GAME_URL = 'https://js13kgames.com/games/runekeeper/index.html' // mobile
const KNIGHTING_OF_SIR_ISAAC_GAME_URL = 'https://js13kgames.com/games/the-knighting-of-sr-isaac/index.html' // mobile
const KHAN_GAME_URL = 'https://js13kgames.com/games/khan-westward-conquest/index.html' // mobile
const BEWITHED_GAME_URL = 'https://js13kgames.com/games/bewitched/index.html' // mobile
const BARBERS_GUILD_GAME_URL = 'https://js13kgames.com/games/13th-barbers-guild/index.html?lang=pt' // mobile
const SLOWED_DAO_RUN_GAME_URL = 'https://js13kgames.com/games/slowed-dao-run/index.html' // mobile
const HUGO_THE_WIZARD_GAME_URL = 'https://js13kgames.com/games/hugo-the-wizard/index.html' // mobile
const JOURNER_TO_THE_EAST_SILK_ROAD = 'https://js13kgames.com/games/journey-to-the-east-silk-road-adventure/index.html' // mobile
const CRYZEN_GAME_URL = 'https://cryzen.io/' // mobile
const THE_FIRST_HORDE_GAME_URL = 'https://js13kgames.com/games/the-first-horde/index.html' // mobile
const ARCHERY_MASTER_GAME_URL = 'https://js13kgames.com/games/archery-master/index.html' // mobile
const MUSAS_QUEST_GAME_URL = 'https://js13kgames.com/games/musas-quest/index.html' // mobile
const MEANDERING_MEDIEVAL_MERCHANT_GAME_URL = 'https://js13kgames.com/games/meandering-medieval-merchant/index.html' // mobile
const MOAI_ALLEY_GAME_URL = 'https://js13kgames.com/games/moai-alley/index.html' // mobile

const gameMap = {
  'https://cryzen.io/': 'Cryzen',
  'https://js13kgames.com/games/path-to-glory/index.html': 'Path to Glory',
  'https://js13kgames.com/games/merlin-vs-alfonso/index.html': 'Merlin vs Alfonso',
  'https://js13kgames.com/games/casual-crusade/index.html': 'Casual Crusade',
  'https://js13kgames.com/games/portolani/index.html': 'Portolani',
  'https://js13kgames.com/games/tiny-yurts/index.html': 'Tiny Yurts',
  'https://js13kgames.com/games/castle-escape-2023/index.html': 'Castle Scape 2023',
  'https://iamkun.github.io/tower_game/': 'Tower Game',
  'https://js13kgames.com/games/number-knight/index.html': 'Number Knight',
  'https://js13kgames.com/games/samurai-sam/index.html': 'Samurai Sam',
  'https://js13kgames.com/games/runekeeper/index.html': 'Runekeeper',
  'https://js13kgames.com/games/the-knighting-of-sr-isaac/index.html': 'Knighting of Sir Isaac',
  'https://js13kgames.com/games/khan-westward-conquest/index.html': 'Khan: Westward Conquest',
  'https://js13kgames.com/games/bewitched/index.html': 'Bewitched',
  'https://js13kgames.com/games/13th-barbers-guild/index.html?lang=pt': 'Barbers Guild',
  'https://js13kgames.com/games/slowed-dao-run/index.html': 'Slowed Dao Run',
  'https://js13kgames.com/games/hugo-the-wizard/index.html': 'Hugo the Wizard',
  'https://js13kgames.com/games/journey-to-the-east-silk-road-adventure/index.html': 'Journey to the East: Silk Road Adventure',
  'https://pkief.com/Snake/': 'Snake',
  'https://susam.net/invaders.html': 'Invaders',
  'https://js13kgames.com/games/spacecraft/index.html': 'Spacecraft',
  'https://js13kgames.com/games/the-first-horde/index.html': 'The First Horde',
  'https://js13kgames.com/games/archery-master/index.html': 'Archery Master',
  'https://js13kgames.com/games/musas-quest/index.html': 'Musas quest',
  'https://js13kgames.com/games/meandering-medieval-merchant/index.html': 'Meandering Medieval Merchant',
  'https://js13kgames.com/games/moai-alley/index.html': 'Moai alley'
};


let lastClicked = 'form'

const gifUrls = [
'https://i.imgur.com/ZN9qpcc.gif', // JOHNNY_CASTAWAY_GIF_ONE_URL
'https://i.pinimg.com/originals/af/ce/bd/afcebdc9bec77452b1b41be3d5457feb.gif',
'https://media.tenor.com/Cwbq1toybHsAAAAC/super-mario-yoshi.gif',
'https://media.tenor.com/7xkRrMchg20AAAAM/the-simpsons-homer-simpsons.gif',
'https://i.pinimg.com/originals/89/38/b7/8938b79001f709f4dcbc90c05e4f257b.gif',
'https://cdn.wallpapersafari.com/63/86/E2v5jl.gif',
'https://i.pinimg.com/originals/81/26/7d/81267dec1d4578c4a954894cf7609415.gif',
'https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/ffdb6451-d866-4967-a08d-0ed95fd5d342/level1-broadway-really-never-sleeps.gif',
'https://bolprod.com/wp-content/uploads/2022/04/CITY_1_Rocket_Animation.gif',
'https://steamuserimages-a.akamaihd.net/ugc/1771574640614111724/B072A6538B985B0D9B647E349ED5332535AFA689/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
'https://qph.cf2.quoracdn.net/main-qimg-f8001519277889468908ecb3c5a5a7ca',
'https://media.tenor.com/0txhLtfsfakAAAAC/batman-and.gif'
];

const JOHNNY_CASTAWAY_GIF_ONE_URL = 'https://i.imgur.com/ZN9qpcc.gif'

const endpoints = [
  '/whatsapp/message/avg_sentiment_per_person',
  '/whatsapp/message/sentiment_over_time',
  '/whatsapp/message/peak_response_time',
  '/whatsapp/message/activity_heatmap',
  // '/whatsapp/message/user_activity_over_time', // not that good
  '/whatsapp/message/conversational_turns',
  '/whatsapp/message/active_days',
  '/whatsapp/message/topic_percentage',
  '/whatsapp/message/wordfrequency/25',
  '/whatsapp/message/wordcloud',
  '/whatsapp/message/lenghiest/top/10',
  '/whatsapp/message/sentiment/distribution',
  // '/whatsapp/message/heatmap', not thaaat good, also kind of redundant (activity_heatmap)
  '/whatsapp/message/usercount',
  // '/whatsapp/message/activeusers/10', redundant
  // '/whatsapp/message/topic_modeling' // not working
];

const endpointTitles = {
  'message/avg_sentiment_per_person': 'Acima de 0 - palavras positivas | abaixo de 0 - negativas',
  'message/sentiment_over_time': 'Sentimento ao Longo do Tempo',
  'message/peak_response_time': 'Picos de mensagens por Usuário por hora',
  'message/activity_heatmap': 'Número de mensagems X Hora do dia',
  'message/user_activity_over_time': 'Atividade dos Usuários ao Longo do Tempo',
  'message/conversational_turns': 'Quem mais "puxa novos papos" e/ou "responde menos"',
  'message/active_days': 'Número de mensagens por dia da semana',
  'message/topic_percentage': 'Percentual de Tópicos',
  'wordfrequency/25': 'Frequência de Palavras que mais aparecem (Top 25)',
  'message/wordcloud': 'Nuvem de Palavras | WordCloud',
  'top/10': '10 usuários que mandam as maiores mensagens',
  'sentiment/distribution': 'Média de sentimento (LeIA/Vader sentiment analysis)',
  'message/heatmap': 'Mapa de calor | Mensagens enviadas por hora',
  'message/usercount': 'Os que mais falam e os que menos falam',
  'activeusers/10': 'TOP 10 Usuários que mais enviam mensagens',
  'topic_modeling': 'Modelagem de Tópicos' // não está funcionando
};

const MAX_RETRIES = 2;
const API_DOMAIN = 'https://api.analisegrupal.com.br'
// const API_DOMAIN = 'http://localhost:5000'

function shareOnWhatsApp(imageUrl, customMessage) {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const encodedImageUrl = encodeURIComponent('----> ' + imageUrl);
  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappUrl = isMobile ? `whatsapp://send?text=${encodedMessage}%20${encodedImageUrl}`
                               : `https://web.whatsapp.com/send?text=${encodedMessage}%20${encodedImageUrl}`;
  trackEvent('share', 'WhatsApp', 'Content Share', 1);

  // Try to open a new window
  const newWindow = window.open(whatsappUrl, '_blank');
  
  // If a popup blocker prevents the new window, set the location of the current window
  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
  }
}

function showSpinner(spinnerId) {
	// console.log("showSpinner-id=[" + spinnerId + ']');
	try { 
	  document.getElementById(spinnerId).style.display = 'block'
	} catch (err) { 
	  // console.log(err) 
	}
}

function hideSpinner(spinnerId) {
	// console.log("hideSpinner-id=[" + spinnerId + ']');
	try { 
	  document.getElementById(spinnerId).style.display = 'none'
	} catch (err) {
	  // console.log(err) 
	}      
}

function enableAllAnalyzeButtons(endGame) {
  for (let i = 0; ; i++) {
      const analyzeButton = document.getElementById(`analyze${i}`);
      if (!analyzeButton) break; // If the button doesn't exist, stop the loop
      analyzeButton.disabled = false;
  }
  if(endGame) {
  	// closeIframe()
  	// closeFullscreenGif()
  	showToast("Processamento conslúido. Clique para fechar o jogo!")
  }
}

function uploadAndShare(imageId, spinnerId, text, analysisType, temperature, endGame) {
	// console.log(imageId)
	// console.log(spinnerId)
	gtag('share', 'WhatsApp', {'send_to': 'AW-11398970229/w499CJ7ZufMYEPX2ubsq'});
	showSpinner(spinnerId);
	const imgElement = document.getElementById(imageId);
	fetch(imgElement.src)
	  .then(res => res.blob())
	  .then(blob => {
	      validateImage(blob).then(validBlob => {
	          let formData = new FormData();
	          formData.append('image', validBlob);

	          fetch(API_DOMAIN + '/upload_to_imgur', {
	              method: 'POST',
	              body: formData
	          })
	          .then(response => response.json())
	          .then(data => {
	          	hideSpinner(spinnerId)
	            if (endGame) {
	              // closeIframe()
	              // closeFullscreenGif()
	            	showToast("Processamento conslúido. Clique para fechar o jogo!")
	            }
	            let _text;
	            if(text && analysisType && temperature) {
	              let model = `\n\nAnálise tipo:[${analysisType}]--temperatura:[${temperature}]`
	              _text = text
	              _text += model
	              _text += '\n\n\n📊🧐 Confira no https://analisegrupal.com.br/ #AnáliseGrupal'
	            } else {
	              _text = '🚀 Descubra as estatísticas do nosso grupo do WhatsApp com esta análise! '
	            }
	            if (data.link && _text) {
	                shareOnWhatsApp(data.link, _text, endGame);
	            } else {
	              // console.log(data)
	              hideSpinner(spinnerId)
	              const error = data.response.data.error
	              if(error) {
	                alert(error)
	              }
	              throw new Error('Imgur upload failed or no link returned.');
	            }
	          })
	          .catch(error => {
	          	hideSpinner(spinnerId)
	            if (endGame) {
	              // closeIframe()
	              // closeFullscreenGif()
	            	showToast("Processamento conslúido. Clique para fechar o jogo!")
	            }
	            console.error('Error uploading to Imgur or sharing on WhatsApp:', error);
	          });
	      }).catch(error => {
	      	  hideSpinner(spinnerId)
	          if (endGame) {
	           	// closeIframe()
	            // closeFullscreenGif()
	            showToast("Processamento conslúido. Clique para fechar o jogo!")
	          }
	          console.error('Invalid image for upload:', error);
	      });
	});
}

function validateImage(blob) {
  return new Promise((resolve, reject) => {
      const imageUrl = URL.createObjectURL(blob);
      const img = new Image();
      img.onload = () => resolve(blob);  // If loading succeeds, the image is valid
      img.onerror = () => reject(new Error('Invalid image'));  // If there's an error, the image isn't valid
      img.src = imageUrl;
  });
}

function fetchData(endpoint, formData, retries = 0) {
    return fetch(API_DOMAIN + endpoint, {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok && retries < MAX_RETRIES) {
          return fetchData(endpoint, formData, retries + 1);
      } else if (!response.ok) {
          throw new Error(`Failed after ${MAX_RETRIES} retries.`);
      }
      if(endpoint === '/whatsapp/message/topic_modeling') {
          return response.text()
      } else {
          return response.blob()
      }
  });
}

function createButtonSet(imageSrc, text, index, type) {
	const container = document.createElement('div');
	container.style.display = 'flex';
	container.style.alignItems = 'center';
	container.style.flexDirection = 'column';
	container.style.padding = '20px';

	// If type is 'whatsapp', create the WhatsApp share button
	if (type === 'whatsapp') {
	    const button = document.createElement('img');
	    button.src = imageSrc;
	    button.width = 50;
	    button.alt = text;
	    button.style.cursor = 'pointer';
	    container.appendChild(button);

	    const buttonText = document.createElement('span');
	    buttonText.innerText = text;
	    container.appendChild(buttonText);

	    const spinner = document.createElement('img');
	    spinner.src = "img/loading_01.gif";
	    spinner.alt = "Carregando...";
	    spinner.style.display = 'none';
	    spinner.id = `whatsapp-spinner-${index+1}`;
	    spinner.width = 30;
	    container.appendChild(spinner);

	    button.onclick = () => {
	        uploadAndShare('image' + (index+1), spinner.id);
	    };
	} 
	// Otherwise, if type is 'analysis', create the analysis options form
	else if (type === 'analysis') {
	    // Analysis options will be a form with radio buttons and a slider
	    const form = document.createElement('form');
	    form.id = `analysis-options-${index}`;
	    form.style.display = 'flex';
	    form.style.flexDirection = 'column';
	    form.style.alignItems = 'flex-start';
	    form.style.marginTop = '10px';

	    // Radio buttons for analysis type
	    const types = ['técnica', 'descontraída', 'zoeira'];
	    types.forEach((type, idx) => {
	        const label = document.createElement('label');
	        const radio = document.createElement('input');
	        radio.type = 'radio';
	        radio.name = `analysisType-${index}`;
	        radio.value = type;
	        radio.id = `analysisType-${type}-${index}`;
	        if (idx === 0) radio.checked = true; // Default to first option
	        label.appendChild(radio);
	        label.appendChild(document.createTextNode(type.charAt(0).toUpperCase() + type.slice(1)));
	        form.appendChild(label);
	    });

	    // Slider for randomness
	    const sliderLabel = document.createElement('label');
	    sliderLabel.innerText = 'Aleatoriedade:';
	    const slider = document.createElement('input');
	    slider.type = 'range';
	    slider.min = '0';
	    slider.max = '1';
	    slider.step = '0.1';
	    slider.value = '0.1'; // Default value
	    slider.id = `randomness-slider-${index}`;
	    sliderLabel.appendChild(slider);
	    form.appendChild(sliderLabel);

	    // Button to trigger the analysis
	    const analyzeButton = document.createElement('button');
	    analyzeButton.id = `analyze${index}`
	    analyzeButton.type = 'button'; // Prevent form submission
	    analyzeButton.innerText = text;
	    analyzeButton.disabled = true
	    analyzeButton.onclick = () => {
	        const selectedType = document.querySelector(`input[name="analysisType-${index}"]:checked`).value;
	        const randomnessValue = slider.value;
	        // console.log('Start analysis with options:', selectedType, randomnessValue);
	        showModal('analyzeAndShare');
	        window._imageId = `image${(index+1)}`
	        window._analysisType = selectedType
	        window._temperature = randomnessValue
	        window._spinnerId = `analysis-spinner-${index+1}`
	        // analyzeAndShare('image' + (index + 1), selectedType, randomnessValue, `analysis-spinner-${index+1}`);
	    };
	    form.appendChild(analyzeButton);

	    container.appendChild(form);
	}

	return { container };
}


// Helper function to create radio button
function createRadioButton(id, value, isChecked) {
	const radioInput = document.createElement('input');
	radioInput.type = 'radio';
	radioInput.id = id;
	radioInput.name = `analysisType-${id.split('-')[2]}`;
	radioInput.value = value;
	radioInput.checked = isChecked;

	const radioLabel = document.createElement('label');
	radioLabel.htmlFor = id;
	radioLabel.innerText = value.charAt(0).toUpperCase() + value.slice(1); // Capitalize the first letter

	radioLabel.appendChild(radioInput);

	return { label: radioLabel };
}

async function analyzeAndShare(imageId, analysisType, temperature, spinnerId) {
  trackEvent('clicked_analyzeAndShare', 'Form', 'Clicked analyseAndShare', 1);
  const imageNumber = parseInt(imageId.replace(/[^\d]/g, ''), 10);
  if(imageNumber > 1) {
    // alert('Não implementado, confira novamente amanhã');
    showToast("Não implementado, confira novamente amanhã")
    closeIframe()
    closeFullscreenGif()
    return;
  }
  const formData = new FormData(document.getElementById('uploadForm'));
  try {
    const temp = parseFloat(temperature)

    // Append the analysis type and temperature to the formData
    formData.append('data', JSON.stringify({
      type: analysisType,
      temperature: temp
    }));

    let _url;

    if (imageNumber === 1) {
      _url = `${API_DOMAIN}/whatsapp/message/avg_sentiment_per_person/analyse`
    }

    const response = await fetch(_url, {
      method: 'POST',
      body: formData
    });

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the response as JSON
    const result = await response.json();

    // Log the result or do something with it
    // console.log(result);

    uploadAndShare(imageId, spinnerId, result, analysisType, temperature, true)

  } catch (error) {
    console.error('Error during the API call:', error);
  } finally {
    // doSomething???
  }
}


function processEndpoint(index, formData) {
  if (index >= endpoints.length) {
    enableAllAnalyzeButtons(true);
    return; // All endpoints processed
  }

  const endpoint = endpoints[index];
  const resultsDiv = document.getElementById('analysisResults');

  const title = document.createElement('h3');
  let parts = endpoint.split('/');
  let endpointKey = parts.slice(-2).join('/');
  let titleText = endpointTitles[endpointKey] || "Unknown";
  title.innerText = titleText;
  resultsDiv.appendChild(title);

  // Create a container for each set of buttons and their respective spinner and text
  const buttonSetContainer = document.createElement('div');
  buttonSetContainer.style.display = 'flex';
  buttonSetContainer.style.alignItems = 'center';
  buttonSetContainer.style.justifyContent = 'space-between';
  buttonSetContainer.style.marginBottom = '10px'; // Space between button sets

  // Create the WhatsApp share button set
  const whatsappButtonSet = createButtonSet('img/share_whatsapp.png', 'Compartilhe', index, 'whatsapp');
  buttonSetContainer.appendChild(whatsappButtonSet.container);

  // Create the analysis and share button set
  const analysisButtonSet = createButtonSet('img/share_whatsapp.png', 'Analise e Compartilhe', index, 'analysis');
  buttonSetContainer.appendChild(analysisButtonSet.container);

  if (endpoint === "/whatsapp/message/topic_modeling") {
      const placeholderImg = document.createElement('img');
      placeholderImg.src = "img/loading.gif";
      placeholderImg.width = 100;
      resultsDiv.appendChild(placeholderImg);

      fetchData(endpoint, formData)
      .then(htmlContent => {
          const iframeContainer = document.createElement('div');
          iframeContainer.style.display = 'flex';
          iframeContainer.style.justifyContent = 'center';
          iframeContainer.style.alignItems = 'center';
          iframeContainer.style.height = '900px';  // Set to the desired height
          iframeContainer.style.width = '1200px';

          const iframe = document.createElement('iframe');
          // iframe.width = "90%";  // Adjust width as needed
          iframe.height = "100%";  // Use 100% to occupy the full height of the container

          iframeContainer.appendChild(iframe);
          resultsDiv.appendChild(iframeContainer);
          iframe.width = "100%";  // or any other percentage or fixed value that looks better

          iframe.contentWindow.document.open();
          iframe.contentWindow.document.write(htmlContent);
          iframe.contentWindow.document.close();
          
          // Remove or hide the placeholder image after the content is loaded
          resultsDiv.removeChild(placeholderImg);

          iframe.onload = () => iframe.scrollIntoView({ behavior: 'smooth' }); 

          processEndpoint(index + 1, formData);  // Process the next endpoint
      })
      .catch(error => {
          console.error('Error fetching the content:', error);
          const errorDiv = document.createElement('div');
          errorDiv.innerHTML = "<p>Error loading content</p>";
          resultsDiv.appendChild(errorDiv);

          resultsDiv.removeChild(placeholderImg);

          processEndpoint(index + 1, formData);  // Process the next endpoint
      });
  } else {
      const img = document.createElement('img');
      img.id = 'image' + (index + 1);
      img.alt = title.innerText;
      img.width = 100;
      img.src = "img/loading.gif";
      resultsDiv.appendChild(img);

      fetchData(endpoint, formData)
      .then(imageBlob => {
          const imageUrl = URL.createObjectURL(imageBlob);
          img.width = 1200;
          img.src = imageUrl;
          img.onload = () => img.scrollIntoView({ behavior: 'smooth' });

          // Append the button sets to the resultsDiv
          resultsDiv.appendChild(buttonSetContainer);

          processEndpoint(index + 1, formData);  // Process the next endpoint
      })
      .catch(error => {
          console.error('Error fetching the image:', error);
          img.width = 100;
          img.src = "img/error.gif";

          processEndpoint(index + 1, formData);  // Process the next endpoint
      });
  }
}

function submitForm() {
	lastClicked = 'form'
  var fileInput = document.getElementById('file');
  var file = fileInput.files[0];
  var resultsDiv = document.getElementById('analysisResults');
  resultsDiv.innerHTML = "";  // Clear previous results

  // Check if the file extension is .txt or .zip
  var validExtensions = /(\.txt|\.zip)$/i;
  if (!validExtensions.exec(file.name)) {
      alert('Tipo de arquivo inválido. Faça upload de um arquivo .txt ou .zip.');
      return false;  // Stop the form submission
  }

  var formData = new FormData(document.getElementById('uploadForm'));

  trackEvent('submit', 'Form', 'Chat Upload', 1);
  gtag('submit', 'Form', {'send_to': 'AW-11398970229/w499CJ7ZufMYEPX2ubsq'});
  gtag('event', 'conversion', {'send_to': 'AW-11398970229/xvhrCJKA4fMYEPX2ubsq'});

  processEndpoint(0, formData);  // Start processing from the first endpoint

  return false;  // Prevent actual form submission
}


function openIframe(gameUrl) {
  var iframe = document.getElementById('gameIframe');
  iframe.style.display = 'block';
  iframe.src = gameUrl;
  iframe.onload = function() {
    iframe.focus(); // Focus on the iframe after it has loaded
  };
}

function closeIframe(gameUrl) {
  var iframe = document.getElementById('gameIframe');
  iframe.style.display = 'none';
  iframe.src = '';
}

// Function to open the fullscreen GIF modal
function openFullscreenGif(gifUrl) {
  // Create an overlay div
  var overlay = document.createElement('div');
  overlay.id = 'gifOverlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.zIndex = '1000';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // semi-transparent background
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Create an image element for the GIF
  var gif = document.createElement('img');
  gif.src = gifUrl;
  gif.style.maxWidth = '100%';
  gif.style.maxHeight = '100%';

  // Add an event listener to close the modal on click
  //overlay.addEventListener('click', closeFullscreenGif);

  // Append the GIF to the overlay, and then the overlay to the body
  overlay.appendChild(gif);
  document.body.appendChild(overlay);
}

// Function to close the fullscreen GIF modal
function closeFullscreenGif() {
  var overlay = document.getElementById('gifOverlay');
  if (overlay) {
    overlay.removeEventListener('click', closeFullscreenGif); // Remove the event listener
    document.body.removeChild(overlay);
  }
}


/**
 * MODAL STUFF **/

 // Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showModal(_lastClicked) {
	lastClicked = _lastClicked
  	modal.style.display = "block";
  	if(_lastClicked === 'form') {
  		return false; // clicked from form
  	}
}


function submitChoice() {
  // Get the selected game's URL from the select element
  var selectedGameUrl = document.getElementById('gameSelect').value;
  modal.style.display = "none";

  const actionMap = {
	  [SNAKE_GAME_URL]: () => openIframe(SNAKE_GAME_URL),
	  [INVADERS_GAME_URL]: () => openIframe(INVADERS_GAME_URL),
	  [SPACECRAFT_GAME_URL]: () => openIframe(SPACECRAFT_GAME_URL),
	  [PATH_TO_GLORY_GAME_URL]: () => openIframe(PATH_TO_GLORY_GAME_URL),
	  [MERLIN_VS_ALFONSO_GAME_URL]: () => openIframe(MERLIN_VS_ALFONSO_GAME_URL),
	  [CASUAL_CRUSADE_GAME_URL]: () => openIframe(CASUAL_CRUSADE_GAME_URL),
	  [PORTOLANI_GAME_URL]: () => openIframe(PORTOLANI_GAME_URL),
	  [TINY_YURTS_GAME_URL]: () => openIframe(TINY_YURTS_GAME_URL),
	  [CASTLE_SCAPE_2023_GAME_URL]: () => openIframe(CASTLE_SCAPE_2023_GAME_URL),
	  [TOWER_GAME_URL]: () => openIframe(TOWER_GAME_URL),
	  [NUMBER_KNIGHT]: () => openIframe(NUMBER_KNIGHT),
	  [SAMURAI_SAM_GAME_URL]: () => openIframe(SAMURAI_SAM_GAME_URL),
	  [RUNEKEEPER_GAME_URL]: () => openIframe(RUNEKEEPER_GAME_URL),
	  [KNIGHTING_OF_SIR_ISAAC_GAME_URL]: () => openIframe(KNIGHTING_OF_SIR_ISAAC_GAME_URL),
	  [KHAN_GAME_URL]: () => openIframe(KHAN_GAME_URL),
	  [BEWITHED_GAME_URL]: () => openIframe(BEWITHED_GAME_URL),
	  [BARBERS_GUILD_GAME_URL]: () => openIframe(BARBERS_GUILD_GAME_URL),
	  [SLOWED_DAO_RUN_GAME_URL]: () => openIframe(SLOWED_DAO_RUN_GAME_URL),
	  [HUGO_THE_WIZARD_GAME_URL]: () => openIframe(HUGO_THE_WIZARD_GAME_URL),
	  [JOURNER_TO_THE_EAST_SILK_ROAD]: () => openIframe(JOURNER_TO_THE_EAST_SILK_ROAD),
	  [CRYZEN_GAME_URL]: () => openIframe(CRYZEN_GAME_URL),
	  [THE_FIRST_HORDE_GAME_URL]: () => openIframe(THE_FIRST_HORDE_GAME_URL),
	  [ARCHERY_MASTER_GAME_URL]: () => openIframe(ARCHERY_MASTER_GAME_URL),
	  [MUSAS_QUEST_GAME_URL]: () => openIframe(MUSAS_QUEST_GAME_URL),
	  [MEANDERING_MEDIEVAL_MERCHANT_GAME_URL]: () => openIframe(MEANDERING_MEDIEVAL_MERCHANT_GAME_URL),
	  [MOAI_ALLEY_GAME_URL]: () => openIframe(MOAI_ALLEY_GAME_URL),
	  'randomgif': () => {
	    const randomGifUrl = gifUrls[Math.floor(Math.random() * gifUrls.length)];
	    console.log(randomGifUrl);
	    openFullscreenGif(randomGifUrl);
	  },
	  'default': () => console.log('No valid option was selected.')
};

  // Execute the function based on the selected URL, or the default case if no match is found
  (actionMap[selectedGameUrl] || actionMap['default'])();

  if (lastClicked === 'form') {
    submitForm();
  } else {
    analyzeAndShare(_imageId, _analysisType, _temperature, _spinnerId);
  }
}

/** END MODAL STUFF **/

// Define the sequence for the Konami Code
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Listen for keydown events
document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      window.activatedByKonami();
      konamiIndex = 0; // reset the index
    }
  } else {
    konamiIndex = 0; // reset the index if the wrong key is pressed
  }
});

// Activate the easter egg
function activatedByKonami() {
	trackEvent('easteregg_konami', 'EasterEgg', 'User typed konami code', 1);
	openIframe(PORTOLANI_GAME_URL)
}

let typedWord = '';
const secretWord = 'brow';

document.addEventListener('keypress', (e) => {
  typedWord += e.key;
  if (typedWord.includes(secretWord)) {
    showTheDudeGif();
    typedWord = ''; // reset the typed word
  } else if (!secretWord.startsWith(typedWord)) {
    typedWord = ''; // reset if the sequence is wrong
  }
});

function showTheDudeGif() {
	trackEvent('easteregg_thedude', 'EasterEgg', 'User wrote brow', 1);
  openFullscreenGif('https://analisegrupal.com.br/img/thedude.gif')
}

let enteredOnce = false
function addExtraOptionsIfNotMobile() {
    // console.log('addExtraOptionsIfNotMobile')
    // console.log(navigator.userAgent)
    if (enteredOnce) {
        // console.log(`enteredOnce checked. exiting`)
        return;
    }
    enteredOnce = true;

    // Check if the user agent is mobile
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    var extraOptionsHtml = '<select name="game" id="gameSelect">';
    for (var url in gameMap) {
        var gameTitle = gameMap[url];
        extraOptionsHtml += '<option value="' + url + '">Jogar ' + gameTitle + '</option>';
    }
    extraOptionsHtml += '<option value="randomgif">Gif aleatório</option>'
    extraOptionsHtml += '</select>';
    extraOptionsHtml += '<button type="button" onclick="submitChoice()" class="ok-button">OK</button>';

    // Append the extra options to the form
    var form = document.getElementById('waitingOptions');
    form.insertAdjacentHTML('beforeend', extraOptionsHtml);
}


function playRandomGame() {
	trackEvent('clicked_playRandomGame', 'Game', 'Clicked playRandomGame', 1);
  var gameKeys = Object.keys(gameMap); // Extract keys from the gameMap
  var randomIndex = Math.floor(Math.random() * gameKeys.length); // Get a random index
  var selectedGameUrl = gameKeys[randomIndex]; // Select a game URL using the random index

  openIframe(selectedGameUrl); // Open the selected game in an iframe
}

document.addEventListener('DOMContentLoaded', function() {
    window.addExtraOptionsIfNotMobile();
});

let tapCount = 0;
const TAP_THRESHOLD = 6; // Number of taps required

function resetTapCount() {
    tapCount = 0;
}

document.addEventListener('touchend', function(e) {
    tapCount++;

    if (tapCount === TAP_THRESHOLD) {
        // Trigger your easter egg function here
        window.triggerFunc();
    }

    // Reset tap count after a short delay to prevent continuous trigger
    setTimeout(resetTapCount, 1250); // Reset after 1 second
});

function triggerFunc() {
	trackEvent('easteregg_tap6times', 'EasterEgg', 'User taped 6 times', 1);
    openIframe(CRYZEN_GAME_URL)
}

function showToast(msg) {
	window.toast = Toastify({
	  text: msg,
	  duration: 15000,
	  newWindow: false,
	  close: true,
	  gravity: "top", // `top` or `bottom`
	  position: "left", // `left`, `center` or `right`
	  stopOnFocus: true, // Prevents dismissing of toast on hover
	  style: {
	    background: "linear-gradient(to right, #00b09b, #96c93d)",
	  },
	  onClick: closeGame
	}).showToast();
}

function closeGame() {
	window.closeIframe()
	window.closeFullscreenGif()
	window.toast.hideToast()
}


// const spaceInvader = document.querySelector('.space-invader');
// let posX = 0;
// let posY = 0;
// let directionX = 1;
// let directionY = 1;
// let speed = 10; // Adjust the speed as needed

// let evasionDistance = 100; // Distance to start evading mouse
// let evasionSpeed = 1.5; // Multiplier for evasion speed

// function moveSpaceInvader() {
//     posX += speed * directionX;
//     posY += speed * directionY;

//     // Check for screen boundaries
//     if (posX <= 0 || posX + spaceInvader.offsetWidth >= window.innerWidth) {
//         directionX *= -1;
//     }
//     if (posY <= 0 || posY + spaceInvader.offsetHeight >= window.innerHeight) {
//         directionY *= -1;
//     }

//     spaceInvader.style.left = `${posX}px`;
//     spaceInvader.style.top = `${posY}px`;

//     requestAnimationFrame(moveSpaceInvader);
// }

// requestAnimationFrame(moveSpaceInvader);

// function avoidMouse(event) {
//     let mouseX = event.clientX;
//     let mouseY = event.clientY;

//     let spaceInvaderX = posX + spaceInvader.offsetWidth / 2;
//     let spaceInvaderY = posY + spaceInvader.offsetHeight / 2;

//     let distanceX = spaceInvaderX - mouseX;
//     let distanceY = spaceInvaderY - mouseY;

//     // Check if the mouse is close to the space invader
//     if (Math.abs(distanceX) < evasionDistance && Math.abs(distanceY) < evasionDistance) {
//         // Increase speed when evading
//         speed = 10 * evasionSpeed;

//         // Update direction to move away from the mouse
//         directionX = distanceX > 0 ? 1 : -1;
//         directionY = distanceY > 0 ? 1 : -1;
//     } else {
//         // Reset speed
//         speed = 10;
//     }
// }

// document.addEventListener('mousemove', avoidMouse);

window.activatedByKonami = activatedByKonami
window.triggerFunc = triggerFunc
window.shareOnWhatsApp = shareOnWhatsApp
window.showSpinner = showSpinner
window.hideSpinner = hideSpinner
window.enableAllAnalyzeButtons = enableAllAnalyzeButtons
window.uploadAndShare = uploadAndShare
window.validateImage = validateImage
window.fetchData = fetchData
window.createButtonSet = createButtonSet
window.createRadioButton = createRadioButton
window.analyzeAndShare = analyzeAndShare
window.processEndpoint = processEndpoint
window.submitForm = submitForm
window.openIframe = openIframe
window.closeIframe = closeIframe
window.SNAKE_GAME_URL = SNAKE_GAME_URL
window.INVADERS_GAME_URL = INVADERS_GAME_URL
// window.TETHER_GAME_URL = TETHER_GAME_URL
window.openFullscreenGif = openFullscreenGif
window.closeFullscreenGif = closeFullscreenGif
window.JOHNNY_CASTAWAY_GIF_ONE_URL = JOHNNY_CASTAWAY_GIF_ONE_URL
window.showModal = showModal
window.submitChoice = submitChoice
window.addExtraOptionsIfNotMobile = addExtraOptionsIfNotMobile
window.playRandomGame = playRandomGame
