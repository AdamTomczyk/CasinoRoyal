import React from "react";
import './Coin.css'

class Coin extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    let coinUrl = '';

    if(this.props.coinType === "heads")
       coinUrl = "https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"
      else {
       coinUrl = "http://www.pcgscoinfacts.com/UserImages/71009269r.jpg?__cf_chl_jschl_tk__=jFiYRS2.IOv9kzP1vUbz0cYHqK.pMyiSDg3CKUNy8Wg-1638628033-0-gaNycGzNA1E"
    }


    console.log(coinUrl)
    return(
      <div className="Coin">
        <img src={coinUrl} />
      </div>
    )
  }
}

export default Coin;
