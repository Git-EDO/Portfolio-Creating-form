const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => tab.addEventListener('click', function(e){
  tabs.forEach(item => item.classList.remove('active'))
  e.target.classList.add('active')

  let tabId = tab.getAttribute('data-tab')
  let currentTab = document.querySelector(tabId)

  const tabsBody = document.querySelectorAll('.tabs')
  tabsBody.forEach(tabsBody => tabsBody.classList.remove('active'))
  currentTab.classList.add('active')
}))

let configTextarea = document.querySelector('.config-textarea')
configTextarea.value = `{
  "formname": "My awesome form",
  "inputs": [
      {
        "type": "number",
        "label": "Number input",
        "count": 6
      },
      {
        "type": "string",
        "label": "String input name",
        "count": 3
      },
      {
        "type": "textarea",
        "label": "Textarea name",
        "count": 1
      },
      {
        "type": "checkbox",
        "label": "Checkbox name",
        "count": 12
      },
      {
        "type": "date",
        "label": "Date name",
        "count": 2
      },
      {
        "type": "radio",
        "label": "Radio name",
        "count": 6
      }
  ]
}`

let myJsonObj

document.querySelector('.config-btn').addEventListener('click', function(){
  myJsonObj = JSON.parse(configTextarea.value)

  let myArray = myJsonObj.inputs;
  let myStringObject = myArray.find(item => item.type == 'string')
  let myNumberObject = myArray.find(item => item.type == 'number')
  let myTextareaObject = myArray.find(item => item.type == 'textarea')
  let myCheckboxObject = myArray.find(item => item.type == 'checkbox')
  let myDateObject = myArray.find(item => item.type == 'date')
  let myRadioObject = myArray.find(item => item.type == 'radio')
  let formName = myJsonObj.formname

const newFormName = (formName) => {
  const createFormName = document.createElement('h1')
  createFormName.textContent = formName
  document.querySelector('.result-body').appendChild(createFormName)
}

const newCountInputs = () => {
  if (myNumberObject.count > 0) {
    const createCountInputs = document.createElement('div')
    createCountInputs.classList.add('input-container')
    let countTitle = document.createElement('h2')
    countTitle.textContent = myNumberObject.label
  
    document.querySelector('.result-body').appendChild(createCountInputs)
    createCountInputs.appendChild(countTitle)

    const countInputsWrapper = document.createElement('div')
    countInputsWrapper.classList.add('count-inputs-wrapper')
    createCountInputs.appendChild(countInputsWrapper)

      for (let i = 0; i < myNumberObject.count; i++) {
        const newCounter = document.createElement('div')
        newCounter.classList.add('counter')
        const newCount = document.createElement('input')
        let someValue = 0
        newCount.value = someValue
        newCount.classList.add('count-input')
        // newCount.setAttribute('disabled', true)
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
      }
  }
}

const newStringInputs = () => {
  if (myStringObject.count > 0) {
    const createStringInputs = document.createElement('div')
    createStringInputs.classList.add('input-container')
    let stringTitle = document.createElement('h2')
    stringTitle.textContent = myStringObject.label
  
    document.querySelector('.result-body').appendChild(createStringInputs)
    createStringInputs.appendChild(stringTitle)

    const stringInputsWrapper = document.createElement('div')
    stringInputsWrapper.classList.add('string-inputs-wrapper')
    createStringInputs.appendChild(stringInputsWrapper)

      for (let i = 0; i < myStringObject.count; i++) {
        const newString = document.createElement('input')
        newString.classList.add('string-input')
        stringInputsWrapper.appendChild(newString)
      }
  }
}

const newTextareaInputs = () => {
  if (myTextareaObject.count > 0) {
    const createTextareaInputs = document.createElement('div')
    createTextareaInputs.classList.add('input-container')
    let textareaTitle = document.createElement('h2')
    textareaTitle.textContent = myTextareaObject.label
  
    document.querySelector('.result-body').appendChild(createTextareaInputs)
    createTextareaInputs.appendChild(textareaTitle)

    const textareaInputsWrapper = document.createElement('div')
    textareaInputsWrapper.classList.add('textarea-inputs-wrapper')
    createTextareaInputs.appendChild(textareaInputsWrapper)

      for (let i = 0; i < myTextareaObject.count; i++) {
        const newTextarea = document.createElement('textarea')
        newTextarea.classList.add('textarea-input')
        textareaInputsWrapper.appendChild(newTextarea)
      }
  }
}

const newCheckboxes = () => {
  if (myCheckboxObject.count > 0) {
    const createCheckboxes = document.createElement('div')
    createCheckboxes.classList.add('input-container')
    let checkboxesTitle = document.createElement('h2')
    checkboxesTitle.textContent = myCheckboxObject.label
  
    document.querySelector('.result-body').appendChild(createCheckboxes)
    createCheckboxes.appendChild(checkboxesTitle)

    const checkboxesInputsWrapper = document.createElement('div')
    checkboxesInputsWrapper.classList.add('checkboxes-inputs-wrapper')
    createCheckboxes.appendChild(checkboxesInputsWrapper)

      for (let i = 0; i < myCheckboxObject.count; i++) {
        const newCheckbox = document.createElement('input')
        newCheckbox.type = 'checkbox'
        newCheckbox.id = 'checkbox' + (i+1)
        const newCheckboxLabel = document.createElement('label')
        newCheckboxLabel.setAttribute('for', `checkbox${i+1}`)
        newCheckboxLabel.textContent = 'Label for ' + (i+1)

        const checkboxFlex = document.createElement('div')
        checkboxFlex.classList.add('checkboxFlex')

        checkboxesInputsWrapper.appendChild(checkboxFlex)
        checkboxFlex.appendChild(newCheckbox)
        checkboxFlex.appendChild(newCheckboxLabel)
      }
  }
}

const newDateElement = () => {
  if (myDateObject.count > 0) {
    const createDateSection = document.createElement('div')
    createDateSection.classList.add('input-container')
    let dateTitle = document.createElement('h2')
    dateTitle.textContent = myDateObject.label
  
    document.querySelector('.result-body').appendChild(createDateSection)
    createDateSection.appendChild(dateTitle)

    const dateInputsWrapper = document.createElement('div')
    dateInputsWrapper.classList.add('date-inputs-wrapper')
    createDateSection.appendChild(dateInputsWrapper)

      for (let i = 0; i < myDateObject.count; i++) {
        let createDate = new Date();
        let createdDate = `${createDate.getDate()}.${createDate.getMonth()}.${createDate.getFullYear()}`;
        const newDate = document.createElement('input')
        newDate.setAttribute('disabled', true)
        newDate.classList.add('date-input')
        newDate.value = createdDate
        dateInputsWrapper.appendChild(newDate)
      }
  }
}

const newRadios = () => {
  if (myRadioObject.count > 0) {
    const createRadioSection = document.createElement('div')
    createRadioSection.classList.add('input-container')
    let radioTitle = document.createElement('h2')
    radioTitle.textContent = myRadioObject.label
  
    document.querySelector('.result-body').appendChild(createRadioSection)
    createRadioSection.appendChild(radioTitle)

    const radioInputsWrapper = document.createElement('div')
    radioInputsWrapper.classList.add('radio-inputs-wrapper')
    createRadioSection.appendChild(radioInputsWrapper)

      for (let i = 0; i < myRadioObject.count; i++) {
        const newRadio = document.createElement('input')
        newRadio.type = 'radio'
        newRadio.name = 'radio'
        newRadio.id = 'radio' + (i+1)
        const newRadioLabel = document.createElement('label')
        newRadioLabel.setAttribute('for', `radio${i+1}`)
        newRadioLabel.textContent = 'Label for ' + (i+1)

        const radioFlex = document.createElement('div')
        radioFlex.classList.add('radioFlex')

        radioInputsWrapper.appendChild(radioFlex)
        radioFlex.appendChild(newRadio)
        radioFlex.appendChild(newRadioLabel)
      }
  }
}

function createForm() {
  newFormName(formName)
  newCountInputs()
  newStringInputs()
  newTextareaInputs()
  newCheckboxes()
  newDateElement()
  newRadios()
}

createForm()
})






