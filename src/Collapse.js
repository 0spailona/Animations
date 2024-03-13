export default class Collapse {
  constructor(startElem, changeElem) {
    this.changeElem = changeElem;
    this.startElem = startElem;
    this.collapse = false;
  }

  addListener(){
    this.startElem.addEventListener('click', this.animation.bind(this));
  }
  animation() {
    if (this.changeElem.classList.contains('collapseElemShow')) this.changeElem.classList.remove('collapseElemShow');
    if (this.changeElem.classList.contains('collapseElemHide')) this.changeElem.classList.remove('collapseElemHide');
    if (!this.collapse) {
      this.changeElem.style.display = 'block';
      this.changeElem.classList.toggle('collapseElemShow');
      this.collapse = true;
    } else {
      this.changeElem.classList.toggle('collapseElemHide');
      this.collapse = false;
    }
  }
}
