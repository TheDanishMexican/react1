import { useState } from 'react'
import PropsDemo from './excersises/PropsDemo'
import './App.css'
import ListDemo from './excersises/ListDemo'
import EventDemo from './excersises/EventDemo'
import FormUncontrolled from './excersises/FormUncontrolled'
import StateDemo1 from './excersises/StateDemo1'
import StateDemo2 from './excersises/StateDemo2'
import StateDemo3 from './excersises/StateDemo3'
import UseEffectDemo from './excersises/UseEffectDemo'
import FetchDemo from './excersises/FetchDemo'
import LiftingState from './excersises/LiftingState'
import ContextDemoApp from './excersises/ContextDemo'

export default function App() {
    const [selectedView, setSelectedView] = useState('info')

    function handleSelected(selected: string) {
        setSelectedView(selected)
    }

    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == 'info' ? (
                            <p>All exercises for React day-1</p>
                        ) : null}
                        {selectedView == 'props1' ? (
                            <PropsDemo title="Props exercise" />
                        ) : null}
                        {selectedView == 'listdemo' ? (
                            <ListDemo title="List exercise" />
                        ) : null}
                        {selectedView == 'eventdemo' ? (
                            <EventDemo title="Event Demo" />
                        ) : null}
                        {selectedView == 'formuncontrolled' ? (
                            <FormUncontrolled title="Form Uncontrolled" />
                        ) : null}
                        {selectedView == 'statedemo1' ? (
                            <StateDemo1 title="State Demo 1" />
                        ) : null}
                        {selectedView == 'statedemo2' ? (
                            <StateDemo2 title="State Demo 2" />
                        ) : null}
                        {selectedView == 'statedemo3' ? (
                            <StateDemo3 title="State Demo 3" />
                        ) : null}
                        {selectedView == 'useeffectdemo' ? (
                            <UseEffectDemo title="useEffect Demo" />
                        ) : null}
                        {selectedView == 'fetchdemo' ? (
                            <FetchDemo title="Fetch Demo" />
                        ) : null}
                        {selectedView == 'liftingstate' ? (
                            <LiftingState title="Lifting state" />
                        ) : null}
                        {selectedView == 'contextdemo' ? (
                            <ContextDemoApp title="Context Demo" />
                        ) : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    )
}
type ButtonProps = {
    onSelected: (selected: string) => void
}
const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected } = props
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected('info')}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button
                className="btn-w100"
                onClick={() => handleSelected('props1')}
            >
                Props demo1
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('listdemo')}
            >
                List demo
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('eventdemo')}
            >
                Event demo
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('formuncontrolled')}
            >
                Form uncontrolled
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('statedemo1')}
            >
                State Demo 1
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('statedemo2')}
            >
                State Demo 2
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('statedemo3')}
            >
                State Demo 3
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('useeffectdemo')}
            >
                useEffect Demo
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('fetchdemo')}
            >
                Fetch Demo
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('liftingstate')}
            >
                Lifting state
            </button>
            <button
                className="btn-w100"
                onClick={() => handleSelected('contextdemo')}
            >
                Context Demo
            </button>
        </>
    )
}
