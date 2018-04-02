export default newTab => {
  // Only trigger if clicked tab isn't active
  if (!document.querySelector(`li.tab.active.${newTab}`)) {
    console.log('is new')
  }
  const tabs = document.querySelectorAll('tab')
  tabs.forEach(tab => {
    // Remove tab focus
    if (!tab.classList.contains('newTab')) {
      tab.classList.remove('active')
    } else {
      // Focus new tab
      tab.classList.add('active')
    }
  })
  // Update content
  displayContent()
}