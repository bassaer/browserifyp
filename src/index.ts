import work from './lib';

const contaienr = document.getElementsByClassName("container")[0] as HTMLDivElement;
const text = document.createTextNode(work());
contaienr.appendChild(text);
