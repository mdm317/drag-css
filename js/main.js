const STICKY = 'sticky';
const NORMAL = 'normal';
const OPACITY = "opacity";
const TRANSLATE_Y = "translateY";
const CANVAS = 'canvas';
const imagesInfo = [
    {
        start:6726,
        length:300,
        imageFolder:"../images/001",
        images:[]
    },{
    },{
        start:7027,
        length:960,
        imageFolder:"../images/002",
        images:[]
    }
];
let loadedImageCount=0;
const totalImageCount=1260;
const scenes = [
    {
        type: STICKY,
        heightNum:5,
        scrollHeight:0,
        objs:{
            container : document.querySelector('#scroll-section-0'),
            messageA : document.querySelector('#scroll-section-0 .a'),
            messageB : document.querySelector('#scroll-section-0 .b'),
            messageC : document.querySelector('#scroll-section-0 .c'),
            messageD : document.querySelector('#scroll-section-0 .d'),
            canvas: document.querySelector('#video-canvas-0'),
            context: document.querySelector('#video-canvas-0').getContext('2d'), 
        },
        changeStyles:[
            {
                target:"messageA",
                style:OPACITY,
                ranges:[
                    {start:0.1 ,end:0.18 ,startValue:0 ,endValue:1 },
                    {start:0.18, end: 0.22, startValue:1, endValue:1},
                    {start :0.22, end: 0.3 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageA",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.1 ,end:0.18 ,startValue:70 ,endValue:0 },
                    {start :0.22, end: 0.3 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"messageB",
                style:OPACITY,
                ranges:[
                    {start:0.3 ,end:0.38 ,startValue:0 ,endValue:1 },
                    {start:0.38 ,end:0.42 ,startValue:1 ,endValue:1 },
                    {start :0.42, end: 0.5 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageB",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.3 ,end:0.38 ,startValue:70 ,endValue:0 },
                    {start :0.42, end: 0.5 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"messageC",
                style:OPACITY,
                ranges:[
                    {start:0.5 ,end:0.58 ,startValue:0 ,endValue:1 },
                    {start:0.58 ,end:0.62 ,startValue:1 ,endValue:1 },
                    {start :0.62, end: 0.7 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageC",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.5 ,end:0.58 ,startValue:70 ,endValue:0 },
                    {start :0.62, end: 0.7 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"messageD",
                style:OPACITY,
                ranges:[
                    {start:0.7 ,end:0.78 ,startValue:0 ,endValue:1 },
                    {start:0.78 ,end:0.82 ,startValue:1 ,endValue:1 },
                    {start :0.82, end: 0.9 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageD",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.7 ,end:0.78 ,startValue:70 ,endValue:0 },
                    {start :0.82, end: 0.9 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target :"canvas",
                style:CANVAS,
                ranges:[
                    {start:0 ,end:1 ,startValue:0 ,endValue:imagesInfo[0].length-1 },
                ]
            },
            {
                target :"canvas",
                style:OPACITY,
                ranges:[
                    {start:0.85 ,end:0.95 ,startValue:1 ,endValue:0 },
                    {start:0.95 ,end:1 ,startValue:0 ,endValue:0 },
                ]
            }
        ],
    },
    {
        type: NORMAL,
        heightNum:5,
        scrollHeight:0,
        objs:{
            container : document.querySelector('#scroll-section-1')
        }
    },
    {
        type: STICKY,
        heightNum:5,
        scrollHeight:0,

        objs:{
            container : document.querySelector('#scroll-section-2'),
            messageA : document.querySelector('#scroll-section-2 .a'),
            messageB : document.querySelector('#scroll-section-2 .b'),
            messageC : document.querySelector('#scroll-section-2 .c'),
            canvas : document.querySelector('#video-canvas-2'),
            context : document.querySelector('#video-canvas-2').getContext('2d'),
        },
        changeStyles:[
            {
                target:"messageA",
                style:OPACITY,
                ranges:[
                    {start:0.1 ,end:0.18 ,startValue:0 ,endValue:1 },
                    {start:0.18, end: 0.22, startValue:1, endValue:1},
                    {start :0.22, end: 0.3 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageA",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.1 ,end:0.18 ,startValue:70 ,endValue:0 },
                    {start :0.22, end: 0.3 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"messageB",
                style:OPACITY,
                ranges:[
                    {start:0.3 ,end:0.38 ,startValue:0 ,endValue:1 },
                    {start:0.38 ,end:0.42 ,startValue:1 ,endValue:1 },
                    {start :0.42, end: 0.5 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageB",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.3 ,end:0.38 ,startValue:70 ,endValue:0 },
                    {start :0.42, end: 0.5 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"messageC",
                style:OPACITY,
                ranges:[
                    {start:0.55 ,end:0.63 ,startValue:0 ,endValue:1 },
                    {start:0.63 ,end:0.67 ,startValue:1 ,endValue:1 },
                    {start :0.67, end: 0.75 ,startValue:1 ,endValue:0}
                ]
            },{
                target:"messageC",
                style:TRANSLATE_Y,
                ranges:[
                    {start:0.55 ,end:0.63 ,startValue:70 ,endValue:0 },
                    {start :0.67, end: 0.75 ,startValue:0 ,endValue:-70}
                ]
            },
            {
                target:"canvas",
                style:CANVAS,
                ranges:[
                    {start:0 ,end:1 ,startValue:0 ,endValue:imagesInfo[2].length-1 },
                ]
            },
            {
                target :"canvas",
                style:OPACITY,
                ranges:[
                    {start:0.85 ,end:0.95 ,startValue:1 ,endValue:0 },
                    {start:0.95 ,end:1 ,startValue:0 ,endValue:0 },
                ]
            }
        ],
    },
    {
        type: STICKY,
        heightNum:5,
        scrollHeight:0,
        objs:{
            container : document.querySelector('#scroll-section-3')
        }
    },
];


let currentScene=0;
let yOffset=0;
const isInScope = (a,range)=>{
    const{start, end}= range;
    if(start<=a && a<=end){
        return true;
    }
    return false;
}
const setScenesHeight = ()=>{
    for(let i=0; i< scenes.length;++i){
        if(scenes[i].type=== STICKY){
            scenes[i].scrollHeight = scenes[i].heightNum * window.innerHeight;
            const section = document.querySelector(`#scroll-section-${i}`);
            section.style.height = `${scenes[i].scrollHeight}px`;
        }else if(scenes[i].type === NORMAL){
            scenes[i].scrollHeight = scenes[i].objs.container.offsetHeight;
        }
    }
};
const calcCurrentScene = ()=>{
    let scrollY = window.scrollY;
    let cs=0;
    for(let scene of scenes){
        if(scrollY<scene.scrollHeight){
            break;
        }
        scrollY-= scene.scrollHeight;
        cs++;
    }

    currentScene = cs;
    yOffset = scrollY;
    document.body.setAttribute("id", `scroll-section-${currentScene}`);

}
const calcCurrentScenePercent= ()=>{
    return yOffset/scenes[currentScene].scrollHeight;
}

const calcPercentRange = (dragPercent, range)=>{
    const {start, end, startValue, endValue}= range
    const percent = (dragPercent-start)/(end-start);
    if(startValue <= endValue){
        return startValue + (endValue-startValue)*percent;
    }else{
        return startValue - (startValue-endValue)*percent;
    }
}
const setionsAnimation = ()=>{
    const dragPercent = calcCurrentScenePercent();
    switch(currentScene){
        case 0:
            changeSectionStyle(dragPercent);
            break;
        case 2:
            changeSectionStyle(dragPercent);
            break;
        case 3:
            // changeSectionStyle(dragPercent);
            break;
        default:
            console.log('no case');
    }
}
const changeSectionStyle = (dragPercent)=>{
    const scene = scenes[currentScene];
    for(changeStyle of scene.changeStyles){
        const start = changeStyle.ranges[0].start;
        const end = changeStyle.ranges[changeStyle.ranges.length-1].end;
        const style = changeStyle.style;
        const target = changeStyle.target;
        if(isInScope(dragPercent, {start,end})){
            for(range of changeStyle.ranges){
                if(isInScope(dragPercent, range)){
                    dragPercentRange = calcPercentRange(dragPercent, range);
                    if(style=== OPACITY){
                        scene.objs[target].style.setProperty("opacity", dragPercentRange);
                    }else if(style=== TRANSLATE_Y){
                        scene.objs[target].style.transform = `translateY(${dragPercentRange}%)`;
                    }else if(style=== CANVAS){
                        const idx = Math.round(dragPercentRange);
                        const canvasCtx = scene.objs.context;
                        if(canvasCtx){
                            canvasCtx.drawImage(imagesInfo[currentScene].images[idx],0,0);
                        } 
                    }
                }
            }

        }else if(style===OPACITY){
            scene.objs[changeStyle.target].style.setProperty("opacity",changeStyle.ranges[0].startValue );
        }
    }

}

const loadImage = ()=>{
    for(const imageInfo of imagesInfo){
        if(imageInfo.length){
            for(let i=0;i<imageInfo.length;++i){
                const image = new Image();
                image.src = `${imageInfo.imageFolder}/IMG_${imageInfo.start+i}.JPG`;
                image.onload = ()=>{
                    loadedImageCount++;
                    if(loadedImageCount==totalImageCount){
                        init();
                    }
                }
                imageInfo.images.push(image);
            }
        }
    }
}
const setImageCenter = ()=>{
    const ratio = window.innerHeight/1080;
    scenes[0].objs.canvas.style.transform = `translate3d(-50%,-50%, 0) scale(${ratio})`;
    scenes[2].objs.canvas.style.transform = `translate3d(-50%,-50%, 0) scale(${ratio})`;
}
const init= ()=>{
    setScenesHeight();
    setImageCenter();
    calcCurrentScene();
    setionsAnimation();
    
    document.addEventListener('resize',()=>{
        setImageCenter();
        setScenesHeight();
    });
    document.addEventListener('scroll', ()=>{
        calcCurrentScene();
        setionsAnimation();
    });  
};
const load = ()=>{
    loadImage();
}
load();