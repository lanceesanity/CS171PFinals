let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 10000 );
let renderer = new THREE.WebGLRenderer();

//particles
let starGeo = new THREE.Geometry();
   for(let i=0;i<1000;i++) {
   let star = new THREE.Vector3(
      Math.random() * 600 - 300,
      Math.random() * 600 - 300,
      Math.random() * 600 - 300
   );
   star.velocity = 0;
   star.acceleration = 0;
   starGeo.vertices.push(star);
  }
  //floor
  const geomFloor= new THREE.BoxGeometry(10000,0.5,2500,1,1,1);
  let textureFloor= new THREE.TextureLoader().load( 'assets/textures/floor.jpg' );
  let matFloor = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureFloor});
  let floor = new THREE.Mesh(geomFloor, matFloor);
  floor.position.set(500,-370 ,-100);
  floor.castShadow = true;
  floor.receiveShadow = true;
  scene.add(floor);

  //left side
    //roof
  const geomRoof= new THREE.BoxGeometry(10000,20,1000,1,1,1);
  let textureRoof= new THREE.TextureLoader().load( 'assets/textures/steel3.jpg' );
  let matRoof = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRoof});
  let roof = new THREE.Mesh(geomRoof, matRoof);
  roof.position.set(4000,800 ,900);
  roof.castShadow = true;
  roof.receiveShadow = true;
  scene.add(roof);
  //wall
  const geomWall= new THREE.BoxGeometry(100,2250,10000,1,1,1);
  let textureWall= new THREE.TextureLoader().load( 'assets/textures/darkblue.jpg' );
  let matWall = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWall});
  let wall = new THREE.Mesh(geomWall, matWall);
  wall.position.set(3000,-300 ,1200);
  wall.rotation.y=11;
  wall.castShadow = true;
  wall.receiveShadow = true;
  scene.add(wall);
  //tv
  const geomTV= new THREE.BoxGeometry(20,400,400,1,1,1);
  let textureTV= new THREE.TextureLoader().load( 'assets/textures/map.jpg' );
  let matTV = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureTV});
  let tv = new THREE.Mesh(geomTV, matTV);
  tv.position.set(-300,50 ,-1150);
  tv.rotation.y=11;
  tv.castShadow = true;
  tv.receiveShadow = true;
  scene.add(tv);
  //tv light
  var dLight = new THREE.PointLight( 0xffffff, 0.8  ,300 ); 
  dLight.position.set( -300, 50,-1050 );
  scene.add( dLight );
  //tv right side
  let tv2 = new THREE.Mesh(geomTV, matTV);
  tv2.position.set(100,350 ,1150);
  tv2.rotation.y=11;
  tv2.castShadow = true;
  tv2.receiveShadow = true;
  scene.add(tv2);
  //tv light
  var dLight2 = new THREE.PointLight( 0xffffff, 0.8  ,300 ); 
  dLight2.position.set( 100, 350,1050 );
  scene.add( dLight2 );
    //platform1
  const geomPlatform= new THREE.BoxGeometry(2500,100,500,1,1,1);
  let texturePlatform= new THREE.TextureLoader().load( 'assets/textures/darkblue.jpg' );
  let matPlatform = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturePlatform});
  let platform = new THREE.Mesh(geomPlatform, matPlatform);
  platform.position.set(-200,-300 ,-900);
  platform.castShadow = true;
  platform.receiveShadow = true;
  scene.add(platform);
      //platform2
  const geomPlatformCurve= new THREE.BoxGeometry(2500,100,500,1,1,1);
  let texturePlatformCurve= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matPlatformCurve = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturePlatformCurve});
  let platformCurve = new THREE.Mesh(geomPlatformCurve, matPlatformCurve);
  platformCurve.position.set(6000,-300 ,1200);
  platformCurve.rotation.y=2.9;
  platformCurve.castShadow = true;
  platformCurve.receiveShadow = true;
  scene.add(platformCurve);
  //drain
  const geomDrain= new THREE.BoxGeometry(2500,20,100,1,1,1);
  let textureDrain= new THREE.TextureLoader().load( 'assets/textures/cement.jpg' );
  let matDrain = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDrain});
  let drain = new THREE.Mesh(geomDrain, matDrain);
  drain.position.set(-200,-250 ,-700);
  drain.castShadow = true;
  drain.receiveShadow = true;
  scene.add(drain);

  //ceiling bars
  const geomCeiling= new THREE.BoxGeometry(30,40,1000,1,1,1);
  let textureCeiling= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matCeiling = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureCeiling});
  let ceiling = new THREE.Mesh(geomCeiling, matCeiling);
  ceiling.position.set(-430,750,500);
  ceiling.castShadow = true;
  ceiling.receiveShadow = true;
  scene.add(ceiling);

  let ceiling2 = new THREE.Mesh(geomCeiling, matCeiling);
  ceiling2.position.set(-30,750,500);
  ceiling2.castShadow = true;
  ceiling2.receiveShadow = true;
  scene.add(ceiling2);

  let ceiling3 = new THREE.Mesh(geomCeiling, matCeiling);
  ceiling3.position.set(-230,750,500);
  ceiling3.castShadow = true;
  ceiling3.receiveShadow = true;
  scene.add(ceiling3);

    //ceiling light
  const geomCeilingLight= new THREE.BoxGeometry(30,40,100,1,1,1);
  let textureCeilingLight= new THREE.TextureLoader().load( 'assets/textures/white.jpg' );
  let matCeilingLight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureCeilingLight});
  let ceilingLight = new THREE.Mesh(geomCeilingLight, matCeilingLight);
  ceilingLight.position.set(600,750,800);
  ceilingLight.castShadow = true;
  ceilingLight.receiveShadow = true;
  scene.add(ceilingLight);
  //light
  var sLight = new THREE.PointLight( 0xffffff, 2, 1000 ); 
  sLight.position.set( 600,750, 800 );
  scene.add( sLight );

  //2
  let ceilingLight2 = new THREE.Mesh(geomCeilingLight, matCeilingLight);
  ceilingLight2.position.set(1800,750,800);
  ceilingLight2.castShadow = true;
  ceilingLight2.receiveShadow = true;
  scene.add(ceilingLight2);
    //light
  var sLight2 = new THREE.PointLight( 0xffffff, 2, 1000 ); 
  sLight2.position.set( 1800,750, 800 );
  scene.add( sLight2 );

  //3
  let ceilingLight3 = new THREE.Mesh(geomCeilingLight, matCeilingLight);
  ceilingLight3.position.set(3000,750,800);
  ceilingLight3.castShadow = true;
  ceilingLight3.receiveShadow = true;
  scene.add(ceilingLight3);
    //light
  var sLight3 = new THREE.PointLight( 0xffffff, 2, 1000 ); 
  sLight3.position.set( 3000,750, 800 );
  scene.add( sLight3 );

  //right side
      //roof
  const geomRoof2= new THREE.BoxGeometry(3000,20,1000,1,1,1);
  let textureRoof2= new THREE.TextureLoader().load( 'assets/textures/steel3.jpg' );
  let matRoof2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRoof2});
  let roof2 = new THREE.Mesh(geomRoof2, matRoof2);
  roof2.position.set(-100,320 ,-920);
  roof2.castShadow = true;
  roof2.receiveShadow = true;
  scene.add(roof2);
  //wall
  const geomWall2= new THREE.BoxGeometry(100,1250,2500,1,1,1);
  let textureWall2= new THREE.TextureLoader().load( 'assets/textures/darkblue.jpg' );
  let matWall2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWall2});
  let wall2 = new THREE.Mesh(geomWall2, matWall2);
  wall2.position.set(-200,-300 ,-1200);
  wall2.rotation.y=11;
  wall2.castShadow = true;
  wall2.receiveShadow = true;
  scene.add(wall2);
    //platform2
  const geomPlatform2= new THREE.BoxGeometry(6500,400,550,1,1,1);
  let texturePlatform2= new THREE.TextureLoader().load( 'assets/textures/darkblue.jpg' );
  let matPlatform2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturePlatform2});
  let platform2 = new THREE.Mesh(geomPlatform2, matPlatform2);
  platform2.position.set(2100,-300 ,900);
  platform2.castShadow = true;
  platform2.receiveShadow = true;
  scene.add(platform2);
    //drain
  const geomDrainRight= new THREE.BoxGeometry(5000,20,200,1,1,1);
  let textureDrainRight= new THREE.TextureLoader().load( 'assets/textures/cement.jpg' );
  let matDrainRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDrainRight});
  let drainRight = new THREE.Mesh(geomDrainRight, matDrainRight);
  drainRight.position.set(1000,-100 ,740);
  drainRight.castShadow = true;
  drainRight.receiveShadow = true;
  scene.add(drainRight);

  //train

  //driver's cabin
  //door
  const geomDoor= new THREE.BoxGeometry(200,300,10,1,1,1);
  let textureDoor= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoor = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoor});
  let door = new THREE.Mesh(geomDoor, matDoor);
  door.position.set(-400,-10 ,200);
  door.rotation.y=11;
  door.receiveShadow = true;
  scene.add(door);
  //leftside
  const geomDoorLeft= new THREE.BoxGeometry(20,200,10,1,1,1);
  let textureDoorLeft= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorLeft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorLeft});
  let doorLeft = new THREE.Mesh(geomDoorLeft, matDoorLeft);
  doorLeft.position.set(-400,220 ,110);
  doorLeft.rotation.y=11;
  doorLeft.receiveShadow = true;
  scene.add(doorLeft);
  //rightside
  const geomDoorRight= new THREE.BoxGeometry(20,200,10,1,1,1);
  let textureDoorRight= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorRight});
  let doorRight = new THREE.Mesh(geomDoorRight, matDoorRight);
  doorRight.position.set(-400,220 ,290);
  doorRight.rotation.y=11;
  doorRight.receiveShadow = true;
  scene.add(doorRight);
    //top
  const geomDoorTop= new THREE.BoxGeometry(200,20,10,1,1,1);
  let textureDoorTop= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorTop = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorTop});
  let doorTop = new THREE.Mesh(geomDoorTop, matDoorTop);
  doorTop.position.set(-400,320 ,200);
  doorTop.rotation.y=11;
  doorTop.receiveShadow = true;
  scene.add(doorTop);

  //top of door
  //left
  const geomDoorTopLeft= new THREE.BoxGeometry(20,125,10,1,1,1);
  let textureDoorTopLeft= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorTopLeft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorTopLeft});
  let doorTopLeft = new THREE.Mesh(geomDoorTopLeft, matDoorTopLeft);
  doorTopLeft.position.set(-400,390 ,110);
  doorTopLeft.rotation.y=11;
  doorTopLeft.receiveShadow = true;
  scene.add(doorTopLeft);
  //right
  const geomDoorTopRight= new THREE.BoxGeometry(20,125,10,1,1,1);
  let textureDoorTopRight= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorTopRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorTopRight});
  let doorTopRight = new THREE.Mesh(geomDoorTopRight, matDoorTopRight);
  doorTopRight.position.set(-400,390 ,290);
  doorTopRight.rotation.y=11;
  doorTopRight.receiveShadow = true;
  scene.add(doorTopRight);
    //top
  const geomDoorTop2= new THREE.BoxGeometry(800,20,10,1,1,1);
  let textureDoorTop2= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matDoorTop2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureDoorTop2});
  let doorTop2 = new THREE.Mesh(geomDoorTop2, matDoorTop2);
  doorTop2.position.set(-400,450 ,200);
  doorTop2.rotation.y=11;
  doorTop2.receiveShadow = true;
  scene.add(doorTop2);

  //sides
  //left box beside door
  const geomLeft= new THREE.BoxGeometry(300,250,10,1,1,1);
  let textureLeft= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matLeft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeft});
  let left = new THREE.Mesh(geomLeft, matLeft);
  left.position.set(-400,-40 ,-51);
  left.rotation.y=11;
  left.receiveShadow = true;
  scene.add(left);
  //left window
  const geomWindow= new THREE.BoxGeometry(280,150,10,1,1,1);
  let textureWindow= new THREE.TextureLoader().load( 'assets/textures/frost.jpg' );
  let matWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWindow});
  let windshield = new THREE.Mesh(geomWindow, matWindow);
  windshield.position.set(-410,270 ,-40);
  windshield.rotation.y=11;
  windshield.receiveShadow = true;
  scene.add(windshield);

  let windshield2 = new THREE.Mesh(geomWindow, matWindow);
  windshield2.position.set(-410,270 ,450);
  windshield2.rotation.y=11;
  windshield2.receiveShadow = true;
  scene.add(windshield2);

  const geomWindow3= new THREE.BoxGeometry(160,200,10,1,1,1);
  let textureWindow3= new THREE.TextureLoader().load( 'assets/textures/frost.jpg' );
  let matWindow3 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureWindow3});
  let windshield3 = new THREE.Mesh(geomWindow3, matWindow3);
  windshield3.position.set(-410,220 ,200);
  windshield3.rotation.y=11;
  windshield3.receiveShadow = true;
  scene.add(windshield3);
  //left headlight
  const geomLightLeft= new THREE.BoxGeometry(100,100,10,1,1,1);
  let textureLightLeft= new THREE.TextureLoader().load( 'assets/textures/hlight.jpg' );
  let matLightLeft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLightLeft});
  let lightLeft = new THREE.Mesh(geomLightLeft, matLightLeft);
  lightLeft.position.set(-410,-40 ,-51);
  lightLeft.rotation.y=11;
  lightLeft.receiveShadow = true;
  scene.add(lightLeft);
  //black bars in left window
  //top
  const geomLeftBar= new THREE.BoxGeometry(280,100,10,1,1,1);
  let textureLeftBar= new THREE.TextureLoader().load( 'assets/textures/lcd.jpg' );
  let matLeftBar = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftBar});
  let leftBar = new THREE.Mesh(geomLeftBar, matLeftBar);
  leftBar.position.set(-400,400 ,-31);
  leftBar.rotation.y=11;
  leftBar.receiveShadow = true;
  scene.add(leftBar);
  //bottom
  const geomLeftBar2= new THREE.BoxGeometry(280,100,10,1,1,1);
  let textureLeftBar2= new THREE.TextureLoader().load( 'assets/textures/black.jpg' );
  let matLeftBar2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftBar2});
  let leftBar2 = new THREE.Mesh(geomLeftBar2, matLeftBar2);
  leftBar2.position.set(-400,140 ,-31);
  leftBar2.rotation.y=11;
  leftBar2.receiveShadow = true;
  scene.add(leftBar2);
  //left
  const geomLeftWindow= new THREE.BoxGeometry(20,380,10,1,1,1);
  let textureLeftWindow= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matLeftWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftWindow});
  let leftWindow = new THREE.Mesh(geomLeftWindow, matLeftWindow);
  leftWindow.position.set(-400,260 ,-190);
  leftWindow.rotation.y=11;
  leftWindow.receiveShadow = true;
  scene.add(leftWindow);

   //extra details
  const geomLeftBox= new THREE.BoxGeometry(50,40,250,1,1,1);
  let textureLeftBox= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matLeftBox = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLeftBox});
  let leftBox = new THREE.Mesh(geomLeftBox, matLeftBox);
  leftBox.position.set(-430,-150 ,-80);
  leftBox.castShadow = true;
  leftBox.receiveShadow = true;
  scene.add(leftBox);

    //right box beside door
  const geomRight= new THREE.BoxGeometry(300,250,10,1,1,1);
  let textureRight= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRight});
  let right = new THREE.Mesh(geomRight, matRight);
  right.position.set(-400,-40 ,450);
  right.rotation.y=11;
  right.receiveShadow = true;
  scene.add(right);
    //left headlight
  const geomLightRight= new THREE.BoxGeometry(100,100,10,1,1,1);
  let textureLightRight= new THREE.TextureLoader().load( 'assets/textures/hlight.jpg' );
  let matLightRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLightRight});
  let lightRight = new THREE.Mesh(geomLightRight, matLightRight);
  lightRight.position.set(-410,-40 ,451);
  lightRight.rotation.y=11;
  lightRight.receiveShadow = true;
  scene.add(lightRight);
  //light for headlight
  var pLight = new THREE.SpotLight( 0xff9900, 1, 1000 ); 
  pLight.position.set( -1200,-100, -100 );
  pLight.rotation.y=1; 
  scene.add( pLight );
  // var spotLightHelper = new THREE.SpotLightHelper( pLight );
  // scene.add( spotLightHelper );

  var pLight2 = new THREE.SpotLight( 0xff9900, 1  ,1000 ); 
  pLight2.position.set( -1200, -100,300 );
  pLight2.rotation.y=1; 
  scene.add( pLight2 );
  // var spotLightHelper2 = new THREE.SpotLightHelper( pLight2 );
  // scene.add( spotLightHelper2 );
    //right
  const geomRightWindow= new THREE.BoxGeometry(20,380,10,1,1,1);
  let textureRightWindow= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matRightWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightWindow});
  let rightWindow = new THREE.Mesh(geomRightWindow, matRightWindow);
  rightWindow.position.set(-400,260 ,590);
  rightWindow.rotation.y=11;
  rightWindow.receiveShadow = true;
  scene.add(rightWindow);

  //lcd in middle
  const geomLCD= new THREE.BoxGeometry(160,105,10,1,1,1);
  let textureLCD= new THREE.TextureLoader().load( 'assets/textures/lcd.jpg' );
  let matLCD = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureLCD});
  let LCD = new THREE.Mesh(geomLCD, matLCD);
  LCD.position.set(-400,380 ,200);
  LCD.rotation.y=11;
  LCD.receiveShadow = true;
  scene.add(LCD);

  //black bars in right window
  //top
  const geomRightBar= new THREE.BoxGeometry(280,100,10,1,1,1);
  let textureRightBar= new THREE.TextureLoader().load( 'assets/textures/black.jpg' );
  let matRightBar = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightBar});
  let rightBar = new THREE.Mesh(geomRightBar, matRightBar);
  rightBar.position.set(-400,400 ,450);
  rightBar.rotation.y=11;
  rightBar.receiveShadow = true;
  scene.add(rightBar);
  //bottom
  const geomRightBar2= new THREE.BoxGeometry(280,100,10,1,1,1);
  let textureRightBar2= new THREE.TextureLoader().load( 'assets/textures/black.jpg' );
  let matRightBar2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightBar2});
  let rightBar2 = new THREE.Mesh(geomRightBar2, matRightBar2);
  rightBar2.position.set(-400,140 ,450);
  rightBar2.rotation.y=11;
  rightBar2.receiveShadow = true;
  scene.add(rightBar2);
   //extra details
  const geomRightBox= new THREE.BoxGeometry(50,40,250,1,1,1);
  let textureRightBox= new THREE.TextureLoader().load( 'assets/textures/steel.png' );
  let matRightBox = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureRightBox});
  let rightBox = new THREE.Mesh(geomRightBox, matRightBox);
  rightBox.position.set(-430,-150,480);
  rightBox.castShadow = true;
  rightBox.receiveShadow = true;
  scene.add(rightBox);

  //bottom bars under the train
  const geomBottomLeft= new THREE.BoxGeometry(80,150,10,1,1,1);
  let textureBottomLeft= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matBottomLeft = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBottomLeft});
  let bottomLeft = new THREE.Mesh(geomBottomLeft, matBottomLeft);
  bottomLeft.position.set(-400,-200 ,-51);
  bottomLeft.rotation.y=11;
  bottomLeft.receiveShadow = true;
  scene.add(bottomLeft);
  
  const geomBottomRight= new THREE.BoxGeometry(80,150,10,1,1,1);
  let textureBottomRight= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matBottomRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBottomRight});
  let bottomRight = new THREE.Mesh(geomBottomRight, matBottomRight);
  bottomRight.position.set(-400,-200 ,480);
  bottomRight.rotation.y=11;
  bottomRight.receiveShadow = true;
  scene.add(bottomRight);

  const geomBottom= new THREE.BoxGeometry(800,40,10,1,1,1);
  let textureBottom= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matBottom = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureBottom});
  let bottom = new THREE.Mesh(geomBottom, matBottom);
  bottom.position.set(-400,-300 ,225);
  bottom.rotation.y=11;
  bottom.receiveShadow = true;
  scene.add(bottom);

  //body of train
  //left
  //wall
  const geomtrainWall= new THREE.BoxGeometry(10,600,5000,1,1,1);
  let texturetrainWall= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWall = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWall});
  let trainWall = new THREE.Mesh(geomtrainWall, mattrainWall);
  trainWall.position.set(2100,150 ,-210);
  trainWall.rotation.y=11;
  trainWall.castShadow = true;
  trainWall.receiveShadow = true;
  scene.add(trainWall);

  let trainWallCurve = new THREE.Mesh(geomtrainWall, mattrainWall);
  trainWallCurve .position.set(7000,150 ,510);
  trainWallCurve .rotation.y=7.7;
  trainWallCurve .castShadow = true;
  trainWallCurve .receiveShadow = true;
  scene.add(trainWallCurve );
  //inside train cabin
    //cabin door
  const geomCabin= new THREE.BoxGeometry(800,500,10,1,1,1);
  let textureCabin= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let matCabin = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:textureCabin});
  let cabin = new THREE.Mesh(geomCabin, matCabin);
  cabin.position.set(-200,200 ,200);
  cabin.rotation.y=11;
  cabin.receiveShadow = true;
  scene.add(cabin);
  //right
  //wall
  const geomtrainWallRight= new THREE.BoxGeometry(10,250,5000,1,1,1);
  let texturetrainWallRight= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWallRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWallRight});
  let trainWallRight = new THREE.Mesh(geomtrainWallRight, mattrainWallRight);
  trainWallRight.position.set(2100,0 ,590);
  trainWallRight.rotation.y=11;
  trainWallRight.castShadow = true;
  trainWallRight.receiveShadow = true;
  scene.add(trainWallRight);
    //wallcurve
  const geomtrainWallRightCurve2= new THREE.BoxGeometry(10,150,5000,1,1,1);
  let texturetrainWallRightCurve2= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWallRightCurve2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWallRightCurve2});
  let trainWallRightCurve2 = new THREE.Mesh(geomtrainWallRightCurve2, mattrainWallRightCurve2);
  trainWallRightCurve2.position.set(7000,400 ,900);
  trainWallRightCurve2.rotation.y=7.7;
  trainWallRightCurve2.castShadow = true;
  trainWallRightCurve2.receiveShadow = true;
  scene.add(trainWallRightCurve2);

  const geomtrainWallRightCurve3= new THREE.BoxGeometry(10,250,5000,1,1,1);
  let texturetrainWallRightCurve3= new THREE.TextureLoader().load( 'assets/textures/frost.jpg' );
  let mattrainWallRightCurve3 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWallRightCurve3});
  let trainWallRightCurve3 = new THREE.Mesh(geomtrainWallRightCurve3, mattrainWallRightCurve3);
  trainWallRightCurve3.position.set(7000,200 ,900);
  trainWallRightCurve3.rotation.y=7.7;
  trainWallRightCurve3.castShadow = true;
  trainWallRightCurve3.receiveShadow = true;
  scene.add(trainWallRightCurve3);
    //wallcurve
  const geomtrainWallRightCurve= new THREE.BoxGeometry(10,250,5000,1,1,1);
  let texturetrainWallRightCurve= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWallRightCurve = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWallRightCurve});
  let trainWallRightCurve = new THREE.Mesh(geomtrainWallRightCurve, mattrainWallRightCurve);
  trainWallRightCurve.position.set(7000,0 ,900);
  trainWallRightCurve.rotation.y=7.7;
  trainWallRightCurve.castShadow = true;
  trainWallRightCurve.receiveShadow = true;
  scene.add(trainWallRightCurve);

    //top right wall
  const geomtrainWallTopRight= new THREE.BoxGeometry(10,150,5000,1,1,1);
  let texturetrainWallTopRight= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWallTopRight = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWallTopRight});
  let trainWallTopRight = new THREE.Mesh(geomtrainWallTopRight, mattrainWallTopRight);
  trainWallTopRight.position.set(2100,400 ,590);
  trainWallTopRight.rotation.y=11;
  trainWallTopRight.castShadow = true;
  trainWallTopRight.receiveShadow = true;
  scene.add(trainWallTopRight);
  //windows
  const geomtrainWindow= new THREE.BoxGeometry(10,200,150,1,1,1);
  let texturetrainWindow= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainWindow = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainWindow});
  let trainWindow = new THREE.Mesh(geomtrainWindow, mattrainWindow);
  trainWindow.position.set(210,225 ,600);
  trainWindow.rotation.y=11;
  trainWindow.castShadow = true;
  trainWindow.receiveShadow = true;
  scene.add(trainWindow);

  let trainWindow2 = new THREE.Mesh(geomtrainWindow, mattrainWindow);
  trainWindow2.position.set(700,225 ,600);
  trainWindow2.rotation.y=11;
  trainWindow2.castShadow = true;
  trainWindow2.receiveShadow = true;
  scene.add(trainWindow2);

  let trainWindow3 = new THREE.Mesh(geomtrainWindow, mattrainWindow);
  trainWindow3.position.set(1200,225 ,600);
  trainWindow3.rotation.y=11;
  trainWindow3.castShadow = true;
  trainWindow3.receiveShadow = true;
  scene.add(trainWindow3);
  
  let trainWindow4 = new THREE.Mesh(geomtrainWindow, mattrainWindow);
  trainWindow4.position.set(1700,225 ,600);
  trainWindow4.rotation.y=11;
  trainWindow4.castShadow = true;
  trainWindow4.receiveShadow = true;
  scene.add(trainWindow4);
  //train door
  const geomtrainDoor= new THREE.BoxGeometry(10,600,400,1,1,1);
  let texturetrainDoor= new THREE.TextureLoader().load( 'assets/textures/door.jpg' );
  let mattrainDoor = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainDoor});
  let trainDoor = new THREE.Mesh(geomtrainDoor, mattrainDoor);
  trainDoor.position.set(420,200 ,610);
  trainDoor.rotation.y=11;
  trainDoor.castShadow = true;
  trainDoor.receiveShadow = true;
  scene.add(trainDoor);

  let trainDoor2 = new THREE.Mesh(geomtrainDoor, mattrainDoor);
  trainDoor2.position.set(0,200 ,610);
  trainDoor2.rotation.y=11;
  trainDoor2.castShadow = true;
  trainDoor2.receiveShadow = true;
  scene.add(trainDoor2);

  let trainDoor3 = new THREE.Mesh(geomtrainDoor, mattrainDoor);
  trainDoor3.position.set(900,200 ,610);
  trainDoor3.rotation.y=11;
  trainDoor3.castShadow = true;
  trainDoor3.receiveShadow = true;
  scene.add(trainDoor3);

  let trainDoor4 = new THREE.Mesh(geomtrainDoor, mattrainDoor);
  trainDoor4.position.set(1400,200 ,610);
  trainDoor4.rotation.y=11;
  trainDoor4.castShadow = true;
  trainDoor4.receiveShadow = true;
  scene.add(trainDoor4);

  let trainDoor5 = new THREE.Mesh(geomtrainDoor, mattrainDoor);
  trainDoor5.position.set(1900,200 ,610);
  trainDoor5.rotation.y=11;
  trainDoor5.castShadow = true;
  trainDoor5.receiveShadow = true;
  scene.add(trainDoor5);
  

  //roof
  const geomtrainRoof= new THREE.BoxGeometry(5050,10,800,1,1,1);
  let texturetrainRoof= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainRoof = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainRoof});
  let trainRoof = new THREE.Mesh(geomtrainRoof, mattrainRoof);
  trainRoof.position.set(2150,470 ,210);
  trainRoof.castShadow = true;
  trainRoof.receiveShadow = true;
  scene.add(trainRoof);
    //roof
  const geomtrainRoof2= new THREE.BoxGeometry(5050,10,800,1,1,1);
  let texturetrainRoof2= new THREE.TextureLoader().load( 'assets/textures/steel2.jpg' );
  let mattrainRoof2 = new THREE.MeshPhongMaterial({shading:THREE.FlatShading, map:texturetrainRoof2});
  let trainRoof2 = new THREE.Mesh(geomtrainRoof2, mattrainRoof2);
  trainRoof2.position.set(7000,470 ,500);
  trainRoof2.rotation.y=6.1;
  trainRoof2.castShadow = true;
  trainRoof2.receiveShadow = true;
  scene.add(trainRoof2);
//for human
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/human/scene.gltf', function ( gltf ) {
   human=gltf.scene;
    gltf.scene.scale.set(10,10,10);
    gltf.scene.position.set(-200,-250,-900);
   scene.add( human);


}, undefined, function ( error ) {

	console.error( error );

} );

//for human
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/human2/scene.gltf', function ( gltf ) {
   human=gltf.scene;
    gltf.scene.scale.set(20,20,20);
    gltf.scene.position.set(-400,-250,-900);
   scene.add( human);


}, undefined, function ( error ) {

	console.error( error );

} );
//for railway
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/railway/scene.gltf', function ( gltf ) {
   rail=gltf.scene;
    gltf.scene.scale.set(0.5,1,2);
    gltf.scene.position.set(-250,-330,-400);
   scene.add( rail);
   rail.rotation.y=1.6;

}, undefined, function ( error ) {

	console.error( error );

} );
//for railway
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/railway/scene.gltf', function ( gltf ) {
   rail=gltf.scene;
    gltf.scene.scale.set(0.5,1,2);
    gltf.scene.position.set(-250,-330,-200);
   scene.add( rail);
   rail.rotation.y=1.6;

}, undefined, function ( error ) {

	console.error( error );

} );
//for railway
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/railway/scene.gltf', function ( gltf ) {
   rail=gltf.scene;
    gltf.scene.scale.set(0.5,1,2);
    gltf.scene.position.set(-250,-330,200);
   scene.add( rail);
   rail.rotation.y=1.6;

}, undefined, function ( error ) {

	console.error( error );

} );
//for railway
var loader = new THREE.GLTFLoader();
loader.load( 'assets/models/railway/scene.gltf', function ( gltf ) {
   rail=gltf.scene;
    gltf.scene.scale.set(0.5,1,2);
    gltf.scene.position.set(-250,-330,400);
   scene.add( rail);
   rail.rotation.y=1.6;

}, undefined, function ( error ) {

	console.error( error );

} );

//for particles
  let sprite = new THREE.TextureLoader().load( 'assets/textures/star.png' );
     let starMaterial = new THREE.PointsMaterial({
       color: 0xaaaaaa,
       size: 1,
       map: sprite
     });

     stars = new THREE.Points(starGeo,starMaterial);
     stars.position.z=700;
     stars.position.x=-1000;
     scene.add(stars);
 
     window.addEventListener("resize", onWindowResize, false);

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
clock = new THREE.Clock();

//lights
let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set(500, 1500, 400);

spotLight.castShadow = true;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 10000;
spotLight.shadow.camera.fov = 30;
scene.add( spotLight );

hemisphereLight=new THREE.HemisphereLight(0xaaaaaa,0x000000,.9);
scene.add(hemisphereLight);
let ambientLight = new THREE.AmbientLight( 0x404040, .9 );
scene.add(ambientLight);

let light = new THREE.PointLight(0xffffff, 1.0, 600);


//background for scene
let mainBackground = new THREE.TextureLoader().load('assets/textures/background4.jpg' );
scene.background=(mainBackground)
;
//OrbitControls
controls = new THREE.OrbitControls (camera);
camera.position.set( -1000, 20, 700 );

document.body.appendChild( renderer.domElement );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
function animate() {
  starGeo.vertices.forEach(p => {
    p.velocity += p.acceleration
    p.x -= p.velocity;
   
    if (p.x < -200) {
      p.x = 200;
      p.velocity = 0;
    }
  });
  starGeo.verticesNeedUpdate = true;
  stars.rotation.x =0.010;
  
  renderer.render(scene, camera);
  controls.update();
   requestAnimationFrame( animate );
}
animate();