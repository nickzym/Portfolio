import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import PropTypes from 'prop-types';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import './PicDisplay.css';

const textData = {
    content: 'Taiwan called motorcycle, motor bike [1] or a motorcycle,' +
    ' the motorcycle referred to in the mainland, Hong Kong and Southeast' +
    ' Asia known as motorcycles.',
    title: 'Motorcycle',
};
let dataArray = [
  {
    image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG115.jpeg',
    title: 'Pork Rib',
    content: 'So, how is the life in USC. Well, the basic improvement of personal skill is cooking. It is really tasty. Stewed Rib and fried it with soy sauce and garlic.'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG117.jpeg' ,
      title: 'Live In Small bar',
      content: 'Did not come back Shenyang for a while. Drink with my friends. Music is loud but what if rock is not loud?'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG118.jpeg',
      title: 'Las Vegas Highway',
      content: 'Gambling city with decent fun. I have to say if you are rich, Las Vegas is the best place for you to splash. But it is not a good place to relax.'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG120.jpeg',
      title: 'Santa Monica',
      content: 'Suset in santa monica. Peole living here like to have a walk around the beach. The sunset glow warms my skin. After this moment, Will anything be changed forever?'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG121.jpeg',
      title: 'Seattle The International',
      content: 'You know what? Wings Gaming is the champain of TI6, winning almost 600 dollars, bringing this supreme honor back to China. Let us remember this moment!'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG123.jpeg',
      title: 'Chongqing Hongyadong',
      content: 'Beautiful view in Chongqing. This markplace stands for Chongqing long history. You can not imagine this building is build on top of mountain and beside the Yangz River.'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG125.jpeg',
      title: 'Fuji Mountain',
      content: 'This is my only photo for Fuji Mountain in Japan. When I arrived in my hotel that afternoon, I took this. But after that day, the mountain hided in thick cloud, barly see anything.'
  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG127.jpeg',
      title: 'Kyoto Kimono',
      content: 'Hu is wearing Japanese Kinomo with her standard and pretentious smile. Haha, joking.'

  },
  {
      image: 'https://storage.googleapis.com/nickzym-portfolio/WechatIMG129.jpeg' ,
      title: 'Beat UCLA',
      content: 'Before football game of USC VS UCLA, the ceremony of burning UCLA bear is the tradition performance in USC campus. It is really cool. Let us go, Trojans!'
  },
];


class PicDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picOpen: {},
        };
        this.onImgClick = this.onImgClick.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onTweenEnd = this.onTweenEnd.bind(this);
        this.getDelay = this.getDelay.bind(this);
        this.getLiChildren = this.getLiChildren.bind(this);
    }

    onImgClick(e, i) {
        const { picOpen } = this.state;
        Object.keys(picOpen).forEach((key) => {
            if (key !== i && picOpen[key]) {
                picOpen[key] = false;
            }
        });
        picOpen[i] = true;
        this.setState({
            picOpen,
        });
    };

    onClose(e, i){
        const { picOpen } = this.state;
        picOpen[i] = false;
        this.setState({
            picOpen,
        });
    };

    onTweenEnd(i){
        const { picOpen } = this.state;
        delete picOpen[i];
        this.setState({
            picOpen,
        });
    };

    getDelay(e){
        const i = e.index + dataArray.length % 4;
        return (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
    };

    getLiChildren(){

        const width = document.body.clientWidth * 0.65;
        const height = width * 0.7;
        const imgBoxWidth = Math.floor(width / 3);
        const imgBoxHeight = Math.floor(height / 3);
        const imgWidth = imgBoxWidth - 10;
        const imgHeight = imgBoxHeight - 10;

        return dataArray.map((item, i) => {
            const { image, title, content } = item;
            const isEnter = typeof this.state.picOpen[i] === 'boolean';
            const isOpen = this.state.picOpen[i];

            const left = isEnter ? 0 : imgBoxWidth * (i % 3);
            const imgLeft = isEnter ? imgBoxWidth * (i % 3) : 0;
            const isRight = Math.floor((i % 3) / 2);
            const isTop = Math.floor(i / 3);
            let top = isTop ? (isTop - 1) * imgBoxHeight : 0;
            top = isEnter ? top : imgBoxHeight * isTop;
            let imgTop = isTop ? imgBoxHeight : 0;
            imgTop = isEnter ? imgTop : 0;

            const liStyle = isEnter ? { width: `${imgWidth}px`, height: `${imgHeight}px`, zIndex: 1 } : null;
            const liAnimation = isOpen ?
            ({ boxShadow: '0 2px 8px rgba(140, 140, 140, .35)' }) :
            ({ boxShadow: '0 0px 0px rgba(140, 140, 140, 0)' });
            let aAnimation = isEnter ?
            ({
                delay: 400,
                ease: 'easeInOutCubic',
                width: imgWidth,
                height: imgHeight,
                onComplete: this.onTweenEnd.bind(this, i),
                left: imgBoxWidth * (i % 3),
                top: isTop ? imgBoxHeight : 0,
            }) : null;
            aAnimation = isOpen ?
            ({
                ease: 'easeInOutCubic',
                left: isRight ? imgBoxWidth : 0,
                width: imgWidth * 2 + 20,
                height: imgHeight * 2 + 10,
                top: 0,
            }) : aAnimation;

            // 位置 js 控制；
            return (
                <TweenOne
                    key={i}
                    style={{
                        left,
                        top,
                        ...liStyle,
                    }}
                    component="li"
                    className={isOpen ? 'open' : ''}
                    animation={liAnimation}
                >
                <TweenOne
                    component="a"
                    onClick={e => this.onImgClick(e, i)}
                    style={{
                        left: imgLeft,
                        top: imgTop,
                        width: imgWidth,
                        height: imgHeight,
                        cursor: 'pointer'
                    }}
                    animation={aAnimation}
                >
                <img src={image} width="100%" height="100%" />
              </TweenOne>
                <TweenOneGroup
                    enter={[
                      {
                        opacity: 0, duration: 0, type: 'from', delay: 400,
                      },
                      { ease: 'easeOutCubic', type: 'from', left: isRight ? '50%' : '0%' },
                    ]}
                    leave={{ ease: 'easeInOutCubic', left: isRight ? '50%' : '0%' }}
                    component=""
                >
                {isOpen && (
                    <div
                        className={`${this.props.className}-text-wrapper`}
                        key="text"
                        style={{
                          left: isRight ? '0' : imgWidth * 2 + 20,
                          height: imgHeight * 2 + 10,
                          width: imgWidth,
                          boxSizing: 'border-box',
                          fontFamily: 'Open sans'
                        }}
                    >
                        <h1>{title}</h1>
                        <i class="fas fa-times" onClick={e => this.onClose(e, i)} />
                        <em />
                        <p>{content}</p>
                    </div>
                )}
                </TweenOneGroup>
              </TweenOne>
            );
        });
    };

    render() {
        return (
            <div className={`${this.props.className}-image-container`}>
                <QueueAnim
                  delay={this.getDelay}
                  component="ul"
                  className={`${this.props.className}-image-wrapper`}
                  interval={0}
                  type="bottom"
                >
                  {this.getLiChildren()}
                </QueueAnim>
            </div>
        );
    }
}

export default PicDisplay;
