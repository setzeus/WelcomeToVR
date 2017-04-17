'use strict';


import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  asset,
  Model,
  Pano,
  Text,
  Sound,
  View,
  VrButton,
  NativeModules,
} from 'react-vr';

// Native Module defined in vr/client.js
const SphereModule = NativeModules.SphereModule;

class SphereSample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {btnColor: 'white', sphereColor: 'yellow'};
    SphereModule.changeSphereColor(this.state.sphereColor);
  }

  render() {
    return (

      <View
        style={{
          transform:[{translate: [0, 0, -3]}],
          layoutOrigin: [0.5, 0, 0],
          alignItems: 'center',
        }}>

                <Sound
  source={{
   mp3: asset('ambient.mp3'),
  }}
/>
        
        <Pano source={ { uri: [ 
          '../static_assets/lagoon_rt.jpg', 
          '../static_assets/lagoon_lf.jpg', 
          '../static_assets/lagoon_up.jpg', 
          '../static_assets/lagoon_dn.jpg', 
          '../static_assets/lagoon_bk.jpg', 
          '../static_assets/lagoon_ft.jpg' ] } } />

        <AmbientLight intensity={ 2.6 }  />

        <Model style={{ transform: [ {translate: [-28, 14, -28]}, {scale: 0.1 }, {rotateY: -130}, {rotateX: 20}, {rotateZ: -10} ], }}
        source={{mesh:asset('moon.obj'), mtl:asset('moon.mtl'), lit: true}} />

        <VrButton
          style={{
            backgroundColor: this.state.btnColor,
            borderRadius: 0.05,
            margin: 0.05,
          }}
          onEnter={()=>{this.setState({btnColor: this.state.sphereColor})}}
          onExit={()=>{this.setState({btnColor: 'white'})}}
          onClick={()=>{
            let hexColor = Math.floor(Math.random()*0xffffff).toString(16);
            hexColor = '#'+(('000000'+hexColor).slice(-6));
            this.setState({sphereColor: hexColor, btnColor: hexColor});
            SphereModule.changeSphereColor(hexColor);
          }}
          onClickSound={asset('freesound__146721__fins__menu-click.wav')}
          onEnterSound={asset('freesound__278205__ianstargem__switch-flip-1.wav')}
        >
          <Text style={{
            fontSize: 0.15,
            paddingTop: 0.025,
            paddingBottom: 0.025,
            paddingLeft: 0.05,
            paddingRight: 0.05,
            textAlign:'center',
            textAlignVertical:'center',
          }}>
            button
          </Text>
        </VrButton>
      </View>


    );
  }
};

AppRegistry.registerComponent('SphereSample', () => SphereSample);


