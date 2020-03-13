import React from 'react';
import OverflowScrolling from 'react-overflow-scrolling';
import "./Play.css";
import Copy from "./assets/Copy.png";
import Grey from "./assets/grey.png";
import Line from "./assets/Line.png";
import Panel from "./assets/Panel.png";
import Rectangle1 from "./assets/Rectangle1.png";
import {RemoveScrollBar} from 'react-remove-scroll-bar';

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

const tileData = [
    {img: Dolphin,
      Large:DolphinLarge,
    title:"Dolphin",
    sound:DolphinS,
  author:"Aquatic Animals"},
  {img: Eel,
    Large:EelLarge,
    title:"Eel",
    sound:"",
  author:"Aquatic Animals"},
  {img: Fish,
    Large:FishLarge,
    title:"Fish",
    sound:FishS,
  author:"Aquatic Animals"},
  {img: Shark,
    Large:SharkLarge,
    title:"Shark",
    sound:SharkS,
  author:"Aquatic Animals"},
  {img: Whale,
    Large:WhaleLarge,
    title:"Whale",
    sound: WhaleS,
  author:"Aquatic Animals"},
  {img: Bat,
    Large:BatLarge,
    title:"Bat",
    sound: BatS,
  author:"Birds"},
  {img: Eagle,
    Large:EagleLarge,
    title:"Eagle",
    sound: EagleS,
  author:"Birds"},
  {img: Flamingo,
    Large:FlamingoLarge,
    title:"Flamingo",
    sound: FlamingoS,
    author:"Birds"},
  {img: Ostrich,
    Large:OstrichLarge,
    title:"Ostrich",
    sound: OstrichS,
    author:"Birds"},
  
  {img: Owl,
    Large:OwlLarge,
    sound:OwlS,
    title:"Owl",
  author:"Birds"},
  {img: Parrot,
    Large:ParrotLarge,
    title:"Parrot",
    sound: ParrotS,
  author:"Birds"},
  {img: Penguin,
    Large:PenguinLarge,
    sound: PenguinS,
    title:"Penguin",
  author:"Birds"},
  {img: Toucan,
    Large:ToucanLarge,
    title:"Toucan",
    sound:ToucanS,
  author:"Birds"},
  {img: Alpaca,
    Large:AlpacaLarge,
    title:"Alpaca",
    sound:AlpacaS,
  author:"Farm Animals"},
  {img: Buffalo,
    Large:BuffaloLarge,
    title:"Buffalo",
    sound: BuffaloS,
  author:"Farm Animals"},
  {img: Cat,
    Large:CatLarge,
    title:"Cat",
    sound: CatS,
  author:"Farm Animals"},
  {img: Chicken,
    Large:ChickenLarge,
    title:"Chicken",
    sound: ChickenS,
  author:"Farm Animals"},
  {img: Cow,
    Large:CowLarge,
    title:"Cow",
    sound: CowS,
  author:"Farm Animals"},
  {img: Dog,
    Large:DogLarge,
    title:"Dog",
    sound: DogS,
  author:"Farm Animals"},
  {img: Donkey,
    sound:DonkeyS,
    Large:DonkeyLarge,
    title:"Donkey",
  author:"Farm Animals"},
  {img: Duck,
    Large:DuckLarge,
    title:"Duck",
    sound:DuckS,
  author:"Farm Animals"},
  {img: Goat,
    Large:GoatLarge,
    title:"Goat",
    sound: GoatS,
  author:"Farm Animals"},
  {img: Goose,
    Large:GooseLarge,
    title:"Goose",
    sound:GooseS,
  author:"Farm Animals"},
  {img: Horse,
    Large:HorseLarge,
    title:"Horse",
    sound: HorseS,
  author:"Farm Animals"},
  {img: Peacock,
    Large:PeacockLarge,
    title:"Peacock",
    sound: PeacockS,
  author:"Farm Animals"},
  {img: Pig,
    Large:PigLarge,
    title:"Pig",
    sound: PigS,
  author:"Farm Animals"},
  {img: Rabbit,
    Large:RabbitLarge,
    title:"Rabbit",
    sound: RabbitS ,
  author:"Farm Animals"},
  {img: Sheep,
    Large:SheepLarge,
    title:"Sheep",
    sound: SheepS ,
  author:"Farm Animals"},
  {img: Turkey,
    Large:TurkeyLarge,
    title:"Turkey",
    sound: TurkeyS ,
  author:"Farm Animals"},
  {img: Yak,
    Large:YakLarge,
    title:"Yak",
    sound: YakS ,
  author:"Farm Animals"},
  {img: Ant,
    Large:AntLarge,
    title:"Ant",
    sound: "" ,
  author:"Insects"},
  {img: Bee,
    Large:BeeLarge,
    title:"Bee",
    sound: BeeS ,
  author:"Insects"},
  {img: Butterfly,
    Large:ButterflyLarge,
    title:"Butterfly",
    sound: ButterflyS ,
  author:"Insects"},
  {img: Dragonfly,
    Large:DragonflyLarge,
    title:"Dragonfly",
    sound:"",
  author:"Insects"},
  {img: Fly,
    Large:FlyLarge,
    title:"Fly",
    sound: FlyS ,
  author:"Insects"},
  {img: Grasshopper,
    Large:GrasshopperLarge,
    title:"Grasshopper",
    sound: GrasshopperS ,
  author:"Insects"},
  {img: Spider,
    Large:SpiderLarge,
    sound: "" ,
    title:"Spider",
  author:"Insects"},
  {img: Beaver,
    Large:BeaverLarge,
    title:"Beaver",
    sound: BeaverS ,
  author:"Land Animals"},
  {img: Cheetah,
    Large:CheetahLarge,
    sound: CheetahS ,
    title:"Cheetah",
  author:"Land Animals"},
  {img: Deer,
    Large:DeerLarge,
    sound: DeerS ,
    title:"Deer",
  author:"Land Animals"},
  {img: Elephant,
    sound: ElephantS ,
    Large:ElephantLarge,
    title:"Elephant",
  author:"Land Animals"},
  {img: Elk,
    sound: ElkS ,
    Large:ElkLarge,
    title:"Elk",
  author:"Land Animals"},
  {img: Fox,
    sound: FoxS ,
    Large:FoxLarge,
    title:"Fox",
  author:"Land Animals"},
  {img: Giraffe,
    sound: GiraffeS ,
    Large:GiraffeLarge,
    title:"Giraffe",
  author:"Land Animals"},
  {img: Gorilla,
    sound: GorillaS ,
    Large:GorillaLarge,
    title:"Gorilla",
  author:"Land Animals"},
  {img: GuineaPig,
    sound: GuineaPigS ,
    Large:GuineaPigLarge,
    title:"Guinea Pig",
  author:"Land Animals"},
  {img: Hamster,
    sound:  HamsterS,
    Large:HamsterLarge,
    title:"Hamster",
  author:"Land Animals"},
  {img: Hippo,
    sound: HippoS ,
    Large:HippoLarge,
    title:"Hippo",
  author:"Land Animals"},
  {img: Jaguar,
    Large:JaguarLarge,
    title:"Jaguar",
    sound: JaguarS ,
  author:"Land Animals"},
  {img: Kangaroo,
    sound: KangarooS ,
    Large:KangarooLarge,
    title:"Kangaroo",
  author:"Land Animals"},
  {img: Koala,
    sound:  KoalaS,
    Large:KoalaLarge,
    title:"Koala",
  author:"Land Animals"},
  {img: Lemur,
    sound: LemurS ,
    Large:LemurLarge,
    title:"Lemur",
  author:"Land Animals"},
  {img: Leopard,
    sound: LeopardS ,
    Large:LeopardLarge,
    title:"Leopard",
  author:"Land Animals"},
  {img: Lion,
    sound: LionS ,
    Large:LionLarge,
    title:"Lion",
  author:"Land Animals"},
  {img: Monkey,
    sound: MonkeyS ,
    Large:MonkeyLarge,
    title:"Monkey",
  author:"Land Animals"},
  {img: Moose,
    sound: MooseS ,
    Large:MooseLarge,
    title:"Moose",
  author:"Land Animals"},
  {img: Otter,
    sound: OtterS ,
    Large:OtterLarge,
    title:"Otter",
  author:"Land Animals"},
  {img: Panda,
    sound: PandaS ,
    Large:PandaLarge, 
    title:"Panda",
  author:"Land Animals"},
  {img: Panther,
    sound: PantherS ,
    Large:PantherLarge,
    title:"Panther",
  author:"Land Animals"},
  {img: PolarBear,
    sound: PolarBearS ,
    Large:PolarBearLarge,
    title:"Polar Bear",
  author:"Land Animals"},
  {img: Porcupine,
    sound: PorcupineS ,
    Large:PorcupineLarge,
    title:"Porcupine",
  author:"Land Animals"},
  {img: Racoon,
    sound: RacoonS ,
    Large:RacoonLarge,
    title:"Racoon",
  author:"Land Animals"},
  {img: Rhino,
    sound: RhinoS ,
    Large:RhinoLarge,
    title:"Rhino",
  author:"Land Animals"},
  {img: Skunk,
    sound: SkunkS ,
    Large:SkunkLarge,
    title:"Skunk",
  author:"Land Animals"},
  {img: Squirrel,
    sound: SquirrelS ,
    Large:SquirrelLarge,
    title:"Squirrel",
  author:"Land Animals"},
  {img: Tiger,
    sound: TigerS ,
    Large:TigerLarge,
    title:"Tiger",
  author:"Land Animals"},
  {img: Wolf,
    Large:WolfLarge,
    title:"Wolf",
    sound: WolfS ,
  author:"Land Animals"},
  {img: Zebra,
    Large:ZebraLarge,
    title:"Zebra",
    sound: ZebraS ,
  author:"Land Animals"},
  {img: Alligator,
    sound: "" ,
    Large:AlligatorLarge,
    title:"Alligator",
  author:"Reptiles"},
  {img: Crocodile,
    sound: "" ,
    Large:CrocodileLarge,
    title:"Crocodile",
  author:"Reptiles"},
  {img: Frog,
    sound: "" ,
    Large:FrogLarge,
    title:"Frog",
  author:"Reptiles"},
  {img: Lizard,
    sound: "" ,
    Large:LizardLarge,
    title:"Lizard",
  author:"Reptiles"},
  {img: Snake,
    sound: "" ,
    Large:SnakeLarge,
    title:"Snake",
  author:"Reptiles"},
  {img: Turtle,
    sound:  "",
    Large:TurtleLarge,
    title:"Turtle",
  author:"Reptiles"},
  {img: Airplane,
    sound: AirplaneS ,
    Large:AirplaneLarge,
    title:"Airplane",
  author:"Transportation"},
  {img: Boat,
    sound:BoatS  ,
    Large:BoatLarge,
    title:"Boat",
  author:"Transportation"},
  {img: Bus,
    sound: BusS ,
    Large:BusLarge,
    title:"Bus",
  author:"Transportation"},
  {img: Car,
    sound: CarS ,
    Large:CarLarge,
    title:"Car",
  author:"Transportation"},
  {img: Drone,
    sound: DroneS ,
    Large:DroneLarge,
    title:"Drone",
  author:"Transportation"},
  {img: Firetruck,
    sound: FiretruckS ,
    Large:FiretruckLarge,
    title:"Firetruck",
  author:"Transportation"},
  {img: Helicopter,
    sound: HelicopterS ,
    Large:HelicopterLarge,
    title:"Helicopter",
  author:"Transportation"},
  {img: Motorcycle,
    sound: MotorcycleS ,
    Large:MotorcycleLarge,
    title:"Motorcycle",
  author:"Transportation"},
  {img: Scooter,
    sound: ScooterS  ,
    Large:ScooterLarge,
    title:"Scooter",
  author:"Transportation"},
  {img: Ship,
    sound: ShipS ,
    Large:ShipLarge,
    title:"Ship",
  author:"Transportation"},
  {img: Subway,
    sound: SubwayS ,
    Large:SubwayLarge,
    title:"Subway",
  author:"Transportation"},
  {img: Train,
    sound: TrainS ,
    Large:TrainLarge,
    title:"Train",
  author:"Transportation"},
  {img: Truck,
    sound: TruckS ,
    Large:TruckLarge,
    title:"Truck",
  author:"Transportation"},
  {img: UrbanScooter,
    Large:UrbanScooterLarge,
    title:"Urban Scooter",
    sound: UrbanScooterS ,
  author:"Transportation"},
  {img: Fall,
    Large:FallLarge,
    title:"Fall",
    sound:  "",
  author:"Weather"},
  {img: Spring,
    Large:SpringLarge,
    title:"Spring",
    sound: "" ,
  author:"Weather"},
  {img: Summer,
    Large:SummerLarge,
    title:"Summer",
    sound: "" ,
  author:"Weather"},
  {img: Winter,
    Large:WinterLarge,
    title:"Winter",
    sound: "" ,
  author:"Weather"},
  
  ]
  var count=0;
export default class Play extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            selected:"",
            selectedAnimal:""
            

       }
    }
    animalSelect=tile=>{

      console.log(tile)
    }
    iReturn=e=>{
      count=0;
    }
    FarmSelect=e=>{
        this.setState({selected:"Farm Animals"})
    }
    LandSelect=e=>{
        this.setState({selected:"Land Animals"})
    }
    AquaticSelect=e=>{
        this.setState({selected:"Aquatic Animals"})
    }
    BirdsSelect=e=>{
        this.setState({selected:"Birds"})
    }
    TransportSelect=e=>{
        this.setState({selected:"Transportation"})
    }
    InsectsSelect=e=>{
        this.setState({selected:"Insects"})
    }
    ReptilesSelect=e=>{
        this.setState({selected:"Reptiles"})
    }
    iAdd=e=>{
      count=count+1;
      console.log(count);
    }
   render(){
    // return  tileData.map((tile,i,arr) => {
    //     if (arr[i-1]){
    //     var previousItem = arr[i - 1];}
    //     else{
    //      var previousItem=arr[i];
    //     }
       return(
           <div>
           <div style={{position:'absolute' ,left:169, top:60, zIndex:1000}} onClick={this.FarmSelect}>
               {this.state.selected==="Farm Animals"&&
               <div>
                   <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                      <img src={Copy} alt="Copy" />
                   </div>
                   <div style={{position:'absolute', left:101, top:0 }}>
                       <img src={Grey} alt="grey"/>
                   </div>  
               </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f",fontWeight:"normal"}}>
                Farm Animals
                </span>
           </div>
           <div style={{position:'absolute', left:169, top:97,zIndex:1000}} onClick={this.AquaticSelect}>
           {this.state.selected==="Aquatic Animals"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>   
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                Aquatic Animals
               </span>
           </div>
           <div style={{position:'absolute', left:169, top:134,zIndex:1000}} onClick={this.LandSelect}>
           {this.state.selected==="Land Animals"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                Land Animals
               </span>
           </div>
           <div style={{position:'absolute', left:169, top:171,zIndex:1000}} onClick={this.BirdsSelect}>
           {this.state.selected==="Birds"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                Birds
               </span>
           </div>
           <div style={{position:'absolute', left:169, top:208,zIndex:1000}} onClick={this.InsectsSelect}>
           {this.state.selected==="Insects"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                Insects 
               </span>
           </div>
           <div style={{position:'absolute', left:169, top:245,zIndex:1000}} onClick={this.ReptilesSelect}>
           {this.state.selected==="Reptiles"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                 Reptiles  
               </span>
           </div>
           <div style={{position:'absolute', left:169, top:278,zIndex:1000}} onClick={this.TransportSelect}>
           {this.state.selected==="Transportation"&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>   
               }
               <span style={{fontSize:15, color:"#6f6f6f"}}>
                   Transportation
               </span>
           </div>
           {this.state.selected!==""&&
           <div>
           <div style={{position:'absolute', left:437, top:54}}>
               <img src={Line} alt="Line" />
           </div>
           {/* <RemoveScrollBar style={{height:300, width:360, overflowY:'scroll', position:'absolute',top:60, left:528.2,zIndex:1000 }}> */}
           <div style={{height:300, width:360, overflowY:'scroll', position:'absolute',top:55, left:514.2,zIndex:1000,paddingRight:1500 }}>
           {tileData.map(tile => (
             (tile.author===this.state.selected)&&
             <div  style={{position:'absolute',top:(5+37*count), left:14, zIndex:1000 }} key={count} onClick={()=>this.setState({selectedAnimal:tile.title})}>
               {this.iAdd()}
               {this.state.selectedAnimal===tile.title&&
               <div>
               <div style={{position:'absolute', left:-14,top:-6, zIndex:1000}}>
                  <img src={Copy} alt="Copy" />
               </div>
               <div style={{position:'absolute', left:101, top:0 }}>
                   <img src={Grey} alt="grey"/>
               </div>  
           </div>  
               }
               <span style={{fontSize:15, color:"#6f6f6f"}} > {tile.title}</span>
            </div>
           ))}
           </div>
           {/* </RemoveScrollBar> */}
           </div>
           }
           {this.state.selectedAnimal!==""&&
           <div>
           <div style={{ left:715, top:0, position:'absolute'}}>
                <div className="New">
                <img src={Panel} alt="Panel"/>
                </div>
           </div>
           </div>
           }
           {this.iReturn()}
           </div>

       )
   
}
}