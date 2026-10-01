
import { promiseImage } from "./datas.js";

export class Meme {
      titre = "";
      text = "abc";
      x = 0;
      y = 20;
      fontWeight = "500";
      fontSize = 30;
      underline  = false;
      italic = false;
      imageId = -1;
      color = "#000000";
      frameSizeX = 0;
      frameSizeY = 0;
      getSVGNode(){
        const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.setAttribute('width', "100%")
        svg.setAttribute('height', "100%")
        svg.setAttribute('viewBox', "0 0 500 500")
        
        /**
         * 
         */
        promiseImage.then(images=>{
          const currentImage = images.find(image=>image.id==this.imageId)
          if(currentImage){
            const img=document.createElementNS('http://www.w3.org/2000/svg','image')
            img.setAttribute('x','0')
            img.setAttribute('y','0')
            img.setAttribute('href', currentImage.url)
            svg.setAttribute('viewBox', '0 0 ' + currentImage.w + ' ' + currentImage.h)
            // svg.appendChild(img)
            svg.insertBefore(img,text)
          }
        })
        
        const text = document.createElementNS('http://www.w3.org/2000/svg','text')
        text.setAttribute('x',this.x)
        text.setAttribute('y',this.y)
        text.innerHTML=this.text
        text.setAttribute('fill', this.color)
        text.setAttribute('font-size', this.fontSize)
        text.setAttribute('font-weight', this.fontWeight)

        text.setAttribute('text-decoration', this.underline ? 'underline':'none')
        text.setAttribute('font-style', this.italic ? 'italic':'none')



        //document.forms['wrapper']['viewer']
        svg.appendChild(text)
        
        return svg;
      }
    } 
