'use strict'


const hori = document.querySelector('.horisontal');
const verti = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load',() => { // load 로 하지 않으면 Rect가 제대로 불러와 지지않는다. css, 이미지가 다 다운로드 된 상태에서 실행하게 함. 
    const targetHarfWidth = target.getBoundingClientRect().width / 2;
    const targetHarfHeight = target.getBoundingClientRect().height / 2;
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        hori.style.transform = `translate(0,${y}px)`;
        verti.style.transform = `translate(${x}px,0`;
        target.style.transform = `translate(${x-targetHarfWidth}px,${y-targetHarfHeight}px)`;
        tag.style.transform = `translate(${x}px,${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    })
});
