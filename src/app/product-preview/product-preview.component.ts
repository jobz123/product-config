import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoaderService } from '@angular-three/soba/loaders';
import { Component, Input, OnInit } from '@angular/core';
import { MeshStandardMaterial, Object3D, Mesh, PerspectiveCamera } from 'three';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  intCount: number = 0;
  
  @Input() 
  set color(value: string) {
    this.#color = value;
    this.applyColorToMaterial(value);
  }

  #color = '';

  cupMaterial: MeshStandardMaterial | undefined;

  constructor(private gltfLoaderService: NgtGLTFLoaderService) {
  }

  cup$ = this.gltfLoaderService.load('assets/cup.glb');
  

  cupLoaded(object: Object3D) {
    console.log(object)
    console.log(<MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material)
    // if(this.intCount === 2){
    //   this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object3D')).material;
    //   console.log(this.cupMaterial)
    // } else{
      this.cupMaterial = <MeshStandardMaterial>(<Mesh>object.getObjectByName('Object_2')).material;
    // }
    this.applyColorToMaterial(this.#color);
  }

  ngOnInit() {
    
  }

  controlsReady(controls: NgtSobaOrbitControls) {
    console.log(controls)
    const orbitControls = controls.controls;
    orbitControls.enableZoom = false;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 10;
    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 4.5;
    camera.position.setY(4);
  }

  applyColorToMaterial(color: string) {
    if (this.cupMaterial) {
      this.cupMaterial.color.setHex(parseInt(color.substring(1), 16));
    }
  }

  onLoadNextPic(){
    this.intCount = this.intCount + 1;
    if(this.intCount === 1) this.cup$ = this.gltfLoaderService.load('assets/mug_prd.glb');
    // if(this.intCount === 2) this.cup$ = this.gltfLoaderService.load('assets/cup_of_coffee.glb')
    // if(this.intCount === 3) this.cup$ = this.gltfLoaderService.load('assets/beer_mug.glb')
    if(this.intCount === 2) this.cup$ = this.gltfLoaderService.load('assets/beer_glass.glb')
    // if(this.intCount === 3) this.cup$ = this.gltfLoaderService.load('assets/beer.glb')
    if(this.intCount === 3)this.cup$ = this.gltfLoaderService.load('assets/t_shirt.glb');
    if(this.intCount === 4)this.cup$ = this.gltfLoaderService.load('assets/t_shirt_1.glb');
  }

}
