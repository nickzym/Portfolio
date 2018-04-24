import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactMapboxGl, { Layer, Feature, Popup, ZoomControl } from "react-mapbox-gl";
import Article from './Article';
import { articles } from './assets/articles';
import PicDisplay from './PicDisplay';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            lat: 34.0162,
            lng: -118.2842,
        }
        this.handleClick = this.handleClick.bind(this);
        this.renderPart = this.renderPart.bind(this);
    }

    handleClick(key) {
        this.setState({
            key
        });
    }

    renderPart(key) {
        const clsPrefix = 'nickzym';
        if (key === 1) {
            return (
                <QueueAnim delay={1000} type="alpha" className={`${clsPrefix}--content-wrapper`}>
                    <div key="c" className={`${clsPrefix}--content`}>
                        <div className={`${clsPrefix}--avatar`}>
                            <img src={require("./assets/images/avatar.png")} alt="avatar" />
                        </div>
                        <div className={`${clsPrefix}--intro`}>
                            <p>
                                Hi, I'm Nick. Chinese name is Yiming Zhang.
                                <br /><br />
                                Graduate Student major in Computer Science, Designer, Web developer, Data Scientist rookie, Travaler, Member of Communist Party of China.
                                <br /><br />
                                Shenyang via Chengdu, Taiwan, and Los Angeles. Alumni of Electronic Science and Technology of China and University of Southern California.
                                <br /><br />
                                Intrigued by new technology, computer science, algorithm, traveling, photography, fabulous food, and even better conversations.
                                <br /><br />
                                Seeking to be hired as a Software Development Engineer, hope to work with brillant people and have a work-life balanced condition.
                                <br /><br />
                                Say hi on Instagram <a href="https://www.instagram.com/nnnickzym/"><span>@nnnickzym</span></a>
                            </p>
                        </div>
                    </div>
                </QueueAnim>
            );
        } else if (key === 2) {
            return (
                <QueueAnim type="alpha" className={`${clsPrefix}--content-wrapper`}>
                    <div key="c" className={`${clsPrefix}--content ${clsPrefix}--content2`}>
                        <div className={`${clsPrefix}--education`}>
                            <p>
                                I have two degrees of <span>Bachelor of Engineering</span> and <span>Master of Science</span>. I am major in Electronic Science and Technology in UESTC. During graduate study, I switch my major to Computer Science which really inspires me a lot.
                                <br /><br />
                                My high school is Shenyang <span>No.2 High School</span> which is apparently <span>top3</span> in Shenyang high school ranking list.
                                <br /><br />
                                My undergraduate univerisity is <span>University of Electronic Science and Technology of China (UESTC)</span> which is involved in Project 985 announced by CPC General secretary and Chinese President Jiang Zemin.(+1).
                                My major Electronic Science and Technology ranks top1 in Chinese subject ranking list. My research area focuses on semiconducotr and IC manufacturing. I involve serveral projects such as Design and Simulation of Waveguide
                                Magneto-optical Isolator, 2 Dimensional Material and its photonic application as well as some Digital Circuit Design. I was awarded as People's first grade scholarship and People's top grade scholarship in two consecutive semesters.
                                <br /><br />
                                I was an exchange project memeber in Ngee Ann Polytechnic during 2013 Summber in Singapore.
                                <br /><br />
                                I was an exchange student in I-Shou Univeristy during 2014 Spring semester in Taiwan of China. My major is Electrical Engineering.
                                <br /><br />
                                My graduate univerisity is <span>Univeristy of Southern California (USC)</span> which is ranked No.21 in National Univeristies. My major is Computer Science. It is a great experience
                                to continue my study in Viterbi Engineering School in USC. Professor and students are kind and passionate to create new stuff.
                            </p>
                        </div>
                        <div className={`${clsPrefix}--education-logos`}>
                            <img src={require("./assets/images/shenyangerzhong.jpg")} alt="shenyangerzhong"/>
                            <img src={require("./assets/images/uestc.jpg")} alt="uestc"/>
                            <img src={require("./assets/images/ngee.jpg")} alt="ngee"/>
                            <img src={require("./assets/images/ishou.png")} alt="ishou"/>
                            <img src={require("./assets/images/usc.jpg")} alt="usc"/>
                        </div>
                    </div>
                </QueueAnim>
            );
        } else if (key === 3) {
            return (
                <QueueAnim type="alpha" className={`${clsPrefix}--content-wrapper`}>
                    <div key="c" className={`${clsPrefix}--content ${clsPrefix}--content2`}>
                        <div className={`${clsPrefix}--work`}>
                            <p>
                                My professional interests include web development, font-end engineering, algorithm and learnning new tech tools.
                                <br /><br />
                                I am currently a graduate student in USC. I had an internship in Sohu.Com Inc, <a href="https://www.kuaizhan.com/">Sohu Kuaizhan</a> which is
                                a leading cloud-based application development platform. I was responsible for implementing KUI(UI component library) based on React/Redux and
                                Jest/Enzyme. Also, I help to design backend management system by data visualization and design site list page for our clients with a better
                                communication with our customer service.
                                <br /><br />
                                This summer, I probabaly be a Software Development Intern in Google, China. Wish everything goes well.
                            </p>
                        </div>
                        <div className={`${clsPrefix}--work-logos`}>
                            <img src={require("./assets/images/kuaizhan.jpg")} alt="kuaizhan"/>
                            <img src={require("./assets/images/google.png")} alt="google"/>
                        </div>
                    </div>
                </QueueAnim>
            );
        } else if (key === 4) {
            const { lng, lat } = this.state;
            const Map = ReactMapboxGl({
              accessToken: "pk.eyJ1Ijoibmlja3p5bSIsImEiOiJjamdjMGdtd3oxcmY3MzRwamt2ejVpenFpIn0.1Th9diAdVath2m5ZIaZK5A"
            });
            const height = document.body.clientHeight;
            return (
                <Map
                    style="mapbox://styles/mapbox/light-v9"
                    zoom={[0]}
                    center={[lng, lat]}
                    containerStyle={{
                      height: `${height}px`,
                      width: "65%",
                      marginTop: "20px"
                }}>
                    <Layer
                        type="symbol"
                        id="marker"
                        layout={{ "icon-image": "marker-15" }}>
                        <Feature coordinates={[lng, lat]}/>
                        <Feature coordinates={[117.7365, 21.9905]}/>
                        <Feature coordinates={[123.1563, 41.8049]}/>
                        <Feature coordinates={[103.9354, 30.6584]}/>
                        <Feature coordinates={[116.1172, 39.9385]}/>
                        <Feature coordinates={[121.1965, 31.2240]}/>
                        <Feature coordinates={[113.9137, 22.5550]}/>
                        <Feature coordinates={[106.4084, 29.5548]}/>
                        <Feature coordinates={[121.4214, 25.0853]}/>
                        <Feature coordinates={[120.1312, 23.1226]}/>
                        <Feature coordinates={[120.6756, 24.2198]}/>
                        <Feature coordinates={[121.5674, 23.9943]}/>
                        <Feature coordinates={[103.7041, 1.3139]}/>
                        <Feature coordinates={[28.7319, 41.0049]}/>
                        <Feature coordinates={[-122.4821, 47.6129]}/>
                        <Feature coordinates={[-115.3150, 36.1249]}/>
                        <Feature coordinates={[139.5703, 35.6732]}/>
                        <Feature coordinates={[135.7259, 35.0060]}/>
                        <Feature coordinates={[135.4601, 34.6783]}/>
                    </Layer>
                    <Popup
                      coordinates={[lng, lat]}
                      style={{
                          width: "110px",
                          fontFamily: "Open Sans"
                      }}
                      offset={{
                        'bottom-left': [3, -10],  'bottom': [0, -10], 'bottom-right': [-3, -10]
                      }}>
                      <span>current location</span>
                    </Popup>
                    <ZoomControl/>
                </Map>
            );
        } else if (key === 5) {
            return (
                <QueueAnim type="alpha" className={`${clsPrefix}--content-wrapper`}>
                    <div key="c" className={`${clsPrefix}--content`}>
                        {articles.map((value, index) => (
                            <Article key={index} className="nickzym" title={value.title} createAt={value.createAt} text={value.text} />
                        ))}
                    </div>
                </QueueAnim>
            );
        } else if (key === 6) {
            const width = document.body.clientWidth * 0.65;
            const height = width * 0.7 / 3 * 3;
            const style = {
                width: '100%',
                marginTop: '50px',
                height: `${height}px`
            }
            return (
                <QueueAnim type="alpha" className={`${clsPrefix}--content-wrapper2`} style={style}>
                    <div key="c" className={`${clsPrefix}--content3`}>
                        <PicDisplay className="nickzym" />
                    </div>
                </QueueAnim>
            );
        }
    }

    render() {
        const clsPrefix = 'nickzym';
        const key = this.state.key;
        return (
            <div className={`${clsPrefix}--container`}>
                <QueueAnim delay={500} type="top" className={`${clsPrefix}--logo`}>
                    <div key="a" >Nick Zhang</div>
                </QueueAnim>
                <QueueAnim delay={1000} type="scaleX" className={`${clsPrefix}--column`}>
                    <div key="b" className={`${clsPrefix}--items`}>
                        <div className={`${clsPrefix}--itemlist`}>
                            <span onClick={() => this.handleClick(1)}>ABOUT</span>
                            <span onClick={() => this.handleClick(2)}>EDUCATION</span>
                            <span onClick={() => this.handleClick(3)}>WORK</span>
                            <span onClick={() => this.handleClick(4)}>MAP</span>
                            <span onClick={() => this.handleClick(5)}>THOUGHTs/MUSINGs</span>
                            <span onClick={() => this.handleClick(6)}>PHOTOGRAPHY</span>
                        </div>
                        <hr />
                    </div>
                </QueueAnim>
                {
                    this.renderPart(key)
                }
                <QueueAnim delay={1000} type="scaleX" className={`${clsPrefix}--footer`}>
                    <div key="d" className={`${clsPrefix}--footer-content`}>
                        <div className={`${clsPrefix}--social`}>
                            <a href="https://www.facebook.com/nickzym"><span className={`${clsPrefix}--block`}><i class="fab fa-facebook-f"></i></span></a>
                            <a href="https://www.linkedin.com/in/yimingzh/"><span className={`${clsPrefix}--block`}><i class="fab fa-linkedin-in"></i></span></a>
                            <a href="https://github.com/nickzym"><span className={`${clsPrefix}--block`}><i class="fab fa-github"></i></span></a>
                            <a href="mailto:yimingzh123@gmail.com"><span className={`${clsPrefix}--block`}><i class="far fa-envelope"></i></span></a>
                        </div>
                        <div className={`${clsPrefix}--copyright`}>
                            <p>Copyright© 2018</p>
                        </div>
                    </div>
                </QueueAnim>
            </div>
        );
    }
}

export default App;
