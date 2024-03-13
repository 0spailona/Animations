import './style.css'
import Collapse from "./Collapse";

const collapse = new Collapse(document.querySelector('.collapsibleBtn'),document.querySelector('.fable'));
collapse.addListener()
