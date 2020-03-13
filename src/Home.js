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
import Logo from "./assets/Logo.png";
import Favourites from "./assets/Favorites.png";
import Reward from "./assets/Reward.png";
import Space from "./assets/Space.png";
import Panel from "./assets/Panel.png";
import RestartTxt from "./assets/Restart txt.png";
import PauseTxt from "./assets/Pause game txt.png";
import LeftTxt from "./assets/Left aligned txt.png";
import Visible from "./assets/Visible.png";
import Visibility from "./assets/visibility.png";
import Left from "./assets/left aligned.png";
import Restart from "./assets/restart.png";
import PlayIcon from "./assets/PlayIcon.png";
import Combined from "./assets/Combined Shape.png";
import Line3 from "./assets/Line 3.png";
import Group13 from "./assets/Group 13.png";
import Group12 from "./assets/Group 12.png";
import Rectangle3 from "./assets/Rectangle 3.png";
import Path from "./assets/Path.png";
import Mountaineer from "./assets/Mountaineer.png";
import ContentMaskImg from "./assets/ContentMask.png";
import Line4 from "./assets/Line4.png";
import Line5 from "./assets/Line5.png";
import Line6 from "./assets/Line6.png";


import Days from "./assets/Icons/icons/Asset Panel/Days.png"
import Months from "./assets/Icons/icons/Asset Panel/Months.png"

import DolphinS from "./assets/sounds/Aquatic Animals/Dolphin.wav"
import FishS from "./assets/sounds/Aquatic Animals/Fish.wav"
import SharkS from "./assets/sounds/Aquatic Animals/Shark.wav"
import WhaleS from "./assets/sounds/Aquatic Animals/Whale.wav"
import BatS from "./assets/sounds/Birds/Bat.wav"
import EagleS from "./assets/sounds/Birds/Eagle.wav"
import FlamingoS from "./assets/sounds/Birds/Flamingo.wav"
import OstrichS from "./assets/sounds/Birds/Ostrich.wav"
import OwlS from "./assets/sounds/Birds/Owl.wav"
import ParrotS from "./assets/sounds/Birds/Parrot.wav"
import PenguinS from "./assets/sounds/Birds/Penguin.wav"
import ToucanS from "./assets/sounds/Birds/Toucan.wav"
import AlpacaS from "./assets/sounds/Farm Animals/Alpacca.wav"
import BuffaloS from "./assets/sounds/Farm Animals/Buffalo.wav"
import CatS from "./assets/sounds/Farm Animals/Cat.wav"
import ChickenS from "./assets/sounds/Farm Animals/Chicken.wav"
import CowS from "./assets/sounds/Farm Animals/Cow.wav"
import DogS from "./assets/sounds/Farm Animals/Dog.wav"
import DonkeyS from "./assets/sounds/Farm Animals/Donkey.wav"
import DuckS from "./assets/sounds/Farm Animals/Duck.wav"
import GoatS from "./assets/sounds/Farm Animals/Goat.wav"
import GooseS from "./assets/sounds/Farm Animals/Goose.wav"
import HorseS from "./assets/sounds/Farm Animals/Horse.wav"
import PeacockS from "./assets/sounds/Farm Animals/Peacock.wav"
import PigS from "./assets/sounds/Farm Animals/Pig.wav"
import RabbitS from "./assets/sounds/Farm Animals/Rabbit.wav"
import SheepS from "./assets/sounds/Farm Animals/Sheep.wav"
import TurkeyS from "./assets/sounds/Farm Animals/Turkey.wav"
import YakS from "./assets/sounds/Farm Animals/Yak.wav"
import BeeS from "./assets/sounds/Insects/Bee.wav"
import ButterflyS from "./assets/sounds/Insects/Butterfly.wav"
import FlyS from "./assets/sounds/Insects/Fly.wav"
import GrasshopperS from "./assets/sounds/Insects/Grasshopper.wav"
import BeaverS from "./assets/sounds/Land Animals/Beaver.mp3"
import CheetahS from "./assets/sounds/Land Animals/Cheetah.wav"
import DeerS from "./assets/sounds/Land Animals/Deer.wav"
import ElephantS from "./assets/sounds/Land Animals/Elephant.wav"
import ElkS from "./assets/sounds/Land Animals/Elk.wav"
import FoxS from "./assets/sounds/Land Animals/Fox.wav"
import GiraffeS from "./assets/sounds/Land Animals/Giraffe.mp3"
import GorillaS from "./assets/sounds/Land Animals/Gorilla.wav"
import GuineaPigS from "./assets/sounds/Land Animals/GuineaPig.wav"
import HamsterS from "./assets/sounds/Land Animals/Hamster.wav"
import HippoS from "./assets/sounds/Land Animals/Hippopotamus.wav"
import JaguarS from "./assets/sounds/Land Animals/Jaguar.wav"
import KangarooS from "./assets/sounds/Land Animals/Kangaroo.wav"
import KoalaS from "./assets/sounds/Land Animals/Koala.wav"
import LemurS from "./assets/sounds/Land Animals/Lemur.wav"
import LeopardS from "./assets/sounds/Land Animals/Leopard.wav"
import LionS from "./assets/sounds/Land Animals/Lion.wav"
import MonkeyS from "./assets/sounds/Land Animals/Monkey.wav"
import MooseS from "./assets/sounds/Land Animals/Moose.wav"
import MouseS from "./assets/sounds/Land Animals/Mouse.wav"
import OtterS from "./assets/sounds/Land Animals/Otter.wav"
import PandaS from "./assets/sounds/Land Animals/Panda.wav"
import PantherS from "./assets/sounds/Land Animals/Panther.wav"
import PolarBearS from "./assets/sounds/Land Animals/Polar bear.wav"
import PorcupineS from "./assets/sounds/Land Animals/Porcupine.wav"
import RacoonS from "./assets/sounds/Land Animals/Raccoon.wav"
import RhinoS from "./assets/sounds/Land Animals/Rhinoceros.wav"
import SkunkS from "./assets/sounds/Land Animals/Skunk.wav"
import SquirrelS from "./assets/sounds/Land Animals/Squirrel.wav"
import TigerS from "./assets/sounds/Land Animals/Tiger.wav"
import WolfS from "./assets/sounds/Land Animals/Wolf.wav"
import ZebraS from "./assets/sounds/Land Animals/Zebra.wav"
import AirplaneS from "./assets/sounds/Things/Airplane.wav"
import BoatS from "./assets/sounds/Things/Boat.wav"
import BusS from "./assets/sounds/Things/Bus.wav"
import CarS from "./assets/sounds/Things/Car.wav"
import DroneS from "./assets/sounds/Things/Drone.wav"
import FiretruckS from "./assets/sounds/Things/FireTruck.wav"
import HelicopterS from "./assets/sounds/Things/Helicopter.wav"
import MotorcycleS from "./assets/sounds/Things/Motorcycle.wav"
import ScooterS from "./assets/sounds/Things/Scooter.wav"
import ShipS from "./assets/sounds/Things/Ship.wav"
import SubwayS from "./assets/sounds/Things/Subway.wav"
import TrainS from "./assets/sounds/Things/Train.wav"
import TruckS from "./assets/sounds/Things/Truck.wav"
import UrbanScooterS from "./assets/sounds/Things/Urban Scooter.wav"


import Dolphin from "./assets/Icons/icons/sound and visuals/Aquatic Animal/Dolphin.png"
import DolphinLarge from "./assets/Icons/icons/sound and visuals/Aquatic Animal/DolphinLarge.png"
import Eel from "./assets/Icons/icons/sound and visuals/Aquatic Animal/Eel.png"
import EelLarge from "./assets/Icons/icons/sound and visuals/Aquatic Animal/EelLarge.png"
import Fish from "./assets/Icons/icons/sound and visuals/Aquatic Animal/Fish.png"
import FishLarge from "./assets/Icons/icons/sound and visuals/Aquatic Animal/FishLarge.png"
import Shark from "./assets/Icons/icons/sound and visuals/Aquatic Animal/Shark.png"
import SharkLarge from "./assets/Icons/icons/sound and visuals/Aquatic Animal/SharkLarge.png"
import Whale from "./assets/Icons/icons/sound and visuals/Aquatic Animal/Whale.png"
import WhaleLarge from "./assets/Icons/icons/sound and visuals/Aquatic Animal/WhaleLarge.png"
import Bat from "./assets/Icons/icons/sound and visuals/Birds/Bat.png"
import BatLarge from "./assets/Icons/icons/sound and visuals/Birds/BatLarge.png"
import Eagle from "./assets/Icons/icons/sound and visuals/Birds/Eagle.png"
import EagleLarge from "./assets/Icons/icons/sound and visuals/Birds/EagleLarge.png"
import Flamingo from "./assets/Icons/icons/sound and visuals/Birds/Flamingo.png"
import FlamingoLarge from "./assets/Icons/icons/sound and visuals/Birds/FlamingoLarge.png"
import Ostrich from "./assets/Icons/icons/sound and visuals/Birds/Ostrich.png"
import OstrichLarge from "./assets/Icons/icons/sound and visuals/Birds/OstrichLarge.png"
import Owl from "./assets/Icons/icons/sound and visuals/Birds/Owl.png"
import OwlLarge from "./assets/Icons/icons/sound and visuals/Birds/OwlLarge.png"
import Parrot from "./assets/Icons/icons/sound and visuals/Birds/Parrot.png"
import ParrotLarge from "./assets/Icons/icons/sound and visuals/Birds/ParrotLarge.png"
import Penguin from "./assets/Icons/icons/sound and visuals/Birds/Penguin.png"
import PenguinLarge from "./assets/Icons/icons/sound and visuals/Birds/PenguinLarge.png"
import Toucan from "./assets/Icons/icons/sound and visuals/Birds/Toucan.png"
import ToucanLarge from "./assets/Icons/icons/sound and visuals/Birds/ToucanLarge.png"
import Alpaca from "./assets/Icons/icons/sound and visuals/Farm Animals/Alpaca.png"
import AlpacaLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/AlpacaLarge.png"
import Buffalo from "./assets/Icons/icons/sound and visuals/Farm Animals/Buffalo.png"
import BuffaloLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/BuffaloLarge.png"           
import Cat from "./assets/Icons/icons/sound and visuals/Farm Animals/Cat.png"
import CatLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/CatLarge.png"
import Chicken from "./assets/Icons/icons/sound and visuals/Farm Animals/Chicken.png"
import Cow from "./assets/Icons/icons/sound and visuals/Farm Animals/Cow.png"
import Dog from "./assets/Icons/icons/sound and visuals/Farm Animals/Dog.png"
import Donkey from "./assets/Icons/icons/sound and visuals/Farm Animals/Donkey.png"
import Duck from "./assets/Icons/icons/sound and visuals/Farm Animals/Duck.png"
import Goat from "./assets/Icons/icons/sound and visuals/Farm Animals/Goat.png"
import Goose from "./assets/Icons/icons/sound and visuals/Farm Animals/goose.png"
import Horse from "./assets/Icons/icons/sound and visuals/Farm Animals/Horse.png"
import Peacock from "./assets/Icons/icons/sound and visuals/Farm Animals/Peacock.png"
import Pig from "./assets/Icons/icons/sound and visuals/Farm Animals/Pig.png"
import Rabbit from "./assets/Icons/icons/sound and visuals/Farm Animals/rabbit.png"
import Sheep from "./assets/Icons/icons/sound and visuals/Farm Animals/Sheep.png"
import Turkey from "./assets/Icons/icons/sound and visuals/Farm Animals/Turkey.png"
import Yak from "./assets/Icons/icons/sound and visuals/Farm Animals/Yak.png"
import Ant from "./assets/Icons/icons/sound and visuals/Insects/Ant.png"
import Bee from "./assets/Icons/icons/sound and visuals/Insects/Bee.png"
import Butterfly from "./assets/Icons/icons/sound and visuals/Insects/Butterfly.png"
import Dragonfly from "./assets/Icons/icons/sound and visuals/Insects/Dragonfly.png"
import Fly from "./assets/Icons/icons/sound and visuals/Insects/Fly.png"
import Grasshopper from "./assets/Icons/icons/sound and visuals/Insects/Grasshopper.png"
import Spider from "./assets/Icons/icons/sound and visuals/Insects/Spider.png"
import Beaver from "./assets/Icons/icons/sound and visuals/Land Animals/Beaver.png"
import Cheetah from "./assets/Icons/icons/sound and visuals/Land Animals/Cheetah.png"
import Deer from "./assets/Icons/icons/sound and visuals/Land Animals/Deer.png"
import Elephant from "./assets/Icons/icons/sound and visuals/Land Animals/Elephant.png"
import Elk from "./assets/Icons/icons/sound and visuals/Land Animals/Elk.png"
import Fox from "./assets/Icons/icons/sound and visuals/Land Animals/Fox.png"
import Giraffe from "./assets/Icons/icons/sound and visuals/Land Animals/Giraffe.png"
import Gorilla from "./assets/Icons/icons/sound and visuals/Land Animals/Gorilla.png"
import GuineaPig from "./assets/Icons/icons/sound and visuals/Land Animals/Guinea pig.png"
import Hamster from "./assets/Icons/icons/sound and visuals/Land Animals/Hamster.png"
import Hippo from "./assets/Icons/icons/sound and visuals/Land Animals/Hippo.png"
import Jaguar from "./assets/Icons/icons/sound and visuals/Land Animals/Jaguar.png"
import Kangaroo from "./assets/Icons/icons/sound and visuals/Land Animals/Kangaroo.png"
import Koala from "./assets/Icons/icons/sound and visuals/Land Animals/Koala.png"
import Lemur from "./assets/Icons/icons/sound and visuals/Land Animals/Lemur.png"
import Leopard from "./assets/Icons/icons/sound and visuals/Land Animals/Leopard.png"
import Lion from "./assets/Icons/icons/sound and visuals/Land Animals/Lion.png"
import Monkey from "./assets/Icons/icons/sound and visuals/Land Animals/Monkey.png"
import Moose from "./assets/Icons/icons/sound and visuals/Land Animals/Moose.png"
import Mouse from "./assets/Icons/icons/sound and visuals/Land Animals/Mouse.png"
import Otter from "./assets/Icons/icons/sound and visuals/Land Animals/Otter.png"
import Panda from "./assets/Icons/icons/sound and visuals/Land Animals/Panda.png"
import Panther from "./assets/Icons/icons/sound and visuals/Land Animals/Panther.png"
import PolarBear from "./assets/Icons/icons/sound and visuals/Land Animals/Polar Bear.png"
import Porcupine from "./assets/Icons/icons/sound and visuals/Land Animals/Porcupine.png"
import Racoon from "./assets/Icons/icons/sound and visuals/Land Animals/Racoon.png"
import Rhino from "./assets/Icons/icons/sound and visuals/Land Animals/Rhino.png"
import Skunk from "./assets/Icons/icons/sound and visuals/Land Animals/Skunk.png"
import Squirrel from "./assets/Icons/icons/sound and visuals/Land Animals/Squirrel.png"
import Tiger from "./assets/Icons/icons/sound and visuals/Land Animals/Tiger.png"
import Wolf from "./assets/Icons/icons/sound and visuals/Land Animals/Wolf.png"
import Zebra from "./assets/Icons/icons/sound and visuals/Land Animals/Zebra.png"
import Alligator from "./assets/Icons/icons/sound and visuals/Reptiles/Alligator.png"
import Crocodile from "./assets/Icons/icons/sound and visuals/Reptiles/Crocodile.png"
import Frog from "./assets/Icons/icons/sound and visuals/Reptiles/Frog.png"
import Lizard from "./assets/Icons/icons/sound and visuals/Reptiles/Lizard.png"
import Snake from "./assets/Icons/icons/sound and visuals/Reptiles/Snake.png"
import Turtle from "./assets/Icons/icons/sound and visuals/Reptiles/Turtle.png"
import Airplane from "./assets/Icons/icons/sound and visuals/Transportation/Airplane.png"
import Boat from "./assets/Icons/icons/sound and visuals/Transportation/Boat.png"
import Bus from "./assets/Icons/icons/sound and visuals/Transportation/Bus.png"
import Car from "./assets/Icons/icons/sound and visuals/Transportation/Car.png"
import Drone from "./assets/Icons/icons/sound and visuals/Transportation/Drone.png"
import Firetruck from "./assets/Icons/icons/sound and visuals/Transportation/Firetruck.png"
import Helicopter from "./assets/Icons/icons/sound and visuals/Transportation/Helicopter.png"
import Motorcycle from "./assets/Icons/icons/sound and visuals/Transportation/Motorcycle.png"
import Scooter from "./assets/Icons/icons/sound and visuals/Transportation/Scooter.png"
import Ship from "./assets/Icons/icons/sound and visuals/Transportation/Ship.png"
import Subway from "./assets/Icons/icons/sound and visuals/Transportation/Subway.png"
import Train from "./assets/Icons/icons/sound and visuals/Transportation/Train.png"
import Truck from "./assets/Icons/icons/sound and visuals/Transportation/Truck.png"
import UrbanScooter from "./assets/Icons/icons/sound and visuals/Transportation/Urban Scooter.png"
import Fall from "./assets/Icons/icons/sound and visuals/Weathers/Fall.png"
import Spring from "./assets/Icons/icons/sound and visuals/Weathers/Spring.png"
import Summer from "./assets/Icons/icons/sound and visuals/Weathers/Summer.png"
import Winter from "./assets/Icons/icons/sound and visuals/Weathers/Winter.png"
import ChickenLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/ChickenLarge.png"
import CowLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/CowLarge.png"
import DogLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/DogLarge.png"
import DonkeyLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/DonkeyLarge.png"
import DuckLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/DuckLarge.png"
import GoatLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/GoatLarge.png"
import GooseLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/GooseLarge.png"
import HorseLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/HorseLarge.png"
import PeacockLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/PeacockLarge.png"
import PigLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/PigLarge.png"
import RabbitLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/rabbitLarge.png"
import SheepLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/SheepLarge.png"
import TurkeyLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/TurkeyLarge.png"
import YakLarge from "./assets/Icons/icons/sound and visuals/Farm Animals/YakLarge.png"
import AntLarge from "./assets/Icons/icons/sound and visuals/Insects/AntLarge.png"
import BeeLarge from "./assets/Icons/icons/sound and visuals/Insects/BeeLarge.png"
import ButterflyLarge from "./assets/Icons/icons/sound and visuals/Insects/ButterflyLarge.png"
import DragonflyLarge from "./assets/Icons/icons/sound and visuals/Insects/DragonflyLarge.png"
import FlyLarge from "./assets/Icons/icons/sound and visuals/Insects/FlyLarge.png"
import GrasshopperLarge from "./assets/Icons/icons/sound and visuals/Insects/GrasshopperLarge.png"
import SpiderLarge from "./assets/Icons/icons/sound and visuals/Insects/SpiderLarge.png"
import BeaverLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Beaver Visual.png"
import CheetahLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Cheetah Visual.png"
import DeerLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Deer Visual.png"
import ElephantLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Elephant Visual.png"
import ElkLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Elk Visual.png"
import FoxLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Fox Visual.png"
import GiraffeLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Giraffe Visual.png"
import GorillaLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Gorilla Visual.png"
import GuineaPigLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Guinea Pig Visual.png"
import HamsterLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Hamster Visual.png"
import HippoLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Hippo Visual.png"
import JaguarLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Jaguar Visual.png"
import KangarooLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Kangaroo Visual.png"
import KoalaLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Koala Visual.png"
import LemurLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Lemur Visual.png"
import LeopardLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Leopard Visual.png"
import LionLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Lion Visual.png"
import MonkeyLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Monkey Visual.png"
import MooseLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Moose Visual.png"
import MouseLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Mouse Visual.png"
import OtterLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Otter Visual.png"
import PandaLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Panda Visual.png"
import PantherLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Panther Visual.png"
import PolarBearLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Polar Bear Visual.png"
import PorcupineLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Porcupine Visual.png"
import RacoonLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Racoon Visual.png"
import RhinoLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Rhino Visual.png"
import SkunkLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Skunk Visual.png"
import SquirrelLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Squirrel Visual.png"
import TigerLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Tiger Visual.png"
import WolfLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Wolf Visual.png"
import ZebraLarge from "./assets/Icons/icons/sound and visuals/Land Animals/Zebra Visual.png"
import AlligatorLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Alligator Visual.png"
import CrocodileLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Crocodile Visual.png"
import FrogLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Frog Visual.png"
import LizardLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Lizard Visual.png"
import SnakeLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Snake Visual.png"
import TurtleLarge from "./assets/Icons/icons/sound and visuals/Reptiles/Turtle Visual.png"
import AirplaneLarge from "./assets/Icons/icons/sound and visuals/Transportation/Airplane Visual.png"
import BoatLarge from "./assets/Icons/icons/sound and visuals/Transportation/Boat Visual.png"
import BusLarge from "./assets/Icons/icons/sound and visuals/Transportation/Bus Visual.png"
import CarLarge from "./assets/Icons/icons/sound and visuals/Transportation/Car Visual.png"
import DroneLarge from "./assets/Icons/icons/sound and visuals/Transportation/Drone Visual.png"
import FiretruckLarge from "./assets/Icons/icons/sound and visuals/Transportation/Firetruck Visual.png"
import HelicopterLarge from "./assets/Icons/icons/sound and visuals/Transportation/Helicopter Visual.png"
import MotorcycleLarge from "./assets/Icons/icons/sound and visuals/Transportation/Motorcycle Visual.png"
import ScooterLarge from "./assets/Icons/icons/sound and visuals/Transportation/Scooter Visual.png"
import ShipLarge from "./assets/Icons/icons/sound and visuals/Transportation/Ship Visual.png"
import SubwayLarge from "./assets/Icons/icons/sound and visuals/Transportation/Subway Visual.png"
import TrainLarge from "./assets/Icons/icons/sound and visuals/Transportation/Train Visual.png"
import TruckLarge from "./assets/Icons/icons/sound and visuals/Transportation/Truck Visual.png"
import UrbanScooterLarge from "./assets/Icons/icons/sound and visuals/Transportation/Urban Scooter Visual.png"
import FallLarge from "./assets/Icons/icons/sound and visuals/Weathers/Fall Screen.png"
import SpringLarge from "./assets/Icons/icons/sound and visuals/Weathers/Spring Screen.png"
import SummerLarge from "./assets/Icons/icons/sound and visuals/Weathers/Summer Screen.png"
import WinterLarge from "./assets/Icons/icons/sound and visuals/Weathers/Winter Screen.png"

import Start from "./assets/Rocket Reward Clip Files/Start.mp4";
import Idle from "./assets/Rocket Reward Clip Files/Clip 2 - Idle.mp4";
import FirstPositive from "./assets/Rocket Reward Clip Files/Clip 3 - 1st postive B.mp4";
import SecondPositive from "./assets/Rocket Reward Clip Files/Clip 4 - 2nd positive A.mp4";
import SecondNegative from "./assets/Rocket Reward Clip Files/Clip 5 - 2nd negative.mp4";
import ThirdPositive from "./assets/Rocket Reward Clip Files/Clip 6 - 3rd positive.mp4";
import ThirdNegative from "./assets/Rocket Reward Clip Files/Clip 7 - 3rd negative.mp4";
import FourthPositive from "./assets/Rocket Reward Clip Files/Clip 8 - 4th positive.mp4";
import FourthNegative from "./assets/Rocket Reward Clip Files/Clip 9 - 4th negative.mp4";
import FifthPositive from "./assets/Rocket Reward Clip Files/Clip 10 - 5th positive.mp4";
import FifthNegative from "./assets/Rocket Reward Clip Files/Clip 11th -  5th negative.mp4";
import End from "./assets/Rocket Reward Clip Files/Clip 12 (end).mp4";

import PlayComponent from "./Play"
const AppsStyle={
    position:'absolute', 
    top:234 , 
    left:0 , 
    width:108, 
    height:76,
    opacity:0.3,
    zIndex:1000

}
const AppsStyleClicked={
    position:'absolute', 
    top:234 , 
    left:0 , 
    width:108, 
    height:76,
    zIndex:1000

}
const RewardsStyle={
    position:'absolute', 
    top:82, 
    left:0, 
    width:108, 
    height:76,
    opacity:0.3,
    zIndex:1000

}
const RewardsStyleClicked={
    position:'absolute', 
    top:82, 
    left:0, 
    width:108, 
    height:76,
    zIndex:1000
}
const PlayStyle={
    position:'absolute', 
    left:0, 
    top:158 ,
    width:108, 
    height:76,
    opacity:0.3,
    zIndex:1000
}
const PlayStyleClicked={
    position:'absolute', 
    left:0, 
    top:158 ,
    width:108, 
    height:76,
    zIndex:1000
}
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            AppsStyle:AppsStyle,
            RewardsStyle:RewardsStyle,
            PlayStyle:PlayStyle,
            Reward: false

       }
    }

    RewardChoice=e=>{
        this.setState({Reward:true})
        this.handleVideo()
        console.log(this.state)
    }
    onAppClick=e=>{
        this.setState({AppsStyle:AppsStyleClicked, RewardsStyle:RewardsStyle, PlayStyle:PlayStyle, Reward:false})
    }
    onRewardClick=e=>{
        this.setState({AppsStyle:AppsStyle, RewardsStyle:RewardsStyleClicked, PlayStyle:PlayStyle, Reward:false})
        
    }
    onPlayClick=e=>{
        this.setState({AppsStyle:AppsStyle, RewardsStyle:RewardsStyle,PlayStyle:PlayStyleClicked, Reward:false})
    }
    handleVideoPlus=e=>{
      if (this.state.position==="Start"){
        this.setState({video:FirstPositive, position:"First"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if (this.state.position==="First"){
        this.setState({video:SecondPositive,position:"Second"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if (this.state.position==="Second"){
        this.setState({video:ThirdPositive,position:"Third"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if(this.state.position==="Third"){
        this.setState({video:FourthPositive,position:"Fourth"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if(this.state.position==="Fourth"){
        this.setState({video:FifthPositive, position:"Fifth"})
      }
      else if(this.state.position==="Fifth"){
        this.setState({video:End,position:"End"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      console.log(this.state.video)

    }
    handleVideoMinus=e=>{
   if (this.state.position==="Second"){
        this.setState({video:SecondNegative,position:"First"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if(this.state.position==="Third"){
        this.setState({video:ThirdNegative,position:"Second"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if(this.state.position==="Fourth"){
        this.setState({video:FourthNegative,position:"Third"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
      else if(this.state.position==="Fifth"){
        this.setState({video:FifthNegative, position:"Fourth"})
        setTimeout(function() { //Start the timer
          this.setState({video:Idle,
            startDesktop:true}) //After 1 second, set render to true
      }.bind(this), 5000);
      }
    }
    
    handleRestart = e=>{
      this.setState({video:Start,position:"Start"})
    }
    handleVideo= e =>{
       this.setState({video:Start,position:"Start"})
    }

    render(){
        return(
            <div>
            <div>
            <div className="ContentMask">
                <img src={ContentMaskImg} alt="Content Mask"/>
            </div>
                <div style={{top:0, position:'absolute'}}>
                <div >
                    <div style={{position:'absolute', left:30, top:21, zIndex:1000}}>
                       <img  src={Oval1} alt="Oval-1"/>     
                    </div>
                    <div style={{position:'absolute',zIndex:1000, left:48, top:21}}>
                        <img src={Oval2} alt="Oval-2"/>                      
                    </div>
                    <div style={{position:'absolute', left:66,zIndex:1000, top:21 }}>
                         <img src={Oval3} alt="Oval-3" /> 
                    </div>
                    <div style={{position:'absolute', left:149,zIndex:1000, top:17}}>
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div style={{position:'absolute', left:640,zIndex:1000, top:17 }}>
                        <img src={User} alt="User"/>
                    </div>
                    <div style={{position:'absolute', top:17 , left:681,zIndex:1000 }}>
                        <div className="Path">
                            <img src={Favourites} alt="Favourite"/>
                        </div>
                    </div>
                    <div style={{position:'absolute', top:22, left:726,zIndex:1000}}>
                        <div className="Search">
                            <img src={Search} alt="Search"/>
                        </div>
                    </div>
                </div>
                </div>
                <div style={this.state.RewardsStyle}onClick={this.onRewardClick}>
                    {this.state.RewardsStyle===RewardsStyleClicked &&
                       <img style={{position:'absolute', top:0,left:0, opacity:0.4 ,zIndex:1000, width:108}} src={Rectangle}/>
                    }
                    <img src={Rewards} alt="Rewards"/>
                </div>
                <div style={this.state.PlayStyle} onClick={this.onPlayClick}>
                    {this.state.PlayStyle===PlayStyleClicked &&
                        <img style={{position:'absolute', top:0,left:0, opacity:0.4,zIndex:1000}} src={Rectangle}/>
                    }
                    <img src={Play} alt="Play and Show"/>
                </div>
                <div style={this.state.AppsStyle} onClick={this.onAppClick}>
                    <img src={Apps} alt="Apps" />
                    {this.state.AppsStyle===AppsStyleClicked &&
                     <img style={{position:"absolute", top:0,left:0, opacity:0.4,zIndex:1000}} src={Rectangle}/>
                     }
                </div>
                <div style={{position:'absolute', top:54.5, left:108, width:1,height:358,zIndex:1000}}>
                    <img src={Line} alt="Line"/>
                </div>
                {this.state.RewardsStyle===RewardsStyleClicked&&
                <div>
                <div style={{position:"absolute",zIndex:1000, left:149, top:54 }} onClick={this.RewardChoice}>
                   <img src={Reward} alt="Reward"/>
                </div>
                <div style={{position:'absolute', left:159,zIndex:1000, top:141}} >
                    <img src={Space} alt="Space Journey"/>
                </div>    
                </div>
                }
                </div>
                {this.state.Reward===true&&
                <div>
                    <div style={{ left:715, top:0, position:'absolute'}}>
                         <div className="New">
                         <img src={Panel} alt="Panel"/>
                         </div>
                    </div>
                    <div style={{position:'absolute', left:798, top:38, opacity:0.8}}>
                         <img src={Rectangle3} alt="Rectangle 3"/>
                    </div>   
                    <div style={{position:'absolute', left:890, top:60 }}>
                         <img src={Mountaineer} alt ="Mountaineer"/>
                    </div>    
                    <div style={{position:'absolute', left:1025, top:67}}>
                         <img src={Path} alt="Path"/>
                    </div>   
                    <div style={{position:'absolute', left:799, top:151}}>
                         <img src={Group12} alt='Group12'/>
                    </div>
                    <div style={{position:'absolute', left:881, top:164,height:1}}>
                         <img src={Line4} alt="Line4" style={{top:0, position:'absolute'}}/>
                    </div>
                    <div style={{position:'absolute', left:899, top:164,height:1}}>
                         <img src={Line4} alt="Line4_1" style={{top:0, position:'absolute'}}/>
                    </div>
                    <div style={{position:'absolute', left:917, top:164,height:1}}>
                         <img src={Line4} alt="Line4_2" style={{top:0, position:'absolute'}}/>
                    </div>
                    <div style={{position:'absolute', left:935, top:164,height:1}}>
                         <img src={Line4} alt="Line4_3" style={{top:0, position:'absolute'}} />
                    </div>
                    <div style={{position:'absolute', left:953, top:164,height:1}}>
                         <img src={Line4} style={{top:0, position:'absolute'}}  alt="Line4_4" />
                    </div>
                    <div style={{position:'absolute', left:973,height:1, top:151}}>
                         <img src={Group13} alt="Group13" />
                    </div>
                    <div style={{position:'absolute', left:798.5, top:206}}>
                         <img src={Line3} alt="Line3" />
                    </div>
                    <div style={{position:'absolute', left:799, top:234}}>
                         <img src={Combined} alt="Pause" />
                    </div>
                    <div style={{position:'absolute', left:834, top:235}}>
                         <img src={PauseTxt} alt="PauseTxt" />
                    </div>
                    <div style={{position:'absolute', left:972, top:234}}>
                         <img src={Restart} alt="Restart" />
                    </div>
                    <div style={{position:'absolute', left:1008, top:235}}>
                         <img src={RestartTxt} alt="RestartTxt" />
                    </div>
                    <div style={{position:'absolute', left:802, top:279}}>
                         <img src={Left} alt="Left" />
                    </div>
                    <div style={{position:'absolute', left:834, top:277}}>
                         <img src={LeftTxt} alt="LeftTxt" />
                    </div>
                    <div style={{position:'absolute', left:972, top:281}}>
                         <img src={Visibility} alt="Visibility" />
                    </div>
                    <div style={{position:'absolute', left:1008, top:277}}>
                         <img src={Visible} alt="Visible" />
                    </div>

                </div>  
                }  

                {this.state.PlayStyle===PlayStyleClicked&&
                <PlayComponent/>
                }
                
            </div>

        )
    }
}