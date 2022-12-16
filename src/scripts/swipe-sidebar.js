import Xwiper from 'xwiper'

const $sidebar = document.querySelector('#sidebar')
const xwiper = new Xwiper($sidebar)

const onSwipeSidebar = (direction) => () => {
	const method = direction === 'right' ? 'add' : 'remove'
	$sidebar.classList[method]('active')
}

xwiper.onSwipeRight(onSwipeSidebar('right'))
xwiper.onSwipeLeft(onSwipeSidebar('left'))
