import React, { Component } from 'react';
import Nav from '../Nav'
import Header from '../Header'
import Container from '../Container'
import Card from '../Card'
import images from '../../images.json'

class MainGame extends Component {
    state = {
        clicked:[],
        score: 0,
        topScore: 0,
        cardsArray: images,
        guessStatus: "Click a Picture!"
    }

    componentDidMount() {
        console.log(this.state.cardsArray)

        this.setState({
            cardsArray: this.shuffle(images)
        })
    }

    handleOnClick = id => {
        console.log(id)
        if (this.state.clicked.indexOf(id) === -1){
            let tempClicked = this.state.clicked
            tempClicked.push(id)
            console.log(tempClicked)
//ternary  vs if
// let temptopcore = this.state.topScore
// if (this.state.score + 1 > this.state.topScore){
// temptopcore = this.state.score+1
// }

        this.setState({
            score: this.state.score + 1,
            topScore:  this.state.score + 1> this.state.topScore ? this.state.score +1 : this.state.topScore,
            cardsArray: this.shuffle(this.state.cardsArray),
            clicked: tempClicked,
            guessStatus: "Correct!"
        })
    }
    else{
        this.setState({
            score: 0,
            clicked: [],
            cardsArray: this.shuffle(this.state.cardsArray),
            guessStatus: "Incorrect. Try again!"
        })

    }
    }

    shuffle = array => {
      let newImages =  array.sort(() => Math.random() - 0.5)
      return newImages
    }


    //  clicke on images 
    // based on the click decided if was click before
    // update scores / topscores
    //


    render() {
        return (
            <>
                <Nav 
                score={this.state.score}
                topScore = {this.state.topScore}
                guessStatus = {this.state.guessStatus}
                />
                <Header />
                <Container>
                    {this.state.cardsArray.map(card => (

                         <Card
                           image={card.link}
                           alt={card.alt}
                           id={card.id}
                           handleclick={this.handleOnClick}
                        />
                    ))}

                </Container>
            </>
        )
    }
}

export default MainGame;