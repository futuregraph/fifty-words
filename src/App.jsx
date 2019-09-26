import React, {Component} from 'react'
import {getWordsList} from './words'
import Donation from './donate.jsx'

const Word = ({word}) => <span className="words-list__item">{word}</span>
const WordsList = ({words, onClick}) => (<div className="words-list" onClick={onClick}>
    {
        words.map((word, i) =>
            (<span><Word word={word}/>{i !== words.length - 1 ? ', ' : '.'}</span>)
        )
    }
</div>)


class App extends Component {
    constructor() {
        super()
        this.state = {
            words: getWordsList()
        }
    }

    changeWords() {
        this.setState({words: getWordsList()})
    }

    render() {
        const {words} = this.state

        return (
            <div className="app-wrapper">
                <div className="app-header">
                    <a target="_blank" href="https://vk.com/talentcity1" className="gt-logo"><img alt="Город талантов"
                                                                                                  src="https://pp.userapi.com/0eJL973_dcofGpT3Z20_gywRTmn45Y9NUaiXMg/kALatrZnCIs.jpg?ava=1"/></a>
                    <p className="app-header-text">Оживление 50&nbsp;слов</p>
                </div>
                <div className="instructions">
                    Представляйте образ каждого слова ярко, в цвете 🌈. С ощущениями прикосновений 👆, звуками👂,
                    запахами👃, а где это возможно - и со вкусом 👅.
                    Если этот набор слов уже вам встречался – просто нажмите на список
                </div>
                <WordsList words={words} onClick={this.changeWords.bind(this)}/>
                <div className="app-footer">
                    <Donation/>
                </div>
            </div>
        );
    }
}

export default App;
