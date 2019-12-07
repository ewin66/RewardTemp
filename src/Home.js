import React from 'react';
import "./Home.css";
import Oval1 from "./assets/Oval1.png";
import Oval2 from "./assets/Oval2.png";
import Oval3 from "./assets/Oval3.png";
import Search from "./assets/Search.png";
import User from "./assets/User.png";
import Apps from "./assets/Apps.png";
import Rewards from "./assets/Rewards.png";
import Play from "./assets/Play.png";
import Rectangle from "./assets/Rectangle.png";
import Line from "./assets/Line.png";
const AppsStyle={
    position:'absolute', 
    top:234 , 
    left:0 , 
    width:108, 
    height:76,
    opacity:0.3

}
const AppsStyleClicked={
    position:'absolute', 
    top:234 , 
    left:0 , 
    width:108, 
    height:76

}
const RewardsStyle={
    position:'absolute', 
    top:82, 
    left:0, 
    width:108, 
    height:76,
    opacity:0.3

}
const RewardsStyleClicked={
    position:'absolute', 
    top:82, 
    left:0, 
    width:108, 
    height:76
}
const PlayStyle={
    position:'absolute', 
    left:0, 
    top:158 ,
    width:108, 
    height:76,
    opacity:0.3
}
const PlayStyleClicked={
    position:'absolute', 
    left:0, 
    top:158 ,
    width:108, 
    height:76
}
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            AppsStyle:AppsStyle,
            RewardsStyle:RewardsStyle,
            PlayStyle:PlayStyle

       }
    }
    onAppClick=e=>{
        this.setState({AppsStyle:AppsStyleClicked, RewardsStyle:RewardsStyle, PlayStyle:PlayStyle})
    }
    onRewardClick=e=>{
        this.setState({AppsStyle:AppsStyle, RewardsStyle:RewardsStyleClicked, PlayStyle:PlayStyle})
    }
    onPlayClick=e=>{
        this.setState({AppsStyle:AppsStyle, RewardsStyle:RewardsStyle,PlayStyle:PlayStyleClicked})
    }
    render(){
        return(
            <div className="ContentMask">
                <div style={{top:0, position:'absolute'}}>
                <div >
                    <div style={{position:'absolute', left:30, top:21}}>
                       <img  src={Oval1} alt="Oval-1"/>     
                    </div>
                    <div style={{position:'absolute', left:48, top:21}}>
                        <img src={Oval2} alt="Oval-2"/>                      
                    </div>
                    <div style={{position:'absolute', left:66, top:21 }}>
                         <img src={Oval3} alt="Oval-3" /> 
                    </div>
                    <div style={{position:'absolute', left:640, top:17 }}>
                        <img src={User} alt="User"/>
                    </div>
                    <div style={{position:'absolute', top:17 , left:685 }}>
                        <div className="Path">
                            <img src={Search} alt="Path"/>
                        </div>
                    </div>
                    <div style={{position:'absolute', top:17, left:726}}>
                        <div className="Search">
                            <img src={Search} alt="Search"/>
                        </div>
                    </div>
                </div>
                </div>
                <div style={this.state.RewardsStyle}onClick={this.onRewardClick}>
                    {this.state.RewardsStyle===RewardsStyleClicked &&
                       <img style={{position:'absolute', top:0,left:0, opacity:0.4}} src={Rectangle}/>
                    }
                    <img src={Rewards} alt="Rewards"/>
                </div>
                <div style={this.state.PlayStyle} onClick={this.onPlayClick}>
                    {this.state.PlayStyle===PlayStyleClicked &&
                        <img style={{position:'absolute', top:0,left:0, opacity:0.4}} src={Rectangle}/>
                    }
                    <img src={Play} alt="Play and Show"/>
                </div>
                <div style={this.state.AppsStyle} onClick={this.onAppClick}>
                    <img src={Apps} alt="Apps" />
                    {this.state.AppsStyle===AppsStyleClicked &&
                     <img style={{position:"absolute", top:0,left:0, opacity:0.4}} src={Rectangle}/>
                     }
                </div>
                <div style={{position:'absolute', top:54.5, left:108, width:1,height:358}}>
                    <img src={Line} alt="Line"/>
                </div>
                
            </div>

        )
    }
}