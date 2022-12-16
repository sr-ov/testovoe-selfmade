const $circles = document.querySelectorAll('.circle')
const $chartSr = document.querySelector('#chart-sr')
const $tooltip = document.querySelector('#tooltip')
const $tooltipText = $tooltip.querySelector('.chart__tooltip-text')

const POSITIONS = [122, 138, 154, 168, 184]
const TOOLTIP_TEXT = ['Профиль', 'Портфолио', 'SR ФРЕШ', 'SR ПРО', 'SR ТОП']

const setTooltip =
	(i, styles = '') =>
	() => {
		$tooltip.style.cssText = `
			top: ${POSITIONS[i]}px;
			${styles}
		`
		$tooltipText.textContent = TOOLTIP_TEXT[i]
	}

$circles.forEach((circle, i) => {
	circle.addEventListener('mouseover', setTooltip(i, 'opacity: 1;'))
	circle.addEventListener('mouseleave', setTooltip(i))
})
