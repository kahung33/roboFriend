import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from './ErrorBoundry'

const App =  () => {

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // constructor(){
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: '',
    //     }
    // }

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users =>setRobots(users))
        .catch(err =>console.log('failed to fetch'));   
        console.log(count);
    },[count]);

    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }
        // const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !robots.length ?
        <h1 className = 'tc'>Loading</h1> :
       (
        <div className ='tc'>
            <h1 className = 'f2'>RoboFriends ver1.1</h1>
            <button onClick={()=>{setCount(count + 1)}}>Click me</button>
            <SearchBox searchChange={onSearchChange} setSearchfield = {setSearchfield}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots = {filteredRobots}/>
                </ErrorBoundry>
            </Scroll>
        </div>
            )
        }

export default App