import React from 'react'
import main_pic from '../assets/pictures/temp_pic.jpg'

class HideButton extends React.Component{
    
    constructor(){
        super();
        this.state = {
            showing: true,
            showing2: true,
            showing3: false
        }

        // this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(){
        
        setTimeout(function(){
            window.scroll({
                top: document.body.offsetHeight,
                left: 0, 
                behavior: 'smooth',
              });
        }, 10);
        
    }

    render() {
        const {showing} = this.state;
        const {showing2} = this.state;
        const {showing3} = this.state;
        return(
            <div style={{
                backgroundColor: 'grey'
              }} onClick={() => this.handleScroll() }>
                <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                { showing 
                    ? <div id="img-wrapper" style={{
                        backgroundColor: 'black'
                      }}>
                    <div><img src={main_pic} width={"90%"}/></div>
                    <div><img src={main_pic} width={"90%"}/></div>
                    <div><img src={main_pic} width={"90%"}/></div>
                    <div><img src={main_pic} width={"90%"}/></div>
                    <div><img src={main_pic} width={"90%"}/></div>
                    <div><img src={main_pic} width={"90%"}/></div>

                    </div>
                    : null
                }
                

                <h3 onClick={() => this.setState({showing2: !showing2})}>Updates</h3>
                { showing2 
                    ? <div style={{
                        backgroundColor: 'white'
                      }}>
                        <h4>Introduction</h4>
                            <p>3 November 2022</p>
                            
                        <p>I am Charlie Richard Adams, i have been working 
                            professionally as an actor for the last twelve years 
                            I've worked on commercials for Argos, BT, knorr, Migros and others. </p>
                    </div>
                    : null
                }
                <h4 onClick={() => this.setState({showing3: !showing3})}>Continue Reading</h4>
                { showing3 
                    ? <div style={{
                        backgroundColor: 'grey'
                      }}>
                        <p>During this time i completed a degree in Acting from the University of Chichester. 

                            I have recently been working towards roles with more story telling. My first television appearance in a non commercial capacity was for channel five on a show called Celebrity Murder Mystery this was a great experience and i got to work with some really dedicated and talented people.  

                            Since then i have been filming for an international film where i have a small part along side Nikhil Siddhartha.

                            Share this post:
                         </p>
                    </div>
                    : null
                }
            </div>
            
        )
    }
}

export {HideButton}