import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import * as GifJs from 'gif.js';
import * as GIF from 'gif.js';

@Component({
  selector: 'app-product-gif-preview',
  templateUrl: './product-gif-preview.component.html',
  styleUrls: ['./product-gif-preview.component.scss'],
//   animations: [
//     // Each unique animation requires its own trigger. The first argument of the trigger function is the name
//     trigger('rotatedState', [
//       // state('default', style({ transform: 'rotate(0deg)' })),
//       // state('rotated', style({ transform: 'rotate(180deg)' })),
//       transition('rotated => default', [animate('2000ms linear'), style({
//     transform: 'rotate(360deg)'
//   })]),
//       transition('default => rotated', [animate('2000ms linear'), style({
//     transform: 'rotate(360deg)'
//   })])
//   ])
// ]

animations: [
  trigger('rotate', [
    transition('void => *', [style({ transform: 'rotate(0)' }), animate('1s ease-out', style({ transform: 'rotate(360deg)' }))]),
  ]),
],
})
export class ProductGifPreviewComponent {

  state: string = 'default';

    rotate() { 
      setTimeout(() => {this.state = (this.state === 'default' ? 'rotated' : 'default');
      }, 0)
 
    }

  imageUrl: string | ArrayBuffer | null = null;

  onFileChange(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  convertToGif() {
    // const gif = new (GifJs as any)();
    // const binaryGif = gif.render();
    // const blob = new Blob([binaryGif], { type: 'image/gif' });
    // const url = URL.createObjectURL(blob);
    // // Display the converted GIF
    // this.imageUrl = url;

    // const gif = new (GifJs as any)();
    // const width = 300;
    // const height = 200;
    // gif.setSize(width, height);
    // const binaryGif = gif.render();
    // const blob = new Blob([binaryGif], { type: 'image/gif' });
    // const url = URL.createObjectURL(blob);
    // this.imageUrl = url;

      //  const width = 300;
      //  const height = 200;
      //  const gif = new GIF({width: width,
      //   height: height,
      //   quality: 10});
      //  const binaryGif = gif.render();
      //  const blob = new Blob([binaryGif], { type: 'image/gif' });
      //  const url = URL.createObjectURL(blob);
      //  this.imageUrl = url;

  //     const width = 300;
  // const height = 200;

  // // Assuming imageData is the pixel data of your image
  // // You need to replace this with your actual image data
  // const imageData = ; // Replace with your actual logic

  // const gif = new GIF({
  //   width: width,
  //   height: height,
  //   quality: 10, // Adjust as needed
  // });

  // // Add a frame to the gif
  // gif.addFrame(this.imageUrl, { delay: 200 });

  // // Add more frames if needed...

  // gif.on('finished', (blob: Blob) => {
  //   const url = URL.createObjectURL(blob);
  //   this.imageUrl = url;
  // });

  // gif.render();


  }

}
