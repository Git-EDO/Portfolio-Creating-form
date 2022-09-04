const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => tab.addEventListener('click', function(e){
  tabs.forEach(item => item.classList.remove('active'))
  e.target.classList.add('active')

  let tabId = tab.getAttribute('data-tab')
  let currentTab = document.querySelector(tabId)

  const tabsBody = document.querySelectorAll('.tabs')
  tabsBody.forEach(tabsBody => tabsBody.classList.remove('active'))
  currentTab.classList.add('active')
}));

let configTextarea = document.querySelector('.config-textarea')
configTextarea.value = `{
  "formname": "My awesome form",
  "inputs": [
      {
        "type": "number",
        "label": "Number input"
      },
      {
        "type": "string",
        "label": "String input name"
      },
      {
        "type": "textarea",
        "label": "Textarea name"
      },
      {
        "type": "checkbox",
        "label": "Checkbox name",
        "count": 4
      },
      {
        "type": "checkbox",
        "label": "Checkbox name",
        "count": 2
      },
      {
        "type": "date",
        "label": "Date name"
      },
      {
        "type": "radio",
        "label": "Radio name",
        "count": 2
      }
  ]
}`;

let myJsonObj;

document.querySelector('.config-btn').addEventListener('click', function(){
  myJsonObj = JSON.parse(configTextarea.value)

  let myArray = myJsonObj.inputs
  let formName = myJsonObj.formname

const newFormName = (formName) => {
  const createFormName = document.createElement('h1')
  createFormName.textContent = formName
  document.querySelector('.result-body').appendChild(createFormName)
};

const newCountInputs = (item) => {
    const createCountInputs = document.createElement('div')
    createCountInputs.classList.add('input-container')
    let countTitle = document.createElement('h2')
    countTitle.textContent = item.label
  
    document.querySelector('.result-body').appendChild(createCountInputs)
    createCountInputs.appendChild(countTitle)

    const countInputsWrapper = document.createElement('div')
    countInputsWrapper.classList.add('count-inputs-wrapper')
    createCountInputs.appendChild(countInputsWrapper)

    const newCounter = document.createElement('div')
    newCounter.classList.add('counter')
    const newCount = document.createElement('input')
    let someValue = 0
    newCount.value = someValue
    newCount.classList.add('count-input')
    const newCountUp = document.createElement('div')
    newCountUp.classList.add('countup')
    newCountUp.addEventListener('click', function(){
      someValue++
      newCount.value = someValue
    })
    const newCountDown = document.createElement('div')
    newCountDown.classList.add('countdown')
    newCountDown.addEventListener('click', function(){
        someValue--
        newCount.value = someValue
      })
    countInputsWrapper.appendChild(newCounter)
    newCounter.appendChild(newCount)
    newCounter.appendChild(newCountUp)
    newCounter.appendChild(newCountDown)
};

const newStringInputs = (item) => {
      const createStringInputs = document.createElement('div')
      createStringInputs.classList.add('input-container')
      let stringTitle = document.createElement('h2')
      stringTitle.textContent = item.label
    
      document.querySelector('.result-body').appendChild(createStringInputs)
      createStringInputs.appendChild(stringTitle)
  
      const stringInputsWrapper = document.createElement('div')
      stringInputsWrapper.classList.add('string-inputs-wrapper')
      createStringInputs.appendChild(stringInputsWrapper)
  
      const newString = document.createElement('input')
      newString.classList.add('string-input')
      stringInputsWrapper.appendChild(newString)
};

const newTextareaInputs = (item) => {
    const createTextareaInputs = document.createElement('div')
    createTextareaInputs.classList.add('input-container')
    let textareaTitle = document.createElement('h2')
    textareaTitle.textContent = item.label
  
    document.querySelector('.result-body').appendChild(createTextareaInputs)
    createTextareaInputs.appendChild(textareaTitle)

    const textareaInputsWrapper = document.createElement('div')
    textareaInputsWrapper.classList.add('textarea-inputs-wrapper')
    createTextareaInputs.appendChild(textareaInputsWrapper)

    const newTextarea = document.createElement('textarea')
    newTextarea.classList.add('textarea-input')
    textareaInputsWrapper.appendChild(newTextarea)
};

const newCheckboxes = (item) => {
    const createCheckboxes = document.createElement('div')
    createCheckboxes.classList.add('input-container')
    let checkboxesTitle = document.createElement('h2')
    checkboxesTitle.textContent = item.label
  
    document.querySelector('.result-body').appendChild(createCheckboxes)
    createCheckboxes.appendChild(checkboxesTitle)

    const checkboxesInputsWrapper = document.createElement('div')
    checkboxesInputsWrapper.classList.add('checkboxes-inputs-wrapper')
    createCheckboxes.appendChild(checkboxesInputsWrapper)


      for (let i = 0; i < item.count; i++) {
        const newCheckbox = document.createElement('input')
        newCheckbox.type = 'checkbox'

        newCheckbox.id = 'checkbox' + (i+1)
        const newCheckboxLabel = document.createElement('label')
        newCheckboxLabel.textContent = 'Label for ' + (i+1)

        const checkboxFlex = document.createElement('div')
        checkboxFlex.classList.add('checkboxFlex')

        checkboxesInputsWrapper.appendChild(checkboxFlex)
        checkboxFlex.appendChild(newCheckbox)
        checkboxFlex.appendChild(newCheckboxLabel)
      }
};

const newDateElement = (item) => {
    const createDateSection = document.createElement('div')
    createDateSection.classList.add('input-container')
    let dateTitle = document.createElement('h2')
    dateTitle.textContent = item.label
  
    document.querySelector('.result-body').appendChild(createDateSection)
    createDateSection.appendChild(dateTitle)

    const dateInputsWrapper = document.createElement('div')
    dateInputsWrapper.classList.add('date-inputs-wrapper')
    createDateSection.appendChild(dateInputsWrapper)

    let createDate = new Date();
    let createdDate = `${createDate.getDate()}.${createDate.getMonth()}.${createDate.getFullYear()}`;
    const newDate = document.createElement('input')
    newDate.classList.add('date-input')
    newDate.value = createdDate
    dateInputsWrapper.appendChild(newDate)
};

const newRadios = (item) => {
    const createRadioSection = document.createElement('div')
    createRadioSection.classList.add('input-container')
    let radioTitle = document.createElement('h2')
    radioTitle.textContent = item.label
  
    document.querySelector('.result-body').appendChild(createRadioSection)
    createRadioSection.appendChild(radioTitle)

    const radioInputsWrapper = document.createElement('div')
    radioInputsWrapper.classList.add('radio-inputs-wrapper')
    createRadioSection.appendChild(radioInputsWrapper)

      for (let i = 0; i < item.count; i++) {
        const newRadio = document.createElement('input')
        newRadio.type = 'radio'
        newRadio.name = 'radio'
        newRadio.id = 'radio' + (i+1)
        const newRadioLabel = document.createElement('label')
        newRadioLabel.textContent = 'Label for ' + (i+1)

        const radioFlex = document.createElement('div')
        radioFlex.classList.add('radioFlex')

        radioInputsWrapper.appendChild(radioFlex)
        radioFlex.appendChild(newRadio)
        radioFlex.appendChild(newRadioLabel)
      }
};

function createForm() {
  document.querySelector('.result-body').innerHTML = ""

  newFormName(formName)

  myArray.forEach(item => {
    if (item.type == 'number') {
      newCountInputs(item)
    } else
    if (item.type == 'string') {
      newStringInputs(item)
    } else
    if (item.type == 'textarea') {
      newTextareaInputs(item)
    } else
    if (item.type == 'checkbox') {
      newCheckboxes(item)
    } else
    if (item.type == 'date') {
      newDateElement(item)
    } else 
    if (item.type == 'radio') {
      newRadios(item)
    }
  })
};

createForm();

});

document.querySelector('.reset-btn').addEventListener('click', function(){
    document.querySelector('.result-body').innerHTML = ""
});








