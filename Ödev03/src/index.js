import React from "react";
import ReactDOM from "react-dom";

var catID = Math.floor(Math.random() * 3);

const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const alertt = document.getElementById('alert');
const winCase = document.getElementById('win');
const loseCase = document.getElementById('lose');

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            isFinished : false,
            count : 0,
        }
        this.incrementCount=this.incrementCount.bind(this);
        this.finisher=this.finisher.bind(this);
        
      }

    incrementCount() {
        this.setState((state) => {
          return {count: this.state.count + 1}
        });
      }
      finisher() {
        this.setState((state) => {
          return {isFinished : true}
        });
      }

    click1(){
        console.log("click one")
        if (catID == 0) {
            card1.setAttribute('class', 'card-cat');
            this.finisher();
        } else {
            card1.setAttribute('class', 'card-dog');
            this.incrementCount(); 
        }

        if (count == 2) {
            this.finisher();
        }
    
        if (isFinished && count < 2) {
            alertt.style.display = "none";
            winCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } else if (isFinished && count >= 2) {
            alertt.style.display = "none";
            loseCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } 
    }

    click2() {
        if (catID == 1) {
            card2.setAttribute('class', 'card-cat');
            this.setState({isFinished: true})            
        } else {
            card2.setAttribute('class', 'card-dog');
            this.setState({count: this.state.count + 1 });
        }
    
        if (count == 2) {
            this.setState({isFinished: true})            
        }
    
        if (isFinished && count < 2) {
            alertt.style.display = "none";
            winCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } else if (isFinished && count >= 2) {
            alertt.style.display = "none";
            loseCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } 
        console.log("click two")

    }
    click3(){
        if (catID == 2) {
            card3.setAttribute('class', 'card-cat');
            this.setState({isFinished: true})            
        } else {
            card3.setAttribute('class', 'card-dog');
            this.setState({count: this.state.count + 1 });
        }
    
        if (count == 2) {
            this.setState({isFinished: true})            
        }
    
        if (isFinished && count < 2) {
            alertt.style.display = "none";
            winCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } else if (isFinished && count >= 2) {
            alertt.style.display = "none";
            loseCase.style.display = "block";
            card1.style.pointerEvents = "none";
            card2.style.pointerEvents = "none";
            card3.style.pointerEvents = "none";
        } 
        console.log("click three")
    }

    render(){
        return(<div> 
            <div className="header">
                <h2 className="title">Kedi Bulmaca</h2>
                <p className="desc">Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. 
                İlk tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.</p>
            </div>
            
            <div className="cards">
                <div id="card1" className="card" onClick={this.click1}></div>
                <div id="card2" className="card" onClick={this.click2}></div>
                <div id="card3" className="card" onClick={this.click3}></div>       
            </div>
    
            <div className="footer">
                <p id="alert" className="desc">
                    <span style={{backgroundColor:"green"}}>
                        Kedi kartını bulmak için kartın üzerine tıklamalısın.
                    </span>
                </p>
                <p id="win" className="desc" style={{display:"none"}}>
                    <span style={{backgroundColor:"green"}}>
                        Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen 
                        <a href="index.html">buraya</a> tıklayabilirsin.
                    </span>
                </p>
                <p id="lose" className="desc" style={{display:"none"}}>
                    <span style={{backgroundColor:"green"}}>
                        Kaybettin :( Yeni bir oyun oynamak istersen 
                        <a href="index.html">buraya</a> tıklayabilirsin.
                    </span>
                </p>
            </div></div>)
    }
}

ReactDOM.render(<App></App>,document.getElementById("root"))