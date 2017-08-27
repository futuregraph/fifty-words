import React, {Component} from 'react';
import {getRandomList} from './data'

const Word = ({word}) => <span className="words-list__item">{word}</span>
const Instructions = () => <div className="instructions">
    Представляйте образ каждого слова ярко, в цвете 🌈. С ощущениями прикосновений 👆, звуками👂, запахами👃, а где это возможно - и со вкусом 👅.
    Если этот набор слов уже вам встречался – просто перезагрузите страницу (пока так)
</div>

class App extends Component {
    render() {
        const words = getRandomList()
        return (
            <div className="app-wrapper">
                <h1>Упражнение "Оживление 50 слов"</h1>
                <Instructions/>
                <div className="words-list">
                    {
                        words.map( (word, i) =>
                            (<span><Word word={word}/>{i !== words.length - 1 ? ', ': '.'}</span>)
                        )
                    }
                </div>
            </div>
        );
    }
}
export default App;
