import noUiSlider from 'nouislider'
import debounce from '../helpers/debounce.js'
import throttle from '../helpers/throttle.js'

function a() {
  const slider = document.getElementById('slider')

  noUiSlider.create(slider, {
    start: [50],
    range: {
      min: [0],
      max: [100]
    }
  })

  const slide = document.querySelector('.comparison__item--before')
  slide.style.width = '50%'

  let a

  const sliderUpdateHander = (values, handle) => {
    a = values[handle]
    const sliderValue = 100 - values[handle]
    slide.style.width = sliderValue + '%'
  }

  slider.noUiSlider.on('update', throttle(sliderUpdateHander, 100))

  const buttonBefore = document.querySelector('.slider__toggle--before')
  const buttonAfter = document.querySelector('.slider__toggle--after')

  const buttonBeforeHandler = () => {
    slider.noUiSlider.set(0)
    slide.style.width = '100%'
  }
  const buttonAfterHandler = () => {
    slider.noUiSlider.set(100)
    slide.style.width = '0%'
  }

  buttonBefore.addEventListener('click', buttonBeforeHandler)
  buttonBefore.addEventListener('press', buttonBeforeHandler)
  buttonAfter.addEventListener('click', buttonAfterHandler)
  buttonAfter.addEventListener('press', buttonAfterHandler)

  const windowResizeHandler = () => {
    if (window.innerWidth < 768) {
      slider.noUiSlider.updateOptions({
        start: a < 50 ? [0] : [100],
        step: 100,
        range: {
          min: [0],
          max: [100]
        }
      })

      slider.setAttribute('disabled', true)
    } else {
      slider.noUiSlider.updateOptions({
        start: [a],
        step: 1,
        range: {
          min: [0],
          max: [100]
        }
      })

      slider.removeAttribute('disabled')
    }
  }

  windowResizeHandler()
  window.addEventListener('resize', debounce(windowResizeHandler, 300))
}

a();
