import React, {Component} from 'react';
import '../styles/HomePage.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.movement = this.movement.bind(this);

    this.handleScroll = this.handleScroll.bind(this);

  }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
      this.movement()
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    movement() {
      document.getElementById('layer1').style.top = -(window.pageYOffset/20) + 'px';
      document.getElementById('layer2').style.top = -(window.pageYOffset/15) + 'px';
      document.getElementById('layer3').style.top = -(window.pageYOffset/10) + 'px';
      document.getElementById('layer4').style.top = -(window.pageYOffset/7.5) + 'px';
      document.getElementById('layer5').style.top = -(window.pageYOffset/5) + 'px';
      document.getElementById('layer6').style.top = -(window.pageYOffset/4) + 'px';
      document.getElementById('layer6_5').style.top = -(window.pageYOffset/4) + 'px';
      document.getElementById('layer7').style.top = -(window.pageYOffset/2) + 'px';
      document.getElementById('layer7_1').style.top = -(window.pageYOffset/2) + 'px';

      document.getElementById('layer7_2').style.top = -(window.pageYOffset/2) + 'px';

      // document.getElementById('layer8').style.top = -(window.pageYOffset/3) + 'px';
      // document.getElementById('layer8_1').style.top = -(window.pageYOffset/3.5) + 'px';
    }

    handleScroll(e) {
      this.movement();
    }

    render() {
      return (
        <div id='layerWrapper'>

          <div className="layer" id="layer1"></div>
          <div className="layer" id="layer2"></div>
          <div className="layer" id="layer3"></div>
          <div className="layer" id="layer4"></div>
          <div className="layer" id="layer5"></div>
          <div className="layer" id="layer6"></div>
          <div className="layer" id="layer6_5"></div>
          <div className="layer" id="layer7"></div>

          <div className="layer" id='layer7_1'></div>
          <div className="layer layerDark content" id='layer7_2'>

            <h1>Current Activity</h1>

          </div>
        </div>
      );
    }
}
